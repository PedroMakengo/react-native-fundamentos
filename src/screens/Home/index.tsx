import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  Alert,
} from 'react-native'
import { style } from './styles'
import { Participant } from '../../components/Participant'

export default function Home() {
  const participants = [
    'Pedro',
    'Débora',
    'Makengo',
    'Francisco',
    'Tiago',
    'Paulo',
    'Isabel',
    'Maria',
    'António',
    'Helder',
    'Pedro',
  ]
  // FUNÇÃO
  const handleParticipantAdd = () => {
    if (participants.includes('Pedro')) {
      return Alert.alert(
        'Participante Existe',
        'Já existe um participante na lista com esse nome.'
      )
    }
  }

  const handleParticipantRemove = (name: string): void => {
    Alert.alert('Remover', `Removeu o participante ${name}`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert('Deletado!'),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ])
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

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(`${item}`)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={style.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença.
          </Text>
        )}
      />
    </View>
  )
}
