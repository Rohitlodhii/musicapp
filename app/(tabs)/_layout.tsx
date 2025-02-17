import { Tabs } from "expo-router"
import { colors, fontSize } from "../../constants/tokens"
import { BlurView } from "expo-blur"
import { StyleSheet } from "nativewind"
import { defaultStyles } from "../../styles"


const TabsNavigation = () => {

    return (
    <Tabs screenOptions={{
        tabBarActiveTintColor : colors.primary ,
        tabBarLabelStyle : {
            fontSize : fontSize.xs ,
            fontWeight : '500'
        },
        headerShown : false,
        tabBarStyle : {
            backgroundColor : colors.maximumTrackTintColor,
            position : "absolute" ,
            borderTopLeftRadius : 20 ,
            borderTopRightRadius : 20 ,
            borderTopWidth : 0 ,
            paddingBottom : 8 ,
            

        } ,
        tabBarBackground : () => <BlurView intensity={95}
            style ={{
                ...StyleSheet.absoluteFillObject ,
                overflow : "hidden",
                borderTopLeftRadius : 20 ,
                borderTopRightRadius : 20 ,

            }}
        /> ,
    }}>
        <Tabs.Screen name="favorites" 
            
        />
        <Tabs.Screen name="playlist" />
        <Tabs.Screen name="(songs)" />
        <Tabs.Screen name="artists" />
    </Tabs>
    )
}


export default TabsNavigation