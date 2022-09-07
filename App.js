import { useState } from 'react';
import { StyleSheet, Text, View,TextInput,Button } from 'react-native';
import {styles1,viewsChilds} from './assets/styles/Mystyles';
import Banner from './Components/Banner';
//import{styles1}from './assets/styles/Mystyles';

export default function App() {  
  //definicion de estado con sus respectivoos metodos de actualizacion
  const [valor1,setValor1] = useState('');
  const [valor2,setValor2] = useState('');
  const [resultado,setResultado] = useState('');
///DEFINIR METODOS

let calcular = (oper)  =>{
//actualice estado resultado, a traves de su metodo respectivo
let miresultado =0;

switch(oper){
    case "+": 
     miresultado =parseFloat (valor1) + parseFloat(valor2)
      break;
    case "-":
      miresultado =  parseFloat (valor1) - parseFloat(valor2)
      break;
    case "*":
      miresultado = parseFloat (valor1) * parseFloat(valor2)
      break;
    case "/":
      miresultado =parseFloat (valor1) / parseFloat(valor2)



}
setResultado(miresultado)

}


  return (
    <View style={[styles1.container,styles1.alignViews,{borderRadius:10}]}>
      <View style={[viewsChilds.views,styles1.alignViews,{flex:1,backgroundColor:'yellow'}]}>
      <Banner img="calculadora.jpg"></Banner>
  
      </View>

      {/*<View style={[viewChilds.views,styles1.alignViews,{flex:1,backgroundColor:'yellowgreen'}]}>
      <Text>Barra navegacion</Text>
      </View> */}
      

      <View style={[viewsChilds.views,styles1.alignViews,{flex:5,backgroundColor:'white'}]}>
      <Text>Valor 1: </Text>
      <TextInput
      placeholder='Ingrese valor 1'
      style={{fontSize:20,borderWidth:2,borderColor: 'red', padding:10,textAlign:'center',borderRadius:5 }}
      keyboardType={Number}
      onChangeText={valor1=> setValor1(valor1)}
      value={valor1}
      autoFocus
      />

      <Text>Valor 2: </Text>
      <TextInput
      placeholder='Ingrese valor 2'
      style={{fontSize:20,borderWidth:2,borderColor: 'red', padding:10,textAlign:'center',borderRadius:5 }}
      keyboardType={Number}
      onChangeText={valor2=> setValor2(valor2)}
      value={valor2}
      
      />
      <Text>Resultado</Text>
      <Text>{parseFloat(resultado).toFixed(1)} </Text>
      <Text>{'\n'}</Text>
      <Button 
      title = "Calcular" 
      onPress={()=>calcular("+")}
      />
       <Text>{'\n'}</Text>
       <Button
      title = "Limpiar"
      onPress={()=>calcular("-")}
      />
     
      
      
     
     
      
      
      
      
      </View>

      <View style={[viewsChilds.views,styles1.alignViews,{flex:1,backgroundColor:'blue'}]}>
      <Text>cuerpo </Text>

</View>

      </View>
       
       
      
      
      
     


    
  );
} 

/*const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
  texts:{
fontSize:18,
fontWeight:"bold",
color:'red'
  },
  alignViews:{
    alignItems: 'center',
    justifyContent: 'center'
    
  }
  
});

const viewChilds = StyleSheet.create({
views:{
width:'80%',
marginLeft:'5%',
marginTop:10,
borderRadius:10,
justifyContent: 'center',
alignItems: 'center'



}



})

export default App;*/