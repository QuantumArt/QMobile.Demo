import React,{ FC } from 'react';
import CurrentPathInfo from '../components/CurrentPathInfo';
import Slider from '../components/Slider';


const Tariffs: FC = () => {


    return (
        <>
        <Slider 
        modificatorStyles='slider--tariffs slider--margin-bottom slider--text-paddings' 
        title='Тарифы “Объединяй”!'
        description='Единный счет для домашнего интернета, ТВ и связи'
        />
        <CurrentPathInfo />
        </>
    )
}

export default Tariffs;
