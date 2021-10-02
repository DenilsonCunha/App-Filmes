import React, { useState, useEffect } from 'react'
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

import api, { key } from '../../services/api'


function Home(){

  const [nowMovies, setnowMovies] = useState([]);
  const [popularMovies, setpopularmovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);

  useEffect(()=>{
       let isActive = true;

       async function getMovies(){
        // const response = await api.get('/movie/now_playing', {
         //  params: {
         //    api_key: key,
         //    language: 'pt-BR',
         //    page: 1,
         //  }
        // })

        const [nowData, popularData, topData] = await Promise.all([
          api.get('/movie/now_playing', {
            params: {
              api_key: key,
              language: 'pt-BR',
              page: 1,
            }
          }),
          api.get('/movie/popular', {
            params: {
              api_key: key,
              language: 'pt-BR',
              page: 1,
            }
          }),
          api.get('/movie/top_rated', {
            params: {
              api_key: key,
              language: 'pt-BR',
              page: 1,
            }
          }),
        ])

          console.log(response.data);
       }

       getMovies();


  }, [])


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

           <ScrollView showsVerticalScrollIndicator={false}>
             <Title>Em cartaz</Title>

             <BannerButton>
               <Banner
                resizeMethod="resize"
                 source={{ uri:'https://media.istockphoto.com/photos/cacimba-do-padre-morro-do-pico-picture-id1327684718?b=1&k=20&m=1327684718&s=170667a&w=0&h=pA0uAULY9kExnuqqbs226UPuYjDthYwiBLptNrss9Bo=' }}
                 />
             </BannerButton>

             <SliderMovie
               horizontal={true}
               showsHorizontalScrollIndicator={false}
               data={[1,2,3,4]}
               renderItem={ ({ item }) => <SliderItem/>}
             />

             <Title>Populares</Title>
             <SliderMovie
               horizontal={true}
               showsHorizontalScrollIndicator={false}
               data={[1,2,3,4]}
               renderItem={ ({ item }) => <SliderItem/>}
             />

             <Title>Mais votados</Title>

             <SliderMovie
               horizontal={true}
               showsHorizontalScrollIndicator={false}
               data={[1,2,3,4]}
               renderItem={ ({ item }) => <SliderItem/>}
             />

           </ScrollView>
        </Container>
    )
}

export default Home;