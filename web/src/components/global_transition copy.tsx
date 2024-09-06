"use client";

//
import {
  type TransitionStartFunction,
  createContext,
  useEffect,
  useTransition,
} from "react";

//
import { useClientTransition } from "@/hooks/use_client_transition";

export const GlobalTransitionContext = createContext<{
  isPending: boolean;
  startTransition: TransitionStartFunction;
}>({ isPending: false, startTransition: () => {} });
export const GlobalTransitionProvider: React.FCC = ({ children }) => {
  const [isPending, startTransition] = useTransition();
  const setIsTransitioning = useClientTransition(
    (state) => state.setIsTransitioning
  );

  useEffect(
    () => setIsTransitioning(isPending),
    [isPending, setIsTransitioning]
  );

  return (
    <GlobalTransitionContext.Provider value={{ isPending, startTransition }}>
      {children}
    </GlobalTransitionContext.Provider>
  );
};
