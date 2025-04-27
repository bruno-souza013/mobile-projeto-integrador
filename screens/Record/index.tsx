import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

export default function RecordScreen() {
  const [waveform, setWaveform] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newWaveform = Array.from({ length: 30 }, () =>
        Math.random() * 40 + 10 
      );
      setWaveform(newWaveform);
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>Calm Wave</Text>
        <Text style={styles.subtitle}>Bem vindo, Usuário!</Text>
      </View>
      <View style={styles.recordContainer}>
        <TouchableOpacity style={styles.recordButton}>
          <Text style={styles.recordButtonText}>Começar Gravação</Text>
          <Image
            source={require("../../assets/logos/mic.png")}
            style={styles.recordButtonIcon}
          />
        </TouchableOpacity>
        <View style={styles.waveformContainer}>
          {waveform.map((height, index) => (
            <View
              key={index}
              style={[styles.waveformBar, { height }]} 
            />
          ))}
        </View>
        <TouchableOpacity style={styles.stopButton}>
            <View style={styles.stopButtonOuter}>
              <View style={styles.stopButtonInner}> 
                <View style={styles.stopButtonSquad}>
              </View>
            </View>
            </View>
          </TouchableOpacity>
      </View>
    </View>
  );
}