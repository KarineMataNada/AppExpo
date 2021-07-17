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

import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import pijama1 from '../../images/pijama1.png';





export default function Banner(props) {
  


  return (
        <Container>

          <Card>
          <CardHeader>
              <Avatar source={pijama1} />
            </CardHeader>  
            <CardBody>
              <UserName>Pijama Xadrez </UserName>
            </CardBody>
            <CardFooter>
              <Details>
                <Value>R$ 239,90</Value>
                <Divider />
                
                <Descricao>
                <MaterialCommunityIcons name="square-edit-outline" size={24} color="#fff" />
                </Descricao>
               
              </Details>

            </CardFooter>
          </Card>
        </Container>
      );
    }