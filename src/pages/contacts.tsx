import React, { ReactNode } from "react";
import Image from "next/image";
import Layout from "@/components/layout";
import PageTitle from "@/components/ui/page-title";
import { TbMailbox, TbPhoneOff } from "react-icons/tb";
import type { IconType } from "react-icons";
import { Teko } from "next/font/google";
import Link from "next/link";

const teko = Teko({
  subsets: ["latin"],
  weight: ["500"],
});

type ContactCardProps = {
  children: ReactNode;
  Icon: IconType;
};

const ContactCard = ({ Icon, children }: ContactCardProps) => (
  <>
    <Icon size={60} className="mb-12 text-blue-950" />
    {children}
  </>
);

const Contacts = () => {
  return (
    <Layout>
      <div className="container mx-auto pt-8 border-t border-blue-400 mb-24">
        <PageTitle>Contacts</PageTitle>
        <div
          className="relative mt-8 pt-12 mb-24 border-t min-h-[400px]  
				bg-blue-950 border-blue-400 flex items-center rounded-xl overflow-hidden shadow-lg"
        >
          <div className="max-w-3xl px-16 text-slate-50">
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
        <ul className="flex">
          <li
            className="relative grow basis-1/2 flex flex-col text-xl items-center justify-center gap-4 after:w-[1px] after:h-full 
						after:bg-slate-600 after:absolute after:top-0 after:bottom-0 after:right-0"
          >
            <ContactCard Icon={TbPhoneOff}>
              <p>Don&apos;t call us</p>
              <p>Interested in software in something? Just search online.</p>
              <Link href="tel:+00000000000">
                Phone number:{" "}
                <span className="text-sky-600">+0s 000 000 0000</span>
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
      </div>
    </Layout>
  );
};

export default Contacts;
