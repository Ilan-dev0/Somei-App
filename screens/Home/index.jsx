import React from "react";
import { Image, SafeAreaView, Text, View, TouchableOpacity } from "react-native";
import { styles } from './styles'
import { globalStyles } from "../../styles";
import { VerticalCarousel } from "../../components/VerticalCarousel";
import { Button } from "../../components/Button";

export default function Home() {
    return (
        <SafeAreaView>
            <View style={styles.header}>
                <TouchableOpacity
                    style={[styles.settingsButton, globalStyles.mt_5]}
                    onPress={() => {
                    }}
                >
                    <Image
                        source={require('../../assets/settings.png')}
                    />
                </TouchableOpacity>
                <View style={[globalStyles.rowColumn, styles.infoUser]}>
                    <Image
                        source={require('../../assets/foto-perfil.png')}
                    />
                    <View style={[globalStyles.mt_1, , globalStyles.ml_1]}>
                        <Text style={[globalStyles.mt_3, globalStyles.titleWhiteSemiBold]}> Glowshine</Text>
                        <Text style={[globalStyles.mt_1, globalStyles.titleWhiteLight]}> Olá, Ana!</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.navigationArea]}>
                <View style={[globalStyles.rowColumn]}>
                    <View style={[styles.areaCash, globalStyles.pl_3, globalStyles.pr_3, globalStyles.mt_3, globalStyles.ml_3, globalStyles.pt_4]}>
                        <View style={[globalStyles.rowColumn, globalStyles.justifyContent]}>
                            <Image
                                source={require('../../assets/plus.png')}
                            />
                            <TouchableOpacity>
                                <Image
                                    style={[globalStyles.mt_2]}
                                    source={require('../../assets/right.png')}
                                />
                            </TouchableOpacity>
                        </View>
                        <Text style={[globalStyles.titleWhiteSemiBold, globalStyles.mt_5]}>Entradas</Text>
                        <Text style={[globalStyles.titleWhiteLight]}>totais do mês</Text>
                        <Text style={[globalStyles.titleWhiteLight, globalStyles.mt_5]}>R$ +2000</Text>
                    </View>
                    <View style={[styles.areaCash, globalStyles.pl_3, globalStyles.pr_3, globalStyles.mt_3, globalStyles.ml_3, globalStyles.pt_4]}>
                        <View style={[globalStyles.rowColumn, globalStyles.justifyContent]}>
                            <Image
                                source={require('../../assets/plus.png')}
                            />
                            <TouchableOpacity>
                                <Image
                                    style={[globalStyles.mt_2]}
                                    source={require('../../assets/right.png')}
                                />
                            </TouchableOpacity>
                        </View>
                        <Text style={[globalStyles.titleWhiteSemiBold, globalStyles.mt_5]}>Saídas</Text>
                        <Text style={[globalStyles.titleWhiteLight]}>totais do mês</Text>
                        <Text style={[globalStyles.titleWhiteLight, globalStyles.mt_5]}>R$ -1.000,00</Text>
                    </View>
                </View>
                <View style={[globalStyles.mt_5, globalStyles.ml_4]}>
                    <Text style={[globalStyles.mt_2, globalStyles.mb_3, globalStyles.titleSemiBold]}>Gestão da Loja</Text>
                </View>
                <VerticalCarousel/>
            </View>
        </SafeAreaView>
    )
}