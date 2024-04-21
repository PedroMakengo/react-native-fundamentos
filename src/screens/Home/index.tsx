import { Text, View } from 'react-native'
import { style } from './styles'

export default function Home() {
  return (
    <View style={style.container}>
      <Text style={style.eventName}>Nome do evento</Text>
      <Text style={style.eventDate}>Sexta, 16 de Abril de 2024</Text>
    </View>
  )
}
