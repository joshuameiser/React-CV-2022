import { motion, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const HeadlineComponent = styled(motion.h1)`
	width: 100%;
	font-size: 6rem;
	color: ${(p) => p.color};
	display: flex;
	justify-content: left;
	margin-left: 4rem;
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
		<HeadlineComponent color={color} ref={headlineRef}>
			{props.children}
		</HeadlineComponent>
	);
};

export default Headline;
