import React, { useLayoutEffect, useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { collection, query, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import Spinner from 'react-native-loading-spinner-overlay';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Profile',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
      },
      headerStyle: {
        backgroundColor: '#8b0000',
        height: 110,
        borderBottomColor: 'transparent',
        shadowColor: 'transparent',
      },
      headerRight: () => (
        <FontAwesome name="list" size={24} color="white" style={{ marginRight: 12 }} />
      ),
    });
  }, [navigation]);

  const fetchWishlist = useCallback(async () => {
    try {
      setLoading(true);

      const pageSize = 10;
      const startIndex = (page - 1) * pageSize;
      const endIndex = startIndex + pageSize;

      const q = query(collection(db, 'wishlist'));
      const querySnapshot = await getDocs(q);
      const totalItems = querySnapshot.docs.length;
      const totalPages = Math.ceil(totalItems / pageSize);

      if (page > totalPages) {
        setHasMore(false);
        return;
      }

      const fetchedWishlist = querySnapshot.docs
        .slice(startIndex, endIndex)
        .map((doc) => ({ id: doc.id, ...doc.data() }));

      setWishlist((prevWishlist) => [...prevWishlist, ...fetchedWishlist]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error('Error fetching wishlist: ', error);
    } finally {
      setLoading(false);
    }
  }, [page]);

  const handleLoadMore = useCallback(() => {
    if (!loading && hasMore) {
      fetchWishlist();
    }
  }, [loading, hasMore, fetchWishlist]);

  useEffect(() => {
    fetchWishlist();
  }, [fetchWishlist]);

  const navigateToHome = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  const renderWishlistItem = useCallback(({ item }) => (
    <TouchableOpacity onPress={navigateToHome}>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemText}>Gift: {item.gift}</Text>
        <Text style={styles.itemText}>Interest: {item.interest}</Text>
        <Text style={styles.itemText}>Name: {item.name}</Text>
        <Text style={styles.itemText}>Age: {item.recipientAge}</Text>
        <TouchableOpacity onPress={navigateToHome} style={styles.button}>
          <Text style={styles.buttonText}>Go to Home</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  ), [navigateToHome]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={wishlist}
        keyExtractor={(item) => item.id}
        renderItem={renderWishlistItem}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={loading && hasMore && <Spinner visible />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    backgroundColor: '#ff8c00',
  },
  item: {
    padding: 5,
    marginVertical: 3,
    marginHorizontal: 16,
    backgroundColor: '#fafad2',
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemText: {
    fontSize: 16,
    marginBottom: 1,
    color: '#8b0000',
    fontWeight: 'bold',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#8b0000',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ProfileScreen;
