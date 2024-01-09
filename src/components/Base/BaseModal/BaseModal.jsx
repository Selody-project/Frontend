import React from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";

import PropTypes from "prop-types";

import { CloseIcon } from "@/constants/iconConstants.js";
import { closeModal } from "@/features/ui/ui-slice.js";
import useScrollLock from "@/hooks/useScrollLock.jsx";

import {
	BackdropWrapper,
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

const ModalContent = ({ title, children, hasTitle, hasClose, bgColor }) => {
	const dispatch = useDispatch();

	const handleClose = () => {
		dispatch(closeModal());
	};

	return (
		<ModalContentDiv bgColor={bgColor}>
			<ModalHeaderDiv>
				{hasTitle && <span>{title}</span>}
				{hasClose && <CloseIcon onClick={handleClose} aria-label="close" />}
			</ModalHeaderDiv>
			{children}
		</ModalContentDiv>
	);
};

const BaseModal = ({
	title = null,
	children,
	hasTitle = true,
	hasClose = true,
	bgColor,
}) => {
	useScrollLock();

	return (
		<>
			{ReactDOM.createPortal(<Backdrop />, document.getElementById("backdrop"))}
			{ReactDOM.createPortal(
				<ModalContent
					title={title}
					hasTitle={hasTitle}
					hasClose={hasClose}
					bgColor={bgColor}
				>
					{children}
				</ModalContent>,
				document.getElementById("modal"),
			)}
		</>
	);
};

BaseModal.propTypes = {
	children: PropTypes.node.isRequired,
	bgColor: PropTypes.string.isRequired,
};
ModalContent.propTypes = {
	children: PropTypes.node.isRequired,
	bgColor: PropTypes.string.isRequired,
};

export default BaseModal;
