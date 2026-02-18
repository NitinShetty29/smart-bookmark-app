import AuthButton from '@/components/AuthButton'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 border-b border-gray-200/50 bg-white/30 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/30">
                <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Smart Bookmark
              </span>
            </div>
            <AuthButton />
          </div>
        </div>
      </nav>

      <main className="flex flex-1 flex-col items-center justify-center px-4 py-12 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="animate-fade-in-down">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-600 border border-blue-100 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Real-time bookmark syncing
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 animate-fade-in-up animation-delay-200">
            Save links.{' '}
            <span className="inline-block bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent animate-gradient bg-300">
              Stay organized.
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
            The simplest way to save, organize, and access your bookmarks from anywhere. 
            Changes sync instantly across all your devices.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center justify-center animate-fade-in-up animation-delay-600">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <AuthButton />
            </div>
            <p className="mt-4 text-sm text-gray-500 flex items-center gap-3">
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Free forever
              </span>
              <span className="text-gray-300">•</span>
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                No credit card
              </span>
            </p>
          </div>

          {/* App Preview */}
          <div className="mt-16 animate-fade-in-up animation-delay-800">
            <div className="relative mx-auto max-w-4xl">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-2xl"></div>
              <div className="relative rounded-xl border border-gray-200 bg-white shadow-2xl overflow-hidden">
                {/* Browser Chrome */}
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-200">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="flex items-center gap-2 px-4 py-1 bg-white rounded-lg border border-gray-200 text-sm text-gray-400 w-80">
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      smart-bookmark-app.vercel.app
                    </div>
                  </div>
                </div>
                {/* App Preview Content */}
                <div className="p-6">
                  {/* Nav Preview */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                        <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>
                      </div>
                      <span className="font-bold text-sm text-gray-900">Smart Bookmark</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-blue-100"></div>
                      <span className="text-xs text-gray-500">John Doe</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {/* Add Form Preview */}
                    <div className="col-span-1 p-4 rounded-lg border border-gray-200 bg-gray-50/50">
                      <p className="text-xs font-semibold text-gray-700 mb-3 flex items-center gap-1">
                        <svg className="h-3.5 w-3.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        Add Bookmark
                      </p>
                      <div className="space-y-2">
                        <div className="h-7 rounded bg-white border border-gray-200 px-2 flex items-center">
                          <span className="text-[10px] text-gray-400">Enter title...</span>
                        </div>
                        <div className="h-7 rounded bg-white border border-gray-200 px-2 flex items-center">
                          <span className="text-[10px] text-gray-400">https://...</span>
                        </div>
                        <div className="h-7 rounded bg-blue-500 flex items-center justify-center">
                          <span className="text-[10px] text-white font-medium">+ Add Bookmark</span>
                        </div>
                      </div>
                    </div>
                    {/* Bookmarks Preview */}
                    <div className="col-span-2 space-y-2">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-gray-700">Your Bookmarks</span>
                        <span className="flex items-center gap-1 text-[10px] text-green-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                          Live
                        </span>
                      </div>
                      {[
                        { title: 'GitHub - Code Repository', domain: 'github.com', color: 'bg-gray-900' },
                        { title: 'Next.js Documentation', domain: 'nextjs.org', color: 'bg-black' },
                        { title: 'Tailwind CSS Framework', domain: 'tailwindcss.com', color: 'bg-cyan-500' },
                        { title: 'Supabase - Backend Platform', domain: 'supabase.com', color: 'bg-green-600' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg border border-gray-100 bg-white hover:shadow-sm transition-shadow">
                          <div className={`w-8 h-8 rounded-lg ${item.color} flex items-center justify-center flex-shrink-0`}>
                            <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium text-gray-900 truncate">{item.title}</p>
                            <p className="text-[10px] text-gray-400">{item.domain}</p>
                          </div>
                          <div className="w-5 h-5 rounded text-gray-300 hover:text-red-400 flex items-center justify-center cursor-pointer">
                            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mt-24 animate-fade-in-up animation-delay-1000">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything you need</h2>
            <p className="text-gray-500 mb-12 max-w-xl mx-auto">Simple yet powerful features to keep your bookmarks organized and accessible</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              <div className="group rounded-xl bg-white/80 backdrop-blur-sm p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 group-hover:from-blue-500 group-hover:to-blue-600 transition-all duration-300">
                  <svg className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="mt-4 font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">Google Sign-In</h3>
                <p className="mt-2 text-sm text-gray-500">One-click authentication with your Google account. No passwords to remember.</p>
              </div>

              <div className="group rounded-xl bg-white/80 backdrop-blur-sm p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-green-200 transition-all duration-300 hover:-translate-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-50 to-green-100 group-hover:from-green-500 group-hover:to-green-600 transition-all duration-300">
                  <svg className="h-6 w-6 text-green-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="mt-4 font-semibold text-gray-900 group-hover:text-green-600 transition-colors">Real-time Sync</h3>
                <p className="mt-2 text-sm text-gray-500">Open in two tabs — add in one, see it appear instantly in the other.</p>
              </div>

              <div className="group rounded-xl bg-white/80 backdrop-blur-sm p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-purple-200 transition-all duration-300 hover:-translate-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 group-hover:from-purple-500 group-hover:to-purple-600 transition-all duration-300">
                  <svg className="h-6 w-6 text-purple-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="mt-4 font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">Smart Search</h3>
                <p className="mt-2 text-sm text-gray-500">Instantly filter bookmarks by title or URL as you type.</p>
              </div>

              <div className="group rounded-xl bg-white/80 backdrop-blur-sm p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-orange-200 transition-all duration-300 hover:-translate-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-300">
                  <svg className="h-6 w-6 text-orange-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="mt-4 font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">Private & Secure</h3>
                <p className="mt-2 text-sm text-gray-500">Row-level security ensures your bookmarks are visible only to you.</p>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="mt-24 animate-fade-in-up animation-delay-1200">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How it works</h2>
            <p className="text-gray-500 mb-12 max-w-xl mx-auto">Get started in three simple steps</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 mx-auto mb-4 text-2xl font-bold">1</div>
                <h3 className="font-semibold text-gray-900 text-lg">Sign in with Google</h3>
                <p className="mt-2 text-sm text-gray-500">One click to authenticate securely with your Google account</p>
              </div>
              <div className="text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-600 mx-auto mb-4 text-2xl font-bold">2</div>
                <h3 className="font-semibold text-gray-900 text-lg">Add your bookmarks</h3>
                <p className="mt-2 text-sm text-gray-500">Enter a title and URL — your bookmark is saved instantly</p>
              </div>
              <div className="text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-purple-600 mx-auto mb-4 text-2xl font-bold">3</div>
                <h3 className="font-semibold text-gray-900 text-lg">Access anywhere</h3>
                <p className="mt-2 text-sm text-gray-500">Your bookmarks sync in real-time across all your devices and tabs</p>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mt-24 mb-12 animate-fade-in-up animation-delay-1200">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Built with modern tech</h2>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              {[
                { name: 'Next.js 15', desc: 'App Router', color: 'bg-black text-white' },
                { name: 'Supabase', desc: 'Auth + DB + Realtime', color: 'bg-green-600 text-white' },
                { name: 'TypeScript', desc: 'Type Safety', color: 'bg-blue-600 text-white' },
                { name: 'Tailwind CSS', desc: 'Styling', color: 'bg-cyan-500 text-white' },
                { name: 'Vercel', desc: 'Deployment', color: 'bg-gray-900 text-white' },
              ].map((tech) => (
                <div key={tech.name} className="flex items-center gap-3 rounded-xl bg-white px-5 py-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <span className={`px-2.5 py-1 rounded-lg text-xs font-bold ${tech.color}`}>{tech.name}</span>
                  <span className="text-sm text-gray-500">{tech.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-6 text-center text-sm text-gray-500 border-t border-gray-200/50 bg-white/30 backdrop-blur-sm">
        <p>Built with ❤️ using Next.js, Supabase & Tailwind CSS</p>
      </footer>
    </div>
  )
}