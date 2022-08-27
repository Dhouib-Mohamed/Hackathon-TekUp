import {Theme} from 'react-native-paper/lib/typescript/types';
import {DefaultTheme} from 'react-native-paper';

const defaultTheme: Theme ={
    ...DefaultTheme,
    dark: false,
    mode: 'adaptive',
    colors: {
        ...DefaultTheme.colors,
        primary: `#00b300`,
        background: 'rgb(114,176,101)',
        card: 'rgb(255, 255, 255)',
        text: 'rgb(28, 28, 30)',
        disabled: 'rgb(168,168,168)',
        border: 'rgb(216, 216, 216)',
        notification: 'rgb(255, 59, 48)',
    },
};

export default defaultTheme;
