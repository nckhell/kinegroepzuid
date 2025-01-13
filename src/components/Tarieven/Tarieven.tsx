import { team } from '../../../content/team'
import { Container } from '../Container'

export const Tarieven = () => {
  return (
    <div className="bg-slate-100 py-16">
      <Container>
        <div className="mx-auto text-left mb-4">
          <h2
            id="tarieven"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl scroll-mt-40"
          >
            Tarieven
          </h2>
        </div>
        <div className="flex flex-col gap-y-16">
          <div>
            <h3>Kinesitherapie &amp; manuele therapie</h3>
            <div className="relative">
              <div className="text-xl leading-relaxed text-slate-500">
                <div className="flex flex-col gap-y-4">
                  {/* <strong className="text-fuchsia-700"> */}
                  <p>
                    Aangezien de overheid niet tot een overeenkomst is kunnen
                    komen met de beroepsvereniging der kinesitherapeuten omtrent
                    het ereloon voor 2025, gaan we ook dit kalenderjaar van
                    start zonder een zogenoemde conventie. Dit houdt ten eerste
                    in dat er in deze periode geen advies gegeven kan worden
                    rond het toe te passen ereloon voor de geconventioneerde
                    therapeuten (
                    {team
                      .filter((member) => member.geconventioneerd === true)
                      .map((member) => `${member.firstName}`)
                      .join(' en ')}{' '}
                    ) en dat de gedeconventioneerde therapeuten (
                    {team
                      .filter((member) => member.geconventioneerd === false)
                      .map((member) => `${member.firstName}`)
                      .join(' en ')}{' '}
                    ) nog altijd vrij zijn een ereloon te kiezen. Ten tweede
                    houdt dit in dat de zogenoemde discrepantieregel tussen
                    geconventioneerde en gedeconventioneerde therapeuten
                    wegvalt. Concreet betekent dit dat de terugbetaling bij elke
                    therapeut dezelfde zal zijn totdat er een conventie is, dan
                    neemt de terugbetaling van een behandeling bij een
                    gedeconventioneerde therapeut met schatting €6.00 af.
                  </p>
                  <p>
                    Dit geeft volgende erelonen en terugbetalingstarieven per
                    therapeut. Afhankelijk van uw statuut bij de mutualiteit kan
                    uw terugbetaling hoger liggen (E-Fb-Fa-pathologieën, OMNIO).
                    Indien u recht heeft op een voorkeurstarief dan dient het
                    geconventioneerde tarief gehanteerd te worden.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-12">
              <table className="w-full mx-auto text-left rtl:text-right text-sm sm:text-base">
                <thead className="text text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-center">
                      Therapeut
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      Ereloon
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      Terugbetaling
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {team
                    .filter((member) => member.role.includes('kinesitherapie'))
                    .map((member) => (
                      <tr className="bg-white border-b" key={member.firstName}>
                        <td className="px-6 py-4 text-center">
                          {member.firstName}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {member.geconventioneerd
                            ? '€31'
                            : member.firstName === 'Manon'
                            ? '€37'
                            : '€39'}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {member.geconventioneerd ? '€23.75' : '€23,75'}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h3>Annulatiebeleid</h3>
            <div className="relative">
              <div className="text-xl leading-relaxed text-slate-500">
                <div className="flex flex-col gap-y-4">
                  <p>
                    Van onze kant uit doen wij steeds ons uiterste best om u
                    enerzijds niet te lang te laten wachten en anderzijds voor u
                    de nodige behandeltijd te voorzien. Uiteraard stellen wij
                    het ook op prijs dat u zich aan de gemaakte afspraken houdt.
                    Buiten uw wil om kunnen er zich soms omstandigheden voordoen
                    dewelke u niet in staat stellen de afspraak na te komen. We
                    vragen u om bij belet{' '}
                    <strong className="text-fuchsia-700">
                      12 uren op voorhand te verwittigen
                    </strong>{' '}
                    om eventueel een andere patiënt te kunnen verzorgen. Mocht u
                    niet in de mogelijkheid zijn ons tijdig te verwittigen of
                    indien u een afspraak zonder verwittiging niet nakomt, dan
                    zal de integrale kostprijs van de behandeling u kunnen
                    worden aangerekend.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
