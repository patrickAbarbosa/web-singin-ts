import React, { useEffect, useState } from 'react'
import { Box, Flex, Grid, useToast } from '@chakra-ui/react'
import { validate } from 'email-validator'
import { NextPage } from 'next'

import SignInImage from 'src/assets/images/background/signin.png'
import { AppButton } from 'src/modules/Common/components/AppButton'
import { AppHeading } from 'src/modules/Common/components/AppHeading'
import { AppInput } from 'src/modules/Common/components/AppInput'
import { AppLink } from 'src/modules/Common/components/AppLink'
import { AppText } from 'src/modules/Common/components/AppText'
import { AppMainLayout } from 'src/modules/Common/layout/AppMainLayout'
import { AppPageSeo } from 'src/modules/Common/layout/AppPageSeo'
import { useSignin } from 'src/modules/pages/SignIn/hooks/useSignin'

const Home: NextPage = () => {
  const toast = useToast()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

  const { isLoading, error, signIn, isAuthenticate } = useSignin()

  const handleSingIn = () => {
    setEmailError(false)
    setPasswordError(false)

    if (!validate(email)) {
      setEmailError(true)
    } else if (password.length < 4) {
      setPasswordError(true)
    } else {
      signIn(email, password)
    }
  }

  const renderFeedback = ({ title, message, bg }) => {
    return (
      <Box color="white" p={3} bg={bg} rounded="8px">
        <AppText color="white" fontWeight={700}>
          {title}
        </AppText>
        <AppText color="white">{message}</AppText>
      </Box>
    )
  }

  useEffect(() => {
    if (isAuthenticate) {
      toast({
        position: 'bottom',
        render: () =>
          renderFeedback({
            title: 'Login efetuado com sucesso!',
            message: 'Olá, seja bem-vindo!',
            bg: 'linear-gradient(45deg, #9D25B0 0%, #4d25b0 99.18%)',
          }),
      })
    }
  }, [isAuthenticate, toast])

  useEffect(() => {
    if (error) {
      toast({
        position: 'bottom',
        render: () =>
          renderFeedback({
            title: 'Ops',
            message: 'Ocorreu um erro! =(',
            bg: 'linear-gradient(45deg, #FF377F 0%, #FF3737 99.18%)',
          }),
      })
    }
  }, [error, toast])

  return (
    <>
      <AppPageSeo
        pageTitle="Acessar a plataforma"
        pageDescription="Faça o login e acesse a plataforma"
        pageCanonicalURL="/"
        pageImageUrl={SignInImage}
        pageKeywords="plataforma, login, acessar, entrar"
      />

      <AppMainLayout>
        <Grid templateColumns={{ base: '1fr', sm: '42% auto', lg: '56% auto' }} position="relative">
          <Box backgroundImage={`url(${SignInImage})`} h="100vh" backgroundSize="cover" backgroundPosition="center">
            <Box w="full" h="full" background="linear-gradient(0deg, #130525 0%, rgba(105, 57, 153, 0) 100%)" />
          </Box>

          <Flex
            flexDirection="column"
            flexWrap="nowrap"
            justifyContent="center"
            alignItems="center"
            ml={{ base: 'auto', sm: '80px', md: '112px' }}
            my="auto"
            w={{ base: 'full', sm: '256px' }}
            h="full"
            position={{ base: 'absolute', sm: 'inherit' }}>
            <Box
              w={{ base: '83%', sm: 'full' }}
              backgroundColor={{ base: '#FAF5FF', sm: 'transparent' }}
              rounded="8px"
              pt="24px"
              px={{ base: '28px', sm: 0 }}>
              <AppHeading textAlign={{ base: 'center', sm: 'left' }}>
                Olá, seja
                <br />
                bem-vindo!
              </AppHeading>

              <AppText d={{ base: 'none', sm: 'inline-block' }} mt="11px" fontWeight="semibold">
                Para acessar a plataforma,
                <br />
                faça seu login.
              </AppText>

              <AppText d={{ base: 'inline-block', sm: 'none' }} mt="11px" fontWeight="semibold">
                Para acessar a plataforma, faça seu login.
              </AppText>

              <AppInput
                label="E-MAIL"
                placeholder="user.name@mail.com"
                type="email"
                isDisabled={isLoading}
                onChange={e => setEmail(e.target.value)}
                value={email}
                mt="44px"
                isError={emailError}
                messageError="Digite um e-mail válido"
              />

              <AppInput
                label="SENHA"
                placeholder="*******"
                type="password"
                isDisabled={isLoading}
                onChange={e => setPassword(e.target.value)}
                value={password}
                mt="16px"
                isError={passwordError}
                messageError="Digite uma senha válida"
              />

              <Flex mt="24px" mb={{ base: '-20px', sm: 0 }} justifyContent="center">
                <AppButton w={{ base: '168px', sm: 'full' }} onClick={handleSingIn} isLoading={isLoading}>
                  Entrar
                </AppButton>
              </Flex>
            </Box>

            <AppText fontSize="14px" mt="32px" w="full" textAlign="center">
              Esqueceu seu login ou senha?
              <br />
              Clique{' '}
              <AppLink href="##" color="primary.300" textDecoration="underline">
                aqui
              </AppLink>
            </AppText>
          </Flex>
        </Grid>
      </AppMainLayout>
    </>
  )
}

export default Home
