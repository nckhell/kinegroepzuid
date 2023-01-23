import { type TeamType } from '../../src/types/team.types'

export const team: TeamType = [
  {
    firstName: 'Kevin',
    lastName: 'Bal',
    description: `<p>Kevin, een geconventioneerde therapeut en mede-eigenaar van de praktijk, studeerde in 2004 af als licentiaat in de kinesitherapie. Van onze 5 collega's is hij reeds het langst aan het werk in onze reeds 30 jaren bestaande praktijk.</p><p>Naast zijn activiteiten in de praktijk is hij ook werkzaam op de revalidatieafdeling APRA van het AZ Monica Antwerpen. Hij houdt zich op beide sites vooral bezig met orthopedische geneeskunde en manuele therapie.</p><p>Verder specialiseerde hij zich in de behandeling van brandwonden en littekens bij de Scar Academy van het brandwondencentrum Oscare. In een verdere zoektocht naar een optimale behandeling verdiepte hij zich in het Medical Taping Concept, het Mulligan Concept en Dry Needling. De laatste jaren verdiepte hij zich verder in de myofasciale anatomie en de behandelmodaliteiten daarvan. Hiervoor volgde hij de Anatomy Trains opleiding en past hij de Ergon soft Tissue Technique toe. Sinds 2021 is hij lid van het schoudernetwerk Vlaanderen.</p>`,
    role: 'Manuele therapie – kinesitherapie',
    geconventioneerd: true,
    specialitities: [
      'Brandwonden en littekens',
      'Myofasciale therapie',
      'Dry needling',
    ],
    imageFileName: 'kevin-bal.png',
    imageWidth: '534',
    imageHeight: '800',
    backgroundPosition: {
      top: '-15px',
    },
    phone: '0477 92 72 02',
    appointmentUrl: 'http://www.q-top.be/Online-planner/NL/?root=kq35040',
  },
  {
    firstName: 'Sven',
    lastName: 'Meiresone',
    description: `<p>Sven is geconventioneerde therapeut en mede-eigenaar van de praktijk, studeerde in 2009 af aan de UA als Master in de Kinesitherapie en Revalidatiewetenschappen. Na deze opleiding verdiepte hij zich in een Master na Master Manuele Therapie aan de VUB wat maakt dat u voor al uw musculoskeletale klachten bij hem terecht kan.</p>
      <p>Hij beheerst hiernaast ook het medical taping concept, Mulligan-technieken, Dry Needling en IASTM. Naast zijn werk in de praktijk is hij ook actief op de dienst ambulante revalidatie van ZNA Middelheim waar u bij hem terecht kan voor onder andere hydrotherapie en revalidatie. Buiten het werk houdt hij zich bezig met parapente, diepzeeduiken, fietsen en lopen. De opgedane ervaringen tijdens marathons & dodentochten, maken van hem eveneens uw ideale loopbegeleider. Ook voor fietsadvies kunt u binnenkort beroep op hem doen aangezien de verdieping in bike-fitting op het programma staat.</p>`,
    role: 'Manuele therapie – kinesitherapie',
    geconventioneerd: true,
    specialitities: [
      'Temporomandibulaire dysfuncties',
      'Myofasciale therapie – IASTM',
      'Dry needling',
      'Loopbegeleiding',
    ],
    imageFileName: 'sven-meiresone.jpg',
    imageWidth: '228',
    imageHeight: '292',
    phone: '0472 28 70 20',
    appointmentUrl: 'http://www.q-top.be/Online-planner/NL/?root=kq37810',
  },
  {
    firstName: 'Aiko',
    lastName: 'Deckers',
    geconventioneerd: true,
    description: `<p>Aiko studeerde in 2016 af aan de VUB als Master in de Kinesitherapie en Revalidatiewetenschappen met specialisatie Manuele Therapie, dit na een Master in Bewegingswetenschappen en Lichamelijke Opvoeding. Nadien volgde hij nog een postgraduaat Manuele Therapie aan de UGent aangevuld met specialisaties in Dry Needling.</p>
      <p>Hij bouwde daarnaast heel wat ervaring op binnen de sportrevalidatie en sportkinesitherapie bij verscheidene voetbal-, hockey-, basketbal-, volleybal-, handbal- en basebalteams wat van hem een geschikte begeleider en motivator maakt. Naast de tewerkstelling in onze praktijk werkt hij ook nog halftijds in WZC Huis Vandecruys. De weinige vrijetijd die Aiko overhoudt spendeert hij aan avontuurlijke reizen, padel, skiën, snowboarden en zijn in 2020 geboren tweeling.</p>`,
    role: 'Manuele therapie – kinesitherapie',
    specialitities: ['Sportkinesitherapie', 'Dry needling'],
    imageFileName: 'aiko-deckers.jpeg',
    imageWidth: '1157',
    imageHeight: '868',
    phone: '0476 36 87 99',
    appointmentUrl:
      'https://www.q-top.be/Online-planner/NL/?root=kq52934&location=kinegroepzuid',
    backgroundPosition: {
      left: '-29px',
      top: '-20px',
    },
    maxWidth: '150%',
  },
  {
    firstName: 'Kyra',
    lastName: 'Blanckaert',
    geconventioneerd: true,
    description:
      '<p>Kyra is een geconventioneerde therapeut, afgestudeerd aan de UA in de richting Musculoskeletale Kinesitherapie. Naast haar activiteiten in de praktijk is ze ook werkzaam op de revalidatieafdeling APRA van het AZ Monica Antwerpen.</p><p>Verder is Kyra gekend met het Medical taping concept, Dry Needling en de McKenzie werkwijze.</p><p>Om haar patiënten nog beter te begeleiden is Kyra bezig met de Postgraduaat Manuele Therapie aan de UGent.</p><p>Door haar ervaring in het nationaal team van het synchroon kunstschaatsen kan u ook bij haar terecht voor sportletsels en de begeleiding voor een betere sportprestatie.</p><p>In haar vrije tijd is Kyra vooral bezig met haar nieuwe sport Cheerleaden en ziet ze graag wat van de wereld.</p>',
    imageFileName: 'kyra-blanckaert.jpeg',
    role: 'Manuele therapie io – kinesitherapie',
    specialitities: ['Dry needling'],
    imageWidth: '902',
    imageHeight: '1600',
    appointmentUrl: 'https://www.q-top.be/Online-planner/NL/?root=kq06076',
    backgroundPosition: {
      top: '-25px',
    },
    phone: '0494 10 12 84',
  },
  {
    firstName: 'Magalie',
    lastName: 'De Strooper',
    geconventioneerd: false,
    description: `<p>Magalie studeerde in 2016 af als Master in de Kinesitherapie en Revalidatiewetenschappen aan de UA. Om haar vaardigheden te verfijnen volgde ze nadien een postgraduaat Manuele Therapie aan de Universiteit Gent. Momenteel verdiept ze zich verder in de osteopathie aan de erkende academie FICO.</p>
      <p>Door deze opleidingen en stages in binnen- en buitenland kan u op haar beroep doen voor manuele therapie, perinatale kinesitherapie en temporomandibulaire dysfuncties. Tijdens de behandelingen verkiest Magalie een waardevolle balans tussen manuele technieken en actieve oefentherapie, afgestemd op zowel de pathologie als de patiënt. Ook hecht ze veel belang aan de interprofessionele samenwerking met artsen, diëtisten, psychologen e.d. Ze werkt als gedeconventioneerde therapeut. Naast haar beroep als kinesiste hanteert ze een actieve levensstijl door wekelijks te dansen en yoga te volgen en begeeft ze zich graag op het water met de surfplank of onder water als diepzeeduiker.</p>`,
    role: 'Osteopathie io',
    specialitities: ['Women’s health', 'Temporomandibulaire dysfuncties'],
    imageFileName: 'magali-de-strooper.png',
    imageWidth: '600',
    imageHeight: '600',
    backgroundPosition: {
      top: '-20px',
    },
    phone: '0474 68 66 96',
    appointmentUrl: 'https://www.q-top.be/Online-planner/NL/?root=kq52881',
  },
  {
    firstName: 'Daphne',
    lastName: 'Lai',
    description: `<p>Daphne Lai vult ons team aan als diëtiste en tabakoloog sinds april 2019. U kan bij haar terecht voor voedingsadvies op maat en rookstopbegeleiding. Voor meer info en het maken van een afspraak verwijzen we u graag door naar haar website [www.daphnelai.be](<a href="www.daphnelai.be" title='www.daphnelai.be' target='_blank'>www.daphnelai.be</a>).</p>`,
    role: 'Diëtiste - tabakoloog',
    imageFileName: 'daphne-lai.jpg',
    specialitities: [],
    imageWidth: '754',
    imageHeight: '1016',
    phone: '0485 74 64 20',
    appointmentHtml:
      '<a href="http://www.daphnelai.be/" target="_blank" class="underline" title="http://www.daphnelai.be/">http://www.daphnelai.be/</a>',
  },
]
