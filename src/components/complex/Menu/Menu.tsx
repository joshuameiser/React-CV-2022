import styled from "styled-components";
import Hamburger from "@joshuameiser/hamburger";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import classes from "./Menu.module.scss";
import IconLink from "../../basic/IconLink/IconLink";

export interface MenuProps {}

export const Menu = (props: MenuProps) => {
	const Menu = styled.div`
		width: 10vw;
		height: 100vh;
		background-color: black;
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
		<Menu>
			<Hamburger color="white" />
			<Icons>
				<IconLink icon={faInstagram} />
				<IconLink icon={faLinkedin} />
			</Icons>
		</Menu>
	);
};

export default Menu;
