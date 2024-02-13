import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { LeftArrowIcon, RightArrowIcon } from "@/constants/iconConstants";
import { getUserGroups } from "@/features/user/user-service";

import {
	GroupDiv,
	Div,
	InnerDiv,
	LeftButton,
	RightButton,
	ItemDiv,
	CircleDiv,
} from "./MyGroup.styles";

const MyGroup = () => {
	const dispatch = useDispatch();

	const { userGroupList } = useSelector((state) => state.user);

	const childRef = useRef(null);
	const parentRef = useRef(null);

	const [isPrevButtonDisplayed, setIsPrevButtonDisplayed] = useState(false);
	const [isNextButtonDisplayed, setIsNextButtonDisplayed] = useState(false);

	const [currentWidth, setCurrentWidth] = useState(0);
	const [widthGap, setWidthGap] = useState(0);

	useEffect(() => {
		dispatch(getUserGroups());
	}, []);

	const handlePrevButton = () => {
		const { current: wrap } = parentRef;

		wrap.scrollBy({
			left: -300,
			behavior: "smooth",
		});

		setCurrentWidth((prevWidth) => prevWidth - 300);
	};

	const handleNextButton = () => {
		const { current: wrap } = parentRef;

		wrap.scrollBy({
			left: 300,
			behavior: "smooth",
		});

		setCurrentWidth((nextWidth) => nextWidth + 300);
	};

	useEffect(() => {
		const maxWidth = childRef?.current?.clientWidth;
		const width = parentRef?.current?.clientWidth;
		setWidthGap(maxWidth - width);
	});

	useEffect(() => {
		if (widthGap && currentWidth > widthGap) {
			setIsNextButtonDisplayed(true);
		} else {
			setIsNextButtonDisplayed(false);
		}
		if (currentWidth > 0) {
			setIsPrevButtonDisplayed(false);
		} else {
			setIsPrevButtonDisplayed(true);
		}
	}, [currentWidth, widthGap]);

	return (
		<GroupDiv>
			<h3>내 그룹</h3>
			<Div ref={parentRef}>
				<InnerDiv ref={childRef}>
					<ul>
						{userGroupList.map((info) => (
							<li key={info.groupId}>
								<Link to={`/group/${info.groupId}`}>
									<ItemDiv>
										<CircleDiv>
											<img src={info.image} alt="groupImg" />
										</CircleDiv>
										<h4>{info.name}</h4>
									</ItemDiv>
								</Link>
							</li>
						))}
					</ul>
				</InnerDiv>
			</Div>

			{!isPrevButtonDisplayed && (
				<LeftButton onClick={handlePrevButton}>
					<LeftArrowIcon />
				</LeftButton>
			)}

			{!isNextButtonDisplayed && (
				<RightButton onClick={handleNextButton}>
					<RightArrowIcon />
				</RightButton>
			)}
		</GroupDiv>
	);
};

export default MyGroup;
