import { useState, useEffect } from "react";
import Rule from "./components/Rule";
import Display from "./components/Display";
import Button from "./components/Button";

export default function App() {
  const [advice, setAdvice] = useState(null);
  const [adviceId, setAdviceId] = useState(null);

  const getAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        const adviceData = data.slip.advice;
        const adviceId = data.slip.id;
        setAdvice(adviceData);
        setAdviceId(adviceId);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <main>
      <div className="container">
        <h1 className="sr-only">Advice Generator App</h1>
        <h2 id="advice-number">ADVICE #{adviceId}</h2>
        <Display advice={advice} />
        <Rule />
        <Button getAdvice={getAdvice} />
      </div>
    </main>
  );
}
