import styled from "styled-components";
import image from "../../data/Portrait.jpeg";
import classes from "./AboutMe.module.scss";

const OuterCircle = styled.div`
	width: 400px;
	height: 400px;
	z-index: 2;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const InnerCircle = styled.div`
	width: calc(100% - 40px);
	height: calc(100% - 40px);
	z-index: 2;
	border-radius: 50%;
	background-color: black;
	display: flex;
	justify-content: center;
	align-items: center;
	background: url(${image});
	background-position: fit;
	background-size: 100%;
`;

const Text = styled.p`
	font-size: 6rem;
	margin: 0;
	font-weight: 700;
	z-index: 2;
	font-family: "Saira Extra Condensed";
`;

const Backdrop = styled.div`
	width: 100%;
	position: absolute;
	height: 160px;
	top: calc(50% - 80px);
	left: 0px;
`;

const Image = () => {
	return (
		<OuterCircle className={classes.outerCircle}>
			<InnerCircle />
		</OuterCircle>
	);
};

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
