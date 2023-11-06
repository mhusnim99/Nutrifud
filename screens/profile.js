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
      <Box
        w={"80"} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1"
        p={"1"}
        flexDirection="row"
        borderRadius={10}
        flex={1}
        marginTop={"3"}
        marginLeft={"5"}
        bg={"yellow.500"}
      >
        <Image
          source={require("../assets/dda.jpg")}
          w="20"
          h="24"
          alt="Image Data"
          mb={"2"}
          mt={"2"}
          ml={"2"}
          borderRadius={"10"}
        />
        <Heading
          fontSize={"sm"}
          lineHeight={"xs"}
          ellipsizeMode="tail"
          numberOfLines={2}
          color="black"
          marginLeft={"4"}
          mt={"2"}
        >
          Ini adalah menu baru!
        </Heading>
      </Box>
    );
  };

  return (
    <>
      <SafeAreaView>
        <Box alignItems="center">
          <Button marginTop={"5"} marginBottom={"5"} backgroundColor={"yellow.500"} width={"252"} height={"46"} fontWeight={"extraBlack"} >
            Notifikasi
          </Button>
        </Box>
      </SafeAreaView>
      <FlatList
        data={datas}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

export default Kategori;
