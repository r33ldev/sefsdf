import styled, { CSSProperties } from "styled-components";
const StyledInput = styled.input<{ styles?: CSSProperties }>`
  width: 100%;
  height: 5.4rem;
  border: 1px solid #707070;
  border-radius: 2.8rem;

  padding: ${({ styles }) => styles?.padding || "0 1.5rem"};

  &:outline {
    border: 1px solid #707070;;
  }
  &:focus {
    border: 1px solid #707070;
    outline: none;
  }
`;

interface InputProps {
  placeholder: string;
  type?: string;
  size?: number;
  styles: CSSProperties;
}

export const Input = (props: InputProps) => {
  props.styles.fontSize = props?.size;
  return <StyledInput type="text" {...props} style={{ ...props?.styles }} />;
};
