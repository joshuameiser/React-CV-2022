import { useTranslation } from "react-i18next";

export const useContent = () => {
	const { i18n } = useTranslation();

	switch (i18n.language) {
		case "de":
			return contentDe;
		case "en":
			return contentEn;
		default:
			return contentEn;
	}
};

export const contentEn = {
	name: { firstName: "Joshua", lastName: "Meiser" },
	aboutMeTitle: "Who am I?",
	whoAmI: [
		{
			title: "Developer",
			description: [
				"I am a passionate Frontend developer with a clear love for React.",
				"I love creating components, or entire websites, utilizing SCSS or Styled Components and am always excited to find new ways of developing.",
			],
			heart: true,
		},
		{
			title: "Climber",
			description: [
				"After work, my heart primarily beats for climbing, or more specifically for bouldering. I have been doing this sport since the age of 13 and could not imagine a life without it anymore.",
			],
		},
		// TODO: Add a third one to replace my working place
		// {
		// 	title: "Consultant at Aclue",
		// 	description: [
		// 		"I am currently employed at Aclue, working 40 hours each week as a Frontend consultant. Since my start on the 01.03.2022, I have been working on a project for OTTO. The project contains the aiding of the creation, as well as the maintanance and documentation of a design system based on MUI.",
		// 	],
		// },
	],
	Projects: [
		{
			title: "Dorfentwicklung UVP Stelzer - Website",
			websiteLink: "https://dorfentwicklung.regionalplan-uvp.de/",
			sourceCodeLink: "",
		},
	],
	workingExperienceTitle: "Working Experience",
	WorkingExperience: [
		{
			company: "Aclue GmbH",
			position: "Frontend Consultant",
			timeframe: "01.03.2022 - 31.12.2022",
			responsibilities: [
				"Component creation based on MUI",
				"Maintanance on a design system for OTTO",
				"Component documentation with Storybook",
				"Storybook customization and setup",
				"Support for questions regarding the design system",
			],
		},
		{
			company: "FarmAct GmbH",
			position: "Fulltime Intern",
			timeframe: "01.10.2021 - 31.01.2022",
			responsibilities: [
				"Development with React, Typescript, Firebase and Ionic",
			],
		},
		{
			company: "Regionalplan & UVP",
			position: "Working Student Frontend",
			timeframe: "01.03.2021 - 01.10.2021",
			responsibilities: [
				"Creation of the website https://dorfentwicklung.regionalplan-uvp.de",
				"Management of the page and continuous updates",
				"Integration with Netlify CMS to enable their team in making independant content updates",
			],
		},
		{
			company: "JaZuYoga",
			position: "5hrs/week Support",
			timeframe: "01.01.2019 - 01.02.2021",
			responsibilities: [
				"Creation of image templates for Instagram",
				"Research",
				"Video editing with Premiere Pro",
				"Aiding of the transformation of the Yoga center to remote during Corona times",
			],
		},
		{
			company: "SAP",
			position: "Working Student",
			timeframe: "31.07.2017 - 28.02.2018",
			responsibilities: [
				"Creation of infographics",
				"Graphic enhancement of MS PowerPoint slides",
				"Creation of Stencils and Templates in Sketch",
			],
		},
	],
	educationTitle: "Education",
	Education: [
		{
			name: "School Certificate : Abitur",
			location: "Illtal-Gymnasium Illingen",
			timeframe: "August 2007 - June 2015",
		},
		{
			name: "EF Language School",
			location: "San Francisco Down Town, USA (EF-School)",
			timeframe: "September 2015 - July 2016",
		},
		{
			name: "Bachelor of Science",
			location: "International Media & Computing (HTW-Berlin)",
			timeframe: "April 2018 - April 2022",
		},
	],
	experienceAbroadTitle: "Experience Abroad",
	ExperienceAbroad: [
		{
			name: "Cambridge Exam (C1)",
			location: "San Francisco",
			timeframe: "May (CAE2) 2016",
		},
		{
			name: "Advanced Diploma in Online Marketing",
			location: "San Francisco Down Town, USA (EF-School)",
			timeframe: "September 2015 - July 2016",
		},
	],
	myProjectsTitle: "My Projects",
	contactTitle: "Get in touch",
	Contact: {
		entryText: "If you want to get in contact, just send me a mail.",
		socialsText: "You can also find me on GitHub, Instagram and LinkedIn.",
		cv: {
			text: "Or alternatively download my CV",
			action: "here.",
		},
		buttonText: "Do it.",
	},
};

