import AddUniversity from '$lib/assets/institutions/add_university.png';
import commonUrls from '$lib/data/commonUrls';
import KharkivKarazinaUniversity from '$lib/assets/institutions/kharkiv_karazin_university.png';
import LvivDUBGDUniversity from '$lib/assets/institutions/lviv_dubgd_university.png';
import LvivUNFUniversity from '$lib/assets/institutions/lviv_unf_university.png';
import PolissiaUniversity from '$lib/assets/institutions/polissia_university.png';
import PoltavaNPUniversity from '$lib/assets/institutions/poltava_np_university.png';

const institutionsData = [
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
        name: 'Національний лісотехнічний університет України',
        logo: LvivUNFUniversity,
        link: 'https://nltu.edu.ua/'
    },
    {
        name: 'Львівський державний університет безпеки життєдіяльності ',
        logo: LvivDUBGDUniversity,
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
