import styled from "styled-components";
import image from "../../data/MyImage.webp";
import content from "../../data/Content.json";

const Text = styled.p`
	font-size: 8rem;
	margin: 0;
	z-index: 1;
	font-weight: 700;
	font-family: "Saira Extra Condensed";
	color: var(--secondaryColor);
`;

const TextWrapper = styled.div`
	z-index: 1;
	display: flex;
	position: absolute;
	flex-direction: column;
	justify-content: center;
	padding-bottom: 5rem;
	${Text} {
		line-height: 3rem;
		font-size: 3rem;
		user-select: none;
		overflow: hidden;
		&:hover {
			color: var(--primaryColor);
		}
	}

	@media (min-width: 440px) {
		${Text} {
			font-size: 4rem;
			line-height: 4rem;
		}
	}

	@media (min-width: 540px) {
		${Text} {
			font-size: 6rem;
			line-height: 6rem;
		}
	}

	@media (min-width: 600px) {
		padding-bottom: 7rem;
		${Text} {
			font-size: 8rem;
		}
	}
`;

const Image = styled.img`
	height: 94%;
	bottom: 0px;
	z-index: 0;
`;

const Wrapper = styled.div`
	background: linear-gradient(
		180deg,
		black 0%,
		black 60%,
		var(--primaryColor) 100%
	);
	display: flex;
	position: fixed;
	z-index: 0;
	top: 0px;
	justify-content: flex-end;
	align-items: center;
	width: 100vw;
	height: 100vh;
	flex-direction: column;
`;

const SpaceHolder = styled.div`
	height: 100vh;
`;

// TODO: Document the page in Storybook (probably not necessary right away, as it's not a final design either)
export const FrontPage = () => {
	return (
		<>
			<Wrapper>
				<TextWrapper>
					<Text>{content.name.firstName.toUpperCase()}</Text>
					<Text>{content.name.lastName.toUpperCase()}</Text>
				</TextWrapper>
				<Image src={image} />
			</Wrapper>
			<SpaceHolder />
		</>
	);
};

export default FrontPage;
