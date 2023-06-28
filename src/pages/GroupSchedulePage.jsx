import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import CreateGroupModal from "@/components/Group/CreateGroupModal.jsx";

const GroupSchedulePage = () => {
	const { isModalOpen } = useSelector((state) => state.ui);

	return (
		<>
			<div />
			{isModalOpen && <CreateGroupModal />}
		</>
	);
};

export default GroupSchedulePage;
