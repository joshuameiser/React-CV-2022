import { useEffect } from "react";
import classes from "./Modal.module.css";
import { disableScrolling } from "@joshuameiser/utility-functions";

const Modal = (props: {
	children?: JSX.Element;
	visibility: boolean;
	changeVisibility: Function;
	extraStyling?: any;
	closeWrapperStyling?: any;
}) => {
	const [visibility, changeVisibility] = [
		props.visibility,
		props.changeVisibility,
	];

	useEffect(() => {
		disableScrolling(visibility);
	}, [visibility]);

	const modal = visibility ? (
		<>
			<div className={classes.outerWrapper}>
				<div
					className={classes.outerBackground}
					onClick={() => changeVisibility(false)}
				/>
				<div
					className={classes.wrapper}
					style={props.extraStyling ? props.extraStyling : {}}>
					{props.children}
				</div>
			</div>
		</>
	) : (
		<></>
	);

	return <>{modal}</>;
};

export default Modal;
