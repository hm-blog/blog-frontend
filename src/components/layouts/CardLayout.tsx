import './CardLayout.css';
import { ReactNode } from 'react';
import createSlots from '../slot/createSlot.ts';

interface CardLayoutProps {
  children: ReactNode;
  imagePosition?: 'top' | 'bottom' | 'left' | 'right';
}

const CardLayout = ({ children, imagePosition }: CardLayoutProps) => {
  const slots = createSlots(children, ['image', 'content']);

  if (imagePosition === undefined) imagePosition = 'top';

  return (
    <div className={`card-layout image-${imagePosition}`}>
      <div className="card-layout__image">{slots.image}</div>
      <div className="card-layout__content">{slots.content}</div>
    </div>
  );
};

export default CardLayout;
