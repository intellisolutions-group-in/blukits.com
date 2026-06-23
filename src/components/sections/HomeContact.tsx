"use client";

import SectionTitle from "@/components/Common/SectionTitle";
import ContactForm from "@/components/ui/ContactForm";
import company from "@/data/company.json";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

const HomeContact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Get in Touch"
          paragraph="Share your project requirements and our team will respond to schedule a consultation."
          center
          mb="60px"
        />
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12">
            <div className="shadow-three dark:bg-gray-dark mb-12 rounded-xs bg-white px-8 py-11 sm:p-[55px] lg:mb-5">
              <ContactForm submitLabel="Send Inquiry" />
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12">
            <div className="shadow-three dark:bg-gray-dark rounded-xs bg-white px-8 py-11 sm:p-[55px]">
              <h3 className="mb-6 text-2xl font-bold text-dark dark:text-white">
                Contact Information
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <Mail className="mt-1 text-primary" size={20} />
                  <div>
                    <p className="font-medium text-dark dark:text-white">Email</p>
                    <a href={`mailto:${company.email}`} className="text-body-color hover:text-primary dark:text-body-color-dark">
                      {company.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Phone className="mt-1 text-primary" size={20} />
                  <div>
                    <p className="font-medium text-dark dark:text-white">Phone</p>
                    <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="text-body-color hover:text-primary dark:text-body-color-dark">
                      {company.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <MapPin className="mt-1 text-primary" size={20} />
                  <div>
                    <p className="font-medium text-dark dark:text-white">Office</p>
                    <p className="text-body-color dark:text-body-color-dark">
                      4th Floor, Alkapuri Arcade, RC Dutt Road, Vadodara, Gujarat 390007, India
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Clock className="mt-1 text-primary" size={20} />
                  <div>
                    <p className="font-medium text-dark dark:text-white">Business Hours</p>
                    <p className="text-body-color dark:text-body-color-dark">
                      {company.businessHours}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;
