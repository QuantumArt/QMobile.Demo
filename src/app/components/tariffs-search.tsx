import React, { FC, useState } from 'react';
import SearchIcon from '../../assets/icons/Search_Icon.svg';

const TariffSearch: FC = () => {
  const [inputValue, setValue] = useState('');

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmitHandler = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    alert(inputValue);
    setValue('');
  };

  return (
    <form className="tariff-search" onSubmit={onSubmitHandler}>
      <input
        type="text"
        placeholder="Поиск тарифа"
        className="tariff-search__input"
        value={inputValue}
        onChange={onChangeInput}
      />
      <button type="submit" className="tariff-search__btn">
        <img src={SearchIcon} alt="search icon" />
      </button>
    </form>
  );
};

export default TariffSearch;
