import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import Headline from "../../components/basic/Headline/Headline";
import { PageWrapper } from "../../components/basic/PageWrapper/PageWrapper";
import content from "../../data/Content.json";
import { Category } from "./components/Category";

const IconWrapper = styled(motion.div)`
	height: 20px;
	width: 20px;
	display: inline-block;
`;

export const AboutMe = () => {
	const [clicked, setClicked] = useState<boolean[]>(
		new Array(content.whoAmI.length).fill(false)
	);

	return (
		<PageWrapper>
			<Headline>Who am I?</Headline>
			{content.whoAmI.map((element, index) => {
				return (
					<Category
						title={element.title}
						onClick={() => {
							const tempArray = new Array(content.whoAmI.length).fill(false);
							tempArray[index] = !clicked[index];
							setClicked(tempArray);
						}}
						clicked={clicked[index]}>
						{element.description.map((section) => {
							return <p>{section}</p>;
						})}
						{element.heart && (
							<IconWrapper
								animate={{
									scale: [1, 1.2, 1],
									color: "var(--secondaryColor)",
								}}
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
