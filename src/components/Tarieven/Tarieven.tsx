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
          <p className="mt-4 text-2xl tracking-tight text-slate-700">
            Binnen deze praktijk worden verschillende tarieven gehanteerd, dit
            omwille van de conventiestatus / discipline van de verschillende
            therapeuten.
          </p>
        </div>
        <div className="relative">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 text-xl leading-relaxed text-slate-500">
            <div className="lg:max-w-none flex flex-col gap-y-8">
              <p>
                Elke behandeling kent een terugbetaling door uw mutualiteit,
                deze is afhankelijk van de conventiestatus van uw therapeut en
                van uw status bij de mutualiteit. In onze praktijk werken Kevin
                Bal, Sven Meiresone, Aiko Deckers en Kyra Blanckaert als{' '}
                <strong className="text-fuchsia-700">
                  geconventioneerd kinesitherapeut / manueel therapeut
                </strong>{' '}
                en Magalie De Strooper als{' '}
                <strong className="text-fuchsia-700">
                  gedeconventioneerd osteopaat
                </strong>
                . Onderstaand vindt u richttarieven. Mocht u hierover specifieke
                vragen hebben, kan u zich steeds tot uw therapeut of uw
                mutualiteit wenden.
              </p>
            </div>
            <div className="mt-6 lg:mt-0 flex flex-col gap-y-8">
              <p>
                Bij de opstart van een{' '}
                <strong className="text-fuchsia-700">
                  eerste behandelingenreeks per kalenderjaar
                </strong>{' '}
                wordt €7.00 dossierkost in rekening gebracht dewelke volledig
                wordt terugbetaald door uw mutualiteit bij Kevin, Sven, Aiko en
                Kyra en voor €5.25 wordt terugbetaald bij Magalie.
              </p>
              <p>
                <strong className="text-fuchsia-700">
                  Mocht u eerder in het jaar al therapie genoten hebben, breng
                  dan uw therapeut hiervan op de hoogte.
                </strong>
              </p>
            </div>
          </div>
        </div>
        <div className="pt-12">
          <table className="w-full mx-auto text-left rtl:text-right">
            <thead className="text text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-center">
                  Basistarief / terugbetaling
                  <br />
                  <span className="font-normal capitalize">
                    Kevin, Sven, Aiko, Kyra
                  </span>
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Basistarief / terugbetaling
                  <br />
                  <span className="font-normal capitalize">Magalie</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <td className="px-6 py-4 text-center">€28.60 / €22.35</td>
                <td className="px-6 py-4 text-center">€54.00 / €16.77</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  )
}
