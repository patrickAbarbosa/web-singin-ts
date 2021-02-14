import React, { PropsWithChildren } from 'react'
import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/react'
import { LinkProps as NextLinkProps } from 'next/dist/client/link'
import NextLink from 'next/link'

export interface AppLinkUrlObject {
  href: NextLinkProps['href']
  as?: string
}

export type AppLinkProps = PropsWithChildren<
  Omit<NextLinkProps, 'href' | 'as'> &
    Omit<ChakraLinkProps, 'href'> & {
      href: string
    }
>

export const AppLink: React.FC<AppLinkProps> = ({ href, scroll, children, locale, ...chakraProps }) => {
  return (
    <NextLink passHref={true} href={href} scroll={scroll} locale={locale}>
      <ChakraLink _focus={{ boxShadow: 'none' }} {...chakraProps}>
        {children}
      </ChakraLink>
    </NextLink>
  )
}
