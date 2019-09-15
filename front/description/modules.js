import {
    MAIN,
    MODULE_TYPE_DARK,
    LEGAL_SERVICES,
    INDIVIDUAL_SERVICES,
    ADDITION_SERVICES,
    CONTACTS,
    SERVICE_TYPE,
    SERVICE_TYPE_ADDITIONAL,
    SERVICE_TYPE_GENERAL,
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
        serviceType: SERVICE_TYPE_GENERAL,
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
            {
                name: 'denis',
                text: 'Лондон является столицей Великобританией. А мы являемся лучшими юристами и адвокатами в Украине',
                caption: 'caption',
            },
            {
                name: 'sasha',
                text: 'Лондон является столицей Великобританией. А мы являемся лучшими юристами и адвокатами в Украине',
                caption: 'caption',
            },
        ],
    },
    {
        name: INDIVIDUAL_SERVICES,
        type: SERVICE_TYPE,
        serviceType: SERVICE_TYPE_GENERAL,
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
        type: SERVICE_TYPE,
        serviceType: SERVICE_TYPE_ADDITIONAL,
        path: '',
        icon: 'home',
        caption: 'modules.addition_services',
        fullCaption: 'modules.addition_services_full',
        services: [
            {
                name: 'test',
                caption: 'Реєстрація підприємств/ФОП',
                icon: 'business_center',
            },
            {
                name: 'test2',
                caption: 'Реєстрація авторських прав',
                icon: 'album',
            },
            {
                name: 'test2',
                caption: 'Реєстрація торгової марки',
                icon: 'shopping_cart',
            },
        ],
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
