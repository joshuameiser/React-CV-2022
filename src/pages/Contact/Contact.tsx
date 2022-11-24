import styled from "styled-components";
import Headline from "../../components/basic/Headline/Headline";
import IconLink from "../../components/basic/IconLink/IconLink";
import { PageWrapper } from "../../components/basic/PageWrapper/PageWrapper";
import {
	faLinkedin,
	faInstagram,
	faGithub,
} from "@fortawesome/free-brands-svg-icons";
import PDFModal from "./components/PDFModal";
import { useState } from "react";
import CV from "./CV.pdf";
import { Button, buttonClasses } from "@joshuameiser/component-library";
import { useContent } from "../../data/Content";

const Wrapper = styled(PageWrapper)`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	padding-bottom: 32px;
`;

const Text = styled.p`
	margin: 0;

	text-align: right;
	font-size: inherit;
`;

const ContactButton = styled(Button)`
	padding: 8px 0;
	width: inherit;
	transition: 0.4s ease-in-out;
	& .${buttonClasses.content} {
		font-size: 1.25rem;
	}
`;

const GetInTouch = styled.div`
	width: 280px;
	font-size: 1.125rem;

	margin-right: 16px;

	@media (min-width: 640px) {
		margin-right: 64px;
		font-size: 1.25rem;
		width: 300px;
	}
`;

const Socials = styled(GetInTouch)`
	width: 320px;

	@media (min-width: 640px) {
		width: 360px;
	}
`;

const CVsection = styled(GetInTouch)`
	width: auto;
	display: flex;
	gap: 4px;
`;

const Icons = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
`;

const Link = styled.p`
	color: var(--secondaryColor);
	text-decoration: underline;
	cursor: pointer;
	padding: 0 4px;

	&:hover {
		background-color: var(--secondaryHover);
		border-radius: 8px;
	}
`;

export const Contact = () => {
	const content = useContent();
	const [showPDFModal, setShowPDFModal] = useState(false);

	return (
		<Wrapper>
			<Headline position="right">{content.contactTitle}</Headline>
			<GetInTouch>
				<Text>{content.Contact.entryText}</Text>
				<ContactButton
					backgroundColor="var(--primaryColor)"
					hoverColor="var(--primaryHover)"
					color="var(--contrastColor)"
					onClick={() => {
						window.open("mailto:jm@joshuameiser.de");
					}}>
					{content.Contact.buttonText}
				</ContactButton>
			</GetInTouch>
			<Socials>
				<Text style={{ marginTop: "32px" }}>{content.Contact.socialsText}</Text>
				<Icons>
					<IconLink icon={faGithub} href="https://github.com/joshuameiser" />
					<IconLink
						icon={faInstagram}
						href="https://www.instagram.com/joshua.meiser/"
					/>
					<IconLink
						icon={faLinkedin}
						href="https://www.linkedin.com/in/joshua-meiser/"
					/>
				</Icons>
			</Socials>
			<CVsection>
				<p>{content.Contact.cv.text}</p>
				<Link onClick={() => setShowPDFModal(true)}>
					{content.Contact.cv.action}
				</Link>
			</CVsection>
			<PDFModal
				file={CV}
				visibility={showPDFModal}
				changeVisibility={() => {
					setShowPDFModal(!showPDFModal);
				}}
			/>
		</Wrapper>
	);
};
