'use client'

import { createClient } from '@/lib/supabase/client'
import { useEffect, useState } from 'react'
import BookmarkItem from './BookmarkItem'

interface BookmarkListProps {
  bookmarks: any[]
  userId: string
  onAdd: (bookmark: any) => void
  onDelete: (id: string) => void
}

export default function BookmarkList({ bookmarks, userId, onAdd, onDelete }: BookmarkListProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [realtimeStatus, setRealtimeStatus] = useState<string>('connecting')
  const supabase = createClient()

  useEffect(() => {
    const channelName = `bookmarks-${userId}-${Date.now()}`

    const channel = supabase
      .channel(channelName)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'bookmarks',
        },
        (payload) => {
          const newBookmark = payload.new as any
          if (newBookmark.user_id === userId) {
            onAdd(newBookmark)
          }
        }
      )
      .on(
        'postgres_changes',
        {
          event: 'DELETE',
          schema: 'public',
          table: 'bookmarks',
        },
        (payload) => {
          const deletedBookmark = payload.old as any
          if (deletedBookmark && deletedBookmark.id) {
            onDelete(deletedBookmark.id)
          }
        }
      )
      .subscribe((status, err) => {
        if (err) console.error('Realtime error:', err)
        setRealtimeStatus(status)
      })

    return () => {
      supabase.removeChannel(channel)
    }
  }, [supabase, userId, onAdd, onDelete])

  const filteredBookmarks = bookmarks.filter(
    (bookmark) =>
      bookmark.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bookmark.url.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Your Bookmarks</h2>
        <div className="flex items-center gap-1">
          {realtimeStatus === 'SUBSCRIBED' ? (
            <div className="flex items-center gap-1.5 text-green-600 bg-green-50 px-2.5 py-1 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium">Live</span>
            </div>
          ) : realtimeStatus === 'CHANNEL_ERROR' ? (
            <div className="flex items-center gap-1.5 text-red-600 bg-red-50 px-2.5 py-1 rounded-full">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              <span className="text-xs font-medium">Disconnected</span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 text-yellow-600 bg-yellow-50 px-2.5 py-1 rounded-full">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500 animate-pulse"></span>
              <span className="text-xs font-medium">Connecting...</span>
            </div>
          )}
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search by title or URL..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: '100%',
            borderRadius: '0.75rem',
            border: '1px solid #e5e7eb',
            padding: '0.75rem 2.5rem 0.75rem 3rem',
            fontSize: '0.875rem',
            transition: 'all 0.2s',
            outline: 'none',
            backgroundColor: '#f9fafb',
          }}
        />
        {searchQuery && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <button
              onClick={() => setSearchQuery('')}
              className="rounded-full p-1.5 text-gray-400 hover:bg-gray-200 hover:text-gray-600 transition-colors"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Count */}
      <div className="text-sm text-gray-500">
        {filteredBookmarks.length} {filteredBookmarks.length === 1 ? 'bookmark' : 'bookmarks'}
        {searchQuery && ` matching "${searchQuery}"`}
      </div>

      {/* Empty States */}
      {filteredBookmarks.length === 0 ? (
        <div className="card py-16 text-center">
          {searchQuery ? (
            <div className="animate-fade-in">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center">
                  <svg className="h-8 w-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-medium text-gray-900">No results found</h3>
              <p className="mt-2 text-gray-500 max-w-sm mx-auto">
                No bookmarks match &ldquo;{searchQuery}&rdquo;. Try a different search term.
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-700"
              >
                Clear search
              </button>
            </div>
          ) : (
            <div className="animate-fade-in">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center border border-blue-100">
                  <svg className="h-10 w-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Add your first bookmark!</h3>
              <p className="mt-2 text-gray-500 max-w-sm mx-auto">
                Start saving your favorite links. Use the form on the left to add your first bookmark.
              </p>
              <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-400">
                <span className="flex items-center gap-1.5">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Instant save
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Real-time sync
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Private
                </span>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-3">
          {filteredBookmarks.map((bookmark) => (
            <BookmarkItem
              key={bookmark.id}
              bookmark={bookmark}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  )
}