import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {  SafeAreaView,  StyleSheet,  Text,  View,  ImageBackground,  Image,  TextInput,  Alert,  TouchableOpacity,  Pressable,
} from 'react-native';

const fondo =  require('./assets/fondo.jpg');

const perfil = require('./assets/fotoPerfil.png'); // Tu imagen subida como archivo

export default function App() {
  const [mensaje, setMensaje] = useState('');


  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground source={fondo} style={styles.fondo}> 
        <View style={styles.card}>
          <Image source={perfil} style={styles.fotoPerfil} />
          <Text style={styles.nombre}>Jazmin Beigel</Text>
          <Text style={styles.titulo}>Alumna de ort</Text>

          <View style={styles.iconos}>
            <Text style={styles.icono}>💻</Text>
            <Text style={styles.icono}>🔗</Text>
            <Text style={styles.icono}>✉️</Text>
            <Text style={styles.icono}>📞</Text>
          </View>

          <Pressable
            onPress={() => Alert.alert('Portfolio', 'Mostrando portfolio...')}
            style={({ pressed }) => [
              styles.botonPortfolio,
              { opacity: pressed ? 0.6 : 1 },
            ]}
          >
            <Text style={styles.botonTexto}>Ver Portfolio</Text>
          </Pressable>

          <TextInput
            style={styles.input}
            placeholder="Escribe un mensaje..."
            placeholderTextColor="#999"
            value={mensaje}
            onChangeText={setMensaje}
          />

          <TouchableOpacity style={styles.botonContactar}>
            <Text style={styles.botonTexto}>Contactar</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  fondo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 20,
    alignItems: 'center',
    width: '85%',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 5,
  },
  fotoPerfil: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#f5a623',
    borderWidth: 4,
    marginBottom: 10,
  },
  nombre: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c2c54',
  },
  titulo: {
    fontStyle: 'italic',
    color: '#4b6584',
    marginBottom: 10,
  },
  iconos: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 10,
  },
  icono: {
    fontSize: 24,
  },
  botonPortfolio: {
    backgroundColor: '#2c2c54',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  botonContactar: {
    backgroundColor: '#4b7bec',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  botonTexto: {
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    width: '100%',
    marginTop: 10,
    backgroundColor: '#f1f2f6',
  },
});
