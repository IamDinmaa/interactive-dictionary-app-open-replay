import React from "react";

function Meaning({ data }) {
  console.log("Received data in meaning component:", data);
  return (
    <div>
      {data.meanings && (
        <>
          {data.meanings.map((meaning, index) => (
            <>
              <div key={index}>
                <div className="flex items-center">
                  <h2 className="mb-3 font-bold">{meaning.partOfSpeech} </h2>
                  <p className="border-b border-gray-400 grow ml-2"></p>
                </div>
                <p className=" mb-3 text-slate-400">Meaning</p>
                {meaning.definitions.map((definition) => (
                  <>
                    <h2 className=" mb-2 mx-4">{definition.definition} </h2>
                    {definition.example && (
                      <h2 className="mx-4  text-slate-400">
                        {definition.example}
                      </h2>
                    )}
                  </>
                ))}
              </div>
              {meaning.synonyms.length > 0 && (
                <div className="relative mb-4 ">
                  <p
                    className=" text-slate-400
              ">
                    Synonyms
                  </p>
                  <div>
                    <h2 className="absolute bottom-0 left-20 text-purple-700 font-medium ">
                      {meaning.synonyms[0]}
                    </h2>
                  </div>
                </div>
              )}
            </>
          ))}
          <div className="relative mt-4">
            <p className="border-b border-gray-400 mb-3"></p>
            <p className=" text-slate-400 font-thin">Source</p>
            <div>
              <p className="absolute bottom-0 left-16 ">{data.sourceUrls[0]}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Meaning;
