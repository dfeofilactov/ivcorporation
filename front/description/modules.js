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
        services: [
            {
                name: 'test',
                text: 'Лондон является столицей Великобританией. А мы являемся лучшими юристами и адвокатами в Украине',
                caption: 'caption',
                image: 'https://rijelq.db.files.1drv.com/y4mjRNbn1PHxxsQ_xmQQd6ngsP8kiv9gDGe20CioRIO-imDj_t7SG6c2v9n4Iojccyr3zAVrwXi_IKpx6sTT8ZZCR90fVjf_8B8EdVW3ns3xZnSAmTNndAGm8HJE5CTiZx08y_bchwGOdPbBJOhXYIr-atq9lAvi8wEbhvyjkRuFr5jv99-etMT60Ig6zv_JqK8B33RFt2apBlNUmDpRZ3sFA?width=1440&height=702&cropmode=none',
            },
            {
                name: 'test',
                text: 'Лондон является столицей Великобританией. А мы являемся лучшими юристами и адвокатами в Украине',
                caption: 'caption',
                image: 'https://rijelq.db.files.1drv.com/y4mjRNbn1PHxxsQ_xmQQd6ngsP8kiv9gDGe20CioRIO-imDj_t7SG6c2v9n4Iojccyr3zAVrwXi_IKpx6sTT8ZZCR90fVjf_8B8EdVW3ns3xZnSAmTNndAGm8HJE5CTiZx08y_bchwGOdPbBJOhXYIr-atq9lAvi8wEbhvyjkRuFr5jv99-etMT60Ig6zv_JqK8B33RFt2apBlNUmDpRZ3sFA?width=1440&height=702&cropmode=none',
            },
            {
                name: 'test',
                text: 'Лондон является столицей Великобританией. А мы являемся лучшими юристами и адвокатами в Украине',
                caption: 'caption',
                image: 'https://rijelq.db.files.1drv.com/y4mjRNbn1PHxxsQ_xmQQd6ngsP8kiv9gDGe20CioRIO-imDj_t7SG6c2v9n4Iojccyr3zAVrwXi_IKpx6sTT8ZZCR90fVjf_8B8EdVW3ns3xZnSAmTNndAGm8HJE5CTiZx08y_bchwGOdPbBJOhXYIr-atq9lAvi8wEbhvyjkRuFr5jv99-etMT60Ig6zv_JqK8B33RFt2apBlNUmDpRZ3sFA?width=1440&height=702&cropmode=none',
            },
            {
                name: 'test',
                text: 'Лондон является столицей Великобританией. А мы являемся лучшими юристами и адвокатами в Украине',
                caption: 'caption',
                image: 'https://rijelq.db.files.1drv.com/y4mjRNbn1PHxxsQ_xmQQd6ngsP8kiv9gDGe20CioRIO-imDj_t7SG6c2v9n4Iojccyr3zAVrwXi_IKpx6sTT8ZZCR90fVjf_8B8EdVW3ns3xZnSAmTNndAGm8HJE5CTiZx08y_bchwGOdPbBJOhXYIr-atq9lAvi8wEbhvyjkRuFr5jv99-etMT60Ig6zv_JqK8B33RFt2apBlNUmDpRZ3sFA?width=1440&height=702&cropmode=none',
            },
            {
                name: 'test',
                text: 'Лондон является столицей Великобританией. А мы являемся лучшими юристами и адвокатами в Украине',
                caption: 'caption',
                image: 'https://rijelq.db.files.1drv.com/y4mjRNbn1PHxxsQ_xmQQd6ngsP8kiv9gDGe20CioRIO-imDj_t7SG6c2v9n4Iojccyr3zAVrwXi_IKpx6sTT8ZZCR90fVjf_8B8EdVW3ns3xZnSAmTNndAGm8HJE5CTiZx08y_bchwGOdPbBJOhXYIr-atq9lAvi8wEbhvyjkRuFr5jv99-etMT60Ig6zv_JqK8B33RFt2apBlNUmDpRZ3sFA?width=1440&height=702&cropmode=none',
            },
            {
                name: 'denis',
                text: 'Лондон является столицей Великобританией. А мы являемся лучшими юристами и адвокатами в Украине',
                caption: 'caption',
                image: 'https://rijelq.db.files.1drv.com/y4mjRNbn1PHxxsQ_xmQQd6ngsP8kiv9gDGe20CioRIO-imDj_t7SG6c2v9n4Iojccyr3zAVrwXi_IKpx6sTT8ZZCR90fVjf_8B8EdVW3ns3xZnSAmTNndAGm8HJE5CTiZx08y_bchwGOdPbBJOhXYIr-atq9lAvi8wEbhvyjkRuFr5jv99-etMT60Ig6zv_JqK8B33RFt2apBlNUmDpRZ3sFA?width=1440&height=702&cropmode=none',
            },
            {
                name: 'sasha',
                text: 'Лондон является столицей Великобританией. А мы являемся лучшими юристами и адвокатами в Украине',
                caption: 'caption',
                image: 'https://rijelq.db.files.1drv.com/y4mjRNbn1PHxxsQ_xmQQd6ngsP8kiv9gDGe20CioRIO-imDj_t7SG6c2v9n4Iojccyr3zAVrwXi_IKpx6sTT8ZZCR90fVjf_8B8EdVW3ns3xZnSAmTNndAGm8HJE5CTiZx08y_bchwGOdPbBJOhXYIr-atq9lAvi8wEbhvyjkRuFr5jv99-etMT60Ig6zv_JqK8B33RFt2apBlNUmDpRZ3sFA?width=1440&height=702&cropmode=none',
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
        slogan: 'individual_services.slogan',
        isDark: false,
        services: [
            {
                name: 'test',
                text: 'Лондон является столицей Великобританией. А мы являемся лучшими юристами и адвокатами в Украине',
                caption: 'caption',
                image: 'https://pylfcq.db.files.1drv.com/y4mUXCzc0GtSGLYf0j9aGM5DbhlMaGLWRT5bUokI479xBk0BjQVMP-ec5S4AwhRTlTSjAnkUs5g7kpLZDeNbsg9WgSp8uk0YxprpiO_4dD_1aEDISxbO3R7mmosTOTPfVAMPlbWUaQqGwwgFD3ToYUXZFWn0oq0iK5KTxqMWuNdkgGDYpY1z4ZtSk-r8bfRw2tBVYs7HjaWBd_JNyUI6s2vyQ?width=1024&height=683&cropmode=none',
            },
            {
                name: 'test2',
                text: 'Лондон является столицей Великобританией. А мы являемся лучшими юристами и адвокатами в Украине',
                caption: 'caption2',
                image: 'https://pylfcq.db.files.1drv.com/y4mUXCzc0GtSGLYf0j9aGM5DbhlMaGLWRT5bUokI479xBk0BjQVMP-ec5S4AwhRTlTSjAnkUs5g7kpLZDeNbsg9WgSp8uk0YxprpiO_4dD_1aEDISxbO3R7mmosTOTPfVAMPlbWUaQqGwwgFD3ToYUXZFWn0oq0iK5KTxqMWuNdkgGDYpY1z4ZtSk-r8bfRw2tBVYs7HjaWBd_JNyUI6s2vyQ?width=1024&height=683&cropmode=none',
            },
            {
                name: 'test2',
                text: 'Лондон является столицей Великобританией. А мы являемся лучшими юристами и адвокатами в Украине',
                caption: 'caption2',
                image: 'https://pylfcq.db.files.1drv.com/y4mUXCzc0GtSGLYf0j9aGM5DbhlMaGLWRT5bUokI479xBk0BjQVMP-ec5S4AwhRTlTSjAnkUs5g7kpLZDeNbsg9WgSp8uk0YxprpiO_4dD_1aEDISxbO3R7mmosTOTPfVAMPlbWUaQqGwwgFD3ToYUXZFWn0oq0iK5KTxqMWuNdkgGDYpY1z4ZtSk-r8bfRw2tBVYs7HjaWBd_JNyUI6s2vyQ?width=1024&height=683&cropmode=none',
            },
            {
                name: 'test2',
                text: 'Лондон является столицей Великобританией. А мы являемся лучшими юристами и адвокатами в Украине',
                caption: 'caption2',
                image: 'https://pylfcq.db.files.1drv.com/y4mUXCzc0GtSGLYf0j9aGM5DbhlMaGLWRT5bUokI479xBk0BjQVMP-ec5S4AwhRTlTSjAnkUs5g7kpLZDeNbsg9WgSp8uk0YxprpiO_4dD_1aEDISxbO3R7mmosTOTPfVAMPlbWUaQqGwwgFD3ToYUXZFWn0oq0iK5KTxqMWuNdkgGDYpY1z4ZtSk-r8bfRw2tBVYs7HjaWBd_JNyUI6s2vyQ?width=1024&height=683&cropmode=none',
            },
            {
                name: 'test2',
                text: 'Лондон является столицей Великобританией. А мы являемся лучшими юристами и адвокатами в Украине',
                caption: 'caption2',
                image: 'https://pylfcq.db.files.1drv.com/y4mUXCzc0GtSGLYf0j9aGM5DbhlMaGLWRT5bUokI479xBk0BjQVMP-ec5S4AwhRTlTSjAnkUs5g7kpLZDeNbsg9WgSp8uk0YxprpiO_4dD_1aEDISxbO3R7mmosTOTPfVAMPlbWUaQqGwwgFD3ToYUXZFWn0oq0iK5KTxqMWuNdkgGDYpY1z4ZtSk-r8bfRw2tBVYs7HjaWBd_JNyUI6s2vyQ?width=1024&height=683&cropmode=none',
            },
            {
                name: 'test2',
                text: 'Лондон является столицей Великобританией. А мы являемся лучшими юристами и адвокатами в Украине',
                caption: 'caption2',
                image: 'https://pylfcq.db.files.1drv.com/y4mUXCzc0GtSGLYf0j9aGM5DbhlMaGLWRT5bUokI479xBk0BjQVMP-ec5S4AwhRTlTSjAnkUs5g7kpLZDeNbsg9WgSp8uk0YxprpiO_4dD_1aEDISxbO3R7mmosTOTPfVAMPlbWUaQqGwwgFD3ToYUXZFWn0oq0iK5KTxqMWuNdkgGDYpY1z4ZtSk-r8bfRw2tBVYs7HjaWBd_JNyUI6s2vyQ?width=1024&height=683&cropmode=none',
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
        slogan: 'addition_services.slogan',
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
