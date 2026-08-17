import { View, Text } from 'react-native';

export const VideoPlayer = ({ termino }: { termino: string }) => {
  return (
    <View className="border-2 border-blue-500 rounded-2xl overflow-hidden bg-black aspect-video justify-center items-center">
      {/* Tip: Aquí es donde luego importarás { Video } de 'expo-av' */}
      <Text className="text-white font-medium text-center p-4">
        🎥 Reproduciendo seña LSA: {"\n"}
        <Text className="text-blue-400 text-lg uppercase">{termino}</Text>
      </Text>
    </View>
  );
};