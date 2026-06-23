"use client";

import ContactForm from "@/components/ui/ContactForm";
import company from "@/data/company.json";
import { offices } from "@/lib/data";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

const ContactPageContent = () => {
  return (
    <section className="pb-16 pt-8 md:pb-20 lg:pb-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12">
            <div className="shadow-three dark:bg-gray-dark rounded-xs bg-white px-8 py-11 sm:p-[55px]">
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white">
                Send Us a Message
              </h2>
              <p className="mb-8 text-base text-body-color dark:text-body-color-dark">
                Fill in the form below and our team will respond shortly.
              </p>
              <ContactForm />
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12">
            <div className="shadow-three dark:bg-gray-dark mb-8 rounded-xs bg-white px-8 py-11 sm:p-[55px]">
              <h3 className="mb-6 text-xl font-bold text-dark dark:text-white">
                Contact Details
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
            {offices.map((office) => (
              <div
                key={office.id}
                className="shadow-three dark:bg-gray-dark mb-6 rounded-xs bg-white px-8 py-8"
              >
                <div className="flex items-start gap-3">
                  <MapPin className="text-primary" size={20} />
                  <div>
                    <p className="font-semibold text-dark dark:text-white">{office.name}</p>
                    <p className="text-body-color dark:text-body-color-dark">{office.address}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="shadow-three dark:bg-gray-dark rounded-xs bg-white px-8 py-8">
              <h3 className="mb-4 text-lg font-bold text-dark dark:text-white">Map</h3>
              <div className="flex h-48 items-center justify-center rounded-xs bg-gray-light dark:bg-dark">
                <p className="text-sm text-body-color dark:text-body-color-dark">
                  Vadodara, Gujarat, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPageContent;
