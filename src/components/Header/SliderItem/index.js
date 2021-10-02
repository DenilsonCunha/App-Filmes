import React from 'react'

import {
   Container,
   BannerItem,
   Title,
   RateContainer,
   Rate
} from './style'

import { Ionicons } from '@expo/vector-icons'

function SliderItem(){
    return(
       <Container activeOpacity={0.7} >
           <BannerItem 
             source={{ uri:'https://play-lh.googleusercontent.com/nz5s7-HJ3iijnvitzCwsa_oD5l7saKAnF_Hv3qGtsP6dtsXTqESZmfuQKqyZZD4UywyB'}}
             />
           <Title numberOfline={1}>Vingadores</Title>

           <RateContainer>
               <Ionicons name="md-star" size={12} color="#E7A74e" />
               <Rate>9/10</Rate>
           </RateContainer>
       </Container>
    )
}

export default SliderItem