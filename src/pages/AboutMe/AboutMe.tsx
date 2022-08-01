import styled from "styled-components";
import image from "../../data/MyImage.png";
import classes from "./AboutMe.module.scss";

const OuterCircle = styled.div`
	width: 400px;
	height: 400px;
	border-radius: 50%;
	display: flex;
	z-index: 1;
	justify-content: center;
	align-items: center;
`;

const InnerCircle = styled.div`
	width: calc(100% - 40px);
	height: calc(100% - 40px);
	border-radius: 50%;
	background-color: black;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1;
	background: url(${image});
	background-position: fit;
	background-size: 100%;
`;

const Text = styled.p`
	font-size: 8rem;
	margin: 0;
	z-index: 1;
	font-weight: 700;
	font-family: "Saira Extra Condensed";
`;

const Backdrop = styled.div`
	width: 100%;
	position: absolute;
	height: 160px;
	top: calc(50% - 80px);
	left: 0px;
	z-index: 0;
`;

const ImageWrapper = styled.div`
	z-index: 1;
	display: flex;
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

const Image = () => {
	return (
		<OuterCircle className={classes.outerCircle}>
			<InnerCircle />
		</OuterCircle>
	);
};

// TODO: Make the homepage responsive (width is fine, height breaks quite easily)
// TODO: Create custom components for the name, image etc.
// TODO: Document the page in Storybook (probably not necessary right away, as it's not a final design either)
// TODO: Add the text content into the data folder
export const AboutMe = () => {
	return (
		<div
			style={{
				background:
					"linear-gradient(180deg, var(--backgroundColor) 0%, var(--backgroundColor) 60%, var(--primaryColor) 100%)",
				display: "flex",
				justifyContent: "flex-end",
				alignItems: "center",
				width: "inherit",
				height: "100vh",
				flexDirection: "column",
			}}>
			{/* <Text className={classes.text}>JOSHUA</Text>
			<Image />
			<Text className={classes.text}>MEISER</Text> */}
			{/* TODO: I kinda like this, BUT I want the image to go out of screen when hovering. So the image should always either be entirely visible or not at all */}
			{/* TODO: Positioning of the image is still shit. I'd like the png to be as little as possible frame wise. */}
			<ImageWrapper>
				<Text className={classes.text}>JOSHUA</Text>
				<Text className={classes.text}>MEISER</Text>
			</ImageWrapper>
			<img
				src={image}
				style={{ maxHeight: "94%", position: "absolute", bottom: "0px" }}
			/>
			{/* <Backdrop className={classes.backdrop} /> */}
		</div>
	);
};

export default AboutMe;
