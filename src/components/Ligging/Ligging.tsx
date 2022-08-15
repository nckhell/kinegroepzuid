import { Status, Wrapper } from '@googlemaps/react-wrapper'

import { Container } from '../Container'
import { Map } from './Map'
import { Marker } from './Marker'

export const Ligging = () => {
  const render = (status: Status) => {
    return <h1>{status}</h1>
  }

  return (
    <div className="py-16">
      <Container>
        <div className="max-w-4xl text-left mb-8">
          <h2
            id="ligging"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl scroll-mt-40"
          >
            Ligging
          </h2>
          <p className="mt-4 text-2xl tracking-tight text-slate-700">
            Van Putlei 53/12, 2018 Antwerpen
          </p>
        </div>
        <div className="md:flex md:gap-x-12">
          <div className="text-xl leading-relaxed md:w-1/2">
            <p className="mb-4">
              <strong>
                Praktijk Kine Groep Zuid is gelegen op de hoek met de Van Putlei
                en de Desguinlei.
              </strong>
            </p>
            <p className="mb-4">
              De centrale ligging aan de Singel <em>(Desguinlei)</em> maakt dat
              de praktijk zeer goed bereikbaar is met de wagen vanuit Antwerpen
              en vanuit de periferie. Er is ruime parkeergelegenheid aan de{' '}
              <strong>parking </strong>van de{' '}
              <strong>Desguinlei (gratis)</strong>, de parking van het{' '}
              <strong>Centrum voor Basiseducatie Antwerpen (gratis)</strong> of
              in de straat (betalend tussen 9-19u via sms naar 4411).
            </p>
            <p className="mb-4">
              Het openbaar vervoer heeft verschillende{' '}
              <strong>bus- en tramhaltes</strong> (tramlijn 2 en 6 - bus 17, 22,
              28, 30, 298) in de directe omgeving van de praktijk. Meer info
              hieromtrent vindt u op&nbsp;
              <a
                title="Reisinfo - De Lijn"
                href="http://www.delijn.be/reisinfo"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.delijn.be/reisinfo
              </a>
              . Uiteraard kan je ook te voet, met de fiets of met de bromfiets
              komen. <strong>Treinstation Antwerpen Zuid</strong> is op 750m
              gelegen van de praktijk.&nbsp;
            </p>
            <div className="flex items-center">
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="data:image/png;base64,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"
                  alt="Antwerpen Velo"
                  className="w-[58px] rounded-md"
                />
              </div>
              <div className="pl-4">
                <a
                  title="Vind een A-velo fietsstation in jouw buurt"
                  href="https://www.velo-antwerpen.be/nl/station-vinden"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-fuchsia-800 font-sembold"
                >
                  Ontdek ook de tal van Velo-stations rondom de praktijk.
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 md:mt-0 md:w-1/2">
            <Wrapper
              apiKey={process.env.GOOGLE_MAPS_API_KEY || ''}
              render={render}
            >
              <Map>
                <Marker
                  position={{ lat: 51.19557875111246, lng: 4.400018584656759 }}
                />
              </Map>
            </Wrapper>
          </div>
        </div>
      </Container>
    </div>
  )
}
