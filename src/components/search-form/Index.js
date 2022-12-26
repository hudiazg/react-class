import React, { useState } from "react";
import { useLocation } from "wouter";

function MySearchForm() {
  const [word, setWord] = useState("");
  const [location, setLocation] = useLocation();

  function handleSubmit(evt) {
    evt.preventDefault();
    setLocation(`/SearchResults/${word}`);
  }

  function handleOnChange(evt) {
    setWord(evt.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleOnChange} />
      </form>
    </>
  );
}

export default MySearchForm;
