import { userTypes } from '../reducers/user'

export const fetchSignIn = (action?: { email: string; password: string }) => {
  // const payload = {
  //   firstName: 'Patrick',
  //   lastName: 'Barbosa',
  //   email: action.email,
  //   authorizationToken: 'Oi Patrick',
  //   role: 'costumer',
  // }

  return {
    type: userTypes.SIGN_IN_FAIL,
    error: action.email,
  }
}
