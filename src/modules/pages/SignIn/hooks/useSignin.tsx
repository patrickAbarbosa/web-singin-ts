import { useDispatch, useSelector } from 'react-redux'

import { fetchSignIn } from 'src/store/actions/signin'
import { IUser } from 'src/store/reducers/user'

interface HooKReturn {
  signIn(email: string, password: string): Promise<unknown>
  isAuthenticate: boolean
  isLoading: boolean
  error: unknown
}

export const useSignin = (): HooKReturn => {
  const dispatch = useDispatch()
  const { loading: isLoading, error, authorizationToken } = useSelector(
    (reducer: { userReducer: IUser }) => reducer.userReducer,
  )

  const signIn = async (email: string, password: string) => {
    dispatch(fetchSignIn(email, password))
  }

  return {
    signIn,
    isAuthenticate: authorizationToken !== '',
    isLoading,
    error,
  }
}
