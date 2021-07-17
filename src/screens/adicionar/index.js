import React from 'react';
import { Wrapper, Container, BalanceContainer, Balance, Header } from '../home/styles';
import { TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import img from '../../images/logo.png'

export default function Adicionar({navigation}) {

    function handleLogout(){
        //await AsyncStorage.multiRemove(["token","nome"])
        navigation.navigate('Login');        
    }

    function handleHome(){
        navigation.navigate('Home');        
    }

        return(
            <Wrapper>
             <Container>
             <Header>
                <TouchableOpacity>
                    <Ionicons name="md-person-circle-sharp" size={30} color="#c3b087" />
                </TouchableOpacity> 
               
                <BalanceContainer>
                    <TouchableOpacity onPress={handleHome}>
                    <Balance source={img}/>
                    </TouchableOpacity>
                </BalanceContainer>
               
                <TouchableOpacity onPress={handleLogout}>
                    <MaterialIcons name="logout" size={30} color="#c3b087" />
                </TouchableOpacity> 
                </Header>


            </Container> 
            </Wrapper>

        )
}