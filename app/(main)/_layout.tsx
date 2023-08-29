import { Ionicons } from '@expo/vector-icons';
import { DrawerToggleButton } from '@react-navigation/drawer';
import useTheme from '@shared/hooks/useTheme.hook';
import { Header } from '@shared/ui/header';
import { Drawer } from 'expo-router/drawer';
import { Pressable } from 'react-native';

export enum MainScreens {
  HOME = 'Home',
}

export default function Layout() {
  const theme = useTheme();

  return (
    <Drawer
      screenOptions={{
        drawerActiveTintColor: theme.colors.drawerActive,
        drawerInactiveTintColor: theme.colors.drawerInactive,
        drawerType: 'slide',
        header: () => (
          <Header
            headerLeft={<DrawerToggleButton tintColor={theme.colors.primary} />}
            headerRight={
              <Pressable>
                <Ionicons name="md-notifications-outline" size={24} color={theme.colors.primary} />
              </Pressable>
            }
          />
        ),
      }}
    >
      <Drawer.Screen
        name="home/index"
        options={{
          drawerLabel: 'Home',
        }}
      />
      <Drawer.Screen
        name="user/index"
        options={{
          drawerLabel: 'User',
        }}
      />
    </Drawer>
  );
}