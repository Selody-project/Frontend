import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const ModalFooter = ({ handleSubmit, checkFieldsFilled }) => {
	const { edit } = useSelector((state) => state.user);
	return (
		<div style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
			<Button
				variant="primary"
				onClick={handleSubmit}
				className="mt-3"
				disabled={!checkFieldsFilled()}
			>
				{edit ? "수정하기" : "저장하기"}
			</Button>
		</div>
	);
};
export default ModalFooter;
