import React,{ FC } from 'react';
import SearchIcon from '../../assets/icons/Search_Icon.svg'

const TariffSearch: FC = () => {

    return (
        <form className='tariff-search'>
            <input type="text" placeholder='Поиск тарифа'className='tariff-search__input'/>
            <button type='submit' className='tariff-search__btn' ><img src={SearchIcon} alt="search icon" /></button>
        </form>
        )
}

export default TariffSearch;