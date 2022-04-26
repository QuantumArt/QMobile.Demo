import React,{ FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavbarTariffs from '../components/NavbarTariffs';



const TariffsPageContent: FC = () => {


    return (
        <div className='tariffs-page-content'>
            <div className='flex-wrapper'>
                <div className='tariffs-nav-wrapper'>
                    <p className='page-content-title page-content-title--tariffs-nav'>Тарифы</p>
                    <NavbarTariffs />
                    <Routes>
                        <Route path='/tariffs/forall' element={<div>Для всех</div>}/>
                    </Routes>
                    </div>
                </div>
        </div>
    )
}

export default TariffsPageContent;
