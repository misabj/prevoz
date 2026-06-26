import { getTranslations } from "next-intl/server";
import { VideoContent } from "@/components/video/VideoContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("video.title"),
    description: t("video.description"),
  };
}

export default function VideoPage() {
  return <VideoContent />;
}
