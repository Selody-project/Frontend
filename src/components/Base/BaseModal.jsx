import React from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { BackdropWrapper, ModalWrapper } from "./BaseModal.style.js";
import { closeModal } from "@/features/ui/ui-slice.js";

const Backdrop = () => {
	const dispatch = useDispatch();

	return (
		<BackdropWrapper
			className="backdrop"
			onClick={() => dispatch(closeModal())}
		/>
	);
};

const Modal = ({ children, bg }) => {
	return (
		<ModalWrapper style={{ backgroundColor: bg }}>{children}</ModalWrapper>
	);
};

const BaseModal = ({ children, bg }) => {
	return (
		<>
			{ReactDOM.createPortal(<Backdrop />, document.getElementById("backdrop"))}
			{ReactDOM.createPortal(
				<Modal bg={bg}>{children}</Modal>,
				document.getElementById("modal"),
			)}
		</>
	);
};

BaseModal.propTypes = {
	children: PropTypes.node.isRequired,
	bg: PropTypes.string.isRequired,
};
Modal.propTypes = {
	children: PropTypes.node.isRequired,
	bg: PropTypes.string.isRequired,
};

export default BaseModal;
