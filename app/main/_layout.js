import { Slot } from 'expo-router'
import { useState } from 'react'
import { BottomNavigation, MenuItem, BottomNavigationTab, Icon, TopNavigation, TopNavigationAction, OverflowMenu } from '@ui-kitten/components'
import { Platform, SafeAreaView } from 'react-native'
import { useRecoilState } from 'recoil'
import { router } from 'expo-router'
import { pageViewerState } from '../store/store'

export default () => {
    const [pageViewerIndex, setPageViewerIndex] = useRecoilState(pageViewerState)
    const [menuIsVisible, setMenuIsVisible] = useState(false);

    const TruckIcon = (props) => (
        <Icon
            {...props}
            name={props.selected ? 'car' : 'car-outline'}
        />
    );
    const LayoutIcon = (props) => (
        <Icon
            {...props}
            name={props.selected ? 'layout' : 'layout-outline'}
        />
    );

    const NewIcon = (props) => (
        <Icon
            {...props}
            
            name={props.selected ? 'plus-circle' : 'plus-circle-outline'}

        />
    );
    return (
        <SafeAreaView style={{ flex: 1 }} >
            <TopNavigation
                // accessoryLeft={BackAction}
                alignment={Platform.OS == 'ios' ? 'center' : "left"}
                title={`Cargo - ${pageViewerIndex==0?'Motoristas':pageViewerIndex==1?'Meu Cargo':pageViewerIndex==2?'Criar Cargo':''}`}
                style={{ backgroundColor: '#93D888', textAlign: 'center' }}
                accessoryRight={() => (
                    <>

                        <OverflowMenu
                            anchor={() => (
                                <TopNavigationAction
                                    icon={<Icon name={'menu'} />}
                                    onPress={() => setMenuIsVisible(!menuIsVisible)}
                                />
                            )}
                            visible={menuIsVisible}
                            onBackdropPress={() => setMenuIsVisible(!menuIsVisible)}
                        >
                            <MenuItem
                                title='Meu Perfil'
                            />
                            <MenuItem
                                title='Logout'
                                onPress={() => router.push('/')}
                            />
                        </OverflowMenu>
                    </>
                )}
            />
            <Slot />
            <BottomNavigation
                selectedIndex={pageViewerIndex}
                onSelect={index => setPageViewerIndex(index)}
            >
                <BottomNavigationTab icon={<TruckIcon selected={pageViewerIndex == 0} />} />
                <BottomNavigationTab icon={<LayoutIcon selected={pageViewerIndex == 1} />} />
                <BottomNavigationTab icon={<NewIcon selected={pageViewerIndex == 2} />} />
            </BottomNavigation>
        </SafeAreaView>
    )

}