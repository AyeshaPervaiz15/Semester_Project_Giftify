import React, { useLayoutEffect } from "react";
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    Image,
    Alert,
    FlatList
  } from "react-native";
import { useNavigation } from "@react-navigation/native";
const getRecommendedGift = (gender, age, interest) => {
    // Implement your gift recommendation logic here
  
    // Convert gender, age, and interest to lowercase
    const lowerCaseGender = gender.toLowerCase();
    const lowerCaseInterest = interest.toLowerCase();
  
if (lowerCaseGender == "male" && age >= 1 && age <= 10) {
  if (lowerCaseInterest == "game") {
    return ["Football", "Cricket Kit", "Basketball"];
  } else if (lowerCaseInterest == "music") {
    return ["Guitar", "Drum Set", "Headphones"];
  } else if (lowerCaseInterest == "art") {
    return ["Paint Set", "Drawing Pad", "Modeling Clay"];
  }
} else if (lowerCaseGender == "male" && age > 10 && age <= 20) {
  if (lowerCaseInterest == "game") {
    return ["Video Games", "Skateboard", "Sports Jersey"];
  } else if (lowerCaseInterest == "music") {
    return ["Keyboard", "Microphone", "Concert Tickets"];
  } else if (lowerCaseInterest == "art") {
    return ["Sketchbook", "Graphic Tablet", "Photography Gear"];
  }
} else if (lowerCaseGender == "male" && age > 20 && age <= 30) {
  if (lowerCaseInterest == "game") {
    return ["VR Headset", "Gaming Console", "Racing Wheel"];
  } else if (lowerCaseInterest == "music") {
    return ["Electric Guitar", "DJ Mixer", "Music Production Software"];
  } else if (lowerCaseInterest == "art") {
    return ["Digital Drawing Pad", "Painting Easel", "Sculpting Tools"];
  }
} else if (lowerCaseGender == "male" && age > 30 && age <= 40) {
  if (lowerCaseInterest == "game") {
    return ["Board Games Set", "Chess Set", "Strategy Game Collection"];
  } else if (lowerCaseInterest == "music") {
    return ["Record Player", "Wireless Speakers", "Music Instrument Accessories"];
  } else if (lowerCaseInterest == "art") {
    return ["Woodworking Tools", "Pottery Wheel", "Artistic Crafting Kit"];
  }
} else if (lowerCaseGender == "male" && age > 40 && age <= 50) {
  if (lowerCaseInterest == "game") {
    return ["Puzzle Games", "Brain Teasers", "Escape Room Experience"];
  } else if (lowerCaseInterest == "music") {
    return ["Home Karaoke System", "Music Lessons", "Soundproof Room Setup"];
  } else if (lowerCaseInterest == "art") {
    return ["Calligraphy Set", "Art History Books", "Exhibition Tickets"];
  }
} else if (lowerCaseGender == "male" && age > 50 && age <= 60) {
  if (lowerCaseInterest == "game") {
    return ["Classic Arcade Machine", "Pool Table", "Dartboard"];
  } else if (lowerCaseInterest == "music") {
    return ["Ukulele", "Record Collection", "Concert Experience Package"];
  } else if (lowerCaseInterest == "art") {
    return ["Oil Painting Set", "Outdoor Sketching Set", "Art Workshop Enrollment"];
  }
} else if (lowerCaseGender == "male" && age > 60 && age <= 70) {
  if (lowerCaseInterest == "game") {
    return ["Chess Set with AI", "Golf Simulator", "Crossword Puzzle Book"];
  } else if (lowerCaseInterest == "music") {
    return ["Acoustic Guitar", "Music Appreciation Course", "Symphony Orchestra Tickets"];
  } else if (lowerCaseInterest == "art") {
    return ["Watercolor Paint Set", "Nature Photography Trip", "Artistic Retreat Package"];
  }
} else if (lowerCaseGender == "male" && age > 70 && age <= 80) {
  if (lowerCaseInterest == "game") {
    return ["Classic Card Games Set", "Jigsaw Puzzle Collection", "Strategy Board Games"];
  } else if (lowerCaseInterest == "music") {
    return ["Harmonica", "Music Therapy Sessions", "Opera Performance Tickets"];
  } else if (lowerCaseInterest == "art") {
    return ["Wood Carving Tools", "Artistic Masterclass Enrollment", "Art Gallery Membership"];
  }
} else if (lowerCaseGender == "female" && age > 10 && age <= 20) {
  if (lowerCaseInterest == "game") {
    return ["Scrabble", "Badminton Set", "Puzzle Book"];
  } else if (lowerCaseInterest == "music") {
    return ["Guitar", "Karaoke Machine", "Concert Tickets"];
  } else if (lowerCaseInterest == "art") {
    return ["Sketching Pencils", "Watercolor Set", "Art Journal"];
  }
} else if (lowerCaseGender == "female" && age > 20 && age <= 30) {
  if (lowerCaseInterest == "game") {
    return ["Board Game Collection", "Table Tennis Set", "Crossword Puzzle Book"];
  } else if (lowerCaseInterest == "music") {
    return ["Piano", "Guitar Lessons", "Music Festival Tickets"];
  } else if (lowerCaseInterest == "art") {
    return ["Calligraphy Set", "Pottery Classes", "Art Exhibition Passes"];
  }
} else if (lowerCaseGender == "female" && age > 30 && age <= 40) {
  if (lowerCaseInterest == "game") {
    return ["Strategy Board Games", "Tennis Racket", "Sudoku Puzzle Book"];
  } else if (lowerCaseInterest == "music") {
    return ["Violin", "Opera Performance Tickets", "Music Production Course"];
  } else if (lowerCaseInterest == "art") {
    return ["Acrylic Painting Set", "Sculpture Workshop", "Art Retreat Package"];
  }
} else if (lowerCaseGender == "female" && age > 40 && age <= 50) {
  if (lowerCaseInterest == "game") {
    return ["Chess Set", "Golf Clubs", "Mystery Novel Collection"];
  } else if (lowerCaseInterest == "music") {
    return ["Flute", "Jazz Concert Tickets", "Songwriting Workshop"];
  } else if (lowerCaseInterest == "art") {
    return ["Oil Painting Kit", "Art History Books", "Art Gallery Membership"];
  }
} else if (lowerCaseGender == "female" && age > 50 && age <= 60) {
  if (lowerCaseInterest == "game") {
    return ["Card Games Set", "Gardening Tools", "Crossword Puzzle Subscription"];
  } else if (lowerCaseInterest == "music") {
    return ["Harp", "Classical Music Concert Tickets", "Music Theory Course"];
  } else if (lowerCaseInterest == "art") {
    return ["Watercolor Paint Set", "Outdoor Sketching Trip", "Artistic Retreat Package"];
  }
} else if (lowerCaseGender == "female" && age > 60 && age <= 70) {
  if (lowerCaseInterest == "game") {
    return ["Puzzle Games", "Brain Teasers", "Escape Room Experience"];
  } else if (lowerCaseInterest == "music") {
    return ["Home Karaoke System", "Music Lessons", "Soundproof Room Setup"];
  } else if (lowerCaseInterest == "art") {
    return ["Calligraphy Set", "Art History Books", "Exhibition Tickets"];
  }
} else if (lowerCaseGender == "female" && age > 70 && age <= 80) {
  if (lowerCaseInterest == "game") {
    return ["Classic Card Games Set", "Jigsaw Puzzle Collection", "Strategy Board Games"];
  } else if (lowerCaseInterest == "music") {
    return ["Harmonica", "Music Therapy Sessions", "Opera Performance Tickets"];
  } else if (lowerCaseInterest == "art") {
    return ["Wood Carving Tools", "Artistic Masterclass Enrollment", "Art Gallery Membership"];
  }
} else {
  // Handle other cases or provide a default recommendation
  return ["No recommendation available"];
}
}

  
  

