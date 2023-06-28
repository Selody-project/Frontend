import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const ModalFooter = ({ handleSubmit, checkFieldsFilled }) => {
	const { edit } = useSelector((state) => state.user);
	return (
		<Button
			variant="primary"
			onClick={handleSubmit}
			// disabled={!checkFieldsFilled()}
			className="mt-3"
		>
			{edit ? "수정하기" : "저장하기"}
		</Button>
	);
};
export default ModalFooter;
