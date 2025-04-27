import React, { useState } from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { Input } from "../../components/Input";
import { styles } from "./styles";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/wavetop.png')} style={styles.imageTop}/>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Bem-vindo!</Text>
      </View>
      <Input 
        label="Login"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Input
        label="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonlogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <Text style={styles.ouText}>OU</Text>
        <TouchableOpacity style={styles.buttonGoogle}>
          <Image
            source={require("../../assets/logos/google.png")}
            style={styles.imageGoogle}
          ></Image>
          <Text style={styles.googleText}>Entrar com o Google</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cadButtonContainer}>
        <TouchableOpacity style={styles.cadButton}>
          <Text style={styles.cadButtonText}>Não tem uma conta? Cadastre-se</Text>
        </TouchableOpacity>
      </View>
      <Image source={require('../../assets/images/wavebot.png')} style={styles.imageBot}/>
    </View>
  );
}
