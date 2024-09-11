import { useState } from "react";

const useLoadSongsFromDisk = () => {
  const [directoryPath, setDirectoryPath] = useState(null);

  const selectFolder = async () => {
    const folderPath = await window.electronAPI.selectFolder();
    setDirectoryPath(folderPath);
  };

  const loadSongs = async (directoryPath) => {
    if (!directoryPath) return [];
    const songs = await window.electronAPI.loadSongsFromDisk(directoryPath);
    return songs;
  };

  return {
    selectFolder,
    directoryPath,
    loadSongs,
  };
};

export default useLoadSongsFromDisk;
