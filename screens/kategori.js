import React from "react";
import { Heading, Image, Text, FlatList, Center } from "native-base";
import { Box, ScrollView } from "native-base";
import { Button } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import datas from "../datas/datas";
import { SafeAreaView } from "react-native-safe-area-context";

const Kategori = () => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate("BMI Kalkulator")}
      >
        <Box
          padding={"2"}
          marginLeft={"4"}
          marginRight={"4"}>
          <Box flex={1} display="flex" alignItems="center" justifyContent="center">
            <Image
              source={{ uri: item.image }}
              w="350"
              h="230"
              borderRadius={"lg"}
              alt="Image Data"
            />
          </Box>
        </Box>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <SafeAreaView>
        <Box alignItems="center">
          <Button marginTop={"5"} marginBottom={"5"} backgroundColor={"yellow.500"} width={"252"} height={"46"} fontWeight={"extraBlack"} >
            Kategori
          </Button>
        </Box>
      </SafeAreaView>
      <FlatList
        data={datas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

export default Kategori;
