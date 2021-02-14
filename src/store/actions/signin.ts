import ApiService from 'src/api/ApiService'

import { userTypes } from '../reducers/user'

export const fetchSignIn = (email: string, password: string) => {
  return async dispatch => {
    try {
      dispatch({ type: userTypes.SIGN_IN })

      const { data } = await ApiService.post('/', { email, password })

      if (data.authorizationToken) {
        ApiService.defaults.headers.common.Authorization = data.authorizationToken

        const payload = {
          firstName: data.identity.name.first,
          lastName: data.identity.name.last,
          authorizationToken: data.authorizationToken,
          email: email,
        }
        dispatch({ type: userTypes.SIGN_IN_SUCCESS, payload })
      } else {
        dispatch({ type: userTypes.SIGN_IN_FAIL, error: 'Error Authorization Token' })
      }
    } catch (error) {
      dispatch({ type: userTypes.SIGN_IN_FAIL, error })
    }
  }
}
