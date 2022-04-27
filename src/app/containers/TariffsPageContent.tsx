import React,{ FC, useEffect } from 'react';
import TariffsFilter from './TariffsFilter';
import { useObserver } from 'mobx-react-lite';
import tariffsStore from '../../stores/tariffs/tariffs-store';
import TariffSearch from '../components/tariffs-search';
import MakeTariffBtn from '../components/make-tariff-btn';



const TariffsPageContent: FC = () => {

    useEffect(() => {
        tariffsStore.init();
    }, [])

    return useObserver(() => (
    <div className='tariffs-page-content'>
        <div className='flex-wrapper'>
            <div className='tariffs-filter-wrapper'>
                <p className='page-content-title page-content-title--tariffs-filter'>Тарифы</p>
                <TariffsFilter bootState={tariffsStore.bootState} activeFilter={tariffsStore.selectedFilter} />
            </div>
            <div className='tariffs-container'>
                <div className='tariffs-container-header'>
                    <TariffSearch />
                    <MakeTariffBtn />
                </div>
            </div>
        </div>
    </div>)
)
}

export default TariffsPageContent;
