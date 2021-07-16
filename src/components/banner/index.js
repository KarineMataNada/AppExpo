import React from 'react';

import {
  Container,
  Header,
  Title,
  Card,
  CardHeader,
  Avatar,
  CardBody,
  UserName,
  CardFooter,
  Details,
  Value,
  Divider,
  Descricao,
} from './styles';


import pijama1 from '../../images/pijama1.png';
import pijama2 from '../../images/pijama2.png';
import pijama3 from '../../images/pijama3.png';




export default function Banner(props) {
  
  function Teste() {
    alert("Pijama lindo flanelado")
   }

  return (
        <Container>

          <Card onPress={Teste}>
          <CardHeader>
              <Avatar source={pijama1} />
            </CardHeader>  
            <CardBody>
              <UserName>Pijama Xadrez </UserName>
            </CardBody>
            <CardFooter>
              <Details>
                <Value>R$ 239,90</Value>

              </Details>

            </CardFooter>
          </Card>
        </Container>
      );
    }