"use client";
export default function ErrorBounary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
    return <div className="bg-black h-full">{error.message}
    <button onClick={reset}>Try Again</button>
    </div>;
}
