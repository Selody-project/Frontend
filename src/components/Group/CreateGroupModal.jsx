import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import BaseModal from "../Base/BaseModal.jsx";
import { createGroup } from "@/features/group/group-service.js";
import { closeModal } from "@/features/ui/ui-slice.js";

const CreateGroupModal = () => {
	const [shareInput, setShareInput] = useState("");
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(shareInput);
		dispatch(createGroup(shareInput));
	};

	const handleChange = (e) => {
		setShareInput(e.target.value);
	};

	return (
		<BaseModal bg="#fff">
			<div className="header">
				<h2>공유 페이지 생성</h2>
				<MdClose onClick={() => dispatch(closeModal())} />
			</div>
			<div className="content">
				<div className="input">
					<input
						type="text"
						placeholder="공유 페이지 명"
						id="share"
						name="share"
						value={shareInput}
						onChange={handleChange}
					/>
				</div>
				<div className="invite">
					<input
						type="text"
						placeholder="초대할 사용자 이메일 또는 코드 입력"
						id="invite"
						name="invite"
					/>
					<button type="button">초대</button>
				</div>
			</div>
			<div className="share-btn">
				<button
					type="submit"
					onClick={handleSubmit}
					disabled={shareInput === ""}
				>
					생성하기
				</button>
			</div>
		</BaseModal>
	);
};

export default CreateGroupModal;
