import React from "react";
import { Heading, Image, Text, Center, Stack, Input, Box, Button } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";



const Kategori = () => {
  return (
    <>
      <SafeAreaView>
        <Box flex={1} display="flex" alignItems="center" justifyContent="center">
        
        </Box>
      </SafeAreaView>
      <SafeAreaView>
        <Box alignItems="center">
          <Button marginTop={"5"} marginBottom={"5"} backgroundColor={"yellow.500"} width={"252"} height={"46"} fontWeight={"extraBlack"} >
            Kategori
          </Button>
        </Box>
      </SafeAreaView>
    </>
  );
};

export default Kategori;