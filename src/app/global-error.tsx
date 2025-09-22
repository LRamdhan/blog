"use client";

export default function GlobalError({error, reset}: {
  error: Error & { digest?: string }
  reset: () => void
}) {

  console.log('Error : ' + error.message);
  
  return (<>
    <html lang="ind">
      <body>
        <main className="w-screen h-screen flex flex-col justify-center items-center space-y-3">
        <h1>Error</h1>
        <button onClick={() => reset()}>Try again</button>
        </main>
      </body>
    </html>
  </>);
};