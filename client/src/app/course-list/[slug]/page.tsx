import CourseDetails from "@/components/course/CourseDetails";

export default async function CourseDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <CourseDetails slug={slug} />;
}

