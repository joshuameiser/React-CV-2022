import { motion, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const HeadlineComponent = styled(motion.h1)<{
	position: "left" | "right" | undefined;
	color: string;
}>`
	font-size: 6rem;
	color: ${(p) => p.color};
	display: flex;
	justify-content: ${(p) => (p.position === "right" ? "right" : "left")};
	margin-right: 16rem;
	overflow: scrollable;
	${(p) => (p.position === "right" ? "margin-right:4rem" : "margin-left:4rem")};
	transition: 0.6s ease-in-out;

	@media (max-width: 920px) {
		font-size: 5rem;
	}

	@media (max-width: 720px) {
		font-size: 4rem;
	}
`;

export interface HeadlineProps {
	children: React.ReactNode;
	position?: "left" | "right";
}

export const Headline = (props: HeadlineProps) => {
	const headlineRef = useRef(null);
	const isInView: boolean = useInView(headlineRef, {
		margin: "0px 200px -100px 0px",
	});
	const [color, setColor] = useState<string>("var(--contrastColor)");

	useEffect(() => {
		setColor(isInView ? "var(--primaryColor)" : "var(--contrastColor)");
	}, [isInView]);

	return (
		<HeadlineComponent
			color={color}
			ref={headlineRef}
			position={props.position}>
			{props.children}
		</HeadlineComponent>
	);
};

export default Headline;
