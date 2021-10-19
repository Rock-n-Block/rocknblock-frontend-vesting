import {FunctionalComponent, h} from 'preact';
import {Router} from 'preact-router';

import * as smoothscroll from 'smoothscroll-polyfill';

import Header from './header';
import Footer from './footer';
import HomePage from "../pages/Home";
import ThanksPage from '../pages/Thanks';
import PrivacyPolicyPage from '../pages/PrivacyPolicy';
import TermsPage from '../pages/Terms';
import CompanyPage from '../pages/Company';
import { useState } from 'preact/hooks';
import { PopupPreloader } from '.';


if (typeof window !== "undefined") smoothscroll.polyfill();

const App: FunctionalComponent = () => {
    const [showPreloader, setShowPreloader] = useState(true);


    return (
        <div id="preact_root">
            {showPreloader ? <PopupPreloader showPreloader={showPreloader} setShowPreloader={setShowPreloader} /> : null}
            <Header />
            <Router>
                <HomePage path='/' />
                <ThanksPage path='/calendly' />
                <PrivacyPolicyPage path='/privacy-policy' />
                <TermsPage path='/terms-of-service' />
                <CompanyPage path='/company' />
            </Router>
            <Footer />
        </div>
    )
};

export default App;
