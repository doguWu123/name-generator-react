import { useState } from "react";
import "./styles.css";
import styled from "styled-components";

const Button = styled.button`
  height: 200px;
  width: 400px;
  border-radius: 4px;
  align-items: center;
  background-color: teal;
  font-size: 50px;
  font-weight: 900;
  margin-top: 200px;
  margin-left: 450px;
  border: none;
`;

//const names = require('@rstacruz/startup-name-generator')

const names = [
  "debugger333X",
  "mosh",
  "eddie",
  "ben",
  "ed",
  "ted",
  "pie",
  "benni",
  "benny",
  "uqehx",
  "index",
  "brow",
  "bru",
  "bob",
  "brew",
  "keteee",
  "john",
  "burger",
  "berg",
  "era",
  "lee"
];

function RandomName() {
  const [name, newName] = useState("debugger333X");

  return (
    <div id="RandomName-container">
      <Button
        onClick={() => newName(names[Math.floor(Math.random() * names.length)])}
      >
        {name}
      </Button>
    </div>
  );
}

export default RandomName;
