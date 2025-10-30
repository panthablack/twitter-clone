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
        name="tweets/create"
        options={{
          title: 'Create Tweet',
        }}
      />
      <Drawer.Screen
        name="(tabs)"
        options={{
          title: 'Settings',
          headerShown: false,
          // drawerItemStyle: { display: 'none' },
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
