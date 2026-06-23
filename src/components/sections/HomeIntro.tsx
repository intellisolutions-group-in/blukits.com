import SectionTitle from "@/components/Common/SectionTitle";
import company from "@/data/company.json";

const HomeIntro = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="mx-auto max-w-[900px] text-center">
          <SectionTitle
            title={`About ${company.brandName}`}
            paragraph={company.description}
            center
            mb="30px"
          />
          <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark md:text-lg">
            Registered in {company.domainRegisteredDate.split("-")[0]} and established in{" "}
            {company.establishedYear}, we support organisations across {company.country} with
            custom software development, integration, and ongoing application support. Our
            mission is to deliver dependable digital products through thoughtful engineering and
            clear communication.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeIntro;
