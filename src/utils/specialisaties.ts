import fs from 'fs'
import glob from 'glob'
import matter from 'gray-matter'
import { join } from 'path'

const CONTENT_PATH = join(process.cwd(), 'content/specialisaties')

export const getSpecialisaties = () => {
  let filePaths: string[] = []

  filePaths = glob
    .sync(`**/*`, { cwd: CONTENT_PATH })
    .filter((path) => /\.mdx?$/.test(path))

  const specialisaties = filePaths.map((filePath) => {
    const mdWithData = fs.readFileSync(join(CONTENT_PATH, filePath), 'utf-8')

    const { data, content } = matter(mdWithData)

    return {
      frontMatter: data,
      content,
      slug: filePath.split('.')[0],
    }
  })

  return specialisaties
}
