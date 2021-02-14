import React from 'react'
import { Text, TextProps } from '@chakra-ui/react'

export const AppText: React.FC<TextProps> = ({ children, ...AppTextProps }) => {
  return (
    <Text color="neutral.300" {...AppTextProps}>
      {children}
    </Text>
  )
}
