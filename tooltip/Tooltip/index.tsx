import { useState, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';

export function Tooltip({ children, title }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipLeft, setTooltipLeft] = useState(null);
  const [tooltipTop, setTooltipTop] = useState(null);

  useLayoutEffect(() => {
    const tooltipedElement = document.querySelectorAll('.withTooltip');
    tooltipedElement.forEach(element => {
      let rect = element.getBoundingClientRect();
      setTooltipLeft(rect.left + 20);
      setTooltipTop(rect.top - 20);
    });
  }, []);

  return (
    <>
      {showTooltip &&
        createPortal(
          <div
            style={{
              position: 'absolute',
              top: tooltipTop,
              left: tooltipLeft,
              backgroundColor: 'orange',
              color: 'white',
              zIndex: '1',
            }}
          >{title}</div>,
          document.body
        )}
      <span
        className='withTooltip'
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {children}
      </span>
    </>
  );
}
