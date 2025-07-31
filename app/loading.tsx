export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex flex-col items-center space-y-4">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
        <p className="text-lg text-gray-700 dark:text-gray-300">Loading...</p>
      </div>
    </div>
  )
}
