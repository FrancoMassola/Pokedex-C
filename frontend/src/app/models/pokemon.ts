export class Pokemon {
  _id: string;
  trainerId: String;
  pokemonName: String;
  type: String;
  level: Number;
  abilities: String;
  evolutions: {
    evolutionName: String;
    evolutionTypes: [String];
    evolutionLvl: [Number];
  };
}
