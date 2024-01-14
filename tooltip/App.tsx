import React from 'react';
import { Tooltip } from './Tooltip/index';

export default function App() {
  return (
    <div className='App'>
      <Tooltip>
        {(onMouseEnter, onMouseLeave, showTooltip) => {
          return (
            <>
              <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                style={{ position: 'relative' }}
              >
                {showTooltip && (
                  <div style={{ position: 'absolute', bottom: '20px', backgroundColor: 'orange', color: 'white', zIndex: '1' }}>
                    Я тултип
                  </div>
                )}
                Наведи на меня
              </div>
            </>
          );
        }}
      </Tooltip>
    </div>
  );
}
