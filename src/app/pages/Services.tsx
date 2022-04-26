import React,{ FC } from 'react';
import CurrentPathInfo from '../components/CurrentPathInfo';
import Slider from '../components/Slider';


const Services: FC = () => {


    return (
        <>
        <Slider modificatorStyles='slider--services slider--margin-bottom slider--text-paddings'
        title='Собери свой тариф!'
        description='Будь первым! Собери свой тариф без переплат'
        />
        <CurrentPathInfo />
        </>
    )
}

export default Services;
