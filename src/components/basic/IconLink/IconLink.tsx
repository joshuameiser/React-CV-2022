import classes from "./IconLink.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface IconLinkProps {
	icon: IconDefinition;
}

export const IconLink = (props: IconLinkProps) => {
	return (
		<div className={classes.wrapper}>
			<div
				style={{
					width: "90%",
					height: "1px",
					// backgroundColor: "white",
				}}
				className={classes.divider}
			/>
			<div className={classes.iconWrapper}>
				<FontAwesomeIcon
					className={classes.icon}
					icon={props.icon}
					fontSize="30px"
				/>
			</div>
		</div>
	);
};

export default IconLink;
