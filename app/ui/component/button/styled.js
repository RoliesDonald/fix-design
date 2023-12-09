import styled from "styled-components";

export const ButtonStyled = styled.button`
  background-color: ${({ variant }) => {
    if (variant === "outline") {
      return "transparent";
    } else if (variant === "filled") {
      return "var(--mainRed)";
    }
  }};
  color: ${({ variant }) => {
    if (variant === "outline") {
      return "var(--bgLight)";
    } else if (variant === "filled") {
      return "white";
    }
  }};
  padding: 0.5em 1em;
  border-radius: 1em;
  margin: 0.4rem 0.2rem;
  cursor: pointer;
  font-size: 1.3em;

  &:hover {
    background-color: ${({ variant }) => {
      if (variant === "outline") {
        return "red";
      } else if (variant === "filled") {
        return "var(--textLight)";
      }
    }};
  }
`;
