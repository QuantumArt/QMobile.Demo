import React,{ FC, useEffect } from 'react';
import TariffsFilter from './TariffsFilter';
import { useObserver } from 'mobx-react-lite';
import tariffsStore from '../../stores/tariffs/tariffs-store';



const TariffsPageContent: FC = () => {

    useEffect(() => {
        tariffsStore.init();
    }, [])

    return useObserver(() => (
    <div className='tariffs-page-content'>
        <div className='flex-wrapper'>
            <div className='tariffs-filter-wrapper'>
                <p className='page-content-title page-content-title--tariffs-filter'>Тарифы</p>
                <TariffsFilter bootState={tariffsStore.bootState} />
                </div>
        </div>
    </div>)
)
}

export default TariffsPageContent;
