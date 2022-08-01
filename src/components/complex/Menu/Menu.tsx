import styled from "styled-components";
import Hamburger from "@joshuameiser/hamburger";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import {
	faLinkedin,
	faInstagram,
	faGithub,
} from "@fortawesome/free-brands-svg-icons";
import classes from "./Menu.module.scss";
import IconLink from "../../basic/IconLink/IconLink";
import { useState } from "react";

export interface MenuProps {}

const MenuWrapper = styled.div`
	width: 10vw;
	height: 100vh;
	display: flex;
	justify-content: space-between;
	box-sizing: border-box;
	padding: 16px 0 0 0;
	align-items: center;
	flex-direction: column;
	position: sticky;
	top: 0px;
	left: 0px;
	background-color: var(--backgroundColor);
	z-index: 10;
`;

const Icons = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const Backdrop = styled.div<{ backdropOpen: boolean }>`
	// opacity: ${(props) => (props.backdropOpen ? "1" : "0")};
	position: fixed;
	top: 0px;
	left: 0px;
	height: 100vh;
	transition: 1s ease-in-out;
	z-index: 2;
	width: 0px;
	transition: 1s ease-in-out;
	${(props) =>
		props.backdropOpen
			? {
					width: "100vw",
					backgroundColor: "var(--primaryColor)",
			  }
			: {
					backgroundColor: "var(--backgroundColor)",
			  }}
`;

export const Menu = (props: MenuProps) => {
	const [backdropOpen, setBackdropOpen] = useState(false);

	return (
		<>
			<MenuWrapper className={classes.wrapper}>
				<Hamburger
					className={classes.hamburger}
					onClick={() => {
						setBackdropOpen(!backdropOpen);
					}}
				/>
				<Icons>
					<IconLink icon={faGithub} href="https://github.com/joshuameiser" />
					<IconLink
						icon={faInstagram}
						href="https://www.linkedin.com/in/joshua-meiser/"
					/>
					<IconLink
						icon={faLinkedin}
						href="https://www.instagram.com/joshua.meiser/"
					/>
				</Icons>
			</MenuWrapper>
			<Backdrop
				backdropOpen={backdropOpen}
				onClick={() => {
					setBackdropOpen(false);
				}}
			/>
		</>
	);
};

export default Menu;
