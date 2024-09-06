import { cn } from "@/lib/utils";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  type?: "container" | "max-400" | "max-600" | "max-800" | "max-1024";
}
export const PageLayout: React.FCC<Props> = ({
  children,
  className,
  type = "container",
}) => {
  return (
    <main>
      <div
        className={cn(
          type === "container" &&
            "container mx-auto pb-10 pt-[60px] px-5 md:px-10 lg:px-40",
          className
        )}
      >
        {children}
      </div>
    </main>
  );
};
