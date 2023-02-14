import ReactPlayer from "react-player";
import { SlVolumeOff, SlVolume2 } from "react-icons/sl";
import { FaPlay } from "react-icons/fa";
import { useState } from "react";

import { HasIcon } from "../Icons";

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
        <p className="max-w-md w-full leading-7 text-[18px] pt-4">
          Kang the Conqueror finally comes toe-to-toe with Earth's Mightiest
          Heroes in Avengers.
        </p>
        <div className="flex mt-8">
          <button className="flex bg-[var(--btn-color-white)] text-[#000] btn hover:opacity-80">
            <FaPlay className="w-7 h-7 mr-4" />
            Phát
          </button>
          <button className="flex bg-[var(--btn-color-rgb)] text-[var(--white-color)] btn hover:opacity-80">
            <span className="block mr-4">
              <HasIcon className="" />
            </span>
            Thông tin khác
          </button>
        </div>
      </div>

      <div
        className="absolute right-0 top-[70%] flex items-center"
      >
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
        <div className="bg-[rgba(51,51,51,.6)] flex items-center py-[7px] pr-[54px] pl-3 ml-4 text-[17px] border">18+</div>
      </div>
      <div className="fadeBottom"></div>
    </div>
  );
}

export default Intro;
