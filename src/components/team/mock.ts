import {OverviewI, TeamI} from "../../types";

export const team: TeamI = {
    dev: [
        {
            img: 'dev-1',
            post: 'Backend Team Lead',
            name: 'Maksim Strenk',
            skills: [
                'Development experience 6 years, in blockchain 4 years',
                'MyWish Backend (4 years)',
                'Implementation of UTREEXO and HTLC for the Bitcoin network',
                'Made the current Ducatus Exchange',
                'Experienced in deploying and syncing Ethereum and Bitcoin full nodes'
            ],
            stacks: [
                'Python',
                'Solidity',
                'JavaScript',
                'C',
                'OpenZeppelin',
                'GSN',
                'NPM',
                'Docker Hub',
                'Gunicorn',
                'Supervisord',
                'PyPi',
                'USWSGI',
                'PostgreSQL',
                'MongoDB'
            ]
        },
        {
            img: 'dev-2',
            post: 'Blockchain Team Lead',
            name: 'Rita Tsepeleva',
            skills: [
                'smart contract development collaterized stable coin',
                'Anonymizer powered by ZK proof',
                'development of OTC exchange',
                'yeild-farming / staking contracts development'
            ],
            stacks: [
                'Solidity',
                'OpenZeppelin',
                'Truffle',
                'npm',
                'C++',
                'web3'
            ]
        },
        {
            img: 'dev-3',
            post: 'Frontend Team Lead',
            name: 'Nikita Sireishikov',
            skills: [
                'manual compilation of transactions to send for Bitcoin and Ethereum networks on node.js',
                'development of nodes for interacting with the blockchain on node.js',
                'development of web-wallets in Angular',
                'frontend development for interacting with smart contracts through the backend',
            ],
            stacks: [
                'Express',
                'Apollo',
                'TypeScript',
                'GraphQL',
                'Angular',
                'Vue',
                'JS',
                'MobX',
                'NodeJS',
                'Vuex',
                'iOS Developing (Swiftui)',
                'web3'
            ]
        },
    ],
    mng: [
        {
            img: 'mng-1',
            name: 'Dmitry Ershov',
            post: 'CEO'
        },
        {
            img: 'mng-2',
            name: 'Alex Tkachev',
            post: 'CBDO'
        },
        {
            img: 'mng-3',
            name: 'Olya Kulakova',
            post: 'CMO'
        },
    ]
};

export const overview: OverviewI[] = [
    {
        number: 23,
        primary: 'Backend team',
    },
    {
        number: 27,
        primary: 'Frontend team',
    },
    {
        number: 19,
        primary: 'Smart Contracts team',
    },
    {
        number: 13,
        primary: 'Project managers',
    },
    {
        number: 5,
        primary: 'Designers',
    },
    {
        number: 3,
        primary: 'Analysts',
    }
];

export const tabs: string[] = ['Development', 'Management'];