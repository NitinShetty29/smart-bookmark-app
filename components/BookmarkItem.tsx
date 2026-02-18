'use client'

import { createClient } from '@/lib/supabase/client'
import { useState } from 'react'

interface BookmarkItemProps {
  bookmark: any
  onDelete: (id: string) => void
}

export default function BookmarkItem({ bookmark, onDelete }: BookmarkItemProps) {
  const [deleting, setDeleting] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const supabase = createClient()

  const handleDelete = async () => {
    setDeleting(true)
    onDelete(bookmark.id)

    const { error } = await supabase
      .from('bookmarks')
      .delete()
      .eq('id', bookmark.id)

    if (error) {
      console.error('Error deleting bookmark:', error)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  }

  const getDomain = (url: string) => {
    try {
      return new URL(url).hostname.replace('www.', '')
    } catch {
      return url
    }
  }

  const getFaviconUrl = (url: string) => {
    try {
      const domain = new URL(url).hostname
      return `https://www.google.com/s2/favicons?domain=${domain}&sz=32`
    } catch {
      return null
    }
  }

  return (
    <div className="group relative flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-200 hover:shadow-md hover:border-gray-200 animate-slide-in">
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gray-50 ring-1 ring-gray-100">
        {getFaviconUrl(bookmark.url) ? (
          <img
            src={getFaviconUrl(bookmark.url)!}
            alt=""
            className="h-6 w-6"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none'
            }}
          />
        ) : (
          <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <a
          href={bookmark.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link inline-flex items-center gap-1 text-gray-900 font-medium hover:text-blue-600 transition-colors"
        >
          <span className="truncate">{bookmark.title}</span>
          <svg className="h-4 w-4 opacity-0 group-hover/link:opacity-100 transition-opacity flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
        <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
          <span className="truncate">{getDomain(bookmark.url)}</span>
          <span>•</span>
          <span>{formatDate(bookmark.created_at)}</span>
        </div>
      </div>

      <div className="flex-shrink-0">
        {showConfirm ? (
          <div className="flex items-center gap-2 animate-fade-in">
            <button
              onClick={() => setShowConfirm(false)}
              disabled={deleting}
              className="rounded-lg px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 transition-colors disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              onClick={handleDelete}
              disabled={deleting}
              className="rounded-lg bg-red-500 px-3 py-1.5 text-sm font-medium text-white hover:bg-red-600 transition-colors disabled:opacity-50"
            >
              {deleting ? 'Deleting...' : 'Delete'}
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowConfirm(true)}
            className="rounded-lg p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all opacity-0 group-hover:opacity-100"
            title="Delete bookmark"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}