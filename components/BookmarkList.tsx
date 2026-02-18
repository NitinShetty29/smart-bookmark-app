'use client'

import { createClient } from '@/lib/supabase/client'
import { Bookmark } from '@/types/database'
import { useEffect, useState, useCallback } from 'react'
import BookmarkItem from './BookmarkItem'

interface BookmarkListProps {
  initialBookmarks: Bookmark[]
  userId: string
}

export default function BookmarkList({ initialBookmarks, userId }: BookmarkListProps) {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>(initialBookmarks)
  const [searchQuery, setSearchQuery] = useState('')
  const [realtimeStatus, setRealtimeStatus] = useState<string>('connecting')
  const supabase = createClient()

  const handleDeleteBookmark = useCallback((deletedId: string) => {
    setBookmarks((current) => current.filter((b) => b.id !== deletedId))
  }, [])

  const handleAddBookmark = useCallback((newBookmark: Bookmark) => {
    setBookmarks((current) => {
      // Prevent duplicates
      if (current.some((b) => b.id === newBookmark.id)) {
        return current
      }
      return [newBookmark, ...current]
    })
  }, [])

  useEffect(() => {
    console.log('🔌 Setting up realtime for user:', userId)

    // Real-time subscription - works across all tabs
    const channel = supabase
      .channel(`bookmarks-${userId}`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'bookmarks',
        },
        (payload) => {
          console.log('📡 Realtime event:', payload.eventType, payload)

          if (payload.eventType === 'INSERT') {
            const newBookmark = payload.new as Bookmark
            // Only add if it belongs to this user
            if (newBookmark.user_id === userId) {
              console.log('✅ Adding bookmark from realtime')
              handleAddBookmark(newBookmark)
            }
          }

          if (payload.eventType === 'DELETE') {
            const deletedBookmark = payload.old as { id: string }
            console.log('🗑️ Removing bookmark from realtime:', deletedBookmark.id)
            handleDeleteBookmark(deletedBookmark.id)
          }

          if (payload.eventType === 'UPDATE') {
            const updatedBookmark = payload.new as Bookmark
            if (updatedBookmark.user_id === userId) {
              console.log('📝 Updating bookmark from realtime')
              setBookmarks((current) =>
                current.map((b) =>
                  b.id === updatedBookmark.id ? updatedBookmark : b
                )
              )
            }
          }
        }
      )
      .subscribe((status, err) => {
        console.log('📡 Realtime status:', status)
        if (err) console.error('❌ Realtime error:', err)
        setRealtimeStatus(status)
      })

    return () => {
      console.log('🧹 Cleaning up realtime')
      supabase.removeChannel(channel)
    }
  }, [supabase, userId, handleAddBookmark, handleDeleteBookmark])

  const filteredBookmarks = bookmarks.filter(
    (bookmark) =>
      bookmark.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bookmark.url.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <svg
            className="h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
            </svg>
        </div>
        <input
            type="text"
            placeholder="Search bookmarks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
            width: '100%',
            borderRadius: '0.5rem',
            border: '1px solid #d1d5db',
            padding: '0.625rem 2.5rem 0.625rem 3rem',
            fontSize: '0.875rem',
            transition: 'all 0.2s',
            outline: 'none',
            }}
        />
        {searchQuery && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <button
                onClick={() => setSearchQuery('')}
                className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
            >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            </div>
        )}
        </div>

      {/* Stats with realtime status */}
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>
          {filteredBookmarks.length} {filteredBookmarks.length === 1 ? 'bookmark' : 'bookmarks'}
          {searchQuery && ` found for "${searchQuery}"`}
        </span>
        <div className="flex items-center gap-1">
          {realtimeStatus === 'SUBSCRIBED' ? (
            <div className="flex items-center gap-1 text-green-600">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs">Live</span>
            </div>
          ) : realtimeStatus === 'CHANNEL_ERROR' ? (
            <div className="flex items-center gap-1 text-red-600">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              <span className="text-xs">Disconnected</span>
            </div>
          ) : (
            <div className="flex items-center gap-1 text-yellow-600">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500 animate-pulse"></span>
              <span className="text-xs">Connecting...</span>
            </div>
          )}
        </div>
      </div>

      {/* Bookmark List */}
      {filteredBookmarks.length === 0 ? (
        <div className="card py-16 text-center">
          {searchQuery ? (
            <>
              <svg className="mx-auto h-12 w-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <h3 className="mt-4 text-lg font-medium text-gray-900">No results found</h3>
              <p className="mt-1 text-gray-500">Try adjusting your search terms</p>
            </>
          ) : (
            <>
              <svg className="mx-auto h-12 w-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
              <h3 className="mt-4 text-lg font-medium text-gray-900">No bookmarks yet</h3>
              <p className="mt-1 text-gray-500">Add your first bookmark using the form above</p>
            </>
          )}
        </div>
      ) : (
        <div className="space-y-3">
          {filteredBookmarks.map((bookmark) => (
            <BookmarkItem
              key={bookmark.id}
              bookmark={bookmark}
              onDelete={handleDeleteBookmark}
            />
          ))}
        </div>
      )}
    </div>
  )
}