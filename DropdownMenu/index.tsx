import React, { createContext, ReactNode, useContext, useState } from 'react';

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
  children?: ReactNode;
};

const Trigger = ({ children }: TriggerProps) => {
  const { isOpen, setIsOpen } = useContext(DropdownContext);

  return <div onClick={() => setIsOpen(!isOpen)}>{children}</div>;
};

const Content = ({ children, className }) => {
  const { isOpen } = useContext(DropdownContext);

  if (isOpen) {
    return <div className={className}>{children}</div>;
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
