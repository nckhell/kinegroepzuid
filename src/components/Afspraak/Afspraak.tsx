import { useState } from 'react'

import { team } from '../../../content/team'
import { Container } from '../Container'

export const Afspraak = () => {
  const [selectedPerson, setSelectedPerson] = useState(team[0])
  return (
    <div className="bg-slate-800 py-16">
      <Container>
        <div className="mx-auto text-left mb-4">
          <h2
            id="afspraak"
            className="font-display text-3xl tracking-tight text-white lg:text-4xl scroll-mt-40"
          >
            Afspraak
          </h2>
          <p className="mt-4 text-2xl tracking-tight text-white">
            Selecteer één van onze therapeuten en maak eenvoudig een afspraak
            via telefoon of online.
          </p>
        </div>
      </Container>
      <Container>
        <div>
          <ul role="list" className="flex flex-wrap gap-x-4 gap-y-4 mb-12">
            {team.map((person) => (
              <li key={person.lastName}>
                <a
                  href={`#${person.firstName}-${person.lastName}`}
                  className={`flex bg-slate-100 text-slate-600 hover:bg-slate-200 px-4 py-3 font-medium text-lg font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-300 ring-offset-slate-800 ${
                    person.firstName === selectedPerson.firstName
                      ? 'bg-fuchsia-600 text-fuchsia-50 hover:bg-fuchsia-600 hover:text-fuchsia-50'
                      : ''
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    setSelectedPerson(person)
                  }}
                >
                  {person.firstName} {person.lastName}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:flex lg:gap-x-8">
          <div className="lg:w-1/3">
            <h3 className="font-display text-2xl tracking-tight text-white lg:text-3xl leading-none">
              {selectedPerson.firstName} {selectedPerson.lastName}
              <span className="block text-lg font-normal tracking-normal">
                {selectedPerson.firstName === 'Daphne' ||
                selectedPerson.firstName === 'Pieter'
                  ? ''
                  : selectedPerson.geconventioneerd
                  ? 'Geconventioneerd therapeut'
                  : 'Gedeconventioneerd therapeut'}
              </span>
            </h3>
            <p className="text-white text-xl">
              <span className="font-semibold text-fuchsia-400">Tel:</span>{' '}
              <a
                href={`tel:${selectedPerson.phone}`}
                title={`Bel ${selectedPerson.firstName}`}
                className="border-b"
              >
                {selectedPerson.phone}
              </a>
            </p>
            {selectedPerson.appointmentUrl && (
              <p className="text-white text-xl mt-4">
                <a
                  className="btn-base px-5 py-2.5 text-sm text-fuchsia-50 bg-fuchsia-600 highlight-white/20 hover:bg-fuchsia-700 focus:ring-fuchsia-300 focus:ring-offset-slate-800"
                  href={selectedPerson.appointmentUrl}
                  target="blank"
                >
                  Maak online een afspraak met {selectedPerson.firstName}
                </a>
              </p>
            )}
            {selectedPerson.appointmentHtml && (
              <div
                className="text-xl text-white mt-2"
                dangerouslySetInnerHTML={{
                  __html: selectedPerson.appointmentHtml,
                }}
              />
            )}
            {selectedPerson.exception && (
              <p className="mt-4 text-white">{selectedPerson.exception}</p>
            )}
          </div>
          <div className="mt-12 lg:mt-0 lg:w-2/3">
            <h3 className="font-display text-2xl tracking-tight text-white lg:text-3xl">
              Algemene informatie
            </h3>
            <div className="text-white text-xl">
              <p className="mb-4">
                Van Putlei 53/12
                <br />
                2018 Antwerpen
                <br />
                <span className="font-semibold text-fuchsia-400">Tel:</span> +32
                (0)3 216 26 24
              </p>
              <p className="mb-4">
                Indien de afspraakmogelijkheden die online worden aangeboden
                naar uw gevoel te ver in de toekomst liggen, kan u ons steeds
                telefonisch contacteren en trachten wij ons zo flexibel mogelijk
                op te stellen om aan uw wensen te voldoen en u zo spoedig
                mogelijk te behandelen. Wij doen ons uiterste best om binnen de
                24 uren voor u tijd te maken.
              </p>
              <p>
                Maakt u online een afspraak, kijk dan zeker uw e-mail na want u
                krijgt een afspraakbevestiging. Ontvangt u deze niet, contacteer
                ons dan even om misverstanden te voorkomen.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
