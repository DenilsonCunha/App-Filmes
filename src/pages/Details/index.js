import React, { useState, useEffect } from "react";
import { 
  Container,
  Header,
  HeaderButton,
  Banner
} from "./style";

import { Feather, Ionicons } from '@expo/vector-icons';

import { useNavigation, useRout } from '@react-navigation/native';

function Detail() {
   const navigation = useNavigation();
   const rout = useRout();

  return (
    <Container>
      <Header>
        <HeaderButton>
          <Feather 
            name="arrow-left"
            size={28}
            color="#FFF"
          />
        </HeaderButton>
        <HeaderButton>
          <Ionicons 
            name="bookmark"   
            size={28}
            color="#FFF"
          />
        </HeaderButton>
      </Header>
    </Container>
  );
}

export default Detail;
