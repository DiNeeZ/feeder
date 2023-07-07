import React from "react";
import { TbMailbox, TbPhoneOff } from "react-icons/tb";

import Section from "./ui/section";
import ContactCard from "./ui/contact-card";
import Link from "next/link";

const ContactsSection = () => {
  return (
    <Section title="Contacts" href="/contacts">
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <li
          className="relative flex flex-col text-xl items-center 
            justify-center gap-4 text-center"
        >
          <ContactCard Icon={TbPhoneOff}>
            <p>Don&apos;t call us</p>
            <p>Interested in software in something? Just search online.</p>
            <Link href="tel:+00000000000">
              Phone number:{" "}
              <span className="text-sky-600">+0 000 000 0000</span>
            </Link>
          </ContactCard>
        </li>
        <li className="text-xl flex flex-col items-center justify-center gap-4 text-center">
          <ContactCard Icon={TbMailbox}>
            <p>Don&apos;t email us</p>
            <p>Interested in software in something? Just search online.</p>
            <Link href="mailto:unknown@gmail.com">
              Email: <span className="text-sky-600">unknown@gmail.com</span>
            </Link>
          </ContactCard>
        </li>
      </ul>
    </Section>
  );
};

export default ContactsSection;
