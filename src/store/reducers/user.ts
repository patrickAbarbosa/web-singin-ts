export enum userTypes {
  'SIGN_IN' = 'SING_IN',
  'SIGN_IN_SUCCESS' = 'SING_IN_SUCCESS',
  'SIGN_IN_FAIL' = 'SING_IN_FAIL',
}

export interface IUser {
  firstName: string
  lastName: string
  email: string
  authorizationToken: string
  loading: boolean
  error: boolean
}

const INITIAL_STATE: IUser = {
  firstName: '',
  lastName: '',
  email: '',
  authorizationToken: '',
  loading: false,
  error: false,
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case userTypes.SIGN_IN:
      return {
        ...INITIAL_STATE,
        loading: true,
      }

    case userTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        ...action?.payload,
        loading: false,
      }

    case userTypes.SIGN_IN_FAIL:
      return {
        ...INITIAL_STATE,
        error: action?.error,
      }

    default:
      return state
  }
}
