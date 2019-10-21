import {
    LEGAL_SERVICES, INDIVIDUAL_SERVICES, ADDITION_SERVICES,
    //
} from '../consts/generalConsts';
import images from './images';
import { DISPUTS_SERVICES, TAX_SERVICES, BUSINESS_SERVICES, WORK_SERVICES, ECO_SERVICES, CUSTOMS_SERVICES, BANK_SERVICES, EMPLOY_SERVICES, INSURANCE_SERVICES, SOIL_SERVICES, LEGACY_SERVICES, HOME_SERVICES, HUMAN_SERVICES } from '../consts/servicesNames';

const ServicesDescription = {
    [LEGAL_SERVICES]: {
        caption: 'modules.legal',
        services: [
            {
                name: CUSTOMS_SERVICES,
                text: 'texts.legal.customs',
                caption: 'legal.customs',
                image: images.get(CUSTOMS_SERVICES),
            },
            {
                name: ECO_SERVICES,
                text: 'texts.legal.eco',
                caption: 'legal.eco',
                image: images.get(ECO_SERVICES),
            },
            {
                name: WORK_SERVICES,
                text: 'texts.legal.work',
                caption: 'legal.work',
                image: images.get(WORK_SERVICES),
            },
            {
                name: BUSINESS_SERVICES,
                text: 'texts.legal.business',
                caption: 'legal.business',
                image: images.get(BUSINESS_SERVICES),
            },
            {
                name: TAX_SERVICES,
                text: 'texts.legal.tax',
                caption: 'legal.tax',
                image: images.get(TAX_SERVICES),
            },
            {
                name: DISPUTS_SERVICES,
                text: 'texts.legal.disputs',
                caption: 'legal.disputs',
                image: images.get(DISPUTS_SERVICES),
            },
        ],
    },
    [INDIVIDUAL_SERVICES]: {
        caption: 'modules.individual',
        services: [
            {
                name: BANK_SERVICES,
                text: 'texts.individual.bank',
                caption: 'individual.bank',
                image: images.get(BANK_SERVICES),
            },
            {
                name: EMPLOY_SERVICES,
                text: 'texts.individual.employ',
                caption: 'individual.employ',
                image: images.get(EMPLOY_SERVICES),
            },
            {
                name: INSURANCE_SERVICES,
                text: 'texts.individual.insurance',
                caption: 'individual.insurance',
                image: images.get(INSURANCE_SERVICES),
            },
            {
                name: SOIL_SERVICES,
                text: 'texts.individual.soil',
                caption: 'individual.soil',
                image: images.get(SOIL_SERVICES),
            },
            {
                name: LEGACY_SERVICES,
                text: 'texts.individual.legacy',
                caption: 'individual.legacy',
                image: images.get(LEGACY_SERVICES),
            },
            {
                name: HOME_SERVICES,
                text: 'texts.individual.home',
                caption: 'individual.home',
                image: images.get(HOME_SERVICES),
            },
            {
                name: HUMAN_SERVICES,
                text: 'texts.individual.human',
                caption: 'individual.human',
                image: images.get(HUMAN_SERVICES),
            },
        ],
    },
    [ADDITION_SERVICES]: {
        caption: 'modules.additional',
        services: [
            {
                name: 'test',
                caption: 'Реєстрація підприємств/ФОП',
                icon: 'business_center',
                text: 'Лондон является столицей Великобританией. А мы являемся лучшими юристами и адвокатами в Украине',
                info: 'Лондон является столицей Великобританией. А мы являемся лучшими юристами и адвокатами в Украине',
            },
            {
                name: 'test2',
                caption: 'Реєстрація авторських прав',
                icon: 'album',
                text: 'Лондон является столицей Великобританией. А мы являемся лучшими юристами и адвокатами в Украине',
                info: 'Лондон является столицей Великобританией. А мы являемся лучшими юристами и адвокатами в Украине',
            },
            {
                name: 'test2',
                caption: 'Реєстрація торгової марки',
                icon: 'shopping_cart',
                text: 'Лондон является столицей Великобританией. А мы являемся лучшими юристами и адвокатами в Украине',
                info: 'Лондон является столицей Великобританией. А мы являемся лучшими юристами и адвокатами в Украине',
            },
        ],
    },
};

export default ServicesDescription;
