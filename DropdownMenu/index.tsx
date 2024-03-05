import React, { createContext, ReactNode, useContext, useState } from 'react';
import { createPortal } from 'react-dom';

const DropdownContext = createContext({
  isOpen: false,
  setIsOpen: (state: boolean) => {},
});

export const Root = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </DropdownContext.Provider>
  );
};

type TriggerProps = {
  children?: ReactNode
  className: string
};

const Trigger = ({ children, className }: TriggerProps) => {
  const { isOpen, setIsOpen } = useContext(DropdownContext);

  return <div onClick={() => setIsOpen(!isOpen)}>{children}</div>;
};

const Content = ({ children, className }) => {
  const { isOpen } = useContext(DropdownContext);

  if (isOpen) {
    return createPortal(<div className={className}>{children}</div>, document.body);
  }
};

const Item = ({ children, onClick, value, className }) => {
   const onClickHandler = () => {
     onClick(value)
   }

  return (
    <div onClick={onClickHandler} className={className}>
      {children}
    </div>
  );
};

const DropdownMenu = {
  Root,
  Trigger,
  Content,
  Item,
};

export default DropdownMenu;
