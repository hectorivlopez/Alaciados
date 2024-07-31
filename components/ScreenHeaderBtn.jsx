import React from 'react'
import { TouchableOpacity, Image } from 'react-native'


const ScreenHeaderBtn = ({ icon, handlePress, styles }) => {
	return (
		<TouchableOpacity  onPress={handlePress}>
			<Image
				source={icon}
				className={`w-[29px] h-[38px] ${styles}`}
				resizeMode="contain"
			/>
		</TouchableOpacity>
	)
}

export default ScreenHeaderBtn