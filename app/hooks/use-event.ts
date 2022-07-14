import { useRef, useEffect, useCallback } from "react";

type Fn<Args extends any[], R> = (...args: Args) => R;

export default function useEvent<A extends any[], R>(handler: Fn<A, R>) {
  const handlerRef = useRef<Fn<A, R>>(handler);
  useEffect(() => {
    handlerRef.current = handler;
  });

  return useCallback((...args: A): R => {
    const fn = handlerRef.current;
    return fn(...args);
  }, []);
}
