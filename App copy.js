/* eslint-disable react-native/no-inline-styles */
import {
  Text,
  SafeAreaView,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import IconFo from 'react-native-vector-icons/Fontisto';

// eslint-disable-next-line no-undef
export default App = () => {
  let initTodoList = [
    {title: 'Yemek ye', complate: false},
    {title: 'Spor yap', complate: true},
    {title: 'Çalış', complate: true},
    {title: 'Uyu', complate: false},
  ];
  const [todoTitle, settodoTitle] = useState('');
  const [todoList, settodoList] = useState(initTodoList);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          alignItems: 'center',
          flex: 1,
          justifyContent: 'center',
          padding: 10,
          width: '100%',
        }}>
        <TextInput
          onChangeText={value => settodoTitle(value)}
          value={todoTitle}
          style={{width: '100%', borderColor: '#00f', borderWidth: 1}}
        />
      </View>
      <View
        style={{
          flex: 3,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 10,
        }}>
        <ScrollView style={{flex: 1, width: '100%'}}>
          {todoList.map((todo, index) => {
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                width: '90%',
                height: 60,
                borderColor: todo.complate ? '#0f0' : '#f00',
                borderWidth: 1,
                margin: 10,
                borderRadius: 20,
                padding: 10,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              key={index.toString()}>
              <Text>{todo.title}</Text>
              <IconFo
                name={todo.complate ? 'checkbox-active' : 'checkbox-passive'}
                size={30}
                color={todo.complate ? '#0f0' : '#f00'}
              />
            </TouchableOpacity>;
          })}
        </ScrollView>
      </View>
      <TouchableOpacity
        style={{
          width: 60,
          height: 60,
          backgroundColor: '#00f',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 30,
          position: 'absolute',
          right: 30,
          bottom: 30,
        }}>
        <Text style={{color: '#fff', fontSize: 42}}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