const GiftRecommendationScreen = ({ route }) => {
  const { gender, age, interest } = route.params;

  // Implement your gift recommendation logic here based on the received parameters
  const recommendedGift = getRecommendedGift(gender, age, interest);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Recommended Gifts",
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
    //   headerRight: () => (
    //     <FontAwesome name="list" size={24} color="white" style={{ marginRight: 12 }} />
    //   ),
    });
  }, []);
  //
  const pressableData = [
   
    
    // Add more pressable data objects as needed
    
        {
          title: "Gift Recommendation",
          description: `Gender: ${gender}\nAge: ${age}\nInterest: ${interest}\nRecommended Gift: ${recommendedGift}`,
          style: {
            width: 300,
            height: 200,
            marginTop: 20,
            borderColor: "#ff8c00",
            backgroundColor: "#8b0000",
            borderRadius: 10,
            padding: 10,
            marginHorizontal: 20,
            marginTop: 30,
          },
          logoStyle: styles.logo,
        },
        // Add more pressable data objects as needed
    
      
  ];

  //

  return (
    <>
    <View>
      <Text style={{ color:"#8b0000" ,marginHorizontal: 20, fontSize: 17,textAlign: "center", fontWeight: "500" }}>Gift Recommendation</Text>
      {/* <Text style={{ color:"#8b0000" ,marginHorizontal: 20, fontSize: 17,textAlign: "center", fontWeight: "500" }}>{recommendedGift}</Text> */}
    </View>
    
    <View>
      <ScrollView>
        
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {pressableData.map((item, index) => (
           <Pressable key={index} style={item.style}>
           <Text style={styles.title}>{item.title}</Text>
           <Text style={styles.description}>{item.description}</Text>
           <Image source={require('../assets/logo.png')} style={item.logoStyle} />
    
  
        </Pressable>
          ))}

        </ScrollView>

        <Pressable
          style={{
            marginTop: 40,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          
        </Pressable>
      </ScrollView>
    </View>

  </>
);
};

export default GiftRecommendationScreen;
const styles = StyleSheet.create({
    title:{
    color:'white',
    fontSize:15,
    fontWeight:'bold',
    textAlign:'center',
    paddingTop: 10,
    paddingBottom:10

    },
    description:
    {
    color:'white',
    fontSize:15,
    fontWeight:'bold',
    paddingTop: 10,
    paddingBottom:10
    }
    ,questionnaire:
    {
    color:'#8b0000',
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
     paddingTop: 20,
     paddingBottom:0
    }
    
    });
    