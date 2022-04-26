import React,{ FC } from 'react';
import { Link } from 'react-router-dom'

const NavbarTariffs: FC = () => {

    return (
        <nav>
            <ul>
                <li>С кешбэком 10%</li>
                <li>Для всех</li>
                <li>Для смартфона</li>
                <li>Для умных устройств</li>
                <li>Для планшета и компьютера</li>
                <li>Для звонков</li>
            </ul>
        </nav>
    )
}

export default NavbarTariffs;
