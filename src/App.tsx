import { useState } from "react";
import { Button, Input } from "./components";
function App() {
  const [valueInput, setValueInput] = useState("");
  return (
    <>
      <Button
        backgroundColor="#5b36f2"
        borderColor="#5b36f2"
        backgroundColorActive="#4318cd"
        backgroundColorHover="#745ef6"
      >
        <span>Test button</span>
      </Button>
      <Input
        value={valueInput}
        onChange={(e) => setValueInput(e.target.value)}
        placeholder="Ingrese el texto"
      />
    </>
  );
}

export default App;
