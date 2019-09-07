import {
    MAIN,
    MODULE_TYPE_DARK,
    LEGAL_SERVICES,
    INDIVIDUAL_SERVICES,
    ADDITION_SERVICES,
    CONTACTS,
    SERVICE_TYPE,
} from '../consts/generalConsts';

const Modules = [
    {
        name: MAIN,
        type: MODULE_TYPE_DARK,
        path: '',
        icon: 'home',
        caption: 'modules.main',
    },
    {
        name: LEGAL_SERVICES,
        type: SERVICE_TYPE,
        path: '',
        icon: 'home',
        caption: 'modules.legal_services',
        fullCaption: 'modules.legal_services_full',
        isDark: true,
        services: [
            {
                name: 'test',
                text: 'Лондон является столицей Великобританией. А мы являемся лучшими юристами и адвокатами в Украине',
                caption: 'caption',
            },
            {
                name: 'test',
                text: 'Лондон является столицей Великобританией. А мы являемся лучшими юристами и адвокатами в Украине',
                caption: 'caption',
            },
            {
                name: 'test',
                text: 'Лондон является столицей Великобританией. А мы являемся лучшими юристами и адвокатами в Украине',
                caption: 'caption',
            },
            {
                name: 'test',
                text: 'Лондон является столицей Великобританией. А мы являемся лучшими юристами и адвокатами в Украине',
                caption: 'caption',
            },
            {
                name: 'test',
                text: 'Лондон является столицей Великобританией. А мы являемся лучшими юристами и адвокатами в Украине',
                caption: 'caption',
            },
        ],
    },
    {
        name: INDIVIDUAL_SERVICES,
        type: SERVICE_TYPE,
        path: '',
        icon: 'home',
        caption: 'modules.individual_services',
        fullCaption: 'modules.individual_services_full',
        isDark: false,
        services: [
            {
                name: 'test',
                text: 'Лондон является столицей Великобританией. А мы являемся лучшими юристами и адвокатами в Украине',
                caption: 'caption',
            },
            {
                name: 'test2',
                text: 'Лондон является столицей Великобританией. А мы являемся лучшими юристами и адвокатами в Украине',
                caption: 'caption2',
            },
            {
                name: 'test2',
                text: 'Лондон является столицей Великобританией. А мы являемся лучшими юристами и адвокатами в Украине',
                caption: 'caption2',
            },
        ],
    },
    {
        name: ADDITION_SERVICES,
        type: MODULE_TYPE_DARK,
        path: '',
        icon: 'home',
        caption: 'modules.addition_services',
    },
    {
        name: CONTACTS,
        type: MODULE_TYPE_DARK,
        path: '',
        icon: 'home',
        caption: 'modules.contacts',
    },
];

export default Modules;
