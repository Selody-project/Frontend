import React from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";

import PropTypes from "prop-types";

import { CloseIcon } from "@/constants/iconConstants.js";
import { closeModal } from "@/features/ui/ui-slice.js";
import useScrollLock from "@/hooks/useScrollLock.jsx";

import {
	BackdropWrapper,
	IconButton,
	ModalContentDiv,
	ModalHeaderDiv,
} from "./BaseModal.style.js";

const Backdrop = () => {
	const dispatch = useDispatch();

	return (
		<BackdropWrapper
			className="backdrop"
			onClick={() => dispatch(closeModal())}
		/>
	);
};

const Modal = ({ title, children, hasClose, style, bgColor }) => {
	const dispatch = useDispatch();

	const handleClose = () => {
		dispatch(closeModal());
	};

	return (
		<ModalContentDiv style={style} bgColor={bgColor}>
			<ModalHeaderDiv>
				<span>{title}</span>
				{hasClose && (
					<IconButton onClick={handleClose} aria-label="close">
						<CloseIcon />
					</IconButton>
				)}
			</ModalHeaderDiv>
			{children}
		</ModalContentDiv>
	);
};

const BaseModal = ({
	title = null,
	children,
	hasClose = true,
	style,
	bgColor,
}) => {
	useScrollLock();

	return (
		<>
			{ReactDOM.createPortal(<Backdrop />, document.getElementById("backdrop"))}
			{ReactDOM.createPortal(
				<Modal
					title={title}
					hasClose={hasClose}
					style={style}
					bgColor={bgColor}
				>
					{children}
				</Modal>,
				document.getElementById("modal"),
			)}
		</>
	);
};

BaseModal.propTypes = {
	children: PropTypes.node.isRequired,
	bgColor: PropTypes.string.isRequired,
};
Modal.propTypes = {
	children: PropTypes.node.isRequired,
	bgColor: PropTypes.string.isRequired,
};

export default BaseModal;
