import React,{ FC } from 'react';
import CurrentPathInfo from '../components/CurrentPathInfo';
import Slider from '../components/Slider';
import TariffsPageContent from '../containers/TariffsPageContent';


const Tariffs: FC = () => {


    return (
        <>
        <Slider 
        modificatorStyles='slider--tariffs slider--margin-bottom slider--text-paddings' 
        title='Тарифы “Объединяй”!'
        description='Единный счет для домашнего интернета, ТВ и связи'
        />
        <CurrentPathInfo />
        <TariffsPageContent />
        </>
    )
}

export default Tariffs;
