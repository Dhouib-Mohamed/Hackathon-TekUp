import {Theme} from 'react-native-paper/lib/typescript/types';
import {DefaultTheme} from 'react-native-paper';

const DarkTheme: Theme = {
    ...DefaultTheme,
    dark: true,
    mode: 'adaptive',
    colors: {
        ...DefaultTheme.colors,
        primary: `#00b300`,
        background: 'rgb(24,82,20)',
        card: 'rgb(49,37,37)',
        text: 'rgb(229, 229, 231)',
        border: 'rgb(39, 39, 41)',
        disabled: 'rgb(143,143,143)',
        notification: 'rgb(255, 69, 58)',
    },
};

export default DarkTheme;
