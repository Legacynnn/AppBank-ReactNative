import React, {useState} from 'react'
import { View, Text, HStack, Factory} from 'native-base'
import {TouchableOpacity} from 'react-native'
import { MotiView, MotiText, AnimatePresence } from 'moti'


interface MovimentsProps {
  data: {
    id: number
    label: string
    value: string
    date: string
    type: boolean
  }
}

export function Moviments({data}: MovimentsProps) {

  const FactoryMotiNativeBaseView = Factory(MotiView);
  const FactoryMotiNativeBaseText = Factory(MotiText)

  const [showValue, setShowValue] = useState(false)

  return (
    <View flex={1} mb={21} borderBottomWidth={0.5} borderBottomColor='#DADADA' mt={13} >
      <TouchableOpacity onPress={() => setShowValue(!showValue)} >
        <Text color='#DADADA' fontWeight='bold' >{data.date}</Text>

        <HStack alignItems='center' justifyContent='space-between' mt={2} mb={7}>
          <Text fontWeight='bold' fontSize={16}>{data.label}</Text>

          {showValue === true ? (
            <AnimatePresence>
              <FactoryMotiNativeBaseText fontSize={15} fontWeight='bold' 
              color={data.type === true ? '#2ecc71' : '#e74c3c'}
              from={{
                translateX: 100,
              }}
              animate={{
                translateX: 0,
              }}
              transition={{
                type: "timing",
                duration: 500
              }}
              >
                {data.type === false ? `R$ -${data.value}` : `R$ ${data.value}`}
              </FactoryMotiNativeBaseText>
            </AnimatePresence>
          ) : (
            <AnimatePresence>
              <FactoryMotiNativeBaseView
                width={24}
                height={3}
                backgroundColor='#DADADA'
                borderRadius={8}
                from={{
                  opacity: 0
                }}
                animate={{
                  opacity: 1
                }}
                transition={{
                  type: "timing",
                }} 
              ></FactoryMotiNativeBaseView>
            </AnimatePresence>
          )}

        </HStack>
      </TouchableOpacity>
    </View>
  )
}