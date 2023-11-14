import React from "react";
import { Heading, Image, Text, FlatList, Center } from "native-base";
import { Box, ScrollView } from "native-base";
import { Button } from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import datas from "../dummy/datas";
import { SafeAreaView } from "react-native-safe-area-context";
import { HStack } from 'native-base';

const Notifikasi = () => {
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView>
        <Box bg='white'>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
              source={require("../assets/arrow.jpg")}
              style={{ width: 18, height: 18 }}
              alt='Image Data'
              ml={"5"}
              mt={"3"}
              size={"2xl"}
            />
          </TouchableOpacity>
        </Box>
        <Box alignItems="center" bg={"white"}>
          <Button marginTop={"5"} marginBottom={"5"} backgroundColor={"yellow.500"} width={"252"} height={"46"} fontWeight={"extraBlack"} size={"lg"} >
            Notifikasi
          </Button>
        </Box>
    </SafeAreaView >
      <Box bg={"white"}>
      <Box
          w={"80"} h={"115"} rounded="lg" 
          marginTop={"3"}
          marginLeft={"5"}
          bg={"yellow.500"}
        >
      <TouchableOpacity onPress={() => navigation.navigate('Resep')}>
      <HStack space={2} justifyContent="center">
    
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
            Ini adalah menu baru! Klik DIsini
          </Heading>
        </HStack>
        </TouchableOpacity>
        </Box>
      </Box>
    </>
  );
};

export default Notifikasi;
