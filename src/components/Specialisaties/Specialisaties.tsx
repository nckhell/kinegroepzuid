/* eslint-disable @next/next/no-img-element */

import { MDXRemote } from 'next-mdx-remote'
import { useState } from 'react'

import { SpecialisatieType } from '../../types/specialisaties'
import { Container } from '../Container'

interface SpecialisatiesProps {
  specialisaties: SpecialisatieType[]
}

export const Specialisaties = ({ specialisaties }: SpecialisatiesProps) => {
  const [selectedSpecialisatie, setSelectedSpecilisatie] = useState(
    specialisaties[0]
  )

  return (
    <div className="bg-fuchsia-900 py-16">
      <Container>
        <div className="mx-auto text-left mb-8">
          <h2
            id="specialisaties"
            className="font-display text-3xl tracking-tight text-white sm:text-4xl scroll-mt-40"
          >
            Specialisaties
          </h2>
          <p className="mt-4 text-2xl tracking-tight text-white">
            Ontdek waarvoor je bij ons terecht kan.{' '}
            <span className="font-semibold border-b">
              Klik op een onderwerp om er meer over te weten.
            </span>
          </p>
        </div>
      </Container>
      <Container>
        <ul role="list" className="flex flex-wrap gap-x-4 gap-y-4">
          {specialisaties.map((s) => (
            <li key={s.slug}>
              <a
                href={`#${s.slug}`}
                className={`flex bg-fuchsia-100 text-slate-600 hover:bg-fuchsia-50 hover:text-fuchsia-800 px-4 py-3 font-medium text-lg font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-fuchsia-300 ring-offset-fuchsia-900 ${
                  s.slug === selectedSpecialisatie.slug
                    ? 'text-fuchsia-800 underline hover:bg-fuchsia-100'
                    : ''
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  setSelectedSpecilisatie(s)
                }}
              >
                {s.frontMatter.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <h3 className="text-white text-3xl">
            {selectedSpecialisatie.frontMatter.title}
          </h3>
          <div className="content text-white">
            <MDXRemote {...selectedSpecialisatie.mdxSource} />
          </div>
        </div>
      </Container>
    </div>
  )
}
