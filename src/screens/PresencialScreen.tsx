import { useState } from "react";
import { Text, useWindowDimensions, View } from "react-native";
import { DoctorPanel } from "../components/doctor/DoctorPanel";
import { PatientCard } from "../components/Paciente/PacienteCard";

export function PresencialScreen() {
  const [doctorMessage, setDoctorMessage] = useState("");

  // Lógica para detectar el tamaño y orientación de la pantalla
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  const isLargeScreen = width >= 900;
  const useSideBySide = isLandscape || isLargeScreen;

  return (
    <View className="flex-1 bg-slate-50 p-4">

      {/* Header: Indicador de Estado */}
      <View className="mb-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
        <View className="flex-row items-center justify-between">
          <View>
            <View className="mb-1 h-1 w-8 rounded-full bg-blue-600" />
            <Text className="text-sm font-bold text-gray-800">
              Modo presencial - Guardia LSA
            </Text>
          </View>
          <View className="rounded-xl bg-green-50 px-3 py-1.5 border border-green-100">
            <Text className="text-xs font-medium text-green-700">En vivo</Text>
          </View>
        </View>
      </View>

      {/* Cuerpo: Distribución Dinámica */}
      <View className={`flex-1 gap-4 ${useSideBySide ? "flex-row" : "flex-col"}`}>

        {/* Lado del PACIENTE (Ocupa más espacio para que se vea bien la cámara/seña) */}
        <View style={{ flex: useSideBySide ? 7 : 6 }}>
          <PatientCard doctorMessage={doctorMessage} />
        </View>

        {/* Lado del DOCTOR (Controles) */}
        <View style={{ flex: useSideBySide ? 3 : 4 }}>
          <DoctorPanel onSendMessage={setDoctorMessage} />
        </View>

      </View>
    </View>
  );
}