// components/FooterStyles.js

import styled from "styled-components";

export const Box = styled.div`
	padding: 5% 2.5%;
  display: flex;
  align-items: center;
	background: black;
	// position: absolute;
	bottom: 0;
	width: auto;
  display: block;
  margin-top: 60px;
	@media (max-width: 800px) {
	
	}
`;

export const FooterContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
  width: auto;
	/* background: red; */
  margin-top: 42px;
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
  heigth: 166px;
  margin-rigth: 35px;
  margin-left: 35px;
`;

export const Row = styled.div`
	grid-template-columns: repeat(
		auto-fill,
		minmax(185px, 1fr)
	);
	grid-gap: 20px;
  width: 25%;
  justify-content: center;
  display: flex;
  margin-top: 30px;

	@media (max-width: 800px) {
		grid-template-columns: repeat(
			auto-fill,
			minmax(200px, 1fr)
		);
	}
`;

export const FooterLink = styled.a`
	color: #fff;
	margin-bottom: 10px;
	font-size: 18px;
	text-decoration: none;

	&:hover {
		transition: 200ms ease-in;
	}

  @media (max-width: 800px) {
		width: 100px;
	}
`;

export const Heading = styled.p`
	font-size: 16px;
	color: #fff;
	margin-bottom: 10px;
	font-weight: bold;
  text-indent: 0 !important;
  margin-block-start: 0 !important;

  @media (max-width: 800px) {
		font-size: 10px;
	}
`;


export const FooterImg = styled.img`
  width: 150px;
  @media (max-width: 800px) {
		width: 80px;
	}
`;

export const ContainerName = styled.div`
  height: 165px;
  width: 50%;
  margin-top: 30px;
  @media (max-width: 800px) {
		width: 30%;
	}
`;

export const ContainerDescription = styled.p`
  color: white;
  font-size: 12px;
  @media (max-width: 800px) {
    font-size: 8px;
	}
`;

export const ContainerImage = styled.div`
  text-align: center;
  margin-top: 10px;
  width: 226px;
  @media (max-width: 800px) {
    width: 100px;
	}
`;
