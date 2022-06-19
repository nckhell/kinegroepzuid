import fs from 'fs'
import glob from 'glob'
import matter from 'gray-matter'
import { join } from 'path'

import { PageType } from '../types/pages.types'

const PAGES_PATH = join(process.cwd(), 'content/pages')

export const getPage = (slug: string): PageType => {
  const fullPath = join(PAGES_PATH, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf-8')
  const { data, content } = matter(fileContents)

  //@ts-expect-error frontMatter is typed
  return { frontMatter: data, slug, content }
}

export const getAllPages = () => {
  let filePaths: string[] = []

  filePaths = glob
    .sync(`**/*`, { cwd: PAGES_PATH })
    .filter((path) => /\.mdx?$/.test(path))

  const pages = filePaths.map((filePath) => {
    const mdWithData = fs.readFileSync(join(PAGES_PATH, filePath), 'utf-8')

    const { data } = matter(mdWithData)

    return {
      frontMatter: data,
      slug: filePath.split('.')[0],
    }
  })

  return pages
}
