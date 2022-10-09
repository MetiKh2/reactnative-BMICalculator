/* eslint-disable prettier/prettier */
import {View, Text, Dimensions, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';

const widthScreen = Dimensions.get('screen').width;
const heightScreen = Dimensions.get('screen').height;
export default function ResultScreen({route, navigation}) {
  const [bmi, setBmi] = useState(0);
  const [message, setMessage] = useState('');
  const {height, weight} = route?.params;
  useEffect(() => {
    const res = weight / (height * height * 0.0001);
    setBmi(res);
    setMessage(
      res < 18.5
        ? 'کمبود وزن'
        : res < 25
        ? 'نرمال'
        : res < 30
        ? 'اضافه وزن'
        : 'چاق مفرط',
    );
  }, [height, weight]);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: widthScreen,
          height: heightScreen * 0.7,
          position: 'relative',
          marginBottom: 10,
        }}>
        <Image
          source={
            bmi < 18.5
              ? require('../assets/thin.jpg')
              : bmi < 25
              ? require('../assets/normal.jpg')
              : bmi < 30
              ? require('../assets/overWeight.jpg')
              : require("../assets/fat.jpg")
          }
          style={{
            width: widthScreen,
            height: heightScreen * 0.7,
            resizeMode: 'cover',
          }}
        />
        <View
          style={{
            position: 'absolute',
            backgroundColor: 'rgba(255, 163, 133,.85)',
            borderRadius: 20,
            bottom: 50,
            right: 50,
            left: 50,
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 10,
          }}>
          <Text style={{color: '#000', fontSize: 20}}>
            نتیجه شاخص توده بدنی{' '}
          </Text>
          <Text
            style={{
              color: '#fff',
              fontSize: 50,
              fontWeight: 'bold',
              marginVertical: 20,
            }}>
            {' '}
            {bmi.toFixed(1)}
          </Text>
          <Text style={{color: '#000', fontSize: 21}}>
            وضعیت شما : {message}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          backgroundColor: 'darkorange',
          marginHorizontal: 50,
          alignItems: 'center',
          paddingVertical: 5,
          borderRadius: 40,
          marginTop: 25,
        }}>
        <Text style={{fontSize: 25, color: '#fff', fontWeight: 'bold'}}>
          محاسبه مجدد
        </Text>
      </TouchableOpacity>
    </View>
  );
}
