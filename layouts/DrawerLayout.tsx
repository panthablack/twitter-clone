import { Drawer } from 'expo-router/drawer'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{ headerShown: true }}>
        <Drawer.Screen
          name="index"
          options={{
            title: 'Dashboard',
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            title: 'Settings',
          }}
        />
        <Drawer.Screen
          name="tweets/create"
          options={{
            title: 'Create Tweet',
          }}
        />
        <Drawer.Screen
          name="tweets/[view]"
          options={{
            drawerItemStyle: { display: 'none' },
            title: 'View Tweet',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  )
}
