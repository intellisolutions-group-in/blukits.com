import Link from "next/link";
import SectionTitle from "@/components/Common/SectionTitle";

const steps = [
  { step: "01", title: "Discovery", desc: "Understand goals, users, and technical landscape." },
  { step: "02", title: "Planning", desc: "Define scope, architecture, and delivery milestones." },
  { step: "03", title: "Development", desc: "Build iteratively with regular reviews and demos." },
  { step: "04", title: "Launch", desc: "Test, deploy, document, and support go-live." },
];

const HomeProcess = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Our Development Process"
          paragraph="A structured approach that reduces risk and keeps stakeholders informed at every stage."
          center
          mb="60px"
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <div
              key={item.step}
              className="shadow-two dark:bg-dark dark:shadow-three rounded-xs bg-white p-8 text-center"
            >
              <span className="mb-4 inline-block text-3xl font-bold text-primary">
                {item.step}
              </span>
              <h3 className="mb-3 text-xl font-bold text-dark dark:text-white">
                {item.title}
              </h3>
              <p className="text-base text-body-color dark:text-body-color-dark">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/our-process/"
            className="text-base font-medium text-primary hover:opacity-80"
          >
            View Full Process
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeProcess;
