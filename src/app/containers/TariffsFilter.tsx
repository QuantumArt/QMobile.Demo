import React,{ FC, useEffect } from 'react';
import tariffsStore from '../../stores/tariffs/tariffs-store';
import TariffsFilterBtn from '../components/TariffsFilterBtn';
import { BootState } from '../enums/boot-state';


type Props = {
    bootState: BootState
}

const TariffsFilter: FC<Props> = ({bootState}) => {

    useEffect(() => {
        console.log(bootState)
    })


    return (
    bootState === BootState.Loading ? 
    <p>Loading</p> 
    :
    <ul className='tariffs-filter-list'>
        {tariffsStore.filtersGroups.map(({alias, name}) => (
         <li key={alias} className="tariffs-filter-list__item">
            <TariffsFilterBtn name={name}/>
        </li>))}
    </ul>
    )
}

export default TariffsFilter;
