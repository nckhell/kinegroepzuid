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
                  <p>
                    Binnen deze praktijk werken{' '}
                    {team
                      .filter((member) => member.geconventioneerd === true)
                      .map((member) => `${member.firstName} ${member.lastName}`)
                      .join(', ')}{' '}
                    als{' '}
                    <strong className="text-fuchsia-700">
                      geconventioneerd kinesitherapeut / manueel therapeut
                    </strong>{' '}
                    en{' '}
                    {team
                      .filter((member) => member.geconventioneerd === false)
                      .map((member) => `${member.firstName} ${member.lastName}`)
                      .join(', ')}{' '}
                    als{' '}
                    <strong className="text-fuchsia-700">
                      gedeconventioneerd therapeut
                    </strong>
                    . Onderstaand vindt u de basistarieven horend bij een
                    behandeling met een gemiddelde therapietijd van 30 minuten.
                    Elke behandeling kent een terugbetaling dewelke afhankelijk
                    is van uw status bij de mutualiteit. Mocht u hierover
                    specifieke vragen hebben, kan u zich steeds tot uw therapeut
                    of uw mutualiteit wenden.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-12">
              <table className="w-full mx-auto text-left rtl:text-right text-sm sm:text-base">
                <thead className="text text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-center">
                      Basistarief / terugbetaling
                      <br />
                      <span className="font-normal capitalize">
                        {team
                          .filter((member) => member.geconventioneerd === true)
                          .map((member) => `${member.firstName}`)
                          .join(', ')}{' '}
                      </span>
                    </th>
                    <th scope="col" className="px-6 py-3 text-center">
                      Basistarief / terugbetaling
                      <br />
                      <span className="font-normal capitalize">
                        {team
                          .filter((member) => member.geconventioneerd === false)
                          .map((member) => `${member.firstName}`)
                          .join(', ')}{' '}
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4 text-center">€30.00 / ± €24.00</td>
                    <td className="px-6 py-4 text-center">€35.00 / ± €18.00</td>
                  </tr>
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
