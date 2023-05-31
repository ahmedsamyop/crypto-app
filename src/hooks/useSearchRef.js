import { useEffect, useRef } from "react";

const useSearchRef = (state) => {
  const prevStateRef = useRef();
  useEffect(() => {
    prevStateRef.current = state;
  });
  return prevStateRef.current;
};

export default useSearchRef;
