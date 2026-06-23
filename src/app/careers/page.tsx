import { buildMetadata } from "@/lib/seo";
import CareersContent from "./CareersContent";

export const metadata = buildMetadata({
  title: "Careers",
  description:
    "Explore career opportunities at BluKits Technologies. Join our software development team in Vadodara or work remotely.",
  keywords: ["careers", "software jobs India", "developer jobs Vadodara"],
  path: "/careers/",
});

export default function CareersPage() {
  return <CareersContent />;
}
