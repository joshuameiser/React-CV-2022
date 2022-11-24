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
		{
			title: "Consultant at Aclue",
			description: [
				"I am currently employed at Aclue, working 40 hours each week as a Frontend consultant. Since my start on the 01.03.2022, I have been working on a project for OTTO. The project contains the aiding of the creation, as well as the maintanance and documentation of a design system based on MUI.",
			],
		},
	],
	Projects: [
		{
			title: "Dorfentwicklung UVP Stelzer - Website",
			websiteLink: "https://dorfentwicklung.regionalplan-uvp.de/",
			sourceCodeLink: "",
		},
	],
	WorkingExperience: [
		{
			company: "Aclue GmbH",
			position: "Frontend Consultant",
			timeframe: "01.03.2022 - Ongoing",
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
};

export const contentDe = {
	name: { firstName: "Joshua", lastName: "Meiser" },
	whoAmI: [
		{
			title: "Developer",
			description: [
				"Ich bin ein begeisterter Frontend Entwickler mit einer Liebe für React.",
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
		{
			title: "Consultant at Aclue",
			description: [
				"I am currently employed at Aclue, working 40 hours each week as a Frontend consultant. Since my start on the 01.03.2022, I have been working on a project for OTTO. The project contains the aiding of the creation, as well as the maintanance and documentation of a design system based on MUI.",
			],
		},
	],
	Projects: [
		{
			title: "Dorfentwicklung UVP Stelzer - Website",
			websiteLink: "https://dorfentwicklung.regionalplan-uvp.de/",
			sourceCodeLink: "",
		},
	],
	WorkingExperience: [
		{
			company: "Aclue GmbH",
			position: "Frontend Consultant",
			timeframe: "01.03.2022 - Ongoing",
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
};
