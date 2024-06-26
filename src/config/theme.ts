import { adaptNavigationTheme, configureFonts, MD3DarkTheme, MD3LightTheme } from 'react-native-paper'
import { DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native'
import { lightColors, darkColors } from './colors'
import fontConfig from './fonts'

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme
})

const CombinedDefaultTheme = {
  ...MD3LightTheme,
  ...LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    ...LightTheme.colors,
    ...lightColors
  }
}

const CombinedDarkTheme = {
  ...MD3DarkTheme,
  ...DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    ...DarkTheme.colors,
    ...darkColors
  }
}

const fonts = configureFonts({ config: fontConfig })

export const AppDefaultTheme = {
  ...CombinedDefaultTheme,
  fonts
}

export const AppDarkTheme = {
  ...CombinedDarkTheme,
  fonts
}