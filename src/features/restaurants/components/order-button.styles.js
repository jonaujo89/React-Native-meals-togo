import styled from "styled-components/native";
import { Button } from "react-native-paper";

import { colors } from "../../../infrastructure/theme/colors";

export const OrderButton = styled(Button).attrs({
  color: colors.brand.primary
})`
  padding: ${(props) => props.theme.space[1]};
  width: 75%;
  align-self: center;
`;
