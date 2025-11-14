import { Drawer } from 'expo-router/drawer'

export default function DrawerLayout() {
  return (
    <Drawer screenOptions={{ headerShown: true }}>
      <Drawer.Screen
        name="index"
        options={{
          title: 'Home',
        }}
      />
      <Drawer.Screen
        name="search"
        options={{
          title: 'Search',
        }}
      />
      <Drawer.Screen
        name="profile/[user]"
        options={{ drawerItemStyle: { display: 'none' }, title: 'Profile' }}
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
        }}
      />
      <Drawer.Screen
        name="logout"
        options={{
          title: 'Log Out',
          headerShown: false,
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
