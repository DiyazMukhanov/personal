import React from 'react';
import { Tooltip } from './Tooltip/index';

export default function App() {
  return (
    <div className='App'>
      <Tooltip title='Я тултип'>
        {(
          onMouseEnter: (event: React.MouseEvent) => void,
          onMouseLeave: () => void
        ) => {
          return (
            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
              Hover on me
            </div>
          );
        }}
      </Tooltip>
    </div>
  );
}
