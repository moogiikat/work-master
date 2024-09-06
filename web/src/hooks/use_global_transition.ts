import { useContext } from "react";

import { GlobalTransitionContext } from "@/components/global_transition";

export const useGlobalTransition = () => {
  const { isPending, startTransition } = useContext(GlobalTransitionContext);

  return { isPending, startTransition };
};
