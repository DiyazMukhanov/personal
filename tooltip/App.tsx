import React, { useLayoutEffect, useState} from 'react';
import { Tooltip } from './Tooltip/index';

export default function App() {
  const [tooltipLeft, setTooltipLeft] = useState(null)
  const [tooltipTop, setTooltipTop] = useState(null)

  useLayoutEffect(() => {
    const tooltipedElement = document.querySelectorAll('.withTooltip')
    tooltipedElement.forEach(element => {
      let rect = element.getBoundingClientRect()
      setTooltipLeft(rect.left + 20)
      setTooltipTop(rect.top - 20)
    })
  }, [])

  return (
    <div className='App'>
      <Tooltip>
        {(onMouseEnter, onMouseLeave, showTooltip) => {
          return (
            <>
             {showTooltip && (
                  <div style={{ position: 'absolute', top: tooltipTop, left: tooltipLeft, backgroundColor: 'orange', color: 'white', zIndex: '1' }}>
                    Я тултип
                  </div>
                )}
              <div
                className='withTooltip'
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
               
                Наведи на меня
              </div>
            </>
          );
        }}
      </Tooltip>
    </div>
  );
}