export const contentDe = {
	name: { firstName: "Joshua", lastName: "Meiser" },
	aboutMeTitle: "Wer bin ich?",
	whoAmI: [
		{
			title: "Entwickler",
			description: [
				"Ich bin ein begeisterter Frontend Entwickler mit einer Liebe für React.",
				"Am liebsten erstelle ich Komponenten oder gesamte Webseiten. Dabei nutze ich SCSS oder Styled Components und bin immer auf der Suche nach neuen Entwicklungsmöglichkeiten.",
			],
			heart: true,
		},
		{
			title: "Boulderer",
			description: [
				"Nach der Arbeit schlägt mein Herz primär für den Bouldersport. Mich findet man an der Wand seit ich 13 Jahre alt war und ich kann mir mein Leben entsprechend nicht mehr ohne Bouldern vorstellen.",
			],
		},
		// TODO: Add the translation of the third one that I have yet to add
		// {
		// 	title: "Berater bei Aclue",
		// 	description: [
		// 		"Momentan bin ich bei Aclue als Berater angestellt - mit einem Fokus auf Frontend. Seit dem 01.03.2022 habe ich an einem Projekt für OTTO gearbeitet. Dieses Projekt besteht aus dem Erstellen von neuen Komponenten für das Design System, der Wartung und der Dokumentation von weiteren Elementen basierend auf MUI.",
		// 	],
		// },
	],
	Projects: [
		{
			title: "Dorfentwicklung UVP Stelzer - Webseite",
			websiteLink: "https://dorfentwicklung.regionalplan-uvp.de/",
			sourceCodeLink: "",
		},
	],
	workingExperienceTitle: "Arbeitserfahrung",
	WorkingExperience: [
		{
			company: "Aclue GmbH",
			position: "Frontend Berater",
			timeframe: "01.03.2022 - 31.12.2022",
			responsibilities: [
				"Erstellung von Komponenten basierend auf MUI",
				"Wartung eines Design Systems für OTTO",
				"Dokumentation der erstellten Komponenten durch Storybook",
				"Aufbau und Erweiterung von dem interen Storybook",
				"Support für Fragen bezüglich des Design Systems und der gebauten Komponenten",
			],
		},
		{
			company: "FarmAct GmbH",
			position: "Vollzeit Praktikant",
			timeframe: "01.10.2021 - 31.01.2022",
			responsibilities: [
				"Entwicklung mit React, Typescript, Firebase und Ionic",
			],
		},
		{
			company: "Regionalplan & UVP",
			position: "Werkstudent Frontend",
			timeframe: "01.03.2021 - 01.10.2021",
			responsibilities: [
				"Erstellung der Webseite https://dorfentwicklung.regionalplan-uvp.de",
				"Wartung der Webseite",
				"Integration mit Netlify CMS um dem Team das unabhängige Updaten von Inhalten zu ermöglichen",
			],
		},
		{
			company: "JaZuYoga",
			position: "5hrs/week Unterstützung",
			timeframe: "01.01.2019 - 01.02.2021",
			responsibilities: [
				"Erstellung von Templates für Instagram",
				"Research",
				"Videobearbeitung mit Premiere Pro",
				"Unterstützung der Transformation des Yoga Zentrums in den Remoteunterricht während Corona Zeiten",
			],
		},
		{
			company: "SAP",
			position: "Werkstudent",
			timeframe: "31.07.2017 - 28.02.2018",
			responsibilities: [
				"Erstellung von Infographiken",
				"Graphische Aufarbeitung von MS PowerPoint slides",
				"Erstellung von Stencils und Templates in Sketch",
			],
		},
	],
	educationTitle: "Bildung",
	Education: [
		{
			name: "Schulabschluss : Abitur",
			location: "Illtal-Gymnasium Illingen",
			timeframe: "August 2007 - Juni 2015",
		},
		{
			name: "EF Sprachschule",
			location: "San Francisco Down Town, USA (EF-School)",
			timeframe: "September 2015 - Juli 2016",
		},
		{
			name: "Bachelor of Science",
			location: "International Media & Computing (HTW-Berlin)",
			timeframe: "April 2018 - April 2022",
		},
	],
	experienceAbroadTitle: "Auslandserfahrung",
	ExperienceAbroad: [
		{
			name: "Cambridge Exam (C1)",
			location: "San Francisco",
			timeframe: "May (CAE2) 2016",
		},
		{
			name: "Advanced Diploma in Online Marketing",
			location: "San Francisco Down Town, USA (EF-Sprachschule)",
			timeframe: "September 2015 - Juli 2016",
		},
	],
	myProjectsTitle: "Meine Projekte",
	contactTitle: "Kontakt aufnehmen",
	Contact: {
		entryText:
			"Wenn du Kontakt aufnehmen möchtest kannst du mir einfach eine Mail senden.",
		socialsText: "Ich bin auch auf GitHub, Instagram und LinkedIn zu finden.",
		cv: {
			text: "Alternativ lässt sich mein CV downloaden.",
			action: "hier downloaden.",
		},
		buttonText: "Tu es!",
	},
};
