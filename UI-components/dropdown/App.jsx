import React, { useState } from 'react';

export function App(props) {
  const options = [
    { label: 'Fruit', value: 'fruit' },

    { label: 'Vegetable', value: 'vegetable' },

    { label: 'Meat', value: 'meat' },
  ];

  const [value, setValue] = useState(options[0].value);
  console.log(value);
  return (
    <div className='App'>
      <DropDown
        options={options}
        label='Food'
        value={value}
        setValue={setValue}
        butonClassname='button'
        containerClassname='custom-container'
        itemClassname='select-item'
      ></DropDown>
    </div>
  );
}

function DropDown({
  label,
  value,
  options,
  setValue,
  butonClassname,
  containerClassname,
  itemClassname,
}) {
  const [isOpened, setIsOpened] = useState(false);

  const onChangeHandler = value => {
    setValue(value);
    setIsOpened(false);
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>{label}</div>
      <button className={butonClassname} onClick={() => setIsOpened(!isOpened)}>
        {value}
      </button>
      <div className={containerClassname} style={{ position: 'absolute' }}>
        {isOpened &&
          options.map(option => (
            <div
              key={option.value}
              onClick={() => onChangeHandler(option.value)}
              className={itemClassname}
            >
              {option.label}
            </div>
          ))}
      </div>
    </>
  );
}
