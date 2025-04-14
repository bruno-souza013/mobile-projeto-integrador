import React, { useState } from 'react';
import { View } from 'react-native';
import { Input } from '../../components/Input';
import { styles } from './styles';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View style={styles.container}>
      <Input
        label="Login"
        value={email}
        onChangeText={setEmail}
        placeholder="Digite seu Login"
        keyboardType="email-address"
      />
      <Input
        label="Senha"
        value={senha}
        onChangeText={setSenha}
        placeholder="Digite sua senha"
        secureTextEntry
      />
    </View>
  );
}
