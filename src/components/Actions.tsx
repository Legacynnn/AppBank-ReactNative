import React from 'react'
import { TouchableOpacity } from 'react-native'
import { View, Text, ScrollView, HStack, Center } from 'native-base'

import {AntDesign} from '@expo/vector-icons'

export function Actions() {
  return (
    <ScrollView maxH={84} mb={14} mt={18} px={14} horizontal={true} showsHorizontalScrollIndicator={false} >
      <HStack>
        <TouchableOpacity>
          <Center >
            <View backgroundColor='#ecf0f1' h={60} w={60} borderRadius={30} justifyContent='center' alignItems='center' >
              <AntDesign name="addfolder" size={26} color="#000" />
            </View>
            <Text mt={1} textAlign='center' fontWeight='bold' >Entradas</Text>
          </Center>
        </TouchableOpacity>

        <TouchableOpacity>
          <View ml={31}>
            <Center>
              <View backgroundColor='#ecf0f1' h={60} w={60} borderRadius={30} justifyContent='center' alignItems='center' >
                <AntDesign name="tagso" size={26} color="#000" />
              </View>
              <Text mt={1} textAlign='center' fontWeight='bold' >Compras</Text>
            </Center>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View ml={31}>
            <Center>
              <View backgroundColor='#ecf0f1' h={60} w={60} borderRadius={30} justifyContent='center' alignItems='center' >
                <AntDesign name="creditcard" size={26} color="#000" />
              </View>
              <Text mt={1} textAlign='center' fontWeight='bold' >Carteira</Text>
            </Center>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View ml={31}>
            <Center>
              <View backgroundColor='#ecf0f1' h={60} w={60} borderRadius={30} justifyContent='center' alignItems='center' >
                <AntDesign name="barcode" size={26} color="#000" />
              </View>
              <Text mt={1} textAlign='center' fontWeight='bold' >Boletos</Text>
            </Center>
          </View>
        </TouchableOpacity>
      </HStack>
    </ScrollView>
  )
}