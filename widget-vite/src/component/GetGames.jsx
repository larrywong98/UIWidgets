import { useQuery } from "@apollo/client";
import { load_games } from "./Queries";
import { useEffect } from "react";

const GetGames = () => {
  const { error, loading, data } = useQuery(load_games);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>error</div>;
  }
  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  return (
    <>
      {data.games.map((r, idx) => (
        <div key={idx}>{JSON.stringify(r)}</div>
      ))}
      {data.authors.map((r, idx) => (
        <div key={idx}>{JSON.stringify(r)}</div>
      ))}
    </>
  );
};
export default GetGames;
