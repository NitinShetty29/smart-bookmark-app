import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Navbar from '@/components/Navbar'
import AddBookmarkForm from '@/components/AddBookmarkForm'
import BookmarkList from '@/components/BookmarkList'

export default async function Dashboard() {
  const supabase = await createClient()
  
  const { data: { user }, error: userError } = await supabase.auth.getUser()
  
  if (userError || !user) {
    redirect('/')
  }

  const { data: bookmarks, error: bookmarksError } = await supabase
    .from('bookmarks')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })

  if (bookmarksError) {
    console.error('Error fetching bookmarks:', bookmarksError)
  }

  return (
    <div className="min-h-screen">
      <Navbar user={user} />
      
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[350px,1fr]">
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <AddBookmarkForm userId={user.id} />
          </aside>

          <section>
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Your Bookmarks</h1>
              <p className="mt-1 text-gray-500">Manage and organize your saved links</p>
            </div>
            <BookmarkList initialBookmarks={bookmarks || []} userId={user.id} />
          </section>
        </div>
      </main>
    </div>
  )
}