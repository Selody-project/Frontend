import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import LeftArrowIcon from "@/assets/icon/ic-left-arrow.svg";
import RightArrowIcon from "@/assets/icon/ic-right-arrow.svg";
import { inqueryUserGroup } from "@/features/user/user-service";

import {
	GroupDiv,
	Div,
	LeftButtonDiv,
	RightButtonDiv,
	ItemDiv,
	CircleDiv,
} from "./MyGroup.styles";

const MyGroup = () => {
	const userGroup = useSelector((state) => state.user.userGroupList);
	const dispatch = useDispatch();

	const childRef = useRef(null);
	const parentRef = useRef(null);

	const [disablePrevButton, setDisablePrevButton] = useState(false);
	const [disableNextButton, setDisableNextButton] = useState(false);

	const [currentWidth, setCurrentWidth] = useState(0);
	const [widthGap, setWidthGap] = useState(0);

	const handleNextButton = () => {
		const maxWidth = childRef?.current?.clientWidth;
		const width = parentRef?.current?.clientWidth;
		setWidthGap(maxWidth - width);
		setCurrentWidth((nextWidth) => nextWidth + 200);
	};

	const handlePrevButton = () => {
		if (currentWidth > 0) {
			setCurrentWidth((prevWidth) => prevWidth - 200);
		}
	};

	useEffect(() => {
		dispatch(inqueryUserGroup());
	}, []);

	useEffect(() => {
		if (currentWidth > widthGap) {
			setDisableNextButton(true);
		} else {
			setDisableNextButton(false);
		}
		if (currentWidth > 0) {
			setDisablePrevButton(false);
		} else {
			setDisablePrevButton(true);
		}
	}, [currentWidth, widthGap]);

	return (
		<GroupDiv>
			<h3>내 그룹</h3>
			<Div ref={parentRef}>
				{!disablePrevButton && (
					<LeftButtonDiv
						onClick={handlePrevButton}
						disabled={disablePrevButton}
					>
						<LeftArrowIcon />
					</LeftButtonDiv>
				)}
				<ul
					style={{
						transform:
							currentWidth > widthGap
								? `translateX(-${widthGap}px)`
								: `translateX(-${currentWidth}px)`,
					}}
					ref={childRef}
				>
					<li>
						{userGroup?.map((info) => (
							<a href={`/group/${info.groupId}`} key={info.groupId}>
								<ItemDiv>
									<CircleDiv>
										<img src={info.image} alt="groupImg" />
									</CircleDiv>
									<h4>{info.name}</h4>
								</ItemDiv>
							</a>
						))}
					</li>
				</ul>
				{!disableNextButton && (
					<RightButtonDiv
						onClick={handleNextButton}
						disabled={disableNextButton}
					>
						<RightArrowIcon />
					</RightButtonDiv>
				)}
			</Div>
		</GroupDiv>
	);
};

export default MyGroup;
