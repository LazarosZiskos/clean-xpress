export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Η σελίδα δεν βρέθηκε
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Συγγνώμη, η σελίδα που αναζητάτε δεν υπάρχει.
          </p>
          <a
            href="/"
            className="mt-4 inline-block px-4 py-2 bg-brand text-white rounded-md hover:bg-brand-600 transition-colors"
          >
            Επιστροφή στην αρχική
          </a>
        </div>
      </div>
    </div>
  );
}
