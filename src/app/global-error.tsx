"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <h2>에러가 발생하였습니다.- Global Error</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
