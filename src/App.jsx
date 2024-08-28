import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import React from "react";

import AppLayout from "./ui/AppLayout.jsx";
import Home from "./pages/Home.jsx";
import Library from "./pages/Library.jsx";
import Queue from "./pages/Queue.jsx";
import NowPlaying from "./pages/NowPlaying.jsx";
import MostPlayed from "./pages/MostPlayed.jsx";
import Genres from "./pages/Genres.jsx";
import Folders from "./pages/Folders.jsx";
import Artists from "./pages/Artists.jsx";
import Albums from "./pages/Albums.jsx";
import Playlists from "./pages/Playlists.jsx";
import Settings from "./pages/Settings.jsx";

function App() {
  return (
    <HashRouter>
      <Route element={<AppLayout />}>
        <Route index element={<Navigate replace to="homepage" />} />
        <Route path="homepage" element={<Home />} />
        <Route path="album" element={<Albums />} />
        <Route path="artists" element={<Artists />} />
        <Route path="folders" element={<Folders />} />
        <Route path="genres" element={<Genres />} />
        <Route path="mostPlayed" element={<MostPlayed />} />
        <Route path="nowPlaying" element={<NowPlaying />} />
        <Route path="playlists" element={<Playlists />} />
        <Route path="queue" element={<Queue />} />
        <Route path="library" element={<Library />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </HashRouter>
  );
}

export default App;
