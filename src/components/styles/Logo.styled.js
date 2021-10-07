import styled from "styled-components";
import { convertColorToFilterValues } from "../../utils/utils";

export const StyledLogo = styled.img`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  filter: ${(props) => convertColorToFilterValues(props.color)};
`;
