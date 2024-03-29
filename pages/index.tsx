import { GetStaticProps } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
import { ReactNode } from 'react'

import { Afspraak } from '../src/components/Afspraak'
import { Footer } from '../src/components/Footer'
import { Header } from '../src/components/Header'
import { Home } from '../src/components/Home'
import { Info } from '../src/components/Info'
import { HomeLayout } from '../src/components/Layouts'
import { Ligging } from '../src/components/Ligging'
import { SEO } from '../src/components/SEO'
import { Specialisaties } from '../src/components/Specialisaties'
import { Tarieven } from '../src/components/Tarieven'
import { Team } from '../src/components/Team'
import { SpecialisatieType } from '../src/types/specialisaties'
import { getSpecialisaties } from '../src/utils/specialisaties'

type PageProps = {
  specialisaties: SpecialisatieType[]
}

export default function HomePage({ specialisaties }: PageProps) {
  return (
    <>
      <SEO
        title="Kine Groep Zuid"
        description="Kine Groep Zuid is een groepspraktijk in Antwerpen van paramedici binnen de kinesitherapie met verschillende specialisaties."
        url={'/'}
        canonicalUrl={'/'}
      />
      <Header />
      <div className="relative z-30">
        <Home />
        <Team />
        <Info />
        <Specialisaties specialisaties={specialisaties} />
        <Tarieven />
        <Ligging />
        <Afspraak />
        <Footer />
      </div>
    </>
  )
}

HomePage.getLayout = function getLayout(page: ReactNode) {
  return <HomeLayout>{page}</HomeLayout>
}

export const getStaticProps: GetStaticProps = async () => {
  let specialisaties = getSpecialisaties()

  const addMdxSources = async () => {
    specialisaties = await Promise.all(
      specialisaties.map(async (s) => {
        const mdxSource = await serialize(s.content, {})

        return {
          ...s,
          mdxSource,
        }
      })
    )
  }

  await addMdxSources()

  return {
    props: {
      specialisaties,
    },
  }
}
