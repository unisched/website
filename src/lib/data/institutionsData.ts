import commonUrls from '$lib/data/commonUrls';
import LvivUniversity from '$lib/assets/institutions/lviv_university.png';
import PolissiaUniversity from '$lib/assets/institutions/polissia_university.png';
import PoltavaNPUniversity from '$lib/assets/institutions/poltava_np_university.png';
import LVIVDUBGDUniversity from '$lib/assets/institutions/lviv_dubgd_university.png';
import KharkivKarazinaUniversity from '$lib/assets/institutions/kharkiv_karazin_university.png';
import AddUniversity from '$lib/assets/institutions/add_university.png';

const institutionsData = [
    {
        name: 'Львівський національний університет імені Івана Франка',
        logo: LvivUniversity,
        link: 'https://lnu.edu.ua/'
    },
    {
        name: 'Поліський національний університет',
        logo: PolissiaUniversity,
        link: 'https://polissiauniver.edu.ua/'
    },
    {
        name: 'Полтавський національний педагогічний університет імені В.Г. Короленка',
        logo: PoltavaNPUniversity,
        link: 'https://pnpu.edu.ua/'
    },
    {
        name: 'Львівський державний університет безпеки життєдіяльності ',
        logo: LVIVDUBGDUniversity,
        link: 'https://ldubgd.edu.ua/'
    },
    {
        name: 'Харківський національний університет імені В. Н. Каразіна',
        logo: KharkivKarazinaUniversity,
        link: 'https://karazin.ua/'
    },
    {
        name: 'Підключіть ваш заклад освіти',
        logo: AddUniversity,
        link: commonUrls.support.helpForInstitutions
    }
];

export default {
    institutions: institutionsData,
    institutionsCount: institutionsData.length - 1
}
