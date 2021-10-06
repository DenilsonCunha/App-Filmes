import React, { useState, useEffect } from 'react'
import { ScrollView, ActivityIndicator } from 'react-native'


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
import { getListMovies, randomBanner} from '../../utills/movies'


function Home(){

  const [nowMovies, setnowMovies] = useState([]);
  const [popularMovies, setpopularMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [bannerMovie, setBannerMovie] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
       let isActive = true;
       const ac = new AbortController();


       async function getMovies(){
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

  if(isActive){
         const nowList = getListMovies(10, nowData.data.results);
         const popularList = getListMovies(10, popularData.data.results);
         const topList = getListMovies(10, topData.data.results);

         setBannerMovie(nowData.data.results[randomBanner(nowData.data.results)])
         setnowMovies(nowList);
         setpopularMovies(popularList);
         setTopMovies(topList);
         setLoading(false);

        }

        

       }

       getMovies();

       return () => {
         isActive = false;
         ac.abort();
       }


  }, [])

  if(loading){
    return(
      <Container>
        <ActivityIndicator size="large" color="#FFF"/>
      </Container>
    )
  }


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
                 source={{ uri: `https://image.tmdb.org/t/p/original/${bannerMovie.poster_path}` }}
                 />
             </BannerButton>

             <SliderMovie
               horizontal={true}
               showsHorizontalScrollIndicator={false}
               data={nowMovies}
               renderItem={ ({ item }) => <SliderItem data={item}/>}
               keyExtractor={ (item) => String(item.id) }
             />

             <Title>Populares</Title>
             <SliderMovie
               horizontal={true}
               showsHorizontalScrollIndicator={false}
               data={popularMovies}
               renderItem={ ({ item }) => <SliderItem data={item}/>}
               keyExtractor={ (item) => String(item.id) }
             />

             <Title>Mais votados</Title>

             <SliderMovie
               horizontal={true}
               showsHorizontalScrollIndicator={false}
               data={topMovies}
               renderItem={ ({ item }) => <SliderItem data={item}/>}
               keyExtractor={ (item) => String(item.id) }
             />

           </ScrollView>
        </Container>
    )
}

export default Home;