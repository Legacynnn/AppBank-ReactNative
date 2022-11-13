import React from "react";
import { View, Text, HStack, useStyledSystemPropsResolver, Factory } from "native-base";
import { TouchableOpacity } from "react-native";
import {Feather} from '@expo/vector-icons'
import {MotiView, MotiText} from 'moti'

interface HeaderProps{
  name: string
}

export function Header({name}: HeaderProps) {
  const FactoryMotiNativeBaseView = Factory(MotiView);
  const FactoryMotiNativeBaseText = Factory(MotiText)

  return (
    <HStack backgroundColor="#8000ff" pt={47} pl={34} pr={34} pb={44}>
      <FactoryMotiNativeBaseView flex={1} alignItems="center" flexDirection="row" justifyContent="space-between"
        from={{
          translateY: -150,
          opacity: 0,
        }}
        animate={{
          translateY: 0,
          opacity: 1,
        }}
        transition={{
          type: "timing",
          duration: 800,
          delay: 300,
        }}
      >
        <FactoryMotiNativeBaseText fontSize={18} color="#fff" fontWeight="bold"
          from={{
            translateX: -300,
          }}
          animate={{
            translateX: 0,
          }}
          transition={{
            type: "timing",
            duration: 800,
            delay: 800,
          }}
        >
          {name}
        </FactoryMotiNativeBaseText>

        <View width={44} height={44} backgroundColor="gray.400" justifyContent={"center"} alignItems="center" borderRadius={44/2} >
          <TouchableOpacity activeOpacity={0.8}>
            <Feather name="user" size={27} color="#fff" />
          </TouchableOpacity>
        </View>
      </FactoryMotiNativeBaseView>
    </HStack>
  )
}