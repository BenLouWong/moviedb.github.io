import styled from "styled-components";

export const Wrapper = styled.div`
	background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0) 41%,
			rgba(0, 0, 0, 0.65) 100%
		),
		url(${({ image }) => image}), var(--darkGrey);
	display: flex;
	align-items: flex-end;
	background-size: 100%, cover;
	background-position: center;
	height: 600px;
	animation: animateHeroImage 1s;

	@keyframes animateHeroImage {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	} ;
`;

export const Content = styled.div`
	padding: 20px;
	max-width: var(--maxWidth);
	margin: 0 auto;
`;

export const Text = styled.div`
	color: var(--white);
`;
