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
        url="https://vimeo.com/343334321"
        className="absolute top-0 left-0"
      />
      <div className="absolute top-72 left-[60px] text-[var(--white-color)]">
        <h1 className="text-5xl font-semibold">Marvel’s Avengers</h1>
        <p className="max-w-md w-full leading-6 text-[18px] pt-4">
          Kang the Conqueror finally comes toe-to-toe with Earth's Mightiest
          Heroes in Avengers.
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
