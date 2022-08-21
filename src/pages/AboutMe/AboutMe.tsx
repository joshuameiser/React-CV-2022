import { faRotate } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
	height: 100vh;
	z-index: 1;
	overflow: hidden;
	background: var(--backgroundColor);
`;

const Headline = styled.h1<{ color: string }>`
	width: 100vw;
	font-size: 6rem;
	color: var(--primaryColor);
	display: flex;
	justify-content: left;
	margin-left: 4rem;
	transition: 0.6s ease-in-out;
	color: ${(p) => p.color};
`;

const Description = styled(motion.p)<{ inView: boolean }>`
	width: 40%;
	height: 60px;
	font-size: 3rem;
	color: white;
	display: flex;
	justify-content: left;
	margin: 16px 0;
	margin-left: 4rem;
	transition: color 0.3s ease-in-out;
	align-items: center;
	color: inherit;
	user-select: none;
`;

// This does not work. Instead just have the + which changes to an -, but do it with transitions
const SVG = styled(motion.svg)<{ inView: boolean; clicked: boolean }>`
	height: 20px;
	width: 20px;
	cursor: pointer;
	fill: inherit;
	overflow: visible;
	& path {
		fill: inherit;
		cursor: pointer;
	}
`;

const DescriptionOpener = (props: { inView: boolean; clicked: boolean }) => (
	<SVG
		clicked={props.clicked}
		inView={props.inView}
		xmlns="http://www.w3.org/2000/svg"
		animate={props.inView ? { x: 0 } : { x: "100vw" }}
		transition={{ duration: 1 }}
		viewBox="0 0 20 2">
		<motion.path
			animate={props.clicked ? { rotate: 180 } : { rotate: 0 }}
			className="plus-line"
			d="M0 0H20V2H0z"></motion.path>
		<motion.path
			animate={props.clicked ? { rotate: 360 } : { rotate: 90 }}
			d="M0 0H20V2H0z"></motion.path>
	</SVG>
);

const DescriptionWrapper = styled.div<{ inView: boolean; clicked: boolean }>`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	cursor: pointer;
	fill: ${(p) =>
		p.clicked
			? "var(--primaryColor)"
			: p.inView
			? "var(--secondaryColor)"
			: "var(--contrastColor)"};
	color: ${(p) =>
		p.clicked
			? "var(--primaryColor)"
			: p.inView
			? "var(--secondaryColor)"
			: "var(--contrastColor)"};
	&:hover {
		color: var(--primaryColor);
		path {
			fill: var(--primaryColor);
		}
	}
`;

const TextSection = styled(motion.div)<{}>`
	max-width: 600px;
	color: white;
	font-size: 1.5rem;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	overflow: hidden;
	margin: 0 4rem;
	border-radius: 16px;

	p {
		padding: 0;
		margin: 0;
		text-align: left;
		line-height: 2rem;
	}
`;

const IconWrapper = styled(motion.div)`
	height: 20px;
	width: 20px;
	display: inline-block;
	margin-left: 1rem;
`;

const Category = (props: {
	inView: boolean;
	children: React.ReactNode;
	clicked: boolean;
	onClick: Function;
	icon?: React.ReactNode;
}) => {
	return (
		<DescriptionWrapper
			clicked={props.clicked}
			inView={props.inView}
			onClick={(e) => props.onClick(e)}>
			<Description
				animate={props.inView ? { y: 0 } : { y: "100vw" }}
				transition={{ duration: 1 }}
				inView={props.inView}>
				{props.children}
			</Description>
			<DescriptionOpener inView={props.inView} clicked={props.clicked} />
		</DescriptionWrapper>
	);
};

export const AboutMe = () => {
	const [color, setColor] = useState<string>("aqua");
	const [oneInView, setOneInView] = useState<boolean>(false);
	const [twoInView, setTwoInView] = useState<boolean>(false);
	const [threeInView, setThreeInView] = useState<boolean>(false);

	const [clickedOne, setClickedOne] = useState<boolean>(false);
	const [clickedTwo, setClickedTwo] = useState<boolean>(false);

	useEffect(() => {
		setClickedOne(false);
	}, [oneInView]);

	useEffect(() => {
		setClickedTwo(false);
	}, [twoInView]);

	useEffect(() => {
		clickedOne && clickedTwo && setClickedTwo(false);
	}, [clickedOne]);

	useEffect(() => {
		clickedOne && clickedTwo && setClickedOne(false);
	}, [clickedTwo]);

	window.onscroll = function () {
		"use strict";
		if (
			window.scrollY < 0.5 * window.innerHeight &&
			color !== "var(--contrastColor)"
		) {
			setColor("var(--contrastColor)");
		} else if (
			window.scrollY >= 0.5 * window.innerHeight &&
			color !== "var(--primaryColor)"
		) {
			setColor("var(--primaryColor)");
		}

		if (window.scrollY < 0.6 * window.innerHeight && oneInView) {
			setOneInView(false);
		} else if (window.scrollY >= 0.6 * window.innerHeight && !oneInView) {
			setOneInView(true);
		}

		if (window.scrollY < 0.6 * window.innerHeight + 92 && twoInView) {
			setTwoInView(false);
		} else if (window.scrollY >= 0.6 * window.innerHeight + 92 && !twoInView) {
			setTwoInView(true);
		}

		if (window.scrollY < 0.6 * window.innerHeight + 184 && threeInView) {
			setThreeInView(false);
		} else if (
			window.scrollY >= 0.6 * window.innerHeight + 184 &&
			!threeInView
		) {
			setThreeInView(true);
		}
	};

	return (
		<Wrapper>
			<Headline color={color}>Who am I?</Headline>
			<Category
				clicked={clickedOne}
				onClick={() => {
					setClickedOne(!clickedOne);
					console.log("clicked");
				}}
				inView={oneInView}>
				Developer
			</Category>
			<TextSection
				animate={
					clickedOne
						? { height: "auto", border: "2px solid var(--primaryColor)" }
						: { height: 0, padding: 0, border: "none" }
				}>
				<p>I am a passionate Frontend developer with a clear love for React.</p>
				<p>
					I love creating components, or entire websites utilizing SCSS or
					Styled Components and am always excited to find new ways of
					developing.
					<IconWrapper
						animate={{
							scale: [1, 1.2, 1],
							color: "var(--secondaryColor)",
						}}
						transition={{ repeat: Infinity, duration: 2 }}>
						<FontAwesomeIcon icon={faHeartbeat} />
					</IconWrapper>
				</p>
			</TextSection>
			<Category
				clicked={clickedTwo}
				onClick={() => {
					setClickedTwo(!clickedTwo);
				}}
				inView={twoInView}>
				Climber
			</Category>
			<TextSection
				animate={
					clickedTwo
						? { height: "auto", border: "2px solid var(--primaryColor)" }
						: { height: 0, padding: 0, border: "none" }
				}>
				{/* Would like to add more information about my bouldering here. Maybe link to another website once I have one. */}
				<p>
					After work, my heart primarily beats for climbing, or more
					specifically for bouldering. I have been doing this sport since the
					age of 13 and could not imagine a life without it anymore.
				</p>
			</TextSection>
			{/* <Category inView={threeInView}>Climber</Category> */}
		</Wrapper>
	);
};

export default AboutMe;
