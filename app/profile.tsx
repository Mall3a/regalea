import { Stack } from "expo-router";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useState } from "react";

// Lista de deseos con imágenes constantes
const giftWishes = [
  {
    name: "Kindle Paperwhite",
    category: "Diamante",
    image: "https://www.w3schools.com/w3images/fjords.jpg", // Imagen constante
  },
  {
    name: "Set de acuarelas",
    category: "Oro",
    image: "https://www.w3schools.com/w3images/lights.jpg", // Imagen constante
  },
  {
    name: "Taza con diseño",
    category: "Plata",
    image: "https://www.w3schools.com/w3images/mountains.jpg", // Imagen constante
  },
  {
    name: "Libreta bonita",
    category: "Bronce",
    image: "https://www.w3schools.com/w3images/nature.jpg", // Imagen constante
  },
];

export default function Profile() {
  const [selectedGift, setSelectedGift] = useState(null); // Estado para el regalo seleccionado

  // Función para manejar la selección de un regalo
  const selectGift = (item) => {
    console.log(selectedGift); // Verifica el estado en la consola
    if (selectedGift) {
      Alert.alert(
        "Ya has seleccionado un regalo",
        "No puedes seleccionar otro regalo."
      );
    } else {
      setSelectedGift(item.name); // Asigna el regalo seleccionado
      Alert.alert(
        "¡Regalo seleccionado!",
        `Has seleccionado ${item.name} como tu regalo.`
      );
    }
  };

  return (
    <>
      <Stack.Screen options={{ title: "Perfil de Constanza Mallea" }} />
      <View style={{ flex: 1, alignItems: "center", paddingTop: 50 }}>
        <Image
          source={{ uri: "https://i.pravatar.cc/166" }}
          style={{
            width: 120,
            height: 120,
            borderRadius: 60,
            marginBottom: 20,
          }}
        />
        <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 8 }}>
          Constanza Mallea
        </Text>
        <Text style={{ fontSize: 16, marginBottom: 20, color: "#666" }}>
          Cosas que me gustaría recibir 🎁
        </Text>

        <FlatList
          data={giftWishes}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ paddingBottom: 100 }}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => selectGift(item)}>
              <View
                style={{
                  backgroundColor: "#fff",
                  padding: 12,
                  marginVertical: 8,
                  borderRadius: 12,
                  width: 300,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                  shadowRadius: 4,
                  elevation: 3,
                  alignItems: "center",
                }}
              >
                <Image
                  source={{ uri: item.image }}
                  style={{ width: 150, height: 150, borderRadius: 8 }}
                  resizeMode="cover"
                />
                <Text
                  style={{ fontSize: 18, fontWeight: "bold", marginTop: 10 }}
                >
                  {item.name}
                </Text>
                <Text style={{ fontSize: 14, color: "#888" }}>
                  Categoría: {item.category}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
}
