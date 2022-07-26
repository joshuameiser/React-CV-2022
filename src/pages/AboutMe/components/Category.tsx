import { motion, useInView } from "framer-motion";
import { forwardRef, useRef } from "react";
import styled from "styled-components";

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

const CategoryWrapper = styled.div`
	display: flex;
	flex-direction: column;
	cursor: pointer;
`;

const SVG = styled(motion.svg)<{ inView: boolean; clicked: boolean }>`
	height: 16px;
	width: 16px;
	cursor: pointer;
	fill: inherit;
	overflow: visible;
	& path {
		fill: inherit;
		cursor: pointer;
	}

	@media (min-width: 720px) {
		height: 18px;
		width: 18px;
	}

	@media (min-width: 920px) {
		height: 20px;
		width: 20px;
	}
`;

const Description = styled(motion.p)<{ inView: boolean }>`
	width: 200px;
	height: 60px;
	font-size: 1.75rem;
	color: var(--contrastColor);
	display: flex;
	justify-content: left;
	margin: 0 0 0 16px;
	transition: color 0.3s ease-in-out;
	align-items: center;
	color: inherit;
	user-select: none;

	@media (min-width: 480px) {
		font-size: 1.75rem;
	}

	@media (min-width: 600px) {
		margin: 8px 0px 8px 16px;
		margin-left: 4rem;
	}

	@media (min-width: 720px) {
		font-size: 2.5rem;
		width: 40%;
	}

	@media (min-width: 920px) {
		font-size: 3rem;
	}
`;

const TextSection = styled(motion.div)<{}>`
	max-width: 600px;
	height: 0;
	color: var(--contrastColor);
	font-size: 1.5rem;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	overflow: hidden;
	margin: 0 1rem;
	border-radius: 16px;

	@media (min-width: 500px) {
		margin: 0 2rem;
	}
	@media (min-width: 660px) {
		margin: 0 3rem;
		padding: 2rem;
	}
	@media (min-width: 800px) {
		margin: 0 4rem;
	}

	p {
		padding: 0;
		margin: 0;
		text-align: left;
		line-height: 2rem;
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

export interface CategoryProps {
	title: string;
	children: React.ReactNode;
	clicked: boolean;
	onClick: Function;
	icon?: React.ReactNode;
}

export type Ref = HTMLDivElement;

export const Category = (props: CategoryProps) => {
	const categoryRef = useRef(null);
	const isInView: boolean = useInView(categoryRef, {
		margin: "0px 100px -100px 0px",
		once: true,
	});

	return (
		<CategoryWrapper onClick={(e) => props.onClick(e)} ref={categoryRef}>
			<DescriptionWrapper clicked={props.clicked} inView={isInView}>
				<Description
					animate={isInView ? { y: 0 } : { y: "100vw" }}
					transition={{ duration: 1 }}
					inView={isInView}>
					{props.title}
				</Description>
				<DescriptionOpener inView={isInView} clicked={props.clicked} />
			</DescriptionWrapper>
			<TextSection
				animate={
					props.clicked
						? {
								height: "auto",
								border: "2px solid var(--primaryColor)",
								color: "var(--contrastColor)",
						  }
						: {
								height: 0,
								border: "0px",
								color: "var(--backgroundColor)",
								padding: "0 32px",
						  }
				}
				transition={{ duration: 0.3 }}>
				<motion.p
					animate={
						props.clicked ? { opacity: [0, 0, 1] } : { opacity: [0, 0, 0] }
					}
					transition={{ duration: 0.3, times: [0, 0.999, 1] }}>
					{props.children}
				</motion.p>
			</TextSection>
		</CategoryWrapper>
	);
};
