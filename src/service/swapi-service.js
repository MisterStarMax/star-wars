class SwapiService {
  _apiBase = 'https://swapi.co/api';
  _imageBase = 'https://starwars-visualguide.com/assets/img';



  getResource = async(url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error('error data');
    }
    return await res.json();
  }

  getAllPeople = async () => {
    const res = await this.getResource('/people/');
    return res.results.map(this._tranformPerson);
  }

  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}/`);
    return this._tranformPerson(person);
  }

  getImagePerson = ({id}) => {
    return `${this._imageBase}/characters/${id}.jpg`;
  }

  getAllPlanets = async () => {
    const res = await this.getResource('/planets/');
    return res.results.map(this._tranformPlanets);
  }

  getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._tranformPlanets(planet);
  }

  getImagePlanet = ({id}) => {
    return `${this._imageBase}/planets/${id}.jpg`;
  }

  getAllStarships = async () => {
    const res = await this.getResource('/starships/');
    return res.results.map(this._tranformStarship);
  }

  getStarship = async (id) => {
    const starships = await this.getResource(`/starships/${id}/`);
    return this._tranformStarship(starships);
  }

  getImageStarship = ({id}) => {
    return `${this._imageBase}/starships/${id}.jpg`;
  }

  _extractId(item) {
    const reg_exp = /\/([0-9]*)\/$/;
    return item.url.match(reg_exp)[1];
  }

  _tranformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birth: person.birth_year
    }
  }
  _tranformPlanets = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period
    }
  }
  _tranformStarship = (starships) => {
    return {
      id: this._extractId(starships),
      name: starships.name,
      starshipClass: starships.starship_class,
      model : starships.model,
      length : starships.length
    }
  }
}

export default SwapiService;
