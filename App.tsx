import React, { useState } from 'react';
import DropdownMenu from './DropdownMenu';

export default function App() {
  const [selectedValue, setSelectedValue] = useState(null);

  const selectHandler = (value) => {
     setSelectedValue(value)
  }

  return (
    <div className='App'>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <button>Menu</button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item value='Курица' onClick={selectHandler}>Курица</DropdownMenu.Item>
          <DropdownMenu.Item value='Бананы' onClick={selectHandler}>Бананы</DropdownMenu.Item>
          <DropdownMenu.Item value='Яйца' onClick={selectHandler}>Яйца</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
}

// Log to console
console.log('Hello console');
