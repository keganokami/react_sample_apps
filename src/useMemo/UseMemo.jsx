import { useMemo } from "react";

function test(a, b) {
  return a + b;
}

export function TestComponent({ a, b }) {
  const result = useMemo(() => test(a, b), [a, b]);

  return (
  <>
    <h1>useMemoApp</h1>
    <p>{result}</p>;
  </>
  )
}