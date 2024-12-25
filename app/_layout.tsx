
import { Stack } from "expo-router"
import "../global.css"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { StatusBar } from "expo-status-bar"


const RootNavigation = () => {
    return <Stack>
        <Stack.Screen name="(tabs)" options={{headerShown : false}} />
    </Stack>
}

export default function App(){
    return <SafeAreaProvider>
        <RootNavigation/>
        <StatusBar style="auto" />
    </SafeAreaProvider>
}