import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import SampleImg from "@/assets/img/feed/img-group-sample-01.jpeg";
import { inqueryUserGroup } from "@/features/user/user-service";

import {
	GroupDiv,
	Div,
	ButtonDiv,
	LeftButton,
	RightButton,
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
	}, [currentWidth]);

	return (
		<GroupDiv>
			<h3>내 그룹</h3>
			<Div ref={parentRef}>
				{!disablePrevButton && (
					<ButtonDiv>
						<LeftButton onClick={handlePrevButton} disabled={disablePrevButton}>
							버튼
						</LeftButton>
					</ButtonDiv>
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
						{userGroup.groupList?.map((info) => (
							<a href={`/group/${info.groupId}`} key={info.groupId}>
								<ItemDiv>
									<CircleDiv>
										<img src={SampleImg} alt="sampleimg" />
									</CircleDiv>
									<h4>{info.name}</h4>
								</ItemDiv>
							</a>
						))}
					</li>
				</ul>
				{!disableNextButton && (
					<ButtonDiv>
						<RightButton
							onClick={handleNextButton}
							disabled={disableNextButton}
						>
							버튼
						</RightButton>
					</ButtonDiv>
				)}
			</Div>
		</GroupDiv>
	);
};

export default MyGroup;
