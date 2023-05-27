import styled from "styled-components";
import { blind } from "@styles/blind";
import { closeButton } from "@styles/closeButton";
import { Button } from "@components/Button";

const Modal = ({ title, desc, submitTitle, handleCloseModal, ...props }) => {
	return (
		<ModalWrapper>
			<StyledModal>
				<div className="wrapper">
					<div className="header">
						<p className="title">{title}</p>
						<button className=" close-button" onClick={handleCloseModal}>
							<span className="blind">close-button</span>
						</button>
					</div>
					<input className="desc" placeholder={desc} />
				</div>
				<Button
					label={submitTitle}
					backgroundColor="#C9CCD7"
					width={132}
					height={40}
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
				${closeButton({ width: 16, height: 16 })}
				background-color: transparent;
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

	& button {
		align-self: flex-end;
	}
`;

export default Modal;
