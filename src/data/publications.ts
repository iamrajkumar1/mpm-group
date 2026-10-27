export type Publication = {
  id: number
  authors: string
  title: string
  journal: string
  year: number
  details: string
  impactFactor?: string
  doi?: string
  type: 'review' | 'research' | 'account'
}

export const publications: Publication[] = [
  {
    id: 1,
    authors: 'Kotha, S.; Meshram, M.; Tiwari, A.',
    title:
      'Advanced approach to polycyclics by a synergistic combination of enyne metathesis and Diels–Alder reaction',
    journal: 'Chem. Soc. Rev.',
    year: 2009,
    details: '38, 2065–2092',
    impactFactor: '40.443',
    type: 'review',
  },
  {
    id: 2,
    authors: 'Kotha, S.; Meshram, M.',
    title:
      'Synthesis of polycyclic aromatics from a diiodosultine by Suzuki–Miyaura cross-coupling and Diels–Alder reaction',
    journal: 'Heterocycles',
    year: 2011,
    details: '82, 1663–1668',
    impactFactor: '1.036',
    type: 'research',
  },
  {
    id: 3,
    authors: 'Kotha, S.; Meshram, M.',
    title:
      'Functionalization of anthracene by strategic utilization of the Diels–Alder reaction and the ring-closing metathesis',
    journal: 'J. Indian Chem. Soc.',
    year: 2013,
    details: '90, 1789–1794',
    type: 'research',
  },
  {
    id: 4,
    authors: 'Kotha, S.; Meshram, M.',
    title:
      'Synthesis of novel fluoranthene-based conformationally constrained α-amino acid derivatives and polycyclic aromatics via the Diels–Alder reaction',
    journal: 'Synthesis',
    year: 2014,
    details: '46, 1525–1531',
    impactFactor: '2.722',
    type: 'research',
  },
  {
    id: 5,
    authors: 'Kotha, S.; Meshram, M.',
    title:
      'Design and synthesis of conformationally constrained bicyclo[2.2.2]octane-based unusual α-amino acid derivatives via the Diels–Alder reaction',
    journal: 'Heterocycles',
    year: 2015,
    details: '90, 357–371',
    impactFactor: '1.036',
    type: 'research',
  },
  {
    id: 6,
    authors: 'Kotha, S.; Meshram, M.; Muthusamy, G.',
    title:
      'Synthesis of conformationally constrained α-amino acid derivatives containing bicyclo[2.2.2] unit via the Diels–Alder and Suzuki–Miyaura cross-coupling reactions as key step',
    journal: 'Indian J. Chem. B',
    year: 2015,
    details: '54B, 505–513',
    impactFactor: '0.525',
    type: 'research',
  },
  {
    id: 7,
    authors: 'Kotha, S.; Meshram, M.; Khedkar, P.; Banerjee, S.; Deodhar, D.',
    title: 'Recent applications of ring-rearrangement metathesis in organic synthesis',
    journal: 'Beilstein J. Org. Chem.',
    year: 2015,
    details: '11, 1833–1864',
    impactFactor: '2.337',
    doi: '10.3762/bjoc.11.199',
    type: 'review',
  },
  {
    id: 8,
    authors: 'Kotha, S.; Cheekatla, S. R.; Meshram, M.',
    title: 'Synthetic approach to oxa-cage systems via ring-closing metathesis',
    journal: 'Heterocycles',
    year: 2018,
    details: '97, 1008',
    impactFactor: '1.036',
    type: 'research',
  },
  {
    id: 9,
    authors: 'Kotha, S.; Meshram, M.; Dommaraju, Y.',
    title:
      'Design and synthesis of polycycles, heterocycles, and macrocycles via strategic utilization of ring-closing metathesis',
    journal: 'Chem. Rec.',
    year: 2018,
    details: '18, 1613–1632',
    impactFactor: '4.891',
    type: 'account',
  },
  {
    id: 10,
    authors: 'Kotha, S.; Meshram, M.',
    title: 'Application of Claisen rearrangement and olefin metathesis in organic synthesis',
    journal: 'Chem. Asian J.',
    year: 2018,
    details: '13, 1758–1766',
    impactFactor: '3.692',
    type: 'account',
  },
  {
    id: 11,
    authors: 'Kotha, S.; Meshram, M.',
    title: 'Applications of organometallics in organic synthesis',
    journal: 'J. Organomet. Chem.',
    year: 2018,
    details: '874, 13–25',
    impactFactor: '1.946',
    type: 'review',
  },
  {
    id: 12,
    authors: 'Kotha, S.; Meshram, M.; Chakkapalli, C.',
    title:
      'Synergistic approach to polycyclics through Suzuki–Miyaura cross-coupling and metathesis as key steps',
    journal: 'Beilstein J. Org. Chem.',
    year: 2018,
    details: '14, 2468–2481',
    impactFactor: '2.337',
    type: 'review',
  },
  {
    id: 13,
    authors:
      'Kotha, S.; Meshram, M.; Panguluri, N. R.; Shah, V. R.; Todeti, S.; Shirbhate, M. E.',
    title: 'Synthetic approaches to 1,3,5-tri-substituted star-shaped molecules',
    journal: 'Chem. Asian J.',
    year: 2019,
    details: '14, 1356–1403',
    impactFactor: '3.692',
    type: 'review',
  },
  {
    id: 14,
    authors: 'Kotha, S.; Meshram, M.; Panguluri, N. R.',
    title:
      'Advanced approaches to post-assembly modification of peptides by transition-metal-catalyzed reactions',
    journal: 'Synthesis',
    year: 2019,
    details: '51, 1913–1922',
    impactFactor: '2.722',
    type: 'review',
  },
  {
    id: 15,
    authors:
      'Kotha, S.; Cheekatla, S. R.; Meshram, M.; Bandi, V.; Seema, V.',
    title:
      "Realization of photo-thermal metathesis under microwave irradiation conditions as a consequence of substituent's effect: An entry to triquinane frameworks",
    journal: 'Asian J. Org. Chem.',
    year: 2019,
    details: '8, 2097–2104',
    type: 'research',
  },
  {
    id: 16,
    authors: 'Kotha, S.; Meshram, M.; Aswar, V. R.',
    title:
      'Application of ring rearrangement metathesis in organic synthesis: A grand design',
    journal: 'Tetrahedron Lett.',
    year: 2019,
    details: '60, 151337',
    doi: '10.1016/j.tetlet.2019.151337',
    type: 'account',
  },
  {
    id: 17,
    authors: 'Kotha, S.; Meshram, M.',
    title: 'Development of new synthetic strategies, tactics and their applications',
    journal: 'Chem. Rec.',
    year: 2019,
    details: '19, 2480–2504',
    doi: '10.1002/tcr.201900041',
    type: 'account',
  },
  {
    id: 18,
    authors: 'Kotha, S.; Cheekatla, S. R.; Meshram, M.',
    title:
      'Design and synthesis of cage molecules as high energy density materials for aerospace applications',
    journal: 'ChemCatChem',
    year: 2020,
    details: '12, 6131–6172',
    type: 'review',
  },
  {
    id: 19,
    authors: 'Kotha, S.; Meshram, M.',
    title: 'Diversity-oriented approaches toward the synthesis of cyclophanes',
    journal: 'ACS Omega',
    year: 2025,
    details: '10, 50724',
    type: 'review',
  },
  {
    id: 20,
    authors:
      'Ghotekar, J.; Baste, Y.; Meshram, M.; Jadhav, V.; Ghotekar, D.; Ushir, V.',
    title:
      'In₂O₃-catalyzed synthesis of bioactive imidazoles: Antimicrobial evaluation, molecular docking, and ADMET profiling',
    journal: 'Catalysis Letters',
    year: 2026,
    details: '156, 125',
    type: 'research',
  },
]
