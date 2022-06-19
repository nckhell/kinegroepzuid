import { GetStaticPaths, GetStaticProps } from 'next'
import { type MDXRemoteSerializeResult, MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { ParsedUrlQuery } from 'querystring'
import { ReactNode } from 'react'

import { HomeLayout } from '../src/components/Layouts'
import { SEO } from '../src/components/SEO'
import { mdxOptions } from '../src/config/mdx'
import { PageType } from '../src/types/pages.types'
import { getAllPages, getPage } from '../src/utils'

type PageProps = PageType & {
  mdxSource: MDXRemoteSerializeResult
}

export default function Page({ frontMatter, mdxSource, slug }: PageProps) {
  return (
    <div>
      <SEO
        title={frontMatter.title}
        description={frontMatter.description}
        url={`/docs/${slug}`}
        canonicalUrl={`/docs/${slug}`}
      />
      <div>
        <div id="content-wrapper">
          <MDXRemote {...mdxSource} />
        </div>
      </div>
    </div>
  )
}

Page.getLayout = function getLayout(page: ReactNode) {
  return <HomeLayout>{page}</HomeLayout>
}

interface Iparams extends ParsedUrlQuery {
  slug: string[]
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as Iparams
  const slugString = slug.join('/')
  const { frontMatter, content } = await getPage(slugString)

  // https://github.com/hashicorp/next-mdx-remote/issues/86
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const mdxSource = await serialize(content, mdxOptions)

  return {
    props: {
      frontMatter,
      mdxSource,
      content,
      slug: slugString,
    },
  }
}

export const getStaticPaths: GetStaticPaths = () => {
  const pages = getAllPages()

  const paths = pages.map((page) => ({
    params: {
      slug: page.slug.split('/'),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}
