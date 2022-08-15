/* eslint-disable @next/next/no-img-element */

import { useState } from 'react'

import { team } from '../../../content/team'
import { TeamMemberType } from '../../types/team.types'
import { stripHtml } from '../../utils/string'
import { Button } from '../Button'
import { Container } from '../Container'

export const Team = () => {
  const [selectedPerson, setSelectedPerson] = useState<TeamMemberType | null>(
    null
  )

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
            KINE GROEP ZUID is een groepspraktijk van kinesitherapeuten. Dit
            biedt de mogelijkheid om meerdere specialisaties onder één dak te
            vestigen.
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
                    </h3>
                    <p className="text-fuchsia-700 text-xl">
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
                </div>
              </div>
            </div>
          </>
        ) : (
          <ul
            role="list"
            className="space-y-8 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8"
          >
            {team.map((person) => (
              <li
                key={person.firstName}
                className="py-10 px-6 bg-slate-200 text-center rounded-lg xl:px-10 xl:text-left"
              >
                <div className="flex flex-col h-full space-y-6 xl:space-y-8">
                  <div className="mx-auto relative h-40 w-40 rounded-full xl:w-56 xl:h-56 overflow-hidden">
                    <img
                      src={`/team/${person.imageFileName}`}
                      alt={`${person.firstName} ${person.lastName}`}
                      width={person.imageWidth}
                      height={person.imageHeight}
                      className="relative"
                      style={person.backgroundPosition}
                    />
                  </div>
                  <div className="flex flex-col flex-grow xl:items-center xl:justify-between">
                    <div className="flex flex-col flex-grow font-medium text-xl sm:text-lg leading-4 space-y-1 sm:space-y-0">
                      <h3 className="text-slate-800 mb-0 text-xl sm:text-lg">
                        {person.firstName}
                      </h3>
                      <p className="text-fuchsia-700">{person.role}</p>
                      <div className="flex flex-grow pt-4 text-lg text-slate-500">
                        <p>
                          {stripHtml(person.description).substring(0, 160)}
                          {person.description.length > 100 ? '...' : ''}
                        </p>
                      </div>
                      <div className="pt-6 mt-auto">
                        <Button
                          label={`Meer over ${person.firstName}`}
                          fullWidth={true}
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
        )}
      </Container>
    </div>
  )
}
