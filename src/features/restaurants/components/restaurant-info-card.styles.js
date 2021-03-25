import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

export const RestaurantCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${({ theme }) => theme.space[3]};
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

export const Info = styled.View`
  padding: ${({ theme }) => theme.space[3]};
`;

export const Raiting = styled.View`
  flex-direction: row;
  padding: ${({ theme }) => theme.space[2]};
`;

export const Section = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SectionEnd = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: ${({ theme }) => theme.space[2]};
`;
