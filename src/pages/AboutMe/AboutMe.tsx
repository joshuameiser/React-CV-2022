import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Headline from "../../components/basic/Headline/Headline";
import { PageWrapper } from "../../components/basic/PageWrapper/PageWrapper";
import { ThemeContext } from "../../context/themeContext";
import { useContent } from "../../data/Content";
import { Category } from "./components/Category";

const IconWrapper = styled(motion.div)`
	height: 20px;
	width: 20px;
	display: inline-block;
`;

export const AboutMe = () => {
	// hook containing the text content
	const content = useContent();

	// generates an array of false values with the length of the whoAmI array
	// -> only one category can be open at a time
	const fillFalseArray = () => {
		return new Array(content.whoAmI.length).fill(false);
	};

	// every element in the array represents a category & all of them are closed at the beginning
	const [clicked, setClicked] = useState<boolean[]>(fillFalseArray());

	const { theme } = useContext(ThemeContext);

	// if the theme changes, all categories are closed
	useEffect(() => {
		setClicked(fillFalseArray());
	}, [theme]);

	const toggleOpenCategory = (index: number) => {
		const tempArray = new Array(content.whoAmI.length).fill(false);
		tempArray[index] = !clicked[index];
		setClicked(tempArray);
	};

	return (
		<PageWrapper>
			<Headline>{content.aboutMeTitle}</Headline>
			{content.whoAmI.map((element, index) => {
				return (
					<Category
						key={element.title + index}
						title={element.title}
						onClick={() => {
							toggleOpenCategory(index);
						}}
						clicked={clicked[index]}>
						{element.description.map((section) => {
							return <p>{section}</p>;
						})}
						{element.heart && (
							<IconWrapper
								animate={{
									scale: [1, 1.2, 1],
								}}
								initial={{ color: "var(--secondaryColor)" }}
								transition={{ repeat: Infinity, duration: 2 }}>
								<FontAwesomeIcon icon={faHeartbeat} />
							</IconWrapper>
						)}
					</Category>
				);
			})}
		</PageWrapper>
	);
};

export default AboutMe;
