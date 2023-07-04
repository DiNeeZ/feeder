import { ReactNode } from 'react';
import { IconType } from 'react-icons';

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

export default ContactCard
