import { PlayerInterface, Sex } from "../../interfaces/players";
import {
  Card,
  Flag,
  Rank,
  Points,
  PlayerImage,
  PlayerInfo,
  Details,
} from "./style";

export default function Player({
  id,
  firstname,
  lastname,
  sex,
  picture: { url: playerPictureUrl },
  country: {
    picture: { url: countryPictureUrl },
    code,
  },
  stats: { rank, points, weight, height, age },
}: PlayerInterface) {
  return (
    <Card key={id}>
      <div>
        <Rank>Rank: {rank}</Rank>
        <Points>Points: {points}</Points>
        <PlayerInfo>
          {firstname} {lastname}
          {sex === Sex.MAN ? "♂" : Sex.WOMAN && "♀"}
          <Flag>
            <img src={countryPictureUrl} alt={code} />
          </Flag>
        </PlayerInfo>
        <Details>
          <li>Age: {age}</li>
          <li>Weight: {weight / 1000} kg </li>
          <li>Height: {height / 100} m</li>
        </Details>
      </div>
      <PlayerImage src={playerPictureUrl} alt="Player" />
    </Card>
  );
}
