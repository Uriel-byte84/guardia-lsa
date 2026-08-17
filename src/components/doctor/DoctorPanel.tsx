import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { QuickReply } from "../../types/communication";

type Props = {
  onSendMessage: (message: string) => void;
};

// Esto coincide con tu tipo QuickReply
const quickReplies: QuickReply[] = ["SI", "NO", "ESPERE"];

export function DoctorPanel({ onSendMessage }: Props) {
  const [text, setText] = useState("");

  const handleSend = () => {
    const value = text.trim();
    if (!value) return;
    onSendMessage(value);
    setText(""); // Limpia el input después de enviar
  };

  return (
    <View
      className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm"
      style={{
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
      }}
    >
      <Text className="mb-1 text-base font-semibold text-gray-800">
        Médico - panel de mensajes
      </Text>
      <Text className="mb-4 text-xs text-gray-400">
        Escribí o usá respuestas rápidas para asistir al paciente.
      </Text>

      {/* Input de texto */}
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Escriba un mensaje..."
        placeholderTextColor="#9CA3AF"
        className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800"
      />

      {/* Botón Enviar Principal */}
      <TouchableOpacity
        onPress={handleSend}
        className="mt-3 items-center rounded-2xl bg-blue-600 px-4 py-3"
      >
        <Text className="font-semibold text-white">Enviar Mensaje</Text>
      </TouchableOpacity>

      {/* Separador visual */}
      <View className="my-4 h-[1px] bg-gray-100" />

      {/* Respuestas rápidas */}
      <View className="flex-row flex-wrap gap-2">
        {quickReplies.map((reply) => (
          <TouchableOpacity
            key={reply}
            onPress={() => onSendMessage(reply)}
            className="flex-1 min-w-[80px] items-center rounded-xl border border-blue-100 bg-blue-50 py-3"
          >
            <Text className="font-bold text-blue-700">{reply}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}