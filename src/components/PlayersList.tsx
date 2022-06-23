import { useQuery } from "@apollo/client";

import PLAYERS from "../graphql/queries";
import UserInterface from "../interfaces/player";

export default function Players() {
  const { loading, error, data } = useQuery(PLAYERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.players.map(
    ({
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
    }: UserInterface) => (
      <div key={id}>
        <p>
          {firstname}
          {lastname}
          {sex}
          <img src={playerPictureUrl} alt="Player" />
          <img src={countryPictureUrl} alt={code} />
          {rank}
          {points}
          {weight}
          {height}
          {age}
        </p>
      </div>
    )
  );
}
