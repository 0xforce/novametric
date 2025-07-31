import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

export const locales = ['', 'en', 'en-US', 'es'];
export const localeNames = {
	en: '🇺🇸 English',
	es: '🇪🇸 Español'
};
export const defaultLocale = 'en';

// If you wish to automatically redirect users to a URL that matches their browser's language setting,
// you can use the `getLocale` to get the browser's language.
export function getLocale(headers) {
	let languages = new Negotiator({ headers }).languages();

	return match(languages, locales, defaultLocale);
}

const dictionaries = {
	en: () => import('@/locales/en.json').then((module) => module.default),
	es: () => import('@/locales/es.json').then((module) => module.default)
};

export const getDictionary = async (locale) => {
	if (!Object.keys(dictionaries).includes(locale)) {
		locale = 'en';
	}

	return dictionaries[locale]();
};
