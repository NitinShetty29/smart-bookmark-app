'use client'

import { User } from '@supabase/supabase-js'
import { useState, useCallback } from 'react'
import AddBookmarkForm from './AddBookmarkForm'
import BookmarkList from './BookmarkList'

interface DashboardContentProps {
  user: User
  initialBookmarks: any[]
}

export default function DashboardContent({ user, initialBookmarks }: DashboardContentProps) {
  const [bookmarks, setBookmarks] = useState<any[]>(initialBookmarks)

  const handleAddBookmark = useCallback((newBookmark: any) => {
    setBookmarks((current) => {
      if (current.some((b) => b.id === newBookmark.id)) {
        return current
      }
      return [newBookmark, ...current]
    })
  }, [])

  const handleDeleteBookmark = useCallback((deletedId: string) => {
    setBookmarks((current) => current.filter((b) => b.id !== deletedId))
  }, [])

  // Calculate stats
  const totalBookmarks = bookmarks.length
  const todayBookmarks = bookmarks.filter((b) => {
    const today = new Date()
    const bookmarkDate = new Date(b.created_at)
    return bookmarkDate.toDateString() === today.toDateString()
  }).length
  const uniqueDomains = new Set(
    bookmarks.map((b) => {
      try { return new URL(b.url).hostname } catch { return '' }
    }).filter(Boolean)
  ).size

  return (
    <div className="space-y-8">
      {/* Welcome & Stats Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome back, {user.user_metadata.full_name?.split(' ')[0] || 'there'}! 👋
          </h1>
          <p className="mt-1 text-gray-500">Manage and organize your saved links</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-4">
        <div className="card p-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
            <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">{totalBookmarks}</p>
            <p className="text-xs text-gray-500">Total Bookmarks</p>
          </div>
        </div>

        <div className="card p-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50">
            <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">{todayBookmarks}</p>
            <p className="text-xs text-gray-500">Added Today</p>
          </div>
        </div>

        <div className="card p-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50">
            <svg className="h-5 w-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
            </svg>
          </div>
          <div>
            <p className="text-2xl font-bold text-gray-900">{uniqueDomains}</p>
            <p className="text-xs text-gray-500">Unique Sites</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid gap-8 lg:grid-cols-[350px,1fr]">
        <aside className="lg:sticky lg:top-24 lg:h-fit space-y-4">
          <AddBookmarkForm userId={user.id} onAdd={handleAddBookmark} />

          {/* Quick Tips */}
          {totalBookmarks === 0 && (
            <div className="card p-4 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-100">
              <h3 className="font-semibold text-blue-900 text-sm flex items-center gap-2">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Getting Started
              </h3>
              <ul className="mt-3 space-y-2 text-xs text-blue-700">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5">✅</span>
                  <span>Add your first bookmark using the form above</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5">🔍</span>
                  <span>Use search to quickly find saved links</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5">🔄</span>
                  <span>Open in two tabs to see real-time sync!</span>
                </li>
              </ul>
            </div>
          )}
        </aside>

        <section>
          <BookmarkList
            bookmarks={bookmarks}
            userId={user.id}
            onAdd={handleAddBookmark}
            onDelete={handleDeleteBookmark}
          />
        </section>
      </div>
    </div>
  )
}