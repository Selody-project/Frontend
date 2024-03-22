import React from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";

import PropTypes from "prop-types";

import { CloseIcon } from "@/constants/iconConstants.js";
import { closeModal } from "@/features/ui/ui-slice.js";
import useScrollLock from "@/hooks/useScrollLock.jsx";

import { BackdropDiv, IconButton, ModalDiv } from "./BaseModal.styles.js";

const Backdrop = ({ onClick, isUpper }) => {
	const dispatch = useDispatch();

	return (
		<BackdropDiv
			isUpper={isUpper}
			className="backdrop"
			// 모달이 어떤 모달에 속해있는 경우 전체 모달을 끄는 것이 아니라 해당 모달만 꺼야 합니다.
			onClick={onClick || (() => dispatch(closeModal()))}
		/>
	);
};

const Modal = ({ children, onClose, isUpper }) => {
	const dispatch = useDispatch();

	return (
		<ModalDiv isUpper={isUpper}>
			<IconButton
				onClick={onClose || (() => dispatch(closeModal()))}
				aria-label="close"
			>
				<CloseIcon />
			</IconButton>
			{children}
		</ModalDiv>
	);
};

const BaseModal = ({ children, onClose, isUpper }) => {
	useScrollLock();

	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop onClick={onClose} isUpper={isUpper || false} />,
				document.getElementById("backdrop"),
			)}
			{ReactDOM.createPortal(
				<Modal onClose={onClose} isUpper={isUpper || false}>
					{children}
				</Modal>,
				document.getElementById("modal"),
			)}
		</>
	);
};

Backdrop.propTypes = {
	isUpper: PropTypes.bool.isRequired,
};

Modal.propTypes = {
	children: PropTypes.node.isRequired,
	isUpper: PropTypes.bool.isRequired,
};

BaseModal.propTypes = {
	children: PropTypes.node.isRequired,
};

export default BaseModal;
