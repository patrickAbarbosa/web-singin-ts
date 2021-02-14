import React, { useMemo } from 'react'
import { ButtonProps } from '@chakra-ui/react'

import { AppButtonStyled } from './style'

const AppButtonVariantStyle = {
  solid: {
    background: 'linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%)',
    boxShadow: { base: 'none', sm: '0px 10px 25px #CF99DB' },
    color: 'white',
    _focus: {
      opacity: 0.8,
    },
    _hover: {
      opacity: 0.8,
    },
  },
}

export const AppButton: React.FC<ButtonProps> = ({ children, variant = 'solid', ...buttonProps }) => {
  const variantStyle = useMemo(() => AppButtonVariantStyle[variant], [variant])

  return (
    <AppButtonStyled {...variantStyle} {...buttonProps}>
      {children}
    </AppButtonStyled>
  )
}
