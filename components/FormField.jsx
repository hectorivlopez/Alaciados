import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import { useState } from 'react'

import { icons } from '../constants'

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, password=false, ...props }) => {
	const [showPassword, setShowPassword] = useState(false)

	return (
		<View className={`space-y-2 ${otherStyles}`}>
			<Text className="text-base text-gray-100 font-pmedium">
				{title}
			</Text>

			<View className="flex-row border-2 border-gray-200 w-full bg-gray-200 rounded-xl  focus:border-secondary items-center">
				<TextInput
					className="flex-1 w-full py-2 px-4 text-black-100 text-base "
					value={value}
					placeholder={placeholder}
					placeholderTextColor="#7b7b8b"
					onChangeText={handleChangeText}
					secureTextEntry={password && !showPassword}
				/>

				{password === true && (
					<TouchableOpacity
						onPress={() => setShowPassword(!showPassword)}
						className="mr-4"
					>
						<Image
							source={!showPassword ? icons.eye : icons.eyeHide}
							className="w-6 h-6"
							resizeMode='contain'
						/>
					</TouchableOpacity>
				)}
			</View>
		</View>
	)
}

export default FormField