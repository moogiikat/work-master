import { FocusCards } from "@/components/ui/focus-cards";

export function Cards() {
  const cards = [
    {
      title: "Forest Adventure",
      src: "/workmaster/projects/job1-1.jpeg",
    },
    {
      title: "Mountain Adventure",
      src: "/workmaster/projects/job1-2.jpeg",
    },
    {
      title: "Beach Adventure",
      src: "/workmaster/projects/job1-3.jpeg",
    },
    {
      title: "Desert Adventure",
      src: "/workmaster/projects/job1-4.jpeg",
    },
    {
      title: "City Adventure",
      src: "/workmaster/projects/project1.jpeg",
    },
    {
      title: "Pizza Hut",
      src: "/workmaster/projects/project2.jpeg",
    },
  ];

  return <FocusCards cards={cards} />;
}
