import { useState } from "react";
import styled from "styled-components";

const Headline = styled.h1<{ color: string }>`
	width: 100vw;
	font-size: 6rem;
	color: var(--primaryColor);
	display: flex;
	justify-content: left;
	margin-left: 4rem;
	font-family: "Saira Extra Condensed";
	color: ${(p) => p.color};
`;

export const AboutMe = () => {
	const [color, setColor] = useState("aqua");

	window.onscroll = function () {
		"use strict";
		if (window.scrollY < 0.5 * window.innerHeight && color !== "aqua") {
			setColor("aqua");
		} else if (window.scrollY >= 0.5 * window.innerHeight && color !== "red") {
			setColor("red");
		}
	};

	return (
		<div
			style={{
				height: "100vh",
				zIndex: 1,
				// backgroundColor: "var(--secondaryBackgroundColor)",
				backgroundColor: "var(--backgroundColor)",
			}}>
			<Headline color={color}>Who am I?</Headline>
		</div>
	);
};

export default AboutMe;
