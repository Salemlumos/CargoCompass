import { Layout, Text, Input, Button, Icon } from '@ui-kitten/components';
import { Dimensions, StyleSheet } from 'react-native';
import Logo from "../assets/logo"
import { router } from 'expo-router';
import globalStyles from './global.styles';

import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, Controller } from 'react-hook-form';
import { useState } from 'react';


export default () => {
    const formSchema = z.object({
        user: z.string().min(1, { message: `Este campo é obrigatório` }),
        senha: z.string().min(1, `Este campo é obrigatório`),
    })

    const { width, height } = Dimensions.get('window')
    const [data, setData] = useState({})
    const [isPassVisible, setIsPassVisible] = useState(false)

    const {
        control,
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({ resolver: zodResolver(formSchema), defaultValues: { user: '', senha: '' } })


    const onSubmit = (data) => {
        setData(data)
        console.log(`pelvis`)
        console.log(data)
        router.push('main')
    }

    const onError = (errors) => {
        console.log('error')
        console.log(errors)
    }

    return (
        <Layout level="3" style={{ flex: 1, padding: width / 20 }} >
            <Layout style={[{ aspectRatio: 2 },globalStyles.center]} level='3' >
                <Text style={[styles.title(width)]} >CARGO COMPASS</Text>
                <Logo
                    width={'100%'}
                    height={'100%'}
                    viewBox={`0 0 ${height - 200} ${height - 100}`}

                />
            </Layout>
            <Controller
                name="user"
                control={control}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                    <>
                        <Input
                            label='Email'
                            placeholder='Digite seu email aqui...'
                            onChangeText={(e) => onChange(e)}
                            value={value}

                        />
                        {errors.user && <Text style={globalStyles.error} >{errors.user.message}</Text>}
                    </>
                )}
            />

            <Controller
                name="senha"
                control={control}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                    <>
                        <Input
                            {...register('senha')}
                            label='Senha'
                            placeholder='Digite sua senha aqui...'
                            secureTextEntry={!isPassVisible}
                            value={value}
                            onChangeText={(e) => onChange(e)}
                            accessoryRight={(
                                <Icon
                                    onPress={() => setIsPassVisible(!isPassVisible)}
                                    name={isPassVisible ? 'eye-off' : 'eye'}
                                />
                            )
                            }
                        />
                        {errors.senha && <Text style={globalStyles.error} >{errors.senha.message}</Text>}
                    </>

                )} />
            <Button
                onPress={handleSubmit(onSubmit, onError)}
            >Entrar</Button>
            <Text>{JSON.stringify(data)}</Text>
        </Layout>
    )

}
const styles = StyleSheet.create(
    {
        title:(width)=>(
        {
            marginTop:'15%',
            fontSize:width/14
        }),
        
    }
)
