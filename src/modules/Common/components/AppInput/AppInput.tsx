import React from 'react'
import { CloseIcon } from '@chakra-ui/icons'
import { Box, Flex, Input, InputGroup, InputProps, InputRightElement } from '@chakra-ui/react'

import { AppInputLabel, AppInputMessageError } from './styles'

interface AppTextProps {
  label?: string
  isError?: boolean
  messageError?: string
}

export const AppInput: React.FC<InputProps & AppTextProps> = ({
  label,
  isError,
  messageError,
  w,
  width,
  mt,
  marginTop,
  mb,
  marginBottom,
  ...inputProps
}) => {
  return (
    <Box mt={mt || marginTop} mb={mb || marginBottom}>
      {label && <AppInputLabel>{label}</AppInputLabel>}

      <InputGroup w={w || width}>
        <Input
          w={w || width}
          rounded="8px"
          borderColor={isError ? 'error' : 'neutral.300'}
          fontSize="10px"
          lineHeight="48px"
          p="16px"
          h="48px"
          color="neutral.600"
          _hover={{ borderColor: isError ? 'error' : 'primary.300' }}
          _focus={{ borderColor: isError ? 'error' : 'primary.300' }}
          {...inputProps}
        />

        {isError && (
          <InputRightElement h="full">
            <Flex h="full" alignItems="center">
              <CloseIcon h="8px" color="error" />
            </Flex>
          </InputRightElement>
        )}
      </InputGroup>

      {isError && <AppInputMessageError>{messageError}</AppInputMessageError>}
    </Box>
  )
}
