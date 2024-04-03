import { SafeAreaView } from 'react-native';
import { Slot } from 'expo-router';
import { ApplicationProvider, IconRegistry, Layout, Text } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { RecoilRoot } from 'recoil'

export default function HomeLayout() {
    return (
        <RecoilRoot>
            <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider {...eva} theme={{ ...eva.light, ...{ "color-primary-default": '#93D888' } }} >
                <SafeAreaView style={{ flex: 1 }}>
                    <Slot />
                </SafeAreaView>
            </ApplicationProvider>
        </RecoilRoot>
    );
}