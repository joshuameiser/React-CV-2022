import React, { useState } from "react";
import styled from "styled-components";

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

const Description = styled.p<{ inView: boolean }>`
	width: 40%;
	height: 60px;
	font-size: 3rem;
	color: white;
	display: flex;
	justify-content: left;
	margin: 16px 0;
	margin-left: 4rem;
	transition: 1s ease-in-out;
	transform: ${(p) => (p.inView ? "translateY(0px)" : "translateY(200px)")};
	color: ${(p) =>
		!p.inView ? "var(--contrastColor)" : "var(--secondaryColor)"};
`;

const Category = (props: {
	inView: boolean;
	children: React.ReactNode;
	icon?: React.ReactNode;
}) => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "flex-start",
				alignItems: "center",
			}}>
			<Description inView={props.inView}>{props.children}</Description>
			{/* Replace this div with the icon prop */}
			<div
				style={{
					width: "20px",
					height: "20px",
					backgroundColor: "aqua",
					transition: "1s ease-in-out",
					transform: props.inView ? "translateX(0px)" : "translateX(500px)",
				}}
			/>
		</div>
	);
};

export const AboutMe = () => {
	const [color, setColor] = useState<string>("aqua");
	const [oneInView, setOneInView] = useState<boolean>(false);
	const [twoInView, setTwoInView] = useState<boolean>(false);
	const [threeInView, setThreeInView] = useState<boolean>(false);

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
			<Category inView={oneInView}>Climber</Category>
			<Category inView={twoInView}>Developer</Category>
			<Category inView={threeInView}>Climber</Category>
		</Wrapper>
	);
};

export default AboutMe;
