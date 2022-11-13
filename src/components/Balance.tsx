import React from 'react'
import { View, Text, HStack, Factory } from 'native-base'
import {MotiView} from 'moti'

interface BalanceProps{
  current: string
  expenses: string
}

export function Balance({current, expenses}: BalanceProps) {

  const FactoryMotiNativeBaseView = Factory(MotiView);

  return (
    <FactoryMotiNativeBaseView flexDirection="row" backgroundColor='#FFF' justifyContent='space-between' pl={18} pr={18} mt={-23} ml={14} mr={14} borderRadius={4} pt={22} pb={22} 
      from={{
        rotateX: '-100deg',
        opacity: 0
      }}
      animate={{
        rotateX: '0deg',
        opacity: 1
      }}
      transition={{
        type: "timing",
        delay: 300,
        duration: 900
      }}
    >
      <View>
        <Text fontSize={20} color='#DADADA'>Saldo</Text>
        <HStack alignItems='center'>
          <Text color='#DADADA' mr={1} >R$</Text>
          <Text fontSize={17} color='#2ECC61' >{current}</Text>
        </HStack>
      </View>

      <View>
        <Text fontSize={20} color='#DADADA' >Gastos</Text>
        <HStack alignItems='center'>
          <Text color='#DADADA' mr={1} >R$</Text>
          <Text fontSize={17} color='#e74c3c' >{expenses}</Text>
        </HStack>
      </View>


    </FactoryMotiNativeBaseView>
  )
}