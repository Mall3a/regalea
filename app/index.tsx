import { useRouter } from "expo-router";
import { View, Text, Pressable } from "react-native";
import { Stack } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ title: "Inicio" }} />

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Bienvenido a regalea</Text>
        <Pressable onPress={() => router.push("/profile")}>
          <Text style={{ marginTop: 20, color: "blue" }}>
            Ir a perfil de Constanza
          </Text>
        </Pressable>
      </View>
    </>
  );
}
