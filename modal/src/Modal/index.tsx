import classNames from 'classnames';
import './Modal.css';
import React from 'react';
import { createPortal } from 'react-dom';

type Props = {
  children: React.ReactNode;
  className: string;
  isOpened: boolean;
  onClose: () => void;
};

export const Modal: React.FC<Props> = ({
  children,
  className,
  isOpened,
  onClose,
}) => {
  if (isOpened) {
    return (
      <>
        {createPortal(
          <>
            <div className='backDrop' onClick={onClose} />
            <div className={classNames('modal', className)}>{children}</div>
          </>,
          document.body
        )}
      </>
    );
  }
};
