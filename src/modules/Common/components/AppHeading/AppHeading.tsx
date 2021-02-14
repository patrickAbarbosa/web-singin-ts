import React from 'react'
import { Heading, HeadingProps } from '@chakra-ui/react'

export const AppHeading: React.FC<HeadingProps> = ({ children, ...appHeadingProps }) => {
  return (
    <Heading color="neutral.600" {...appHeadingProps}>
      {children}
    </Heading>
  )
}
