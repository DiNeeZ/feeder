import React from "react";
import Image from "next/image";
import Layout from "@/components/layout";
import PageTitle from "@/components/ui/page-title";
import { TbMailbox, TbPhoneOff } from "react-icons/tb";
import { Teko } from "next/font/google";
import Link from "next/link";
import ContactCard from "@/components/ui/contact-card";

const teko = Teko({
  subsets: ["latin"],
  weight: ["500"],
});

const Contacts = () => {
  return (
    <Layout>
      <div className="container mx-auto pt-8 border-t border-blue-400 mb-24">
        <PageTitle>Contacts</PageTitle>
        <div
          className="relative mt-8 pt-6 md:pt-12 mb-12 md:mb-24 border-t min-h-[400px]  
				bg-blue-950 border-blue-400 md:flex md:items-center rounded-xl overflow-hidden shadow-lg"
        >
          <div className="relative z-10 max-w-3xl px-8 md:px-16 text-slate-50">
            <h2 className={`${teko.className} text-4xl mb-8`}>
              Feeder Contacts
            </h2>
            <p className="text-2xl">Don&apos;t try to write or call us.</p>
            <p className="text-2xl">You don&apos;t stand a chance anyway.</p>
          </div>
          <Image
            width={440}
            height={360}
            src="/images/ha-ha.png"
            alt="man laughin looking on a phone"
            className="absolute bottom-0 right-0 w-auto"
          />
          <div className="absolute inset-0 w-full h-full bg-blue-400 opacity-30" />
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <li
            className="flex flex-col text-xl text-center items-center 
            justify-center gap-4"
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
          <li className="text-xl flex flex-col text-center items-center justify-center gap-4">
            <ContactCard Icon={TbMailbox}>
              <p>Don&apos;t email us</p>
              <p>Interested in software in something? Just search online.</p>
              <Link href="mailto:unknown@gmail.com">
                Email: <span className="text-sky-600">unknown@gmail.com</span>
              </Link>
            </ContactCard>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default Contacts;
