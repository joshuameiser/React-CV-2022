import styled from "styled-components";
import image from "../../data/MyImage.png";
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

	@media (min-height: 440px) {
		${Text} {
			font-size: 4rem;
			line-height: 4rem;
		}
	}

	@media (min-height: 540px) {
		${Text} {
			font-size: 6rem;
			line-height: 6rem;
		}
	}

	@media (min-height: 600px) {
		padding-bottom: 7rem;
		${Text} {
			font-size: 8rem;
		}
	}
`;

const Image = styled.img`
	height: 94%;
	// position: sticky;
	bottom: 0px;
	z-index: 0;
`;

const Wrapper = styled.div`
	background: linear-gradient(
		180deg,
		var(--backgroundColor) 0%,
		var(--backgroundColor) 60%,
		var(--primaryColor) 100%
	);
	display: flex;
	position: fixed;
	z-index: 0;
	top: 0px;
	// left: 10%;
	justify-content: flex-end;
	align-items: center;
	width: inherit;
	height: 100vh;
	flex-direction: column;
`;

const SpaceHolder = styled.div`
	height: 100vh;
`;

// TODO: Document the page in Storybook (probably not necessary right away, as it's not a final design either)
// TODO: Add the text content into the data folder
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
