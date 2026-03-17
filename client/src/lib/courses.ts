export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export type Course = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  level: CourseLevel;
  duration: string;
  lessons: number;
  rating: number; // 0..5
  reviews: number;
  price: number; // 0 => free
  instructor: { name: string; avatarUrl?: string };
  coverUrl: string;
  tags: string[];
};

export const courseCategories = [
  "All",
  "Design",
  "Frontend",
  "Backend",
  "Product",
  "Writing",
] as const;

export const mockCourses: Course[] = [
  {
    slug: "ui-ux-foundations",
    title: "UI/UX Foundations",
    subtitle: "Design better flows, faster.",
    category: "Design",
    level: "Beginner",
    duration: "6h 20m",
    lessons: 28,
    rating: 4.7,
    reviews: 1240,
    price: 0,
    instructor: { name: "Ananya Sen" },
    coverUrl:
      "https://images.unsplash.com/photo-1557683316-973673baf926?w=1200&auto=format&fit=crop",
    tags: ["Figma", "Heuristics", "Wireframes"],
  },
  {
    slug: "nextjs-for-builders",
    title: "Next.js for Builders",
    subtitle: "Ship production apps with App Router.",
    category: "Frontend",
    level: "Intermediate",
    duration: "9h 10m",
    lessons: 42,
    rating: 4.8,
    reviews: 980,
    price: 799,
    instructor: { name: "Rohit Das" },
    coverUrl:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&auto=format&fit=crop",
    tags: ["React", "Next.js", "Tailwind"],
  },
  {
    slug: "nodejs-api-mastery",
    title: "Node.js API Mastery",
    subtitle: "From REST basics to auth & caching.",
    category: "Backend",
    level: "Intermediate",
    duration: "8h 05m",
    lessons: 36,
    rating: 4.6,
    reviews: 730,
    price: 599,
    instructor: { name: "Meera Iyer" },
    coverUrl:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=1200&auto=format&fit=crop",
    tags: ["Node", "Express", "Security"],
  },
  {
    slug: "product-thinking-crash-course",
    title: "Product Thinking Crash Course",
    subtitle: "Turn ideas into clear roadmaps.",
    category: "Product",
    level: "Beginner",
    duration: "4h 45m",
    lessons: 20,
    rating: 4.5,
    reviews: 410,
    price: 399,
    instructor: { name: "Soham Paul" },
    coverUrl:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&auto=format&fit=crop",
    tags: ["Roadmaps", "Metrics", "Discovery"],
  },
  {
    slug: "content-writing-for-tech",
    title: "Content Writing for Tech",
    subtitle: "Write clearly for products and docs.",
    category: "Writing",
    level: "Beginner",
    duration: "5h 15m",
    lessons: 24,
    rating: 4.7,
    reviews: 540,
    price: 299,
    instructor: { name: "Ishita Roy" },
    coverUrl:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&auto=format&fit=crop",
    tags: ["Docs", "UX Writing", "Clarity"],
  },
];

export function formatPriceINR(price: number) {
  if (price <= 0) return "Free";
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}

