"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Κάτι πήγε στραβά!
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Συγγνώμη, παρουσιάστηκε κάποιο πρόβλημα.
          </p>
          <button
            onClick={() => reset()}
            className="mt-4 px-4 py-2 bg-brand text-white rounded-md hover:bg-brand-600 transition-colors"
          >
            Δοκιμάστε ξανά
          </button>
        </div>
      </div>
    </div>
  );
}
