import React from "react";
import { Box, View, Text, FlatList } from "native-base";
import { Header } from "../components/Header";
import { Balance } from "../components/Balance";
import { Moviments } from "../components/Moviments";
import { Actions } from "../components/Actions";

const list = [
  {
    id: 1,
    label: 'Conta de luz',
    value: '399,40',
    date: '17/09/22',
    type: false
  },
  {
    id: 2,
    label: 'Venda carro',
    value: '22.480,00',
    date: '17/09/22',
    type: true
  },
  {
    id: 3,
    label: 'Salário',
    value: '10.000,00',
    date: '17/09/22',
    type: true
  }
]

export function Home() {
  return (
    <View backgroundColor='#fafafa' flex={1}>
      <Header name="Daniel Melo" />
      <Balance current='9.500,90' expenses='-1.440,00' />

      <Actions/>

      <Text fontSize={18} fontWeight='bold' ml={14} mr={14} mt={14} >
        Últimas movimentações
      </Text>

      <FlatList ml={14} mr={14} 
        data={list} 
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <Moviments data={item} />}
      />
    </View>
  )
}