"use client";
import "@vidstack/react/player/styles/base.css";
import "@vidstack/react/player/styles/plyr/theme.css";
import {MediaPlayer, MediaProvider, Track} from "@vidstack/react";
import {PlyrLayout, plyrLayoutIcons} from "@vidstack/react/player/layouts/plyr";
import {useEffect, useState} from "react";

interface VideoJSProps {
  streamLink: string;
  tracks: {file: string; label?: string; kind: string; default?: boolean}[];
  name: string;
}

const Player = ({streamLink, tracks, name}: VideoJSProps) => {
  const [loading, setLoading] = useState(true);
  const [playerKey, setPlayerKey] = useState(0);

  const subtitleTracks = tracks
    .filter((t) => t.kind === "captions")
    .map((subtitle, index) => (
      <Track
        key={index + "k"}
        src={subtitle.file}
        kind="subtitles"
        label={subtitle.label}
        lang="en"
        default={subtitle.default}
      />
    ));

  useEffect(() => {
    setPlayerKey(playerKey + 1);
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 1000);

    return () => clearTimeout(timeout);
  }, [streamLink]);

  return (
    <div className="w-full relative">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <span className="loader2 opacity-70"></span>
        </div>
      )}
      <MediaPlayer autoPlay={true} title={name} src={streamLink}>
        <MediaProvider>{tracks[0]?.file && subtitleTracks}</MediaProvider>
        <PlyrLayout
          thumbnails={
            tracks.find((t) => t.kind == "thumbnails")
              ? tracks.find((t) => t.kind == "thumbnails")?.file
              : "https://files.vidstack.io/sprite-fight/thumbnails.vtt"
          }
          icons={plyrLayoutIcons}
        />
      </MediaPlayer>
    </div>
  );
};

export default Player;
