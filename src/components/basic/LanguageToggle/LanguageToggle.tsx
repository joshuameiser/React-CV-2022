import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { Menu, MenuItem } from "@mui/material";
import i18next from "i18next";
import { getLanguage, setLanguage } from "./LanguageLocalStorage";
import {
	LanguageAbbreviation,
	languages,
} from "../../../data/LanguageAbbreviation";

const Wrapper = styled.div`
	width: 32px;
	height: 32px;
	position: fixed;
	top: 16px;
	right: 80px;
	color: var(--secondaryColor);
	cursor: pointer;
	font-size: 2rem;
	z-index: 2;
`;

// TODO: Replace the MuiMenu with my own menu component
const StyledMenu = styled(Menu)`
	margin-top: 16px;
	transform: translateX(-28px);
`;

export const LanguageToggle = () => {
	const [anchorEl, setAnchorEl] = useState<null | SVGSVGElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<SVGSVGElement>) => {
		setAnchorEl(event?.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const changeLanguage = (language: string) => {
		i18next.changeLanguage(language);
		setLanguage(language as LanguageAbbreviation);
	};

	useEffect(() => {
		const initialLanguage = getLanguage();
		if (initialLanguage !== undefined) {
			i18next.changeLanguage(initialLanguage);
		}
	}, []);

	return (
		<Wrapper>
			<FontAwesomeIcon icon={faGlobe} onClick={handleClick} />
			<StyledMenu
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				onClick={handleClose}
				disablePortal>
				{languages.map((item, index) => (
					<MenuItem
						key={item.value + index}
						value={item.value}
						onClick={() => {
							changeLanguage(item.value);
						}}>
						{item.title}
					</MenuItem>
				))}
			</StyledMenu>
		</Wrapper>
	);
};
