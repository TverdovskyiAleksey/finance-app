import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'Basic', label: 'Основной' },
  { value: 'Food', label: 'Еда' },
  { value: 'Car', label: 'Авто' },
  { value: 'Growth', label: 'Развитие' },
  { value: 'Children', label: 'Дети' },
  { value: 'House', label: 'Дом' },
  { value: 'Education', label: 'Образование' },
  { value: 'Rest', label: 'Остальные' },
];

const customStyles = {
  container: (provided, state) => ({
    ...provided,
    width: '100%',
    marginBottom: '40px',
    textAlign: 'start',
  }),

  control: (provided, state) => ({
    ...provided,
    borderRadius: '0',
    border: 'none',
    borderBottom: '1px solid #E0E0E0',
  }),

  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: '#000',
  }),

  indicatorSeparator: (provided, state) => ({
    ...provided,
    backgroundColor: 'transparent',
  }),

  menu: (provided, state) => ({
    ...provided,
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
    background: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(12px)',
    borderRadius: '20px',
  }),

  menuList: (provided, state) => ({
    ...provided,
    background: 'transparent',
    height: '100%',
  }),

  placeholder: (provided, state) => ({
    ...provided,
    color: '#BDBDBD',
    margin: '0',
  }),

  valueContainer: (provided, state) => ({
    ...provided,
    margin: '0',
    paddingLeft: '20px',
  }),

  option: (provided, state) => ({
    ...provided,
    background: state.isFocused ? '#FFFFFF' : 'transparent',
    color: state.isFocused ? '#FF6596' : '#000',
    height: '44px',
  }),
};

const Selector = ({ onChange }) => {
  return (
    <>
      <Select
        styles={customStyles}
        options={options}
        placeholder={'Выберите категорию'}
        maxMenuHeight={380}
        id="select-category"
        onChange={value => onChange(value.value)}
      />
    </>
  );
};
export default Selector;
