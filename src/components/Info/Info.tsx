import { Container } from '../Container'

export const Info = () => {
  return (
    <div className="py-16">
      <Container>
        <div className="max-w-4xl text-left mb-8">
          <h2
            id="info"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl scroll-mt-40"
          >
            Info
          </h2>
          <p className="mt-4 text-2xl tracking-tight text-slate-700">
            Dankzij de verscheidenheid aan disciplines staat er bij KINE GROEP
            ZUID een team voor u klaar dat elkaar goed aanvult om u zo een
            therapie op maat te kunnen aanbieden.
          </p>
        </div>
        <div className="relative md:bg-white">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 text-xl leading-relaxed text-slate-500">
            <div className="lg:max-w-none flex flex-col gap-y-8">
              <p>
                Tijdens een behandeling hechten wij veel belang aan een{' '}
                <strong className="text-fuchsia-700">individuele</strong> aanpak
                bestaande uit{' '}
                <strong className="text-fuchsia-700">manuele therapie</strong>{' '}
                in ruime zin aangevuld met{' '}
                <strong className="text-fuchsia-700">
                  actieve oefentherapie
                </strong>{' '}
                afgestemd op patiënt en pathologie. De samenwerking tussen
                patiënt en therapeut staat hierbij uiteraard centraal. Door
                middel van zachte mobilisaties, harmonieuze technieken en
                gerichte manipulaties trachten we de beperkte mobiliteit van
                gewrichten te vergroten waarna gerichte oefentherapie kan
                opgestart worden om zo het weefselherstel te bevorderen.
                Belangrijk hierbij is het evenwicht tussen belasting en
                belastbaarheid te bewaren en de patiënt functioneel, progressief
                en doelgericht op te trainen.
              </p>
              <p>
                Door ons team wordt er dagelijks therapiecontinuïteit geboden
                van 08.00u &apos;s morgens tot 20.00u &apos;s avonds, ook
                tijdens vakantieperioden. Alle behandelingen gebeuren{' '}
                <strong className="text-fuchsia-700">dagelijks</strong> na
                afspraak en omvatten een gemiddelde duur van{' '}
                <strong className="text-fuchsia-700">30 minuten</strong>. Van
                onze kant uit doen wij steeds ons uiterste best om u niet te
                lang te laten wachten en voor iedereen de nodige tijd te
                voorzien.
              </p>
            </div>
            <div className="mt-6 lg:mt-0 flex flex-col gap-y-8">
              <p>
                Uiteraard stellen wij het ook op prijs dat u zich aan de
                gemaakte afspraken houdt. Buiten uw wil om kunnen er zich soms
                omstandigheden voordoen dewelke u niet in staat stellen de
                afspraak na te komen. We vragen u om bij belet{' '}
                <strong className="text-fuchsia-700">
                  12u op voorhand te verwittigen
                </strong>{' '}
                om eventueel een andere patiënt te kunnen verzorgen. Mocht u
                niet in de mogelijkheid zijn ons tijdig te verwittigen of indien
                u een afspraak onverwittigd niet nakomt, dan verwachten wij dat
                u zo sportief bent om de voor u vrij gehouden tijd te vergoeden.
              </p>
              <p>
                Buiten de behandeltijd die wij voor u vrijhouden, heeft u als
                patiënt het recht om afhankelijk van uw planning vroeger te
                komen of later te blijven om de aangeleerde oefeningen uit te
                voeren in onze{' '}
                <strong className="text-fuchsia-700">oefenzaal</strong>.
                Omkleden kan steeds in onze{' '}
                <strong className="text-fuchsia-700">kleedruimte</strong> of in
                de <strong className="text-fuchsia-700">doucheruimte</strong>{' '}
                die steeds ter uwer beschikking is om u op te frissen na de
                oefensessies.
              </p>
              <p>
                Indien een patiënt zich niet naar onze praktijk kan verplaatsen,
                maken wij graag ruimte voor een huisbezoek. Het spreekt voor
                zich dat dit enkel gebeurt als de pathologie dit vereist en als
                uw locatie in onze omgeving ligt.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
