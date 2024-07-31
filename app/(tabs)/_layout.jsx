import { View, Text } from 'react-native'
import {Tabs} from 'expo-router'

const TabsLayout = () => {
	return (
		<Tabs>
			<Tabs.Screen name="tabscitas" />
			<Tabs.Screen name="tabsclientes" />
			<Tabs.Screen name="tabsproductos" />
			<Tabs.Screen name="tabsproveedores" />
			<Tabs.Screen name="tabsmovimientos" />
		</Tabs>
	)
}

export default TabsLayout