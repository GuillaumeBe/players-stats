export default interface Player {
  id: string;
  firstname: string;
  lastname: string;
  sex: Sex;
  picture: Picture;
  country: Country;
  stats: Stats;
}

interface Picture {
  url: string;
}

interface Country {
  picture: Picture;
  code: string;
}

interface Stats {
  rank: number;
  points: number;
  weight: number;
  height: number;
  age: number;
}

enum Sex {
  MAN = "MAN",
  WOMAN = "WOMAN",
}
