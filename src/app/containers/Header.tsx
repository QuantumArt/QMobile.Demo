import React,{ FC } from 'react';
import LogoHeader from '../components/LogoHeader';
import Navbar from '../components/Navbar';


const Header: FC = () => {


    return (
        <header className="header">
            <LogoHeader />
            <div className='header__nav-wrapper'><Navbar  containerName="header__nav"/></div>

        </header>
    )
}

export default Header;
