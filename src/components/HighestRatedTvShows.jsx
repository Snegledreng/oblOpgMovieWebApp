import { useFetchHighestRatedTvShowsQuery } from "../store";
import TvCard from "./TvCard";

function HighestRatedTvShows() {
  const { data, error, isFetching } = useFetchHighestRatedTvShowsQuery();

  let content;
  if (isFetching) {
    content = <div>Loading;</div>;
  } else if (error) {
    content = <div>Error loading shows.</div>;
  } else {
    content = data.results.map((show) => {
      return <TvCard key={show.id} show={show} />;
    });
  }
  return (
    <div className="fixed-grid has-6-cols">
      <div className="grid">{content}</div>
    </div>
  );
}
export default HighestRatedTvShows;
