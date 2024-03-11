"use client";

import { useEffect } from "react";
import { FallbackProps } from "react-error-boundary";

export default function Error({ error, resetErrorBoundary }: FallbackProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>에러 발생</h2>
      <button onClick={() => resetErrorBoundary()}>Try again</button>
    </div>
  );
}
