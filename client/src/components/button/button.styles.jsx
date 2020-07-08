import styled from "styled-components";
import { buttonColor, buttonBackgroundColor } from "../../themes/mode/index.js";

export const Button = styled.button`
  font: inherit;
  padding: 0.5em 1em;
  border: none;
  background-color: ${buttonBackgroundColor};
  color: ${(props) => props.darkMode ? 'blue' : buttonColor};
  border-radius: 0.25em;
  margin-right: 0.5em;
  cursor: pointer;
`;

Button.defaultProps = {
  kind: "default",
};

export default Button;
