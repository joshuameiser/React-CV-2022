import classes from "./IconLink.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface IconLinkProps {
	icon: IconDefinition;
	href?: string;
}

export const IconLink = (props: IconLinkProps) => {
	return (
		<a className={classes.wrapper} href={props.href} target="_blank">
			<div className={classes.iconWrapper}>
				<FontAwesomeIcon className={classes.icon} icon={props.icon} />
			</div>
		</a>
	);
};

export default IconLink;
