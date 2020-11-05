import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import zhTW from './lang/zh-TW';
import zhCN from './lang/zh-CN';
import enUS from './lang/en-US';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
    'zh-TW': {
        translation: zhTW,
    },
    'zh-CN': {
        translation: zhCN,
    },
    'en-US': {
        translation: enUS,
    },
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: 'zh-TW', // 預設語言
        fallbackLng: 'zh-TW', // 當目前的語言檔找不到對應的字詞時，會用 fallbackLng (zh-TW) 作為預設語言
        interpolation: {
            escapeValue: false, // 是否要讓字詞 escaped 來防止 xss 攻擊，這裡因為 React.js 已經做了，就設成 false即可
        },
    });

export default i18n;
