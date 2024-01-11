import React from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";

import PropTypes from "prop-types";

import { CloseIcon } from "@/constants/iconConstants.js";
import { closeModal } from "@/features/ui/ui-slice.js";
import useScrollLock from "@/hooks/useScrollLock.jsx";

import { BackdropDiv, IconButton, ModalDiv } from "./BaseModal.styles.js";

const Backdrop = () => {
	const dispatch = useDispatch();

	return (
		<BackdropDiv className="backdrop" onClick={() => dispatch(closeModal())} />
	);
};

const Modal = ({ children }) => {
	const dispatch = useDispatch();

	const handleClose = () => {
		dispatch(closeModal());
	};

	return (
		<ModalDiv>
			<IconButton onClick={handleClose} aria-label="close">
				<CloseIcon />
			</IconButton>
			{children}
		</ModalDiv>
	);
};

const BaseModal = ({ children }) => {
	useScrollLock();

	return (
		<>
			{ReactDOM.createPortal(<Backdrop />, document.getElementById("backdrop"))}
			{ReactDOM.createPortal(
				<Modal>{children}</Modal>,
				document.getElementById("modal"),
			)}
		</>
	);
};

BaseModal.propTypes = {
	children: PropTypes.node.isRequired,
};
Modal.propTypes = {
	children: PropTypes.node.isRequired,
};

export default BaseModal;
