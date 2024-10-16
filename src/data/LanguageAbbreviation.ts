export enum LanguageAbbreviation {
	EN = "en",
	DE = "de",
}

export enum LanguageNames {
	EN = "English",
	DE = "Deutsch",
}

const languageValuesArray = Object.values(LanguageAbbreviation);
const languageNamesArray = Object.values(LanguageNames);

export const languages: { value: string; title: string }[] = [
	{ value: languageValuesArray[0], title: languageNamesArray[0] },
	{ value: languageValuesArray[1], title: languageNamesArray[1] },
];
