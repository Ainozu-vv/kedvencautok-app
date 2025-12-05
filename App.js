import React, { act, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  Button,
  Alert,
  Pressable,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"; //npm i !!!!!
import CarCard from "./src/CarCard";
import { CARS, CATEGORIES, BRANDS } from "./src/data";
import { appStyles as styles } from "./src/style";

export default function App() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeBrand, setActiveBrand] = useState("all");
  const [favorites, setFavorites] = useState([]);
  const [currentScreen, setCurrentScreen] = useState("home");
  const [selectedCar, setSelectedCar] = useState(null);

  const getFilteredCars = () => {
    let list = [...CARS];
    if (activeCategory === "favorites") {
      list = list.filter((car) => favorites.includes(car.id));
    } else if (activeCategory !== "all") {
      list = list.filter((car) => car.category === activeCategory);
    }

    if (activeBrand !== "all") {
      list = list.filter((car) => car.brand === activeBrand);
    }

    return list;
  };

  const filteredCars = getFilteredCars();
  const favoriteCount = favorites.length;
  const visibleCarsCount = filteredCars.length;

  const handleToggleFavorite = (carId) => {
    setFavorites((prev) => {
      prev.includes(carId)
        ? prev.filter((id) => id !== carId)
        : [...prev, carId];
    });
  };

  const handleSelectCar = (car) => {
    setSelectedCar(car);
    setCurrentScreen("details");
  };

  const handleBackToHome = () => {
    setCurrentScreen("home");
    setSelectedCar(null);
  };

  const handleClearFavorites = () => {
    if (favoriteCount == 0) {
      Alert.alert("Nincs mit törölni", "Nincsenek kedvenc autóid.");
      return;
    }

    Alert.alert(
      "Kedvencek törlése",
      "Biztosan törölni szeretnéd az összes kedvenc autót?",
      [
        { text: "Mégse", style: "cancel" },
        {
          text: "Igen",
          style: "destructive",
          onPress: () => {
            setFavorites([]);
          },
        },
      ]
    );
  };

  const handleShowSpecs = () => {
    if (!selectedCar) return;
    Alert.alert(
      `${selectedCar.name}`,
      `Teljesítmény:${selectedCar.powerHp} LE \n0-100km/h: ${selectedCar.zeroToHundred} s\nHajtás: ${selectedCar.drivetrain}`
    );
  };

  const renderCategoryButtons = () => {
    <View style={styles.categoryRow}>
      {CATEGORIES.map((cat) => {
        const isActive = cat.key === activeCategory;
        return (
          <Pressable
            key={cat.key}
            onPress={() => setActiveCategory(cat.key)}
            style={[
              styles.categoryButton,
              isActive && styles.categoryButtonActive,
            ]}
          >
            <Text
              style={[
                styles.categoryButtonText,
                isActive && styles.categoryButtonTextActive,
              ]}
            >
              {cat.label}
            </Text>
          </Pressable>
        );
      })}
    </View>;
  };

  const renderBrandButtons = () => {
    <View style={styles.brandRow}>
      {BRANDS.map((brand) => {
        const isActive = brand.key === activeBrand;
        return (
          <Pressable
            key={brand.key}
            onPress={() => setActiveBrand(brand.key)}
            style={[styles.brandButton, isActive && styles.brandButtonActive]}
          >
            <Text
              style={[
                styles.categoryButtonText,
                isActive && styles.categoryButtonTextActive,
              ]}
            >
              {brand.label}
            </Text>
          </Pressable>
        );
      })}
    </View>;
  };

  const getCategoryLabel = (key) => {
    const category = CATEGORIES.find((cat) => cat.key === key);
    return category ? category.label : "Ismeretlen";
  };

  const renderHomeScreen = () => {
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri: "https://media.porsche.com/20250321/LSE_W85_LACK_VEILCHENLILAMETALLIC_METALLIC_911_Static_Bg_alpha.png",
          }}
          style={styles.headerImage}
          imageStyle={styles.headerImageInner}
        >
          <View style={styles.headerOverlay}>
            <Text style={styles.appTitle}>Dream Garage</Text>
            <Text style={styles.appSubtitle}>
              Válaszd ki a kedvenc autóidat márka és kategória szerint!
            </Text>
          </View>
        </ImageBackground>

        {renderCategoryButtons()}

        {renderBrandButtons()}

        <View style={styles.infoRow}>
          <Text style={styles.infoText}>Látható autók: {visibleCarsCount}</Text>
          <Text style={styles.infoText}>Kedvencek: {favoriteCount}</Text>
        </View>

        <View style={styles.clearButtonContainer}>
          <Button
            title="Kedvencek törlése"
            color="#790fa5"
            onPress={handleClearFavorites}
          />
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent}>
          {filteredCars.length === 0 ? (
            <Text style={styles.emptyText}>
              Itt nincs megjeleníthető autó a szűrők alapján.
            </Text>
          ) : (
            filteredCars.map((car) => (
              <CarCard
                key={car.id}
                car={car}
                isFavorite={favorites.includes(car.id)}
                onToggleFavorite={() => handleToggleFavorite(car.id)}
                onSelect={() => handleSelectCar(car)}
              />
            ))
          )}
        </ScrollView>
      </View>
    </SafeAreaView>;
  };

  const renderDetailsScreen = () => {
    if (!selectedCar) {
      return (
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.container}>
            <Text style={styles.emptyText}>
              Nincs kiválasztott autó. Térj vissza a listához.
            </Text>
            <Button title="Vissza" onPress={handleBackToHome} color="#790FA5" />
          </View>
        </SafeAreaView>
      );
    }

    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <ImageBackground
            source={{ uri: selectedCar.image }}
            style={styles.detailsImage}
            imageStyle={styles.detailsImageInner}
          >
            <View style={styles.detailsOverlay}>
              <Text style={styles.detailsTitle}>{selectedCar.name}</Text>
              <Text style={styles.detailsCategory}>
                {selectedCar.brand} {getCategoryLabel(selectedCar.category)}
              </Text>
            </View>
          </ImageBackground>

          <View style={styles.detailsContent}>
            <Text style={styles.detailsSpec}>
              🐎 Teljesítmény: {selectedCar.powerHp} LE
            </Text>
            <Text style={styles.detailsSpec}>
              ⏱ 0–100 km/h: {selectedCar.zeroToHundred} s
            </Text>
            <Text style={styles.detailsSpec}>
              ⚙️ Hajtás: {selectedCar.drivetrain}
            </Text>

            <Text style={styles.detailsDescription}>
              {selectedCar.description}
            </Text>

            <View style={styles.detailsButtonsRow}>
              <View style={styles.detailsButton}>
                <Button
                  title="Vissza"
                  onPress={handleBackToHome}
                  color="#790FA5"
                />
              </View>
              <View style={styles.detailsButton}>
                <Button
                  title="Részletek"
                  onPress={handleShowSpecs}
                  color="#790FA5"
                />
              </View>
            </View>

            <View style={styles.detailsButton}>
              <Button
                title={
                  favorites.includes(selectedCar.id)
                    ? "Kedvencekből eltávolít"
                    : "Kedvencnek jelöl"
                }
                onPress={() => handleToggleFavorite(selectedCar.id)}
                color="#790FA5"
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  };

  return (
    <SafeAreProvider>
      {currentScreen === "home" ? renderHomeScreen() : renderDetailsScreen()}
    </SafeAreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
