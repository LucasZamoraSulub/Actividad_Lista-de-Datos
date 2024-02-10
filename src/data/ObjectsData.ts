import type { IObject } from '@/interfaces/IObject'
const ObjectsData: IObject[] = [
  {
    id: 0,
    name: 'Espada Larga',
    price: 350,
    Stats: '+10 de daño de ataque',
    passive: 'Ninguna',
    textColor: '',
    bgColor: ''
  },
  {
    id: 1,
    name: 'Eco de luden',
    price: 3200,
    Stats: '+90 de poder de habilidad, +10% de reducción de enfriamiento y +600 de maná',
    passive:
      'ÚNICA - ACELERACIÓN: Otorga un 10% adicional de reducción de enfriamiento. ÚNICA - ECO: Obtiene cargas al mover o lanzar habilidades. A las 100 cargas, la siguiente instancia de daño de habilidad que causes gastará todas las cargas para infligir 100 (+ 10% PH) de daño mágico adicional al primer enemigo golpeado y a 3 enemigos cercanos, priorizando enemigos dañados por la habilidad y campeones sobre súbditos.',
    textColor: '',
    bgColor: ''
  },
  {
    id: 2,
    name: 'Bacteriófago',
    price: 1100,
    Stats: '+15 de daño de ataque, +200 de vida',
    passive:
      'ÚNICA - ROBUSTO: Después de infligir daño físico a un campeón enemigo, te Heal power.png curas por (Melee role.png 2% / Ranged role.png 1%) de vida máxima durante 6 segundos.',
    textColor: '',
    bgColor: ''
  },
  {
    id: 3,
    name: 'Espada de Doran',
    price: 450,
    Stats: '+8 de daño de ataque y +80 de vida',
    passive: 'Belicista: +2,5% de omnivampirismo.',
    textColor: '',
    bgColor: ''
  },
  {
    id: 4,
    name: 'Cuchilla oscura',
    price: 3100,
    Stats: '+25 de aceleración de habilidad, +40 de daño de ataque y +450 de vida',
    passive:
      'Trinchar: Al infligir daño físico a un campeón enemigo, se aplica una acumulación de Desgarrar durante 6 segundos, que se acumula hasta 6 veces. Cada acumulación reduce la armadura del objetivo en un 5%, hasta un 30% en 6 acumulaciones. Rabia: Infligir daño físico a un campeón otorga 3 de velocidad de movimiento adicional por acumulación de Cortar sobre ellos durante 2 segundos, hasta 18.',
    textColor: '',
    bgColor: ''
  },
  {
    id: 5,
    name: 'Cetro Vampírico',
    price: 900,
    Stats: '+15 de daño de ataque, +10% de robo de vida',
    passive: 'Ninguna',
    textColor: '',
    bgColor: ''
  },
  {
    id: 6,
    name: 'Tiamat',
    price: 1200,
    Stats: '+25 de daño de ataque',
    passive:
      'ÚNICA - HENDER: Los ataques básicos infligen 60 / 48 / 36 / 24 / 12% DA como daño físico a otros enemigos cercanos.',
    textColor: '',
    bgColor: ''
  },
  {
    id: 7,
    name: 'Arcoescudo inmortal',
    price: 3400,
    Stats:
      '+55 de daño de ataque, +20% de velocidad de ataque, +20% de probabilidad de golpe crítico y +10% de robo de vida',
    passive:
      'Salvavidas: Cuando recibas daño que te reduciría por debajo de 30% de vida máxima, obtienes un escudo por 300 − 800 (según el nivel) durante 3 segundos y 13 − 35 (según el nivel) de daño de ataque adicional durante 8 segundos (tiempo de enfriamiento de 90 s). La passive mítica otorga a todos los demás objetos legendarios 5 de daño de ataque adicional y 50 de vida adicional.',
    textColor: '',
    bgColor: ''
  },
  {
    id: 8,
    name: 'Daga',
    price: 300,
    Stats: '+12% de velocidad de ataque',
    passive: 'Ninguna',
    textColor: '',
    bgColor: ''
  },
  {
    id: 9,
    name: 'Desconsuelo de Liandry',
    price: 3200,
    Stats: '+80 de poder de habilidad, +20 de aceleración de habilidad y +600 de maná',
    passive:
      'Agonía: Inflige 0% - 12% (según el Vida adicional del objetivo) como daño mágico adicional contra campeones enemigos. Tormento: Infligir daño de habilidad quema a los enemigos, lo que hace que reciban 60 (+ 10% PH) (+ 4% de la vida máxima del objetivo) como daño mágico durante 4 segundos. La passive mítica otorga a todos los demás objetos legendarios 5 de aceleración de habilidades.',
    textColor: '',
    bgColor: ''
  }
]

export default ObjectsData
