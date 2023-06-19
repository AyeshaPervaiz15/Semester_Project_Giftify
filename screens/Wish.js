import React, { useLayoutEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View, Image, FlatList } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

const getGift = (name, recipientAge, interest, gift) => {
  // Implement your gift recommendation logic here
  // You can use the recipientGender, recipientAge, and interest parameters to determine the recommended gift

  // Return the recommended gift
  return null;
};

const Wish = () => {
  const route = useRoute();
  const { name, recipientAge, interest, gift, flatListData: initialFlatListData } = route.params;

  const [flatListData, setFlatListData] = useState(initialFlatListData || []);
  // Implement your gift recommendation logic here based on the received parameters
  const recommendedGift = getGift(name, recipientAge, interest, gift);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Gifts for wishlist",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#8b0000",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
    });
  }, []);

  const pressableData = [
    {
      title: "Gift Recommendation",
      description: `Gender: ${name}\nAge: ${recipientAge}\nInterest: ${interest}\nGift for Wishlist: ${gift}`,
      style: {
        width: 200,
        height: 150,
        marginTop: 10,
        borderColor: "#ff8c00",
        backgroundColor: "#8b0000",
        borderRadius: 10,
        padding: 10,
        marginHorizontal: 20,
        marginTop: 30,
      },
      logoStyle: styles.logo,
    },
    // Add additional items to display in the FlatList
  ];

  const handleAddItem = () => {
    const newItem = { id: Date.now().toString(), title: "WhishList",
    description: `Recipient_Name: ${name}\nAge: ${recipientAge}\nInterest: ${interest}\nGift for Wishlist: ${gift}`,
    style: {
      width: 200,
      height: 150,
      marginTop: 10,
      borderColor: "#ff8c00",
      backgroundColor: "#8b0000",
      borderRadius: 10,
      padding: 10,
      marginHorizontal: 20,
      marginTop: 30,
    },
    logoStyle: styles.logo, };
    setFlatListData((prevData) => [...prevData, newItem]);
  };

  const renderItem = ({ item }) => (
    <Pressable style={styles.flatListItem}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Image source={require('../assets/logo.png')} style={styles.logoStyle} />
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.giftRecommendationText}>Gift Recommendation</Text>
      <Text style={styles.recommendedGiftText}>{recommendedGift}</Text>
    
      <ScrollView>
        {pressableData.map((item, index) => (
          <Pressable key={index} style={item.style}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Image source={require('../assets/logo.png')} style={styles.logoStyle} />
          </Pressable>
        ))}
<ScrollView>
   <Text style={{ color:"#8b0000" ,marginHorizontal: 20, fontSize: 17,textAlign: "center", fontWeight: "500" ,marginTop:20}} >Wishlist</Text>
  <FlatList
        data={flatListData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
      /></ScrollView>
      

      </ScrollView>

      <Pressable
       
         style={{
           marginTop: 40,
           justifyContent: "center",
           alignItems: "center",
         }}
         onPress={handleAddItem}
       >
        <Text style={{
      textAlign: "center",
      fontWeight: "500",
      padding:20,
      color: '#8b0000',
      fontSize: 17,
      fontWeight: 'bold',
      textDecorationLine: 'underline',
      textDecorationStyle:'solid',
    
    
      }}>Add Item</Text>
      </Pressable>
    </View>
  );
};

export default Wish;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  giftRecommendationText: {
    color: "#8b0000",
    marginHorizontal: 20,
    fontSize: 17,
    textAlign: "center",
    fontWeight: "500",
  },
  recommendedGiftText: {
    color: "#8b0000",
    marginHorizontal: 20,
    fontSize: 17,
    textAlign: "center",
    fontWeight: "500",
  },
  flatListItem: {
    width: 200,
    height: 150,
    marginTop: 10,
    borderColor: "#ff8c00",
    backgroundColor: "#8b0000",
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 20,
    marginTop: 30,
  },
  title: {
    color: "white",
  },
  description: {
    color: "white",
  },
  logoStyle: {
    // Add your logo style here
  },
});
