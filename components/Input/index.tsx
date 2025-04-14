import React, { useState } from 'react';
import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';

type InputProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric';
};

export const Input = ({ label, value, onChangeText, placeholder, secureTextEntry = false, keyboardType = 'default' }: InputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(!secureTextEntry);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={!isPasswordVisible}
          keyboardType={keyboardType}
          style={styles.input}
        />
        {secureTextEntry && (
          <TouchableOpacity onPress={() => setIsPasswordVisible(prev => !prev)}>
            <Ionicons
              name={isPasswordVisible ? 'eye-off' : 'eye'}
              size={20}
              color="#aaa"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
