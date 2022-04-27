import { useObserver } from 'mobx-react-lite';
import React,{ FC } from 'react';
import CurrentPathInfo from '../components/CurrentPathInfo';
import Slider from '../components/Slider';


const TariffConsructor: FC = () => {


    return useObserver(() => (
        <>
        <Slider modificatorStyles='slider--services slider--margin-bottom slider--text-paddings'
        title='Собери свой тариф!'
        description='Будь первым! Собери свой тариф без переплат'
        />
        <CurrentPathInfo />
        </>
    ))

}

export default TariffConsructor;