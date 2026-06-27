import Breadcrumb from "@/components/Common/Breadcrumb";
import ScrollUp from "@/components/Common/ScrollUp";
import CTASection from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Our Development Process",
  description:
    "Learn about BluKits Technologies structured software development process from discovery to deployment.",
  keywords: ["development process", "agile software delivery", "SDLC"],
  path: "/our-process/",
});

const phases = [
  {
    title: "Discovery and Requirements",
    description:
      "We conduct stakeholder workshops, document functional and non-functional requirements, and identify integration points, risks, and success metrics.",
  },
  {
    title: "Solution Design",
    description:
      "Architecture, technology selection, wireframes, and delivery roadmap are prepared with clear milestones and approval gates.",
  },
  {
    title: "Iterative Development",
    description:
      "Features are built in sprints with code reviews, continuous integration, and regular demos to gather feedback early.",
  },
  {
    title: "Quality Assurance",
    description:
      "Test plans cover functional, regression, and API validation. Defects are tracked and resolved before release candidates.",
  },
  {
    title: "Deployment and Handover",
    description:
      "We support production deployment, environment configuration, documentation, and knowledge transfer to your team.",
  },
  {
    title: "Support and Evolution",
    description:
      "Post-launch maintenance, monitoring assistance, and planned enhancements keep your application reliable over time.",
  },
];

export default function OurProcessPage() {
  return (
    <>
      <ScrollUp />
      <Breadcrumb
        pageName="Our Process"
        description="A transparent, milestone-driven approach to software delivery."
      />
      <section className="pb-16 pt-8 md:pb-20 lg:pb-28">
        <div className="container">
          <h2 className="mb-10 text-3xl font-bold text-dark dark:text-white">
            Our Software Development Phases
          </h2>
          <div className="mx-auto max-w-[800px] space-y-8">
            {phases.map((phase, index) => (
              <div
                key={phase.title}
                className="shadow-two dark:bg-dark flex gap-6 rounded-xs bg-white p-8"
              >
                <span className="text-3xl font-bold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="mb-3 text-xl font-bold text-dark dark:text-white">
                    {phase.title}
                  </h3>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
