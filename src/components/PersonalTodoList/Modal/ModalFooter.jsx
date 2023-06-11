import React from "react";
import { Button } from "react-bootstrap";

const ModalFooter = ({ handleSubmit, checkFieldsFilled }) => (
	<Button
		variant="primary"
		onClick={handleSubmit}
		disabled={!checkFieldsFilled()}
		className="mt-3"
	>
		저장하기
	</Button>
);

export default ModalFooter;
