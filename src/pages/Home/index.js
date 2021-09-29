import React from 'react'
import { View, Text} from 'react-native'

import { Container, SearchContainer, Input, SearchButton } from './style'
import { Feather } from '@expo/vector-icons'

import Header from '../../components/Header'

function Home(){
    return(
        <Container>
            <Header title="Prime Filmes"/>
           
           <SearchContainer>
             <Input 
               placeholder="Ex: Vingadores"
             />
             <SearchButton>
                 <Feather name="search" size={30} color="#FFF" />
             </SearchButton>

           </SearchContainer>

        </Container>
    )
}

export default Home;