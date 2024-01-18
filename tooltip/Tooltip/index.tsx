import { useState } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  title: string
  children: (onMouseEnter: (event: React.MouseEvent) => void, onMouseLeave: () => void) => JSX.Element
}

export function Tooltip({ children, title }: Props) {
  const [position, setPosition] = useState(null);

  const onMouseEnterHandler = (event: React.MouseEvent) => {
    const hoveredElement = event.currentTarget as HTMLElement
    setPosition({
      top: hoveredElement.getBoundingClientRect().top - 20,
      left: hoveredElement.getBoundingClientRect().left + 20,
    })
  }

  const onMouseLeaveHanlder = () => {
    setPosition(null)
  }

  return (
    <>
      {position &&
        createPortal(
          <div
            style={{
              position: 'absolute',
              top: position?.top,
              left: position?.left,
              backgroundColor: 'orange',
              color: 'white',
              zIndex: '1',
            }}
          >
         {title}
          </div>,
          document.body
        )}
        {children(onMouseEnterHandler, onMouseLeaveHanlder)}
    </>
  );
}
