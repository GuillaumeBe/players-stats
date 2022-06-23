import { Sex } from "../../interfaces/players";

export const getSexIcon = (sex: string) =>
  sex === Sex.MAN ? "♂" : Sex.WOMAN && "♀";
