import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import {Element3} from 'iconsax-react-native';
import {BlogList, CategoryList} from './data';
import { fontType, colors } from './src/components';
import { ListHorizontal, ItemSmall } from './src/components';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>MAKANAN KHAS NTT.</Text>
        <Element3 color={'#000000'} variant="Linear" size={24} />
      </View>
      <View style={styles.listCategory}>
        <FlatListCategory />
      </View>
      <ListBlog />
    </View>
  );
}
const ItemCategory = ({item, onPress, color}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={category.item}>
        <Text style={{...category.title, color}}>{item.categoryName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height:52,
    elevation: 8,
    paddingTop:8,
    paddingBottom:4
  },
  title: {
    fontSize: 20,
    color: '#000000',
  },
  listCategory: {
    paddingVertical: 10,
  },
  listBlog: {
    paddingVertical: 10,
    gap: 10,
  },
  listCard: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    gap: 15,
  },
});
const category = StyleSheet.create({
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: 'rgb(109, 125, 154)',
  },
  title: {
    fontSize: 14,
    lineHeight: 18,
  },
});

const FlatListCategory = () => {
  const [selected, setSelected] = useState(1);
  const renderItem = ({item}) => {
    const color = item.id === selected ? 'rgb(53, 88, 225)' : 'rgb(109, 125, 154)';
    return (
      <ItemCategory
        item={item}
        onPress={() => setSelected(item.id)}
        color={color}
      />
    );
  };
  return (
    <FlatList
      data={CategoryList}
      keyExtractor={item => item.id}
      renderItem={item => renderItem({...item})}
      ItemSeparatorComponent={() => <View style={{width: 10}} />}
      contentContainerStyle={{paddingHorizontal: 24}}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
  };
  const ListBlog = () => {
    const horizontalData = BlogList.slice(0, 5);
    const verticalData = BlogList.slice(5);
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.listBlog}>
          <ListHorizontal data={horizontalData} />
          <View style={styles.listCard}>
            {verticalData.map((item, index) => (
              <ItemSmall item={item} key={index} />
            ))}
          </View>
        </View>
      </ScrollView>
    );
  };

const itemHorizontal = StyleSheet.create({
  cardItem: {
    width: 280,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  cardInfo: {
    justifyContent: 'flex-end',
    height: '100%',
    gap: 10,
    maxWidth: '60%',
  },
  cardTitle: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  cardText: {
    fontSize: 10,
    color: '#FFFFFF',
  },
  cardIcon: {
    backgroundColor: '#FFFFFF',
    padding: 5,
    borderColor:'#FFFFFF',
    borderWidth: 0.5,
    borderRadius: 5,
  },
});

