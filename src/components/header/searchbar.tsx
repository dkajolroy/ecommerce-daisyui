"use client";

import { useState } from "react";

function SearchBar() {
  const [value, setValue] = useState("DEFAULT");
  return (
    <div className="join">
      <select
        defaultValue="DEFAULT"
        onChange={({ target }) => setValue(target.value)}
        className="select dark:bg-gray-800 dark:text-gray-500 dark:border-slate-700 cursor-pointer min-h-0 h-10  focus:outline-none focus:border-slate-400 select-bordered join-item"
      >
        <option value="DEFAULT" disabled>
          Select Category
        </option>
        <option value="Java">Java</option>
        <option value="Go">Go</option>
        <option value="C">C</option>
        <option value="C#">C#</option>
        <option value="C++">C++</option>
        <option value="Rust">Rust</option>
        <option value="JavaScript">JavaScript</option>
        <option value="Python">Python</option>
      </select>
      <div>
        <div>
          <input
            className="input cursor-pointer border dark:border-slate-700 dark:bg-gray-800 dark:text-gray-500 min-h-0 h-10 focus:outline-none focus:border-slate-400 input-bordered join-item"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="indicator">
        <button className="btn min-h-0 h-10 join-item dark:bg-gray-800 dark:text-gray-500  focus:border-slate-400 border dark:border-slate-700">
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
