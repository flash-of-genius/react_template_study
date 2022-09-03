import { useState } from "react";

const useState_MultiplyByTwo = ({ startFrom = 10 }) => {
  const [value, setValue] = useState(startFrom);

  const doMultiply = () => {
    setValue(value * 2);
  };

  return (
    <div>
      <span>{value}</span>
      <br />
      <button onClick={doMultiply}>Multiply!!!</button>
    </div>
  );
};

export default useState_MultiplyByTwo;
