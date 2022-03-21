import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config";
import styled from "styled-components";

export const Wrapper = styled.div`
	background: ${({ backdrop }) =>
		backdrop
			? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})`
			: "#000"};
	background-size: cover;
	background-position: center;
	padding: 80px;
	animation: animateMovieInfo 1s;
	@keyframes {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;

export const Content = styled.div`
	display: flex;
	max-width: var(--maxWidth);
	margin: 0 auto;
	background: rgba(0, 0, 0, 0.7);
	border-radius: 20px;
`;

export const Text = styled.div`
	width: 100%;
	padding: 20px 40px;
	color: var(--white);
	overflow: hidden;
`;
