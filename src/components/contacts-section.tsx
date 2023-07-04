import React from "react";
import { TbMailbox, TbPhoneOff } from "react-icons/tb";

import Section from './ui/section';
import ContactCard from './ui/contact-card';
import Link from 'next/link';

const ContactsSection = () => {
  return (
    <Section title='Contacts' href='/contacts'>
      <ul className="flex">
        <li
          className="relative grow basis-1/2 flex flex-col text-xl items-center 
            justify-center gap-4 after:w-[1px] after:h-full after:bg-slate-600 
            after:absolute after:top-0 after:bottom-0 after:right-0"
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
        <li className="grow basis-1/2 text-xl flex flex-col items-center justify-center gap-4">
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
