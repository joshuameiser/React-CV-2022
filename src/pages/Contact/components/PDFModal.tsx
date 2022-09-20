import { useState, useEffect } from "react";
import Modal from "./Modal/Modal";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import useWindowSize from "../../../CustomHooks/WindowResize";
import styled from "styled-components";

const Link = styled.a`
	position: sticky !important;
	bottom: 0px;
	height: 40px;
	text-decoration: none !important;
	background-color: var(--primaryColor);
	width: 100%;
	color: var(--contrastColor);
	transition: color 0.4s ease-in-out, background-color 0.4s ease-in-out;
	:hover {
		background-color: var(--backgroundColor);
		color: var(--secondaryColor);
	}
`;

const PDFModal = (props: {
	file: string;
	visibility: boolean;
	changeVisibility: Function;
}) => {
	pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

	const [pdfWidth, setPdfWidth] = useState<number>(300);
	const pageWidth: { width: number; height: number } = useWindowSize();

	const resize = () => {
		if (pageWidth.width > 750) {
			setPdfWidth(650);
		}
		if (pageWidth.width > 650 && pageWidth.width <= 750) {
			setPdfWidth(550);
		} else if (pageWidth.width < 650 && pageWidth.width > 480) {
			setPdfWidth(400);
		} else if (pageWidth.width <= 480 && pageWidth.width > 370) {
			setPdfWidth(300);
		} else if (pageWidth.width <= 370) {
			setPdfWidth(240);
		}
	};

	useEffect(resize, [pageWidth]);

	const styles = {
		maxWidth: "80vw",
		maxHeight: "80vh",
		padding: "0 0 0 0",
		overflowY: "auto",
		overflowX: "hidden",
	};

	const closeWrapperStyles = {
		right: "0px",
	};
	const [pages, setPages] = useState<JSX.Element[]>([]);
	const [numPages, setNumPages] = useState<any>(null);

	const onDocumentLoadSuccess = ({ numPages }: any) => {
		setNumPages(numPages);
		let tempPages = [];
		for (let i = 1; i <= numPages; i++) {
			tempPages.push(<Page pageNumber={i} key={i} width={pdfWidth} />);
		}
		setPages(tempPages);
	};

	useEffect(() => {
		let tempPages = [];
		for (let i = 1; i <= numPages; i++) {
			tempPages.push(<Page pageNumber={i} key={i} width={pdfWidth} />);
		}
		setPages(tempPages);
	}, [pdfWidth, numPages]);

	return (
		<>
			<Modal
				visibility={props.visibility}
				changeVisibility={props.changeVisibility}
				extraStyling={styles}
				closeWrapperStyling={closeWrapperStyles}>
				<>
					<Document file={props.file} onLoadSuccess={onDocumentLoadSuccess}>
						{pages}
					</Document>
					<Link href={props.file} download>
						Download PDF
					</Link>
				</>
				{/* {props.file} */}
			</Modal>
		</>
	);
};

export default PDFModal;
