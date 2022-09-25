import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-web';

function Square(props){ //dùng để tạo component, gán props cho square
  return(
    <View style={[styles.square, {backgroundColor:props.color}]}>
      <Text> Square {props.text} </Text>
    </View>
  );
};
const bai4 =() =>(
<View style ={styles.main}>

  <View style ={styles.container}>
        <Square color = '#91a8d0' text = 'One'/>
        <Square color = '#9ecfc2' text= 'Two'/>
        <Square color = '#ff5b5b' text= 'Three'/>
  </View>

</View>
);
  const styles = StyleSheet.create({

    main:{
      width :"100%",
      height: 700,
      alignItems: 'center',
      justifyContent: 'center',
    },

    container:{
      width: "100%",
      height: 100,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },

    square:{
      width: 100,
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
    },
  })

  export default bai4;