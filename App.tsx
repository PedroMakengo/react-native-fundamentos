import { Text, View, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={style.container}>
      <Text style={style.eventName}>Nome do evento</Text>
      <Text style={style.eventDate}>Sexta, 16 de Abril de 2024</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },

  eventName: {
    color: '#fdfcfe',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },

  eventDate: {
    color: '#6b6b6b',
    fontSize: 16,
  },
})
