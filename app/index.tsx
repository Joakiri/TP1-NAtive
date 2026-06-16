import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert, ImageBackground } from 'react-native';

const VALID_USER = 'soyjoakiri@gmail.com';
const VALID_PASS = 'mipodita123';

export default function HomeScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [esExito, setEsExito] = useState(false);

  const handleLogin = () => {
    if (email === VALID_USER && password === VALID_PASS) {
      Alert.alert('✅ Éxito', '¡Bienvenido!');
      setMensaje('¡Bienvenido!');
      setEsExito(true);
      console.log("lenda pibe");
    } else {
      Alert.alert('❌ Error', 'Usuario o contraseña incorrectos, vuelva a intentar');
      setMensaje('Usuario o contraseña incorrectos, vuelva a intentar');
      setEsExito(false);
      console.log("mal ahi gatito");
    }
  };

  return (
        <View style={styles.container}>
      <Image source={require('@/assets/images/logo.png')} style={styles.logo} resizeMode="contain" />
      <TextInput style={styles.input} placeholder="usuario@email.com"
        value={email} onChangeText={setEmail} keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Contraseña"
        value={password} onChangeText={setPassword} secureTextEntry />
      {mensaje ? (
        <Text style={[styles.mensaje, esExito ? styles.exito : styles.error]}>
          {mensaje}
        </Text>
      ) : null}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>INGRESAR</Text>
      </TouchableOpacity>
      <Text style={styles.link}>Olvidaste la clave?</Text>
      <Text style={styles.link}>Crear Cuenta</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1 },
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  logo: { width: 200, height: 100, marginBottom: 32 },
  input: { width: '100%', borderWidth: 1, borderColor: '#ccc', borderRadius: 6,
    padding: 12, marginBottom: 12, backgroundColor: '#fff' },
  button: { width: '100%', backgroundColor: '#7B5CF0', padding: 14,
    borderRadius: 6, alignItems: 'center', marginBottom: 16 },
  buttonText: { color: '#fff', fontWeight: 'bold', letterSpacing: 1 },
  link: { color: '#333', marginTop: 8 },
  mensaje: { marginBottom: 12, textAlign: 'center', fontWeight: 'bold' },
  exito: { color: 'green' },
  error: { color: 'red' },
});