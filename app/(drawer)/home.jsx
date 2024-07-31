import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import MenuCard from '../../components/MenuCard'
import {router} from 'expo-router'

import { icons } from '../../constants'

const Home = () => {
	const menuItems = [
		{
			title: "Clientes",
			icon: icons.clientes,
			redirect: '/clientes'
		},
		{
			title: "Productos",
			icon: icons.productos,
			redirect: '/productos'
		},
		{
			title: "Citas",
			icon: icons.citas,
			redirect: '/citas'
		},
		{
			title: "Movimientos",
			icon: icons.movimientos,
			redirect: '/movimientos'
		},
		{
			title: "Proveedores",
			icon: icons.proveedores,
			redirect: '/proveedores'
		}
	]


	return (
		<View className="items-center">
			<FlatList
				className="w-full h-full "
				contentContainerStyle={{
					justifyContent: 'center',
					alignItems: 'center',
					height: '100%',
		
				}}
				data={menuItems}
				renderItem={({ item }) => (
					<MenuCard
						title={item.title}
						icon={item.icon}
						redirect={item.redirect}
					/>
				)}
				numColumns={2}
			/>


		</View>
	)
}

export default Home