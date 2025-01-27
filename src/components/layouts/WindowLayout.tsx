import './WindowLayout.css';
import { ReactNode } from 'react';
import createSlots from '../slot/createSlot.ts';

interface WindowLayoutProps {
  children: ReactNode;
}

const WindowLayout = ({ children }: WindowLayoutProps) => {
  const slots = createSlots(children, ['header', 'default', 'footer']);

  return (
    <div className="window-layout">
      <div className="window-layout__header">{slots.header}</div>
      <div className="window-layout__default">{slots.default}</div>
      <div className="window-layout__footer">{slots.footer}</div>
    </div>
  );
};

export default WindowLayout;
