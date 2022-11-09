import React, { useState } from 'react'
import { Text, View, Button } from 'react-native'

export const ContadorScreen = () => {

    const [contador, setcontador] = useState(10);

    
  return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
        }}>
            <Text style={{
                textAlign: 'center',
                fontSize: 40,
                top: -15,
            }}>
                Contador: {contador} 
            </Text>

            <Button 
                title="Click"
                onPress={() => setcontador(contador+1)}                
            />
        </View>
  )
}
