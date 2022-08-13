/* eslint-disable @next/next/no-img-element */

import { team } from '../../../content/team'
import { Button } from '../Button'
import { Container } from '../Container'

export const Team = () => {
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
                        {person.description.substring(0, 160)}
                        {person.description.length > 100 ? '...' : ''}
                      </p>
                    </div>
                    <div className="pt-6 mt-auto">
                      <Button
                        label={`Meer over ${person.firstName}`}
                        fullWidth={true}
                        color="fuchsia"
                        onClick={() => true}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  )
}
