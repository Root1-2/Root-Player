import { useQuery } from "react-query";
import useLoadSongsFromDisk from "./useLoadSongsFromDisk";

const useLoadSongs = () => {
  const { directoryPath, loadSongs } = useLoadSongsFromDisk();

  const {
    data: songs,
    isLoading,
    error,
  } = useQuery(["songs", directoryPath], () => loadSongs(directoryPath), {
    enabled: !!directoryPath,
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  return { songs, isLoading, error, directoryPath };
};

export default useLoadSongs;
