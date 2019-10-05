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
        slogan: 'legal_services.slogan',
        isDark: true,
    },
    {
        name: INDIVIDUAL_SERVICES,
        type: SERVICE_TYPE,
        serviceType: SERVICE_TYPE_GENERAL,
        path: '',
        icon: 'home',
        caption: 'modules.individual_services',
        slogan: 'individual_services.slogan',
        isDark: false,
    },
    {
        name: ADDITION_SERVICES,
        type: SERVICE_TYPE,
        serviceType: SERVICE_TYPE_ADDITIONAL,
        path: '',
        icon: 'home',
        caption: 'modules.addition_services',
        slogan: 'addition_services.slogan',
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
