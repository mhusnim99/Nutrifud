import React from "react";
import { Heading, Image, Text, FlatList, Center } from "native-base";
import { Box, ScrollView } from "native-base";
import { Button } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const Kategori = () => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate("Notifikasi")}
      >
      </TouchableOpacity>
    );
  };

  return (
    <>
      <SafeAreaView>
        <Box alignItems="center">
          <Button marginTop={"5"} marginBottom={"5"} backgroundColor={"yellow.500"} width={"252"} height={"46"} fontWeight={"extraBlack"} size={"lg"} onPress={() => navigation.navigate("Notifikasi")} >
          <Text color='white' fontSize={18}>Notifikasi</Text>
          </Button>
        </Box>
      </SafeAreaView>
    </>
  );
};

export default Kategori;
