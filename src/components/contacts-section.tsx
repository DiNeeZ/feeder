import React from "react";
import More from "./ui/more";
import SectionTitle from "./ui/section-title";

const ContactsSection = () => {
  return (
    <section className="mb-24">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <SectionTitle>Contacts</SectionTitle>
          <More href="/contacts" />
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
