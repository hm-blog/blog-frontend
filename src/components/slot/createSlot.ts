import { Children, isValidElement, ReactNode } from 'react';

interface SlotMap {
  [key: string]: ReactNode;
}

const createSlots = (children: ReactNode, slots: string[]): SlotMap => {
  const slotMap: SlotMap = {};

  Children.forEach(children, (child) => {
    if (isValidElement(child)) {
      const slotName = child.props.name;
      if (slotName && slots.includes(slotName)) {
        slotMap[slotName] = child.props.children;
      }
    }
  });

  return slotMap;
};

export default createSlots;
