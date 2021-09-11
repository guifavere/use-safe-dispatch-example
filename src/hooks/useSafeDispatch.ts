import { useCallback, useLayoutEffect, useRef, Dispatch } from 'react';

export function useSafeDispatch<State>(dispatch: Dispatch<State>) {
  const isMounted = useRef(false);

  useLayoutEffect(() => {
    isMounted.current = true;

    return function onUnmount() {
      isMounted.current = false;
    }
  });

  const safeDispatch = useCallback(
    (args: State) => { 
      isMounted.current && dispatch(args);
    },
    [dispatch]
  );

  return { safeDispatch };
}
 