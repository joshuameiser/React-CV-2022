import styled from "styled-components";
import Headline from "../../components/basic/Headline/Headline";
import IconLink from "../../components/basic/IconLink/IconLink";
import { PageWrapper } from "../../components/basic/PageWrapper/PageWrapper";
import {
	faLinkedin,
	faInstagram,
	faGithub,
} from "@fortawesome/free-brands-svg-icons";

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

const ContactButton = styled.button`
	background-color: var(--primaryColor);
	color: white;
	border: none;
	border-radius: 8px;
	padding: 8px 0;
	width: inherit;
	font-size: 1.25rem;
	cursor: pointer;
	transition: 0.4s ease-in-out;

	&:hover {
		background-color: var(--primaryHover);
		color: var(--primaryColor);
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
		width: 340px;
	}
`;

const Icons = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
`;

export const Contact = () => {
	return (
		<Wrapper>
			<Headline position="right">Get in touch</Headline>
			<GetInTouch>
				<Text>If you want to get in contact, just send me a mail.</Text>
				<ContactButton
					onClick={() => {
						window.open("mailto:jm@joshuameiser.com");
					}}>
					Do it.
				</ContactButton>
			</GetInTouch>
			<Socials>
				<Text style={{ marginTop: "32px" }}>
					You can also find me on GitHub, Instagram and LinkedIn.
				</Text>
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
		</Wrapper>
	);
};
