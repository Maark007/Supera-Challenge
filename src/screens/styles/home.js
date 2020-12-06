import styled from "styled-components/native";

export const Body = styled.ScrollView`
  flex: 1;
`;

export const Circle = styled.View`
  height: ${({ height }) => height};
  width: ${({ height }) => height};
  border-radius: ${({ height }) => height};
  border: 2px solid ${({ color }) => color};
  align-items: center;
  justify-content: center;
`;

export const BodyContent = styled.View`
  flex: 1;
  height: 100%;
  background: #0141df;
`;

export const Header = styled.View`
  justify-content: space-between;
  flex-direction: row;
  height: 200px;
`;

export const HeaderTitle = styled.Text`
  color: #fff;
  font-size: 17px;
  font-weight: bold;
`;

export const UserTitle = styled.Text`
  color: rgba(255, 255, 255, 0.7);
  font-size: 17px;
  margin-top: 25px;

`;

export const Subtitle = styled.Text`
  text-transform: uppercase;
  color: #fff;
  font-size: 26px;
  width: 190px;
  margin-top: 5px;
`;

export const MenuContent = styled.View`
  background: #fff;
  flex: 1;
  border-top-left-radius: 50px;
`;
