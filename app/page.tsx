import AuthButton from '@/components/AuthButton'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50">
      {/* Animated background gradients */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <main className="flex flex-1 flex-col items-center justify-center px-4 py-16 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo with entrance animation */}
          <div className="flex justify-center mb-8 animate-fade-in-down">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-2xl shadow-blue-500/50 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <svg className="h-10 w-10 text-white transform transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Title with staggered animation */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 animate-fade-in-up animation-delay-200">
            Smart{' '}
            <span className="inline-block bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent animate-gradient bg-300">
              Bookmark
            </span>
          </h1>

          {/* Subtitle with fade-in */}
          <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
            Save, organize, and access your favorite links from anywhere.
            <br />
            <span className="inline-flex items-center gap-2 mt-2 text-blue-600 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Real-time sync across all your devices
            </span>
          </p>

          {/* Features with hover animations */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            {/* Feature 1 */}
            <div className="group rounded-xl bg-white/80 backdrop-blur-sm p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up animation-delay-600">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 group-hover:from-blue-500 group-hover:to-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                <svg className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-gray-900 text-lg group-hover:text-blue-600 transition-colors">Lightning Fast</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">Add and access bookmarks instantly with our optimized interface</p>
            </div>

            {/* Feature 2 */}
            <div className="group rounded-xl bg-white/80 backdrop-blur-sm p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-green-200 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up animation-delay-800">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-50 to-green-100 group-hover:from-green-500 group-hover:to-green-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                <svg className="h-6 w-6 text-green-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-gray-900 text-lg group-hover:text-green-600 transition-colors">Real-time Sync</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">Changes sync instantly across all your open tabs and devices</p>
            </div>

            {/* Feature 3 */}
            <div className="group rounded-xl bg-white/80 backdrop-blur-sm p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-purple-200 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up animation-delay-1000">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 group-hover:from-purple-500 group-hover:to-purple-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                <svg className="h-6 w-6 text-purple-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold text-gray-900 text-lg group-hover:text-purple-600 transition-colors">Private & Secure</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">Your bookmarks are private and protected with secure authentication</p>
            </div>
          </div>

          {/* CTA with pulse animation */}
          <div className="mt-16 flex flex-col items-center justify-center animate-fade-in-up animation-delay-1200">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <AuthButton />
            </div>
            <p className="mt-6 text-sm text-gray-500 flex items-center gap-4">
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
                No credit card required
              </span>
            </p>

            {/* Trust indicators */}
            <div className="mt-8 flex items-center gap-6 text-xs text-gray-400">
              <div className="flex items-center gap-1.5">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>Enterprise-grade security</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                <span>99.9% uptime</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center text-sm text-gray-500 border-t border-gray-200/50 bg-white/30 backdrop-blur-sm">
        <p className="flex items-center justify-center gap-2">
          Built with 
          <span className="inline-flex items-center gap-1.5 font-medium text-gray-700">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"/>
            </svg>
            Next.js
          </span>
          <span className="text-gray-300">•</span>
          <span className="inline-flex items-center gap-1.5 font-medium text-gray-700">
            <svg className="h-4 w-4 text-green-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3c4.963 0 9 4.037 9 9s-4.037 9-9 9-9-4.037-9-9 4.037-9 9-9z"/>
            </svg>
            Supabase
          </span>
          <span className="text-gray-300">•</span>
          <span className="inline-flex items-center gap-1.5 font-medium text-gray-700">
            <svg className="h-4 w-4 text-cyan-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
            </svg>
            Tailwind CSS
          </span>
        </p>
      </footer>
    </div>
  )
}