import { PlayerInterface } from "../../interfaces/players";
import { gramsToKilograms, centimetersToMeters } from "../../utils/measures";
import { getSexIcon } from "../../utils/sex";

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
          {getSexIcon(sex)}
          <Flag>
            <img src={countryPictureUrl} alt={code} />
          </Flag>
        </PlayerInfo>
        <Details>
          <li>Age: {age}</li>
          <li>Weight: {gramsToKilograms(weight)} kg </li>
          <li>Height: {centimetersToMeters(height)} m</li>
        </Details>
      </div>
      <PlayerImage src={playerPictureUrl} alt="Player" />
    </Card>
  );
}
