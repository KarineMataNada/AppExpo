import styled from 'styled-components/native';

export const Container = styled.View`
  padding-right: 20px;
  padding-left: 20px;
  width: 45%;
`;

export const Header = styled.View``;

export const Title = styled.Text`
  color: #000;
  font-size: 18px;
  font-weight: bold;
`;

export const Card = styled.TouchableOpacity`
  background: #c3b087;
  border-radius: 8px;
  margin-top: 10px;
  padding: 7px;
  width: 100%;
  height: 260px;
`;


export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Rolar = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
}))`
`;


export const Avatar = styled.Image`
  width: 80px;
  height: 150px;
  margin: 5px;
  margin-left: 10px;
  border-radius: 4px;
`;

export const Description = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-left: 15px;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;

export const CardBody = styled.View`
  margin-top: 5px;
`;

export const UserName = styled.Text`
  color: #fff;
  font-size: 15px;
  margin-left: 12px;
`;

export const CardFooter = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Details = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Value = styled.Text`
  color: #000;
  font-size: 14px;
  font-weight: bold;
  margin-left: 24px;

`;

export const Divider = styled.View`
  width: 2px;
  height: 13px;
  background: rgba(255, 255, 255, 0.4);
  margin: 0 10px;
`;

export const Descricao = styled.Text`
  color: #fff;
  margin-left: 2px;
`;


