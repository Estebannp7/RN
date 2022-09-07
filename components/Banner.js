import { StyleSheet,Text,View, Image } from "react-native";
import{styles1,viewsChilds} from '../assets/styles/Mystyles';
//export default function Banner(){
const Banner =(props)=> {
    return(
    <View style={[viewsChilds.views,styles1.alignViews,{flex:1,backgroundColor:'yellow'}]}>
     {/* <Text> {props.title} </Text>
     <Text> {props.subtitle}</Text> */}
     <Image
        source= {require(`../assets/images/${props.img}`)}
        style={{width:'100%',height:'100%',borderRadius:10, resizeMode:'stretch'}}
      />
     </View>

   );
   
   
}                          


export default Banner;