import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import { View } from 'react-native';
import React, { useState } from 'react';

export default function Login() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  return (
    <View>
      <CustomInput
        title="Correo electronico"
        value={email}
        type="email"
        onChange={setEmail}
      />

      <CustomInput
        title="Hola"
        value={password}
        type="password"
        onChange={setPassword}
      />

      <CustomButton
        title="Iniciar Sesion"
        onPress={() => {}}
        variant="primary"
      />

      <CustomButton
        title="Registrarme"
        onPress={() => {}}
        variant={'secondary'}
      />
      <CustomButton
        title="Cambiar contraseña"
        onPress={() => {}}
        variant={'tertiary'}
      />
    </View>
  );
}
