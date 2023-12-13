import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
  } from 'react-native';
  import {Bookmark2, Logout, Setting2, UserAdd} from 'iconsax-react-native';
  import React from 'react';
  import FastImage from 'react-native-fast-image';
  import {ProfileData, BlogList} from '../../../data';
  import {ItemSmall} from '../../components';
  import {fontType, colors} from '../../assets/theme';
  
  const data = BlogList.slice(5);
  const Profile = () => {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Setting2 color={colors.black()} variant="Linear" size={24} />
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 24,
            gap: 10,
            paddingVertical: 20,
          }}>
          <View style={{gap: 15, alignItems: 'center'}}>
            <FastImage
              style={profile.pic}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi75t2nasZ3KmdfZr9prcoLAicDj8WMki9LyT5F1zZ&s',
                headers: {Authorization: 'someAuthToken'},
                priority: FastImage.priority.high,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
            <View style={{gap: 5, alignItems: 'center'}}>
              <Text style={profile.name}>Martho</Text>
            </View>
            <TouchableOpacity style={profile.buttonEdit}>
              <Text style={profile.buttonText}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
         
          <View
            style={{
              alignItems: 'flex-start',
              gap: 20,
              flexDirection: 'column',
            }}>
            <TouchableOpacity>
              <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
                <Setting2 color={'green'} variant={'Bulk'} size={25} />
                <Text style={profile.name}>menu</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
                <Bookmark2 color={'green'} variant={'Bulk'} size={25} />
                <Text style={profile.name}>Deskripsi</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
                <Logout color={'green'} variant={'Bulk'} size={25} />
                <Text style={profile.name}>Logout</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View
          style={{
            alignItems: 'center',
            marginBottom: 10, 
          }}>
          <Text style={{color: 'black'}}>HAPPYOLD | V 1.0</Text>
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgb(240,255,240)',
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 10,
      borderWidth: 1.5,
      borderColor: 'black',
      backgroundColor: 'white',
    },
    searchButtonContainer: {
      paddingLeft: 14,
    },
    searchButton: {},
    icon: {
      margin: 8,
      // marginRight: 8,
    },
    input: {
      flex: 1,
      backgroundColor: 'white',
      borderRadius: 10,
      paddingHorizontal: 14,
      paddingVertical: 2,
      color: 'black',
      height: 45,
    },
    header: {
      paddingHorizontal: 24,
      // justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      height: 52,
      elevation: 8,
      paddingTop: 8,
      paddingBottom: 4,
    },
    title: {
      fontSize: 20,
      fontFamily: fontType['Pjs-ExtraBold'],
      color: colors.black(),
    },
    listCategory: {
      paddingVertical: 10,
    },
    listBlog: {
      paddingVertical: 10,
      gap: 10,
    },
  });

  const profile = StyleSheet.create({
    pic: {width: 100, height: 100, borderRadius: 15},
    name: {
      color: colors.black(),
      fontSize: 20,
      fontFamily: fontType['Pjs-Bold'],
      textTransform: 'capitalize',
    },
    info: {
      fontSize: 12,
      fontFamily: fontType['Pjs-Regular'],
      color: colors.grey(),
    },
    sum: {
      fontSize: 16,
      fontFamily: fontType['Pjs-SemiBold'],
      color: colors.black(),
    },
    tag: {
      fontSize: 14,
      fontFamily: fontType['Pjs-Regular'],
      color: colors.grey(0.5),
    },
    buttonEdit: {
      paddingHorizontal: 16,
      paddingVertical: 14,
      backgroundColor: colors.grey(0.1),
      borderRadius: 10,
    },
    buttonText: {
      fontSize: 14,
      fontFamily: fontType['Pjs-SemiBold'],
      color: colors.black(),
    },
  });
  
  export default Profile;
  