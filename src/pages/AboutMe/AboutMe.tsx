import { faRotate } from "@fortawesome/free-solid-svg-icons";
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
	transition: 1s ease-in-out, color 0.3s ease-in-out;
	transform: ${(p) => (p.inView ? "translateY(0px)" : "translateY(200px)")};
	align-items: center;
	color: inherit;
	user-select: none;
`;

// This does not work. Instead just have the + which changes to an -, but do it with transitions
const SVG = styled.svg<{ inView: boolean; clicked: boolean }>`
	height: 20px;
	width: 20px;
	cursor: pointer;
	transition: transform 1s ease-in-out, fill 0.3s ease-in-out;
	transform: ${(p) => (p.inView ? "translateX(0px)" : "translateX(500px)")};
	fill: inherit;
	& path {
		fill: inherit;
		cursor: pointer;
		transition: fill 0.3s ease-in-out, transform 0.4s ease-in-out;
		&.plus-line {
			transform: ${(p) =>
				p.clicked
					? "rotate(0deg) translateX(0)"
					: "rotate(-90deg) translateY(9px) translateX(-11px)"};
		}
	}
`;
const DescriptionOpener = (props: { inView: boolean; clicked: boolean }) => (
	<SVG
		clicked={props.clicked}
		inView={props.inView}
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 20 2">
		<path className="plus-line" d="M0 0H20V2H0z"></path>
		<path d="M0 0H20V2H0z"></path>
	</SVG>
);

const DescriptionWrapper = styled.div<{ inView: boolean }>`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	cursor: pointer;
	fill: ${(p) => (p.inView ? "var(--secondaryColor)" : "var(--contrastColor)")};
	color: ${(p) =>
		p.inView ? "var(--secondaryColor)" : "var(--contrastColor)"};
	&:hover {
		color: var(--primaryColor);
		path {
			fill: var(--primaryColor);
		}
	}
`;

const Category = (props: {
	inView: boolean;
	children: React.ReactNode;
	clicked: boolean;
	onClick: Function;
	icon?: React.ReactNode;
}) => {
	return (
		<DescriptionWrapper inView={props.inView} onClick={(e) => props.onClick(e)}>
			<Description inView={props.inView}>{props.children}</Description>
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
				Climber
			</Category>
			<Category
				clicked={clickedTwo}
				onClick={() => {
					setClickedTwo(!clickedTwo);
				}}
				inView={twoInView}>
				Developer
			</Category>
			{/* <Category inView={threeInView}>Climber</Category> */}
		</Wrapper>
	);
};

export default AboutMe;
