import React from "react";
import { useDispatch, useSelector } from "react-redux";

import GroupRequestCancelModal from "@/components/Common/GroupModal/GroupRequestCancelModal/GroupRequestCancelModal";
import { OptionThreeDotIcon } from "@/constants/iconConstants";
import { UI_TYPE } from "@/constants/uiConstants";
import { openRequestCancelModal } from "@/features/ui/ui-slice";

import { OptionDiv, OptionMenuButton } from "./GroupInfoList.styles";

const GroupOption = ({
	groupId,
	groupName,
	optionMenuOpenedFeedIndex,
	onThreeDotClick,
	optionMenuRef,
}) => {
	const dispatch = useDispatch();

	const { openedModal } = useSelector((state) => state.ui);

	return (
		<OptionDiv ref={optionMenuRef}>
			<OptionThreeDotIcon onClick={onThreeDotClick} />

			{optionMenuOpenedFeedIndex === groupId && (
				<OptionMenuButton onClick={() => dispatch(openRequestCancelModal())}>
					요청취소
				</OptionMenuButton>
			)}

			{openedModal === UI_TYPE.REQUEST_CANCEL && (
				<GroupRequestCancelModal groupId={groupId} groupName={groupName} />
			)}
		</OptionDiv>
	);
};

export default GroupOption;
