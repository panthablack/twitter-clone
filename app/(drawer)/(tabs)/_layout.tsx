import Ionicons from '@expo/vector-icons/Ionicons'
import { DrawerToggleButton } from '@react-navigation/drawer'
import { Tabs } from 'expo-router'

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerLeft: () => <DrawerToggleButton />,
      }}
    >
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => <Ionicons name="settings" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="support"
        options={{
          title: 'Support',
          tabBarIcon: ({ color, size }) => <Ionicons name="help-buoy" size={size} color={color} />,
        }}
      />
    </Tabs>
  )
}
