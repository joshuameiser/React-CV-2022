import { faRotate } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";
import { Category } from "./components/Category";

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

const IconWrapper = styled(motion.div)`
	height: 20px;
	width: 20px;
	display: inline-block;
	margin-left: 1rem;
`;

export const AboutMe = () => {
	const [color, setColor] = useState<string>("aqua");
	const [oneInView, setOneInView] = useState<boolean>(false);
	const [twoInView, setTwoInView] = useState<boolean>(false);
	const [threeInView, setThreeInView] = useState<boolean>(false);

	const [clickedOne, setClickedOne] = useState<boolean>(false);
	const [clickedTwo, setClickedTwo] = useState<boolean>(false);
	const [clickedThree, setClickedThree] = useState<boolean>(false);

	useEffect(() => {
		setClickedOne(false);
	}, [oneInView]);

	useEffect(() => {
		setClickedTwo(false);
	}, [twoInView]);

	useEffect(() => {
		setClickedThree(false);
	}, [threeInView]);

	useEffect(() => {
		clickedTwo && clickedOne && setClickedTwo(false);
		clickedThree && clickedOne && setClickedThree(false);
	}, [clickedOne]);

	useEffect(() => {
		clickedOne && clickedTwo && setClickedOne(false);
		clickedThree && clickedTwo && setClickedThree(false);
	}, [clickedTwo]);

	useEffect(() => {
		clickedOne && clickedThree && setClickedOne(false);
		clickedTwo && clickedThree && setClickedTwo(false);
	}, [clickedThree]);

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
				title="Developer"
				clicked={clickedOne}
				onClick={() => {
					setClickedOne(!clickedOne);
					console.log("clicked");
				}}
				inView={oneInView}>
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
			</Category>
			<Category
				title="Climber"
				clicked={clickedTwo}
				onClick={() => {
					setClickedTwo(!clickedTwo);
				}}
				inView={twoInView}>
				{/* Would like to add more information about my bouldering here. Maybe link to another website once I have one. */}
				<p>
					After work, my heart primarily beats for climbing, or more
					specifically for bouldering. I have been doing this sport since the
					age of 13 and could not imagine a life without it anymore.
				</p>
			</Category>
			<Category
				title="Consultant at Aclue"
				onClick={() => setClickedThree(!clickedThree)}
				clicked={clickedThree}
				inView={threeInView}>
				<p>
					I am currently employed at Aclue, working 40 hours each week as a
					Frontend consultant. Since my start on the 01.03.2022, I have been
					working on a project for OTTO. The project contains the aiding of the
					creation, as well as the maintanance and documentation of a design
					system based on MUI.
				</p>
			</Category>
		</Wrapper>
	);
};

export default AboutMe;
