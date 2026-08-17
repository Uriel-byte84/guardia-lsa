// @ts-ignore
import "./global.css"; // Importante para que funcione NativeWind
import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { PresencialScreen } from "./src/screens/PresencialScreen";

export default function App() {
  return (
    // SafeAreaView evita que el contenido choque con la cámara o bordes del celular
    // Aquí usamos "bg-bg" que es el color gris clarito que definimos en tu tailwind.config.js
    <SafeAreaView className="flex-1 bg-bg">
      {/* StatusBar configura la barrita de hora/batería de arriba */}
      <StatusBar barStyle="dark-content" backgroundColor="#F7FAFC" />

      {/* Tu pantalla principal */}
      <PresencialScreen />

      {/* 
          TIP: Si quieres probar si Tailwind funciona sin entrar a PresencialScreen, 
          puedes descomentar las líneas de abajo:
      */}
      {/* 
      <View className="p-4 m-4 rounded-card bg-primary shadow-soft">
        <Text className="text-white font-bold text-center">
          ¡Tailwind y NativeWind activos! 🚀
        </Text>
      </View> 
      */}
    </SafeAreaView>
  );
}