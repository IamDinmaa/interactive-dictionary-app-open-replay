import React, { useEffect, useState } from "react";
import AudioPlayer from "./AudioPlayer";

function Word({ data }) {
  const [phonetic, setPhonetic] = useState({});
  useEffect(() => {
    if (data.meanings) {
      const filteredPhonetics = data.phonetics.filter(
        (phonetic) => phonetic.audio !== ""
      );
      setPhonetic({ ...filteredPhonetics[0] });
    }
  }, [data]);
  return (
    <div className="mb-4 flex justify-between">
      {data.meanings && (
        <>
          <div>
            <div>
              <h2
                className="font-bold text-3xl 
            ">
                {" "}
                {data.word}
              </h2>
            </div>
            <div>
              <p className=" text-purple-500 font-medium">
                {phonetic.text ? phonetic.text : data.phonetic}
              </p>
            </div>
          </div>
          {phonetic.audio && (
            <div>
              <AudioPlayer audioFile={phonetic.audio} />
            </div>
          )}
        </>
      )}
    </div>
  );
}
export default Word;
