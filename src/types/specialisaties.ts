import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export type SpecialisatieType = {
  frontMatter: {
    title: string
  }
  mdxSource: MDXRemoteSerializeResult
  slug: string
  content: string
}
