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

export interface MenuProps {}

export const Menu = (props: MenuProps) => {
	const Menu = styled.div`
		width: 10vw;
		height: 100vh;
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 16px 0 0 0;
		align-items: center;
		flex-direction: column;
	`;

	const Icons = styled.div`
		width: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
	`;

	return (
		<Menu className={classes.wrapper}>
			{/* TODO: Hamburger should take a className instead of a color. Then I can use the variable */}
			<Hamburger color="white" />
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
		</Menu>
	);
};

export default Menu;
