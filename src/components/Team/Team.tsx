/* eslint-disable @next/next/no-img-element */

import { useState } from 'react'

import { team } from '../../../content/team'
import { TeamMemberType } from '../../types/team.types'
import { Button } from '../Button'
import { Container } from '../Container'

const sections = [
  {
    title: 'Manuele therapie - Geconventioneerd',
    people: ['Kevin', 'Sven', 'Kyra'],
  },
  {
    title: 'Manuele therapie - Gedeconventioneerd',
    people: ['Aiko'],
  },
  {
    title: 'Osteopathie',
    people: ['Magalie'],
  },
  {
    title: 'Diëtiek - Tabakologie',
    people: ['Daphne'],
  },
  {
    title: 'Podologie',
    people: ['Pieter'],
  },
  {
    title: 'Personal trainer',
    people: ['Yanuka'],
  },
]

export const Team = () => {
  const [selectedPerson, setSelectedPerson] = useState<TeamMemberType | null>(
    null
  )

  const getGridStyles = (cols: number) => {
    if (cols === 1) {
      return 'mx-auto space-y-8 sm:space-y-0 lg:gap-8'
    }
    if (cols === 2) {
      return 'space-y-8 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:gap-8'
    }

    return 'space-y-8 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8'
  }

  return (
    <div className="bg-slate-100 py-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2
            id="team"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl scroll-mt-40"
          >
            Team
          </h2>
          <p className="mt-4 text-2xl tracking-tight text-slate-600">
            KINE GROEP ZUID is een groepspraktijk van paramedici. Dit brengt
            verschillende disciplines samen die u multidisciplinair kunnen
            helpen.
          </p>
        </div>
      </Container>
      <Container>
        {selectedPerson ? (
          <>
            <div className="mb-8">
              <button
                onClick={() => setSelectedPerson(null)}
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Terug naar team
              </button>
            </div>
            <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-8 sm:space-y-0">
              <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                <img
                  className="object-cover shadow-lg rounded-lg"
                  src={`/team/${selectedPerson.imageFileName}`}
                  alt=""
                />
              </div>
              <div className="pt-4 sm:pt-0 sm:col-span-2">
                <div className="space-y-4">
                  <div className="text-lg leading-6 font-medium">
                    <h3
                      id={`${selectedPerson.firstName}-${selectedPerson.lastName}`}
                      className="text-3xl mb-0"
                    >
                      {selectedPerson.firstName} {selectedPerson.lastName}
                      <span className="inline-block pl-2 text-slate-600 text-base font-normal">
                        {selectedPerson.firstName === 'Daphne' ||
                        selectedPerson.firstName === 'Pieter'
                          ? ''
                          : selectedPerson.geconventioneerd
                          ? '(Geconventioneerd therapeut)'
                          : '(Gedeconventioneerd therapeut)'}
                      </span>
                    </h3>
                    <p className="text-fuchsia-700 text-lg">
                      {selectedPerson.role}
                    </p>
                  </div>
                  <div
                    className="team-content text-xl leading-relaxed text-slate-500"
                    dangerouslySetInnerHTML={{
                      __html: selectedPerson.description,
                    }}
                  />
                  <p className="text-slate-500 text-xl">
                    <span className="font-semibold text-fuchsia-600">Tel:</span>{' '}
                    <a
                      href={`tel:${selectedPerson.phone}`}
                      title={`Bel ${selectedPerson.firstName}`}
                    >
                      {selectedPerson.phone}
                    </a>
                  </p>
                  {selectedPerson.appointmentUrl && (
                    <p className="text-white text-xl mt-4">
                      <a
                        className="btn-base px-5 py-2.5 text-sm text-white bg-fuchsia-800 highlight-white/20 hover:bg-fuchsia-700 focus:ring-fuchsia-300"
                        href={selectedPerson.appointmentUrl}
                        target="blank"
                      >
                        Maak online een afspraak met {selectedPerson.firstName}
                      </a>
                    </p>
                  )}
                  {selectedPerson.exception && (
                    <p className="mt-4 text-fuchsia-600">
                      {selectedPerson.exception}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col gap-y-16">
            {sections.map((section) => {
              return (
                <div key={section.title}>
                  <h3 className="text-center mb-8">{section.title}</h3>
                  <ul
                    role="list"
                    className={getGridStyles(section.people.length)}
                  >
                    {team
                      .filter((member) =>
                        section.people.includes(member.firstName)
                      )
                      .map((person) => (
                        <li
                          key={person.firstName}
                          className="text-center rounded-lg xl:px-8 xl:text-left"
                        >
                          <div className="flex flex-col h-full space-y-6 xl:space-y-4">
                            <div className="mx-auto relative h-40 w-40 lg:w-40 lg:h-40 rounded-full overflow-hidden">
                              <img
                                src={`/team/${person.imageFileName}`}
                                alt={`${person.firstName} ${person.lastName}`}
                                width={person.imageWidth}
                                height={person.imageHeight}
                                className="relative"
                                style={{
                                  ...person.backgroundPosition,
                                  maxWidth: person.maxWidth
                                    ? person.maxWidth
                                    : '',
                                }}
                              />
                            </div>
                            <div className="flex flex-col flex-grow xl:items-center xl:justify-between text-center">
                              <div className="flex flex-col flex-grow font-medium text-xl sm:text-lg leading-none space-y-1 sm:space-y-0 justify-between">
                                <h3 className="text-slate-800 mb-0 text-xl leading-none">
                                  {person.firstName}

                                  <span className="block text-fuchsia-700 font-normal text-base tracking-normal">
                                    {person.role}
                                  </span>
                                </h3>
                                {/* <p className="pt-2 text-base text-slate-800">
                        {person.specialitities.join(', ')}
                      </p> */}
                                {/* <p className="pt-2 text-base text-slate-600 italic">
                                  {person.firstName === 'Daphne' ||
                                  person.firstName === 'Pieter'
                                    ? ''
                                    : person.geconventioneerd
                                    ? 'Geconventioneerd therapeut'
                                    : 'Gedeconventioneerd therapeut'}
                                </p> */}
                                <div className="pt-4 mt-auto">
                                  <Button
                                    label={`Meer over ${person.firstName}`}
                                    fullWidth={false}
                                    color="fuchsia"
                                    onClick={() => {
                                      setSelectedPerson(person)
                                      const url = location.href
                                      location.href = '#team'
                                      history.replaceState(null, '', url)
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
              )
            })}
          </div>
        )}
      </Container>
    </div>
  )
}
