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
        caption: 'menu.services',
        menuType: MENU_TYPE_BOARD,
        services: [
            {
                name: LEGAL_SERVICES,
                caption: 'Для юридических лиц',
                text: 'Лондон является столицей Великобританией. А мы являемся лучшими юристами и адвокатами в Украине.',
                imagePrimary: 'https://rijelq.db.files.1drv.com/y4mjRNbn1PHxxsQ_xmQQd6ngsP8kiv9gDGe20CioRIO-imDj_t7SG6c2v9n4Iojccyr3zAVrwXi_IKpx6sTT8ZZCR90fVjf_8B8EdVW3ns3xZnSAmTNndAGm8HJE5CTiZx08y_bchwGOdPbBJOhXYIr-atq9lAvi8wEbhvyjkRuFr5jv99-etMT60Ig6zv_JqK8B33RFt2apBlNUmDpRZ3sFA?width=1440&height=702&cropmode=none',
                imageSecondary: 'https://pylfcq.db.files.1drv.com/y4mUXCzc0GtSGLYf0j9aGM5DbhlMaGLWRT5bUokI479xBk0BjQVMP-ec5S4AwhRTlTSjAnkUs5g7kpLZDeNbsg9WgSp8uk0YxprpiO_4dD_1aEDISxbO3R7mmosTOTPfVAMPlbWUaQqGwwgFD3ToYUXZFWn0oq0iK5KTxqMWuNdkgGDYpY1z4ZtSk-r8bfRw2tBVYs7HjaWBd_JNyUI6s2vyQ?width=1024&height=683&cropmode=none',
            },
            {
                name: INDIVIDUAL_SERVICES,
                caption: 'Для физических лиц',
                text: 'Лондон является столицей Великобританией. А мы являемся лучшими юристами и адвокатами в Украине.',
                imagePrimary: 'https://pylfcq.db.files.1drv.com/y4mUXCzc0GtSGLYf0j9aGM5DbhlMaGLWRT5bUokI479xBk0BjQVMP-ec5S4AwhRTlTSjAnkUs5g7kpLZDeNbsg9WgSp8uk0YxprpiO_4dD_1aEDISxbO3R7mmosTOTPfVAMPlbWUaQqGwwgFD3ToYUXZFWn0oq0iK5KTxqMWuNdkgGDYpY1z4ZtSk-r8bfRw2tBVYs7HjaWBd_JNyUI6s2vyQ?width=1024&height=683&cropmode=none',
                imageSecondary: 'https://rijelq.db.files.1drv.com/y4mjRNbn1PHxxsQ_xmQQd6ngsP8kiv9gDGe20CioRIO-imDj_t7SG6c2v9n4Iojccyr3zAVrwXi_IKpx6sTT8ZZCR90fVjf_8B8EdVW3ns3xZnSAmTNndAGm8HJE5CTiZx08y_bchwGOdPbBJOhXYIr-atq9lAvi8wEbhvyjkRuFr5jv99-etMT60Ig6zv_JqK8B33RFt2apBlNUmDpRZ3sFA?width=1440&height=702&cropmode=none',
            },
            {
                name: ADDITION_SERVICES,
                caption: 'Дополнительные',
                text: 'Лондон является столицей Великобританией. А мы являемся лучшими юристами и адвокатами в Украине.',
                imagePrimary: 'https://pylfcq.db.files.1drv.com/y4mUXCzc0GtSGLYf0j9aGM5DbhlMaGLWRT5bUokI479xBk0BjQVMP-ec5S4AwhRTlTSjAnkUs5g7kpLZDeNbsg9WgSp8uk0YxprpiO_4dD_1aEDISxbO3R7mmosTOTPfVAMPlbWUaQqGwwgFD3ToYUXZFWn0oq0iK5KTxqMWuNdkgGDYpY1z4ZtSk-r8bfRw2tBVYs7HjaWBd_JNyUI6s2vyQ?width=1024&height=683&cropmode=none',
                imageSecondary: 'https://rijelq.db.files.1drv.com/y4mjRNbn1PHxxsQ_xmQQd6ngsP8kiv9gDGe20CioRIO-imDj_t7SG6c2v9n4Iojccyr3zAVrwXi_IKpx6sTT8ZZCR90fVjf_8B8EdVW3ns3xZnSAmTNndAGm8HJE5CTiZx08y_bchwGOdPbBJOhXYIr-atq9lAvi8wEbhvyjkRuFr5jv99-etMT60Ig6zv_JqK8B33RFt2apBlNUmDpRZ3sFA?width=1440&height=702&cropmode=none',
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
