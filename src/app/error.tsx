"use client";

import { useEffect } from "react";
import { FallbackProps } from "react-error-boundary";

export default function Error({ error, resetErrorBoundary }: FallbackProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>에러가 발생하였습니다.</h2>
      <button onClick={() => resetErrorBoundary()}>Try again</button>
    </div>
  );
}
