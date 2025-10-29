import { Drawer } from 'expo-router/drawer'

export default function DrawerLayout() {
  return (
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
        name="support"
        options={{
          title: 'Support',
        }}
      />
      <Drawer.Screen
        name="tweets/create"
        options={{
          title: 'Create Tweet',
        }}
      />
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerItemStyle: { display: 'none' },
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
  )
}
