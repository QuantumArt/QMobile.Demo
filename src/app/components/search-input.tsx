import React, { useState } from 'react';
import SearchIcon from '../../assets/icons/Search_Icon.svg';

type Props = {
  onSubmit: (value: string) => void;
  placeholder?: string;
  sizeStyles?: string;
};

const SeachInput = ({
  onSubmit,
  placeholder,
  sizeStyles,
}: Props): JSX.Element => {
  const [inputValue, setValue] = useState('');

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmitHandler = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    onSubmit(inputValue);
    setValue('');
  };

  return (
    <form className={`${sizeStyles} search-input`} onSubmit={onSubmitHandler}>
      <input
        type="text"
        placeholder={placeholder}
        className="search-input__input"
        value={inputValue}
        onChange={onChangeInput}
      />
      <button type="submit" className="search-input__btn">
        <img src={SearchIcon} alt="search icon" />
      </button>
    </form>
  );
};

SeachInput.defaultProps = {
  placeholder: 'Поиск',
};

export default SeachInput;
