import { ReactNode } from 'react'

import { HomeLayout } from '../src/components/Layouts'
// type DocsPageProps = {
//   frontMatter: {
//     title: string
//     description: string
//   }
//   mdxSource: MDXRemoteSerializeResult
//   slug: string
//   content: string
// }

export default function HomePage({}) {
  return <div>Hello</div>
}

HomePage.getLayout = function getLayout(page: ReactNode) {
  return <HomeLayout>{page}</HomeLayout>
}

// export const getStaticProps: GetStaticProps = async () => {
//   const homePage = '/getting-started/welcome'
//   const { frontMatter, content } = await getDoc(homePage)

//   // https://github.com/hashicorp/next-mdx-remote/issues/86
//   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//   //@ts-ignore
//   const mdxSource = await serialize(content, mdxOptions)

//   return {
//     props: {
//       frontMatter,
//       mdxSource,
//       content,
//       slug: homePage,
//     },
//   }
// }
