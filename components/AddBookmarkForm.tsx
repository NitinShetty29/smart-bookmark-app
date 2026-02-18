'use client'

import { createClient } from '@/lib/supabase/client'
import { useState } from 'react'

interface AddBookmarkFormProps {
  userId: string
  onAdd: (bookmark: any) => void
}

export default function AddBookmarkForm({ userId, onAdd }: AddBookmarkFormProps) {
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(false)

    const supabase = createClient()

    let validatedUrl = url.trim()
    if (!validatedUrl.startsWith('http://') && !validatedUrl.startsWith('https://')) {
      validatedUrl = 'https://' + validatedUrl
    }

    try {
      new URL(validatedUrl)
    } catch {
      setError('Please enter a valid URL')
      setLoading(false)
      return
    }

    try {
      // Step 1: Insert the bookmark
      const { error: insertError } = await supabase
        .from('bookmarks')
        .insert({
          user_id: userId,
          title: title.trim(),
          url: validatedUrl,
        } as any)

      if (insertError) {
        console.error('Insert error:', insertError)
        setError(insertError.message)
        setLoading(false)
        return
      }

      // Step 2: Fetch the bookmark we just inserted
      const { data: fetchedBookmarks, error: fetchError } = await supabase
        .from('bookmarks')
        .select('*')
        .eq('user_id', userId)
        .eq('url', validatedUrl)
        .order('created_at', { ascending: false })
        .limit(1)

      if (fetchError) {
        console.error('Fetch error:', fetchError)
      }

      if (fetchedBookmarks && fetchedBookmarks.length > 0) {
        // Step 3: Add to UI immediately
        onAdd(fetchedBookmarks[0])
      }

      // Step 4: Clear form and show success
      setTitle('')
      setUrl('')
      setSuccess(true)
      setTimeout(() => setSuccess(false), 2000)
    } catch (err) {
      console.error('Unexpected error:', err)
      setError('Something went wrong. Please try again.')
    }

    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <svg className="h-5 w-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        Add New Bookmark
      </h2>

      <div className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="My awesome bookmark"
            required
            className="input"
          />
        </div>

        <div>
          <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">
            URL
          </label>
          <input
            type="text"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
            required
            className="input"
          />
        </div>

        {error && (
          <div className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
            <svg className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {error}
          </div>
        )}

        {success && (
          <div className="flex items-center gap-2 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-600 animate-fade-in">
            <svg className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Bookmark added successfully!
          </div>
        )}

        <button
          type="submit"
          disabled={loading || !title.trim() || !url.trim()}
          className="btn-primary w-full"
        >
          {loading ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Adding...
            </>
          ) : (
            <>
              <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add Bookmark
            </>
          )}
        </button>
      </div>
    </form>
  )
}