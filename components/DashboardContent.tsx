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
      // Prevent duplicates
      if (current.some((b) => b.id === newBookmark.id)) {
        return current
      }
      return [newBookmark, ...current]
    })
  }, [])

  const handleDeleteBookmark = useCallback((deletedId: string) => {
    setBookmarks((current) => current.filter((b) => b.id !== deletedId))
  }, [])

  return (
    <div className="grid gap-8 lg:grid-cols-[350px,1fr]">
      <aside className="lg:sticky lg:top-24 lg:h-fit">
        <AddBookmarkForm userId={user.id} onAdd={handleAddBookmark} />
      </aside>

      <section>
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Your Bookmarks</h1>
          <p className="mt-1 text-gray-500">Manage and organize your saved links</p>
        </div>
        <BookmarkList
          bookmarks={bookmarks}
          userId={user.id}
          onAdd={handleAddBookmark}
          onDelete={handleDeleteBookmark}
        />
      </section>
    </div>
  )
}