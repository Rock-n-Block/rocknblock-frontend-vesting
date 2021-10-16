export interface Cards {
    source: string;
    title: string;
    text: string;
}

export interface CaseStudiesDropdownI {
    key: number;
    name: string;
    title: string;
    images: string[];
    description: string | JSX.Element;
    features: string[];
    stacks: string[];
}

export interface FeedbackCard {
    title: string;
    desc: string;
    imgClient: string;
    imgLogo: string;
    altClient: string;
    altLogo: string;
    twitter: string;
}

export interface InfoI {
    title: string;
    text: string;
}

export interface ContactsI {
    name: string;
    content: string;
}

export interface ContactUsProps {
    title: string;
    subtitle?: string;
}

export interface FooterLinksI {
    name: string;
    href: string;
    fullName: string;
}

export interface NavPages {
    title: string;
    href: string;
}

export interface OurPartnersAchievementsI {
    src: string;
    url: string;
}

export interface TeamI {
    dev: DevI[];
    mng: MngI[];
}

export interface DevI {
    img: string;
    post: string;
    name: string;
    skills: string[];
    stacks: string[];
}

export interface MngI {
    img: string;
    name: string;
    post: string;
}

export interface OverviewI {
    number: number;
    primary: string;
}

export interface WhatWeDoBestCardsI {
    source: string;
    alt: string;
    text: string;
}

export interface WhyUsCardsI {
    number: string;
    units: string;
    text: string;
}

export interface OtherSitesI {
    img: string;
    alt: string;
    title: string;
    href: string;
}

