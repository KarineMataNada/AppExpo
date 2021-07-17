import React from 'react';
import { TouchableOpacity } from 'react-native';
import {  Wrapper, Container, Header, BalanceContainer, Balance, GridFlex } from './styles';
import Banner from '../../components/banner/index';
import Topo from '../../components/topo/index';
import Button from '../../components/button/index'
//import AsyncStorage from '@react-native-async-storage/async-storage';


import { Ionicons, MaterialIcons } from '@expo/vector-icons'; 
 
import img from '../../images/logo.png'


export default function Home({navigation}) {

     function handleLogout(){
        //await AsyncStorage.multiRemove(["token","nome"])
        navigation.navigate('Login');        
    }
    function handleAdicionar(){
        navigation.navigate('Adicionar');        
    }

    return (
        <Wrapper>           
          
               <Header>
                <TouchableOpacity>
                    <Ionicons name="md-person-circle-sharp" size={30} color="#c3b087" />
                </TouchableOpacity> 
               
                <BalanceContainer>
                    <TouchableOpacity>
                    <Balance source={img}/>
                    </TouchableOpacity>
                </BalanceContainer>
               
                <TouchableOpacity onPress={handleLogout}>
                    <MaterialIcons name="logout" size={30} color="#c3b087" />
                </TouchableOpacity> 
                </Header>
                <Container>
                <Topo />
                <GridFlex>
                <Banner />
                <Banner />
                <Banner />
                <Banner />
                </GridFlex>
            </Container>
            <Button navigation={navigation}/>
        </Wrapper>     
    )
}