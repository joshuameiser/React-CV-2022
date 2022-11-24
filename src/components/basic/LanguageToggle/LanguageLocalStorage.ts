import { LanguageAbbreviation } from "./../../../data/LanguageAbbreviation";
import { LocalStorageKey } from "./LocalStorageKey";

export const setLanguage = (language: LanguageAbbreviation): void => {
	localStorage.setItem(LocalStorageKey.LANGUAGE, language);
};

export const getLanguage = (): string | undefined => {
	const languageString = localStorage.getItem(LocalStorageKey.LANGUAGE);

	if (!languageString) {
		return undefined;
	}

	return languageString;
};
