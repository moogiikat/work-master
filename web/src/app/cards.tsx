import { FocusCards } from "@/components/ui/focus-cards";

export function Cards() {
  const cards = [
    {
      title: "ОТ ийн Мазаалай төсөл",
      src: "/workmaster/projects/mazaalai.jpg",
    },
    {
      title: "NARAN RESIDENCE",
      src: "/workmaster/projects/job1-2.jpeg",
    },
    {
      title: "NARAN RESIDENCE",
      src: "/workmaster/projects/job1-3.jpeg",
    },
    {
      title: "NARAN RESIDENCE",
      src: "/workmaster/projects/job1-4.jpeg",
    },
    {
      title: "оффисын интерьер",
      src: "/workmaster/projects/project1.jpeg",
    },
    {
      title: "Pizza Hut",
      src: "/workmaster/projects/project2.jpeg",
    },
  ];

  return <FocusCards cards={cards} />;
}
