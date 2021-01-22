import { START_CALL, CALL_SUCCESS, CALL_FAILURE, START_ADD_SMURF, ADD_SMURF_SUCCESS, ADD_SMURF_FAILURE, SET_NEW_SMURF } from '../actions'

export const initialState = {
    smurfs: [],
    appLoading: false,
    // formValues: {},
    error: '',
    formValues: {
        id: Date.now(),
        name: '',
        nickname: '',
        position: '',
        description: ''
    }
}

export const reducer = (state = initialState, action)=>{
    switch (action.type){
        case START_CALL:
            return {
                ...state,
                appLoading: true,
                error: ''
            }
        case CALL_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                appLoading: false
            }
        case CALL_FAILURE:
            return {
                ...state,
                appLoading: false,
                error: action.payload
            }
        case START_ADD_SMURF:
            return {
                ...state,
                appLoading: true,
                error: ''
            }
        case ADD_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                appLoading: false
            }
        case ADD_SMURF_FAILURE:
            return {
                ...state,
                appLoading: false,
                error: action.payload
            }
        case SET_NEW_SMURF:
            return {
                ...state,
                formValues: initialState.formValues,
                
            }
        default:
            return (state)
    }
}

//Task List:
//1. Add in the initialState needed to hold: 
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary