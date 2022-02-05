import {
    SHOW_ALERT,
    HIDE_ALERT
} from '../types/index'

export function showAlertAction(alert) {
    return (dispatch) => {
        dispatch(showAlert(alert))
    }
}

const showAlert = alert => ({
    type: SHOW_ALERT,
    payload: alert
})


export function hideAlertAction(alert) {
    return (dispatch) => {
        dispatch(hideAlert(alert))
    }
}

const hideAlert = () => ({
    type: HIDE_ALERT
})