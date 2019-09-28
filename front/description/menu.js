import {
    MAIN,
    MENU_TYPE_ELEMENT,
    MENU_SERVICES,
    MENU_TYPE_BOARD,
    LEGAL_SERVICES,
    // LEGAL_SERVICES_TEXT,
    INDIVIDUAL_SERVICES,
    ADDITION_SERVICES,
    CONTACTS,
} from '../consts/generalConsts';

const MenuDescription = [
    {
        name: MAIN,
        icon: 'home',
        caption: 'menu.main',
        menuType: MENU_TYPE_ELEMENT,
    },
    {
        name: MENU_SERVICES,
        icon: 'home',
        caption: 'menu.board',
        menuType: MENU_TYPE_BOARD,
        services: [
            {
                name: LEGAL_SERVICES,
                caption: 'Для юридических лиц',
                text: 'Some very interesting text. And it is about services that we have.',
                image: 'image',
            },
            {
                name: INDIVIDUAL_SERVICES,
                caption: 'Для физических лиц',
                text: 'Some very interesting text. And it is about services that we have.',
                image: 'image',
            },
            {
                name: ADDITION_SERVICES,
                caption: 'Дополнительные',
                text: 'Some very interesting text. And it is about services that we have.',
                image: 'image',
            },
        ],
    },
    {
        name: CONTACTS,
        icon: 'home',
        caption: 'menu.contacts',
        menuType: MENU_TYPE_ELEMENT,
    },
];

export default MenuDescription;
