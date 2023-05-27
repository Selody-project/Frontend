import styled from "styled-components";
import { blind } from "@styles/blind";
import { Button } from "@components/Button";
import { ReactComponent as XImage } from "@/img/XImage.svg";
import PropTypes from "prop-types";

/**
 * 공통적으로 사용되는 Modal, Main Content는 children props에 추가해서 사용하세요!
 */
const Modal = ({
	title,
	desc,
	submitTitle,
	handleCloseModal,
	handleSubmit,
	children,
	...props
}) => {
	return (
		<ModalWrapper>
			<StyledModal>
				<div className="wrapper">
					<div className="header">
						<p className="title">{title}</p>
						<button className=" close-button" onClick={handleCloseModal}>
							<span className="blind">close-button</span>
							<XImage />
						</button>
					</div>
					<input className="desc" placeholder={desc} />
				</div>
				{children}
				<Button
					label={submitTitle}
					backgroundColor="#C9CCD7"
					width={132}
					height={40}
					onClick={handleSubmit}
				/>
			</StyledModal>
		</ModalWrapper>
	);
};

const ModalWrapper = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(33, 34, 37, 0.4);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1;
	position: fixed;
`;

const StyledModal = styled.div`
	padding: 34px 20px 21px 20px;
	display: flex;
	flex-direction: column;
	background-color: white;

	& .wrapper {
		display: flex;
		flex-direction: column;
		gap: 40px;
		min-width: 590px;
		padding-bottom: 13px;
		margin-bottom: 24px;
		border-bottom: 1px solid #000000;

		& .header {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.title {
				font-weight: 600;
				font-size: 20px;
				line-height: 24px;
				color: black;
			}

			.close-button {
				background-color: transparent;
				width: 16px;
				height: 16px;
			}
		}

		& .blind {
			${blind}
		}

		input.desc {
			border: none;
			outline: none;
			font-size: 18px;
			line-height: 22px;

			&::placeholder {
				color: #9ca0ab;
			}
		}
	}

	& > button {
		align-self: flex-end;
		margin-top: 66px;
	}
`;

Modal.propTypes = {
	/**
	 * 제목을 설정해주세요
	 */
	title: PropTypes.string.isRequired,
	/**
	 * 추가하고자 하는 내용의 설명을 적어주세요
	 */
	desc: PropTypes.string.isRequired,
	/**
	 * 제출하기 버튼에 적을 내용을 적어주세요
	 */
	submitTitle: PropTypes.string,
	/**
	 * 닫기 버튼을 눌렀을 떄의 동작을 설정해주세요
	 */
	handleCloseModal: PropTypes.func.isRequired,
	/**
	 * 제출하기 버튼을 눌렀을 때의 동작을 설정해주세요
	 */
	handleSubmit: PropTypes.func.isRequired,
	/**
	 * Main Content에 담을 컴포넌트를 담아주세요
	 */
	children: PropTypes.elementType,
};

Modal.defaultProps = {
	title: "공유 페이지 생성",
	desc: "공유 페이지 명",
	submitTitle: "생성하기",
	handleCloseModal: () => alert("닫기"),
	handleSubmit: () => alert("생성하기"),
};

export default Modal;
