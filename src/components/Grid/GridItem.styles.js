import styled from "styled-components";

export const Wrapper = styled.div`
	height: 320px;
	width: auto;
	border-radius: 15px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: url(${({ image }) => image}), var(--darkGrey);
	background-size: cover;
	background-position: center;
	animation: animateThumb 0.5s;
	transition: all 0.3s ease;

	:hover {
		opacity: 0.8;
	}

	@keyframes animateThumb {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;
