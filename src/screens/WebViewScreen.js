import React, { useState } from 'react';
import { Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, FlatList } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';


const WebViewScreen = ()=>{
    const GP = 'https://www.goldenpark.pt/'
    const [ruta, setRuta] = useState(GP);

    const doSomething = (url, setRuta) => {
        url.includes("goldenpark.pt") ?  setRuta(url): setRuta(GP + url);
    }

    return(
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#E60881', marginBottom: 0 }} forceInset={{ top: 'always' }}edges={['top']} >
                <WebView
                    style={{ flex: 1}}
                    source={{ uri: ruta }}
                    scalesPageToFit={true}
                />
                <FlatList
                    style={styles.list}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 0, flex: 1, justifyContent: 'space-around', backgroundColor: '#000', paddingTop: 10 }}
                    keyExtractor={(item) => item.name}
                    data={tracks}
                    renderItem ={({item})=>{
                        return(
                            <TouchableOpacity onPress={function(){
                                doSomething(item.ruta,setRuta);
                            }}>
                                <Image
                                    style={styles.image}
                                    source={ item.icon }
                                />
                                {console.log(item)}
                                <Text style={styles.titleIcon}>{item.name}</Text>
                            </TouchableOpacity>
                        )
                    }}
                />


            </SafeAreaView>
        </>
    )
        

}

const tracks = [
    { name: 'inicio', ruta: 'https://www.goldenpark.pt/', icon: require('../../assets/simbolo_inicio.png') },
    { name: 'tragaperras', ruta: 'tragaperras-online', icon: require('../../assets/simbolo_tragaperras.png') },
    { name: 'casino', ruta: 'juegos-de-casino-online', icon: require('../../assets/simbolo_casino.png') },
    { name: 'apuestas', ruta: 'https://apuestas.goldenpark.pt/pt', icon: require('../../assets/simbolo_apuestas.png') }
]


const styles = StyleSheet.create({
    image: {
        width: 39,
        height: 40,
        flexDirection: 'row',
        alignSelf: 'center'
    },
    list: {
        display: 'flex',
        flexGrow: 0,
        paddingBottom: 0,
        position: 'relative',
        bottom: 0,
        backgroundColor:'#000'
    },
    titleIcon: {
        marginTop: 5,
        alignSelf: 'center',
        color: '#8e8e93'
    },
    titleColorPink: {
        marginTop: 5,
        alignSelf: 'center',
        color: '#e60881'
    }
})

export default WebViewScreen;