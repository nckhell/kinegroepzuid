import Image from 'next/image'

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
          <p className="mt-4 text-xl tracking-tight text-slate-700">
            KINE GROEP ZUID is een groepspraktijk van kinesitherapeuten. Dit
            biedt de mogelijkheid om meerdere specialisaties onder één dak te
            vestigen.
          </p>
        </div>
      </Container>
      <Container>
        <div
          className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3 [&:not(:focus-visible)]:focus:outline-none"
          id="headlessui-tabs-panel-:Rql9m:"
          role="tabpanel"
          tabIndex={0}
          aria-labelledby="headlessui-tabs-tab-:R1j6l9m:"
        >
          {team.map((teamMember) => (
            <div
              key={teamMember.firstName}
              className="flex flex-col relative rounded-lg bg-white shadow-lg shadow-slate-900/10"
            >
              <div className="group relative h-[17.5rem] transform overflow-hidden rounded-lg rounded-b-none">
                <Image
                  src={`/team/${teamMember.imageFileName}`}
                  alt={`${teamMember.firstName} ${teamMember.lastName}`}
                  layout="fill"
                  className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col flex-grow p-4">
                <h3 className="font-display text-2xl font-bold tracking-tight text-slate-900">
                  {teamMember.firstName} {teamMember.lastName}
                </h3>
                <div className="flex flex-wrap gap-2 mb-8">
                  {teamMember.specialitities &&
                    teamMember.specialitities.map((speciality) => (
                      <div
                        key={speciality}
                        className="bg-fuchsia-100 whitespace-nowrap text-fuchsia-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
                      >
                        {speciality}
                      </div>
                    ))}
                </div>
                <div className="mt-auto">
                  <Button
                    label={`Meer over ${teamMember.firstName}`}
                    fullWidth={true}
                    color="slate"
                    onClick={() => true}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}
