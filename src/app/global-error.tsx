"use client";

export default function GlobalError({error, reset}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  
  return (<>
    <html lang="ind">
      <body>
        <main className="w-screen h-screen flex flex-col justify-center items-center space-y-3">
        <h1 className="title">error</h1>
        <p>Try again later!</p>
        </main>
      </body>
    </html>
  </>);
};