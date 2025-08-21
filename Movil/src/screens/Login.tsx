import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import { View } from 'react-native';
import React, { useState } from 'react';

export default function Login() {
  const [email, setemail] = useState('');
  return (
    <View>
      <CustomButton title="Iniciar Sesion" onPress={() => {}} />
      <CustomInput
        title="Hola"
        value={email}
        type="email"
        onChange={setemail}
      />

      <CustomButton
        title="Registrarme"
        onPress={() => {}}
        variant={'secondary'}
      />
      <CustomInput
        title="Hola"
        value="registrar"
        type="email"
        onChange={() => {}}
      />
      <CustomButton
        title="Cambiar contraseña"
        onPress={() => {}}
        variant={'tertiary'}
      />
    </View>
  );
}
