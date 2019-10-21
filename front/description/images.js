import {
    CUSTOMS_SERVICES,
    ECO_SERVICES,
    WORK_SERVICES,
    BUSINESS_SERVICES,
    TAX_SERVICES,
    DISPUTS_SERVICES,
    BANK_SERVICES,
    EMPLOY_SERVICES,
    INSURANCE_SERVICES,
    SOIL_SERVICES,
    LEGACY_SERVICES,
    HOME_SERVICES,
    HUMAN_SERVICES,
} from '../consts/servicesNames';

const urls = {
    [CUSTOMS_SERVICES]:
        'https://firebasestorage.googleapis.com/v0/b/ivcorporation-5c7f2.appspot.com/o/images%2Fcustoms2.jpg?alt=media&token=32dcbf01-b1a4-4b5b-997b-5962b8371bd4',
    [ECO_SERVICES]:
        'https://firebasestorage.googleapis.com/v0/b/ivcorporation-5c7f2.appspot.com/o/images%2Fecology2.jpg?alt=media&token=40b53927-93cf-42c0-9362-cf9821e85ab8',
    [WORK_SERVICES]:
        'https://firebasestorage.googleapis.com/v0/b/ivcorporation-5c7f2.appspot.com/o/images%2Fwork1.jpg?alt=media&token=06dc609e-ad48-44e8-b2ae-c6f4c2509fc9',
    [BUSINESS_SERVICES]:
        'https://firebasestorage.googleapis.com/v0/b/ivcorporation-5c7f2.appspot.com/o/images%2Fbusiness.jpg?alt=media&token=6eca6264-e7f6-4c30-a24b-da13b76b2ffd',
    [TAX_SERVICES]:
        'https://firebasestorage.googleapis.com/v0/b/ivcorporation-5c7f2.appspot.com/o/images%2Ftax.jpg?alt=media&token=26d7c166-e655-42b4-ad9a-9cea9ed7a9ec',
    [DISPUTS_SERVICES]:
        'https://firebasestorage.googleapis.com/v0/b/ivcorporation-5c7f2.appspot.com/o/images%2Fwork2.jpg?alt=media&token=c42dcf72-473b-497f-bd44-a9261cae0fff',
    //
    // Individual services
    //
    [BANK_SERVICES]:
        'https://firebasestorage.googleapis.com/v0/b/ivcorporation-5c7f2.appspot.com/o/images%2Fbank3.jpg?alt=media&token=5e59948e-10be-4908-94a5-0b81b7e40a14',
    [EMPLOY_SERVICES]:
        'https://firebasestorage.googleapis.com/v0/b/ivcorporation-5c7f2.appspot.com/o/images%2Fwork3.jpg?alt=media&token=03d3dd9c-4737-4d46-a551-284195590b78',
    [INSURANCE_SERVICES]:
        'https://firebasestorage.googleapis.com/v0/b/ivcorporation-5c7f2.appspot.com/o/images%2Finsurance1.jpg?alt=media&token=cc6e971d-cd34-4ea5-be33-a57bb3aa3bba',
    [SOIL_SERVICES]:
        'https://firebasestorage.googleapis.com/v0/b/ivcorporation-5c7f2.appspot.com/o/images%2Fhousehold.jpg?alt=media&token=b79c194c-f94f-4441-82e8-51a80f1c1067',
    [LEGACY_SERVICES]:
        'https://firebasestorage.googleapis.com/v0/b/ivcorporation-5c7f2.appspot.com/o/images%2Flegacy3.png?alt=media&token=90d629dd-572f-4f84-a0ed-665dd97cb00b',
    [HOME_SERVICES]:
        'https://firebasestorage.googleapis.com/v0/b/ivcorporation-5c7f2.appspot.com/o/images%2Fhome1.jpg?alt=media&token=4137adf3-3081-4708-ae3b-b85476cbb1dc',
    [HUMAN_SERVICES]:
        'https://firebasestorage.googleapis.com/v0/b/ivcorporation-5c7f2.appspot.com/o/images%2Fhuman2.jpg?alt=media&token=9f717e90-d6ae-419c-9566-6e7ca0390f73',
};

export default (() => {
    const get = (name) => {
        return _.get(urls, name);
    };

    return {
        get,
    };
})();
