import {FunctionalComponent, h} from 'preact';
import {useCallback, useEffect, useState} from 'preact/hooks';

import {
    ContactUs,
    UpButton,
    TelegramWidget
} from "../../components";

import { BuildToken,
    Businesses,
    CustomSmartContract,
    HomePageSites,
    LongTerms,
    SmartContract,
    TokenOptions,
    WhatGives,
    WhatMean
} from './components';

const HomePage: FunctionalComponent = () => {
    const [isActive, setIsActive] = useState(false);

    const logIt = useCallback(() => {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [])

    useEffect(() => {

        window.addEventListener("scroll", logIt);

        return (): void => {
            window.removeEventListener("scroll", logIt);
        };
    }, [logIt]);

    return (
        <div>
            <TelegramWidget />
            {isActive ? <UpButton /> : null}
            <BuildToken />
            <WhatMean />
            <TokenOptions />
            <Businesses />
            <WhatGives />
            <LongTerms />
            <SmartContract />
            <CustomSmartContract />
            <HomePageSites />
            <ContactUs title={'Estimate your project now!'}
                       subtitle={'Get free consultation and build your blockchain project with our highly qualified team!'} />
        </div>
    )
}

export default HomePage;
