import { View, Text, TouchableOpacity, Image } from 'react-native'
import CustomButton from '../components/CustomButton'
import {router} from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

import {images} from '../constants'
import FormField from '../components/FormField'


const Home = () => {
	return (
		<SafeAreaView className="bg-primary w-full h-full justify-center items-center px-5">
			<Image
				source={images.logo}
				className=""
				resizeMode='cover'
			/>
			<Text className="text-2xl text-white-100 mt-10">
				¡Bienvenida!
			</Text>

			<FormField
				placeholder="Nombre de usuario"
			/>
			<FormField
				placeholder="Contraseña"
				password={true}
			/>
			
			
			<CustomButton
				title="Iniciar Sesión"
				handlePress={() => { router.push('/home') }}
				containerStyles="w-full mt-[120px]"
				textStyles="text-white-100"
			/>
			<CustomButton
				title="Tabs"
				handlePress={() => { router.push('/tabscitas') }}
				containerStyles="w-full mt-9"
				textStyles="text-white-100"
			/>
		</SafeAreaView>
	)
}

export default Home