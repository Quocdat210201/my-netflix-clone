import ReactPlayer from "react-player";
import { SlVolumeOff, SlVolume2 } from "react-icons/sl";
import { useState } from "react";

function Intro(props) {
  const [mute, setMute] = useState(false);
  const [volume, setVolume] = useState(1);
  return (
    <div className="bg-[var(--primary-color)] text-[var(--white-color)] relative intro-pt">
      <ReactPlayer
        playing={true}
        loop={true}
        width="100%"
        height="100%"
        volume={volume}
        mutex={false}
        url="https://vimeo.com/75483147"
        className="absolute top-0 left-0"
      />
      <div className="absolute top-56 left-8 text-[var(--white-color)]">
        <h1 className="text-5xl font-semibold">Netflix Choices</h1>
        <p className="max-w-md w-full leading-6 text-[18px] pt-4">
          Choosing a Netflix movie isn't always easy. Produced by Simply
          Unemployable and No End Media LLC Directed by Matt Catanzano and
          Richie Moriarty Camera Sony F3 and Nikon Lenses.
        </p>
      </div>
      {mute ? (
        <SlVolumeOff
          className="btn-volume"
          onClick={() => {
            setMute((prev) => !prev);
            setVolume(1);
        }}
        />
        ) : (
            <SlVolume2
            className="btn-volume"
            onClick={() => {
                setMute((prev) => !prev);
                setVolume(0);
          }}
        />
      )}
      <div className="fadeBottom"></div>
    </div>
  );
}

export default Intro;
