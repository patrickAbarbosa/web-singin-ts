import React from 'react'
import { Box } from '@chakra-ui/react'

export const AppMainLayout: React.FC = ({ children }) => {
  return (
    <Box w="100vw" h="100vh" backgroundColor="neutral.50" position="relative" overflow="auto">
      {children}
    </Box>
  )
}
