"use client";

import { Loader2Icon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { useClientTransition } from "@/hooks/use_client_transition";

export const ClientTransitionLoader: React.FC = () => {
  const isTransitioning = useClientTransition((state) => state.isTransitioning);

  if (!isTransitioning) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white">
      <Alert>
        <Loader2Icon className="h-4 w-4 animate-spin" />
        <AlertTitle>{"Уншиж байна"}</AlertTitle>
        <AlertDescription>{"Та түр хүлээнэ үү..."}</AlertDescription>
      </Alert>
    </div>
  );
};
