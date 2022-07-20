import { ReactNode } from 'react'

import { HomeLayout } from '../src/components/Layouts'

export default function HomePage({}) {
  return <div />
}

HomePage.getLayout = function getLayout(page: ReactNode) {
  return <HomeLayout>{page}</HomeLayout>
}
