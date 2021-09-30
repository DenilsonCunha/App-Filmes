import React from 'react'
import { ScrollView } from 'react-native'

import { Container, SearchContainer, Input, SearchButton } from './style'
import { Feather } from '@expo/vector-icons'

import Header from '../../components/Header'
import { Title } from '../../components/Header/style'

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

           <ScrollView>
             <Title>Em cartaz</Title>
           </ScrollView>
        </Container>
    )
}

export default Home;