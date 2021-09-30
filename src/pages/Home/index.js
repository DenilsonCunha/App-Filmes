import React from 'react'
import { ScrollView } from 'react-native'

import { 
  Container,
   SearchContainer,
    Input,
     SearchButton,
      Title,
       BannerButton,
        Banner,
         SliderMovie
  } from './style'

import { Feather } from '@expo/vector-icons'

import Header from '../../components/Header'
import SliderItem from '../../components/Header/SliderItem'

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

             <BannerButton>
               <Banner
                resizeMethod="resize"
                 source={{ uri:'https://media.istockphoto.com/photos/cacimba-do-padre-morro-do-pico-picture-id1327684718?b=1&k=20&m=1327684718&s=170667a&w=0&h=pA0uAULY9kExnuqqbs226UPuYjDthYwiBLptNrss9Bo=' }}
                 />
             </BannerButton>

             <SliderMovie
               horizontal={true}
               data={[1,2,3,4]}
               renderItem={ ({ item }) => <SliderItem/>}
             />
           </ScrollView>
        </Container>
    )
}

export default Home;