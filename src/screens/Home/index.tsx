import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { style } from './styles'

export default function Home() {
  // FUNÇÃO
  const handleParticipantAdd = () => {
    console.log('Você clicou no botão de adicionar!')
  }
  return (
    <View style={style.container}>
      <Text style={style.eventName}>Nome do evento</Text>
      <Text style={style.eventDate}>Sexta, 16 de Abril de 2024</Text>

      <View style={style.form}>
        <TextInput
          style={style.input}
          placeholder="Nome do participante"
          placeholderTextColor={'#6b6b6b'}
        />

        <TouchableOpacity style={style.button} onPress={handleParticipantAdd}>
          <Text style={style.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
