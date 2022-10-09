/* eslint-disable prettier/prettier */
import {View, Dimensions, Image, Text} from 'react-native';
import React, {useState} from 'react';
import {Slider} from '@miblanchard/react-native-slider';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {TouchableOpacity} from 'react-native-gesture-handler';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const Home = ({navigation}) => {
  const [selectHeight, setSelectHeight] = useState(177);
  const [selectWeight, setSelectWeight] = useState(90);
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: width,
          height: height * 0.55,
          position: 'relative',
          marginBottom: 10,
        }}>
        <Image
          source={require('../assets/home.jpg')}
          style={{
            width: width,
            height: height * 0.55,
            resizeMode: 'cover',
          }}
        />
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            right: 10,
            alignItems: 'flex-end',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#fff', fontSize: 30}}>خودتو</Text>
            <Text style={{color: '#fff', fontSize: 30}}> BMI</Text>
          </View>
          <Text style={{color: '#fff', fontSize: 40, marginRight: 40}}>
            محاسبه کن !!!{' '}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 15,
        }}>
        <Text style={{color: '#000', fontSize: 15}}>{selectHeight} cm</Text>
        <Text style={{color: '#000', fontSize: 20}}>قد</Text>
      </View>
      <View style={{marginHorizontal: 10}}>
        <Slider
          thumbTintColor="darkorange"
          minimumTrackTintColor="darkorange"
          step={1}
          maximumValue={250}
          minimumValue={1}
          value={selectHeight}
          onValueChange={value => setSelectHeight(value)}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 15,
        }}>
        <Text style={{color: '#000', fontSize: 15}}>{selectWeight} kg</Text>
        <Text style={{color: '#000', fontSize: 20}}>وزن</Text>
      </View>
      <View style={{marginHorizontal: 10}}>
        <Slider
          thumbTintColor="darkorange"
          minimumTrackTintColor="darkorange"
          step={1}
          maximumValue={150}
          minimumValue={1}
          value={selectWeight}
          onValueChange={value => setSelectWeight(value)}
        />
      </View>
      <TouchableOpacity
      onPress={()=>navigation.navigate('Result',{height:selectHeight,weight:selectWeight})}
        style={{
          backgroundColor: 'darkorange',
          marginHorizontal: 50,
          alignItems: 'center',
          paddingVertical: 5,
          borderRadius: 40,
          marginTop: 15,
        }}>
        <Text style={{fontSize: 25, color: '#fff', fontWeight: 'bold'}}>
          محاسبه
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
