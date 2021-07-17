import React, { useRef, useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import {  Wrapper, Container, Header, BalanceContainer, Balance, GridFlex, BalanceName } from './styles';
import Banner from '../../components/banner/index';
import Topo from '../../components/topo/index';
import Button from '../../components/button/index'
import AsyncStorage from '@react-native-async-storage/async-storage';
import ModalizeDefault from "../../components/ModalizeDefault/index";


import { Ionicons, MaterialIcons } from '@expo/vector-icons'; 
 
import img from '../../images/logo.png'


export default function Home({navigation}) {

    const [produtos, setProdutos] = useState([]);
    const [nome, setNome] = useState('');
    
    const modalizeRef = useRef(null); 
    
    useEffect(() => {        
        rotas.obterTodos().then((response) =>{
            setProdutos(response.data);
            mostrarNome()
            
        }).catch(error => {console.log(error)})
    }, [])  

    async function handleLogout(){
        await AsyncStorage.multiRemove(["token","nome"])
        navigation.navigate('Login');        
    }
    
    async function handleAdicionar(){
        modalizeRef.current?.open();
        navigation.navigate('Login');        
    }


    async function mostrarNome(){
        const nomeUsuario = await AsyncStorage.getItem("nome")
        setNome( nomeUsuario)        
    }

    const handleEdit = () => {
        modalizeRef.current?.open();
    }

    const handleDelete = (item) => {
        rotas.deletar(item.id) 
        var index = produtos.indexOf(item) 
        
        var produtoNovo = produtos.filter(function(value){ 
            return value.id !== produtos[index].id})

        setProdutos(produtoNovo)
        
    }



    return (
        <>
        <Wrapper>           
          
               <Header>
                <TouchableOpacity>
                    <Ionicons name="md-person-circle-sharp" size={30} color="#c3b087" />
                </TouchableOpacity> 
                <BalanceName>{nome}</BalanceName>
               
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
            <Button navigation={navigation} modalizeRef={modalizeRef}/>
        </Wrapper>     
        <ModalizeDefault modalizeRef={modalizeRef}/>
      </>
    )
}