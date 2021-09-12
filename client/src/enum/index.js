import { generateConstantsAction } from '../utils'

export const COLORS = {
    green: '#4C8E55',
    greenBackground:'rgba(175, 218, 181, 0.6)',
    white: '#fff',
    gray: '#E4E7EC',
    gray2: '#ccc',
    black: '#51575B',
    red: '#EB695C',
    blue: '#679DE2',
    grayOpacity: 'rgba(128, 128, 128, 0.3)',
    lightGreen: '#f9fdf9',
    greenHeaderBackground: '#04AA6D',
    greenButtonBackground: '#04AA6D',
    evenTrTableBackground: '#f2f2f2',
    grayHoverTable:'#dddddd'
};

export const HOME_ACTION_TYPE = {
    ...generateConstantsAction('UPDATE_STORE_PROFILE'),
    ...generateConstantsAction('GET_STORES'),
    ...generateConstantsAction('ADD_STORE'),
    RESET_CREATE_OR_UPDATE_SUCCESS: 'RESET_CREATE_OR_UPDATE_SUCCESS'
}