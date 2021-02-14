import React, { useMemo } from 'react'
import Head from 'next/head'

interface Props {
  pageTitle: string
  pageDescription: string
  pageImageUrl?: string
  pageKeywords?: string
  pageCanonicalURL?: string
}

export const AppPageSeo: React.FC<Props> = ({
  pageTitle,
  pageDescription,
  pageImageUrl,
  pageKeywords,
  pageCanonicalURL,
  children,
}) => {
  const _pageCanonicalURL = useMemo(() => {
    if (!pageCanonicalURL) {
      return null
    }

    const isFullUrl = pageCanonicalURL.includes('://')

    if (isFullUrl) {
      return pageCanonicalURL
    }

    const fullUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${pageCanonicalURL}`

    return fullUrl
  }, [pageCanonicalURL])

  const _pageTitle = useMemo(() => `${pageTitle} - ${process.env.NEXT_PUBLIC_APP_NAME}`, [pageTitle])

  return (
    <Head>
      <title>{_pageTitle}</title>

      <meta name="title" content={_pageTitle} />
      <meta name="og:title" property="og:title" content={_pageTitle} />
      <meta name="twitter:title" content={_pageTitle} />

      <meta name="description" content={pageDescription} />
      <meta name="og:description" property="og:description" content={pageDescription} />
      <meta name="twitter:description" content={pageDescription} />

      {pageImageUrl && <meta name="og:image" property="og:image" content={pageImageUrl} />}

      {pageKeywords && <meta name="keywords" content={pageKeywords} />}

      {_pageCanonicalURL && <meta name="og:url" property="og:url" content={_pageCanonicalURL} />}
      {_pageCanonicalURL && <link rel="canonical" href={_pageCanonicalURL} />}

      <meta property="og:site_name" content={process.env.NEXT_PUBLIC_APP_NAME} />

      <meta property="og:locale" content="pt_BR" />

      <meta name="twitter:card" content="summary" />
      {children}
    </Head>
  )
}
