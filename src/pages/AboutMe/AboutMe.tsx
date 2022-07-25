import styled from "styled-components";
import image from "../../data/Portrait.jpeg";
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
	font-size: 6rem;
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
				display: "flex",
				justifyContent: "space-around",
				alignItems: "center",
				width: "inherit",
				height: "100vh",
				flexDirection: "column",
			}}>
			<Text className={classes.text}>JOSHUA</Text>
			<Image />
			<Text className={classes.text}>MEISER</Text>
			<Backdrop className={classes.backdrop} />
		</div>
	);
};

export default AboutMe;