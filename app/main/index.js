import { Layout, Text, ViewPager } from '@ui-kitten/components'
import { useState } from 'react'
import{useRecoilState} from 'recoil'
import { pageViewerState } from '../store/store'
export default () => {
    const [pageViewerIndex, setPageViewerIndex] = useRecoilState(pageViewerState)

    return (
        <Layout style={{ flex: 1 }} >
            <ViewPager
                selectedIndex={pageViewerIndex}
                onSelect={index => setPageViewerIndex(index)}
            >
                <Layout  level='2' style={{height:'100%'}} >
                    <Text>servicos</Text>

                </Layout>
                <Layout  level='2' style={{height:'100%'}} >
                    <Text>lista</Text>

                </Layout>
                <Layout  level='2' style={{height:'100%'}} >
                    <Text>criar</Text>

                </Layout>
            </ViewPager>

        </Layout>
    )
}