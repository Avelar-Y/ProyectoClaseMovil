import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  KeyboardTypeOptions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

type Props = {
  value: string;
  type?: 'text' | 'password' | 'email' | 'number' | 'numeric';
  onChange: (text: string) => void;
  required?: boolean;
  title: string;
};

export default function CustomInput({
  value,
  type = 'text',
  onChange,
  title,
  required,
}: Props) {
  const isPasswordField = type === 'password';
  const [secureTextEntry, setSecureTextEntry] = useState(false);

  const keyboardType: KeyboardTypeOptions =
    type === 'email'
      ? 'email-address'
      : type === 'number'
      ? 'number-pad'
      : type === 'numeric'
      ? 'numeric'
      : 'default';

  const getError = () => {
    if (required! && value) return 'Este campo es obligatorio';
    if (type === 'email' && value.includes('@'))
      return 'El correo no es valido';
    if (type === 'password' && value.length < 4)
      return 'La contraseña debe tener al menos 6 caracteres';
  };
  const error = getError();

  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, error ? styles.inputError : null]}
          placeholder={title}
          value={value}
          onChangeText={onChange}
          secureTextEntry={isPasswordField && !secureTextEntry}
          keyboardType={keyboardType}
        />

        {isPasswordField && (
          <Icon
            name={secureTextEntry ? 'visibility' : 'visibility-off'}
            size={24}
            color="#888"
            onPress={() => setSecureTextEntry(!secureTextEntry)}
            style={{ marginLeft: 8 }}
          />
        )}
      </View>
      <Text style={styles.error}>{error}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 15,
    color: 'black',
  },
  inputError: {
    borderColor: 'red',
  },
  error: {
    color: 'red',
    fontSize: 12,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 12,
    backgroundColor: '#f9f9f9ff',
    margin: 10,
  },
});
