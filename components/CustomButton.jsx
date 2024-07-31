import { TouchableOpacity, Text } from 'react-native'

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
	return (
		<TouchableOpacity
			className={` rounded-xl bg-secondary py-3  justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''} `}
			onPress={handlePress}
			activeOpacity={0.7}
			disabled={isLoading}
		>
			<Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
				{title}
			</Text>
		</TouchableOpacity>
	)
}

export default CustomButton