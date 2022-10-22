import { faker } from "@faker-js/faker";

const AIRPORTS = [
  {
    name: "Barajas",
    city: "Madrid",
    region: "Europe",
  },
  {
    name: "Malpensa",
    city: "Milano",
    region: "Europe",
  },
  {
    name: "Charles de Gaulle",
    city: "Paris",
    region: "Europe",
  },
  {
    name: "Tegel",
    city: "Germany",
    region: "Europe",
  },
  {
    name: "Ezeiza",
    city: "Argentina",
    region: "America",
  },
  {
    name: "Jorge Chávez",
    city: "Lima",
    region: "America",
  },
  {
    name: "John F. Kennedy",
    city: "New York",
    region: "America",
  },
  {
    name: "Benito Juárez",
    city: "Mexico DF",
    region: "America",
  },
  {
    name: "Haneda",
    city: "Tokyo",
    region: "Asia",
  },
  {
    name: "Indira Gandhi",
    city: "New Delhi",
    region: "Asia",
  },
];

const AIRPORTS_LENGTH = AIRPORTS.length;
const FLIGHTS_LENGTH = 40;

class FakeData {
  constructor() {
    this.airports = AIRPORTS;
    this.flights = FakeData.generateRandomFlights(this.airports);
  }

  static getHours = () => {
    const date = new Date(faker.date.future());
    let hours = date.getHours();
    hours = hours < 10 ? "0" + hours : hours;
    let minutes = date.getMinutes();
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return `${hours}:${minutes}`;
  };

  static generateRandomFlights = (airports) => {
    const fakeFlights = [];
    for (let i = 1; i <= FLIGHTS_LENGTH; i++) {
      fakeFlights.push({
        id: i,
        origin: airports[Math.floor(Math.random() * AIRPORTS_LENGTH)],
        destination: airports[Math.floor(Math.random() * AIRPORTS_LENGTH)],
        departure: {
          day: faker.date.weekday(),
          hour: this.getHours(),
        },
        arrival: {
          day: faker.date.weekday(),
          hour: this.getHours(),
        },
        code: faker.datatype.number({ min: 1000, max: 9999 }),
      });
    }
    return fakeFlights;
  };

  getAirports = () => this.airports;
  getFlights = () => this.flights;
}

export default new FakeData();
