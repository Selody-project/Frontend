import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { LeftArrowIcon, RightArrowIcon } from "@/constants/iconConstants";
import { inqueryUserGroup } from "@/features/user/user-service";

import {
	GroupDiv,
	Div,
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
		setCurrentWidth((nextWidth) => nextWidth + 200);
	};

	const handlePrevButton = () => {
		if (currentWidth > 0) {
			setCurrentWidth((prevWidth) => prevWidth - 200);
		}
	};

	useEffect(() => {
		const maxWidth = childRef?.current?.clientWidth;
		const width = parentRef?.current?.clientWidth;
		setWidthGap(maxWidth - width);
	});

	useEffect(() => {
		dispatch(inqueryUserGroup());
	}, []);

	useEffect(() => {
		if (widthGap && currentWidth > widthGap) {
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
					<LeftButton onClick={handlePrevButton} disabled={disablePrevButton}>
						<LeftArrowIcon />
					</LeftButton>
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
							<Link to={`/group/${info.groupId}`} key={info.groupId}>
								<ItemDiv>
									<CircleDiv>
										<img src={info.image} alt="groupImg" />
									</CircleDiv>
									<h4>{info.name}</h4>
								</ItemDiv>
							</Link>
						))}
					</li>
				</ul>
				{!disableNextButton && (
					<RightButton onClick={handleNextButton} disabled={disableNextButton}>
						<RightArrowIcon />
					</RightButton>
				)}
			</Div>
		</GroupDiv>
	);
};

export default MyGroup;
