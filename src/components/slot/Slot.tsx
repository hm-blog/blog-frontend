import { ReactNode } from 'react';

interface SlotProps {
  name: string;
  children?: ReactNode;
}

const Slot = ({ children }: SlotProps) => {
  return <>{children}</>;
};

export default Slot;
