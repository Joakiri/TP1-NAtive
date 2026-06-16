import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert, ImageBackground } from 'react-native';

const VALID_USER = 'simon@galaxies.dev';
const VALID_PASS = '1234567';

export default function HomeScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === VALID_USER && password === VALID_PASS) {
      Alert.alert('✅ Éxito', '¡Bienvenido!');
    } else {
      Alert.alert('❌ Error', 'Usuario o contraseña incorrectos, vuelva a intentar');
    }
  };

  return (
        <View style={styles.container}>
        <Image source={require('@/assets/images/logo.png')} style={styles.logo} resizeMode="contain" />
        <TextInput style={styles.input} placeholder="usuario@email.com"
          value={email} onChangeText={setEmail} keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Contraseña"
          value={password} onChangeText={setPassword} secureTextEntry />
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
});