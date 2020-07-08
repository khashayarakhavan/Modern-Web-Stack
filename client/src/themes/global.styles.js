import { createGlobalStyle } from 'styled-components';
import { backgroundColor } from "./mode/index";
import { fontSize } from "./sizes/index";

export const GlobalStyle = createGlobalStyle`
	body {
		font-family: 'Open Sans Condensed';
		padding: 20px 40px;
		background-color: ${backgroundColor};
		${'' /* background: ${(props) => props.theme.background}; */}
		color: ${(props) => props.theme.foreground};

		font-size: ${fontSize};
		
		@media screen and (max-width: 800px) {
			padding: 10px;
		}
	}

	a {
		text-decoration: none;
		color: black;
	}

	* {
		box-sizing: border-box;
	}
`;
