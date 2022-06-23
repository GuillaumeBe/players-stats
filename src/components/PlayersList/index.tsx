import { useQuery } from "@apollo/client";

import Player from "../Player";
import { PLAYERS } from "../../graphql/queries";
import { PlayersInterface } from "../../interfaces/players";

export default function PlayersList() {
  const { loading, data } = useQuery<PlayersInterface>(PLAYERS);

  if (loading) return <div>Loading...</div>;

  const sortedPlayers =
    data &&
    [...data.players].sort((a, b) => (a.stats.rank > b.stats.rank ? 1 : -1));

  return (
    <>
      {sortedPlayers?.map(
        ({ id, firstname, lastname, sex, picture, country, stats }) => (
          <Player
            key={id}
            id={id}
            firstname={firstname}
            lastname={lastname}
            sex={sex}
            picture={picture}
            country={country}
            stats={stats}
          />
        )
      )}
    </>
  );
}
