import { Home, ArrowLeft, Search } from 'lucide-react';

function NotFound() {
  const handleGoBack = () => {
    window.history.back();
  };

  const handleGoHome = () => {
    window.location.href = '/dashboard';
  };

  const handleNavigate = (path) => {
    window.location.href = path;
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">

        <div className="mb-8 relative">
          <h1 className="text-9xl font-bold text-indigo-600 opacity-20">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-bounce">
              <svg className="w-32 h-32 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved. 
          <br />
          Let's get you back on track!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleGoBack}
            className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-indigo-600 text-indigo-600 rounded-lg font-medium hover:bg-indigo-50 transition-all hover:scale-105 shadow-md"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
          
          <button
            onClick={handleGoHome}
            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-all hover:scale-105 shadow-md"
          >
            <Home className="w-5 h-5" />
            Go to Dashboard
          </button>
        </div>

        <div className="mt-12 p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Search className="w-5 h-5 text-gray-400" />
            <h3 className="text-lg font-semibold text-gray-800">
              Looking for something specific?
            </h3>
          </div>
          <p className="text-gray-600 mb-4">
            Try searching or visit one of these popular pages:
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => handleNavigate('/dashboard')}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors"
            >
              Dashboard
            </button>

            <button
              onClick={() => handleNavigate('/management/hall')}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors"
            >
              Hall Management
            </button>

            <button
              onClick={() => handleNavigate('/strategy/scheduling')}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors"
            >
              Screen Scheduling
            </button>

            <button
              onClick={() => handleNavigate('/analysis/cost')}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors"
            >
              Cost Analysis
            </button>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          <div className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse" style={{ animationDelay: '75ms' }}></div>
          <div className="w-2 h-2 bg-pink-600 rounded-full animate-pulse" style={{ animationDelay: '150ms' }}></div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;


// import { Home, ArrowLeft } from 'lucide-react';

// export default function NotFound() {
//   return (
//     <div className="min-h-screen bg-white flex items-center justify-center px-6">
//       <div className="text-center">

//         {/* Large Clean 404 */}
//         <h1 className="text-[120px] font-extrabold text-gray-200 leading-none">
//           404
//         </h1>

//         <h2 className="text-3xl font-semibold text-gray-800 mt-4">
//           Page Not Found
//         </h2>

//         <p className="text-gray-500 mt-3 max-w-md mx-auto">
//           The page you’re looking for doesn't exist or may have been moved.
//         </p>

//         {/* Actions */}
//         <div className="flex gap-3 justify-center mt-8">

//           <button
//             onClick={() => window.history.back()}
//             className="flex items-center gap-2 px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition"
//           >
//             <ArrowLeft className="w-4 h-4" />
//             Go Back
//           </button>

//           <button
//             onClick={() => (window.location.href = '/dashboard')}
//             className="flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-lg hover:bg-gray-900 transition"
//           >
//             <Home className="w-4 h-4" />
//             Go Home
//           </button>

//         </div>
//       </div>
//     </div>
//   );
// }
