import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Example, Home } from 'pages'
import type { GetScreenOptionsProps, TabBarIconProps } from 'routes/types'

import useNotification from 'infra/store/notification'

import T from 'theme'

// const screenOptionsStyles = {
//   headerStyle: {
//     backgroundColor: T.colors.blue
//   },
//   headerTitleStyle: {
//     fontFamily: T.fonts.familiesWeights.medium,
//     color: T.colors.white
//   },
//   headerBackTitleStyle: {
//     fontFamily: T.fonts.familiesWeights.regular
//   },
//   headerTintColor: T.colors.white,
//   headerTitleAlign: 'center',
//   headerBackTitleVisible: false
// } as const

const screenOptionsStyles = {
  headerStyle: {
    backgroundColor: T.colors.blue
  },
  headerTitleStyle: {
    fontFamily: T.fonts.familiesWeights.medium,
    color: T.colors.white
  },
  headerTitleAlign: 'center',
  tabBarActiveTintColor: T.colors.blue,
  tabBarInactiveTintColor: T.colors.gray
} as const

const getScreenOptions = ({ route }: GetScreenOptionsProps) => ({
  tabBarIcon: ({ focused, color, size }: TabBarIconProps) => {
    let iconName

    if (route.name === 'Home') {
      iconName = focused ? 'home' : 'home-outline'
    }
    if (route.name === 'Example') {
      iconName = focused
        ? 'ios-information-circle'
        : 'ios-information-circle-outline'
    }

    return <Ionicons name={iconName as any} size={size} color={color} />
  },
  ...screenOptionsStyles
})

// const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const Routes = () => {
  const { stateNotification } = useNotification()
  const tabBarBadge =
    stateNotification.counter > 0 ? stateNotification.counter : undefined

  return (
    <>
      <NavigationContainer>
        <>
          {/* <Stack.Navigator initialRouteName="Home" screenOptions={screenOptionsStyles}> */}
          {/*  <Stack.Screen name="Home" component={Home} /> */}
          {/*  <Stack.Screen name="Example" component={Example} /> */}
          {/* </Stack.Navigator> */}
          <Tab.Navigator
            initialRouteName="Home"
            screenOptions={getScreenOptions}
          >
            <Tab.Screen
              name="Home"
              component={Home}
              options={{ tabBarBadge }}
            />
            <Tab.Screen name="Example" component={Example} />
          </Tab.Navigator>
        </>
      </NavigationContainer>
    </>
  )
}

export default Routes
