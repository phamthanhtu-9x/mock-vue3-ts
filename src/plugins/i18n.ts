import { createI18n } from "vue-i18n";
import messages from '@/locales';

const i18n = createI18n({
  legacy: false,
  locale: 'en', // set the default locale
  messages,
});

export default i18n;