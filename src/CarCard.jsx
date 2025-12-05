import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { carCardStyles as styles } from "./style";

const CarCard = ({ car, isFavorite, onToggleFavorite, onPressDetails }) => {
  return (
    <Pressable style={styles.card} onPress={onPressDetails}>
      <Image source={{ uri: car.image }} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.titleRow}>
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>{car.name}</Text>
            <Text style={styles.brand}>{car.brand}</Text>
          </View>

          <Pressable
            onPress={(e) => {
              e.stopPropagation();
              onToggleFavorite();
            }}
            style={styles.favoriteButton}
          >
            <Text style={styles.favoriteText}>{isFavorite ? "❤️" : "🤍"}</Text>
          </Pressable>
        </View>

        <Text style={styles.category}>
          Kategória: {formatCategory(car.category)}
        </Text>

        <View style={styles.specRow}>
          <Text style={specText}>🐎 {car.powerHp} LE</Text>
          <Text style={specText}>⏲️ {car.zeroToHundred} s</Text>
          <Text style={specText}>⚙️ {car.drivetrain}</Text>
        </View>

        <Text style={styles.description} numberOfLines={2}>
          {car.description}
        </Text>

        <Text style={styles.detailsHint}>
          A részletekhez nyomd meg a kártyát.
        </Text>
      </View>
    </Pressable>
  );
};

const CATEGORY_LABELS = {
  sport: "Sport",
  suv: "SUV",
  ev: "Elektromos",
  classic: "Klasszikus",
};

function formatCategory(categoryKey) {
  return CATEGORY_LABELS[categoryKey] || "Ismeretlen";
}

/*function formatCategory(categoryKey) {
    switch (categoryKey) {
        case 'sport':
            return 'Sport';
        case 'suv':
            return 'SUV';
        case 'ev':
            return 'Elektromos';
        case 'classic': 
            return 'Klasszikus';
        default:
            return 'Ismeretlen';
    }
}*/

export default CarCard;
