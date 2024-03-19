import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import GroupCreateModal from "@/components/Common/GroupModal/GroupCreateModal/GroupCreateModal";
import { EMPTY_DATA, EMPTY_TYPE } from "@/constants/emptyConstants";
import { UI_TYPE } from "@/constants/uiConstants";
import { openCreateGroupModal } from "@/features/ui/ui-slice";

import { LayoutDiv, ButtonDiv } from "./EmptyLayout.style";

const EmptyLayout = ({ emptyType }) => {
	const dispatch = useDispatch();

	const { openedModal } = useSelector((state) => state.ui);

	const navigate = useNavigate();

	return (
		<LayoutDiv
			hasMargin={
				emptyType === EMPTY_TYPE.MY_GROUP ||
				emptyType === EMPTY_TYPE.REQUEST_GROUP
			}
		>
			{EMPTY_DATA.map((data) => (
				<Fragment key={data.type}>
					{data.type === emptyType && (
						<>
							<div>{data.icon}</div>
							<h3>{data.text}</h3>
							<h4>{data.subText}</h4>
						</>
					)}
				</Fragment>
			))}

			{(emptyType === EMPTY_TYPE.REQUEST_GROUP ||
				emptyType === EMPTY_TYPE.MY_GROUP) && (
				<ButtonDiv>
					{emptyType === EMPTY_TYPE.REQUEST_GROUP && (
						<button
							type="button"
							className="addButton"
							onClick={() => dispatch(openCreateGroupModal())}
						>
							그룹 만들기
						</button>
					)}

					<button
						type="button"
						onClick={() => navigate("/community?tab=search")}
					>
						그룹 신청하기
					</button>
				</ButtonDiv>
			)}

			{openedModal === UI_TYPE.CREATE_GROUP && <GroupCreateModal />}
		</LayoutDiv>
	);
};

export default EmptyLayout;
