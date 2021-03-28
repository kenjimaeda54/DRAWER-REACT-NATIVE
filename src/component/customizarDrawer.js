import React from "react";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { Text, Image, View } from "react-native";

export default function CustomizarDrawer(props) {
    return (
        <DrawerContentScrollView {...props}>

            <View style={{
                width: '100%', height: 100,
                justifyContent: 'center', alignItems: 'center'
            }}  >
                <Image
                    source={require('../img/perfil.png')}
                    alt="perfil Imagem"
                    title="imagem perfil"
                    style={{ height: 70, width: 100, marginBottom: 10, marginTop: 30 }}
                />
                <Text style={{ marginTop: 10, marginBottom: 30 }}>
                    Seja bem vindo
                </Text>

            </View>

            <DrawerItemList {...props} />

        </DrawerContentScrollView>
    );

}