import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { LiaTimesSolid } from "react-icons/lia";

function Search({ callback }) {
  const [word, setWord] = useState("");
  const [icon, setIcon] = useState("search");

  function handleKeyDown(e) {
    if (e.key === "Enter" && word) {
      callback(word);
      setIcon("cancel");
    }
  }
  function handleIconClick() {
    if (icon === "cancel") {
      setWord("");
      setIcon("search");
    }
    if (icon === "search" && word) {
      callback(word);
    }
  }
  function handleChange(e) {
    setWord(e.target.value);
  }
  return (
    <div className="relative mb-4 mt-5 ml-1 sm:ml-0">
      <input
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        value={word}
        placeholder="Search a word"
        className="border-solid focus:outline-none border-5 rounded-lg w-full bg-slate-100 px-2 p-2 placeholder-slate-950 font-bold"
      />
      <button
        className="absolute top-2.5 right-3 translate-y-1 cursor-pointer text-violet-600"
        onClick={handleIconClick}>
        {icon === "search" ? <AiOutlineSearch /> : <LiaTimesSolid />}
      </button>
    </div>
  );
}
export default Search;
