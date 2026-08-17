import { CameraView, useCameraPermissions } from "expo-camera";
import { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";

type Props = {
  doctorMessage: string;
};

export function PatientCard({ doctorMessage }: Props) {
  const [permission, requestPermission] = useCameraPermissions();

  useEffect(() => {
    if (!permission) return;
    if (!permission.granted) {
      requestPermission();
    }
  }, [permission, requestPermission]);

  return (
    <View className="flex-1 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
      <Text className="mb-3 text-base font-semibold text-gray-800">
        Paciente - visor en vivo
      </Text>

      {/* Visor de Cámara */}
      <View className="flex-1 overflow-hidden rounded-2xl border border-gray-100 bg-slate-100">
        {permission?.granted ? (
          <CameraView style={{ flex: 1 }} facing="front" />
        ) : (
          <View className="flex-1 items-center justify-center p-4">
            <Text className="mb-3 text-center text-sm text-gray-500">
              Necesitamos permiso de cámara para mostrar el visor.
            </Text>
            <TouchableOpacity
              className="rounded-xl bg-blue-100 px-4 py-2.5"
              onPress={requestPermission}
            >
              <Text className="font-medium text-blue-700">Habilitar cámara</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* Recuadro de Mensaje Traducido */}
      <View className="mt-4 rounded-2xl border border-blue-100 bg-blue-50 p-4">
        <Text className="mb-1 text-xs uppercase tracking-wide text-blue-400">
          Mensaje del médico
        </Text>
        <Text className="text-2xl font-bold leading-8 text-blue-900">
          {doctorMessage || "Esperando mensaje..."}
        </Text>
      </View>
    </View>
  );
}