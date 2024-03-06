import { useState } from 'react'

function App() {
  const [intentos, setIntentos] = useState(0);
  const tossCoin = () => {
    return Math.random() > 0.5 ? "cara" : "cruz";
  }

  const fiveCara = () => {
    return new Promise((resolve, reject) => {

      let contCara = 0;
      let contIntento = 0;

      while (contCara < 5) {
        contIntento++;
        let result = tossCoin();
        console.log(result)
        if (result === 'cara') {
          contCara++;
        }
        else {
          contCara = 0;
        }
      }
      resolve(contIntento);
    });
  };

  return (
    <>
      <button onClick={() => {
        fiveCara().then(resp => setIntentos(resp))
      }}>click</button>
      <p>5 resultados de cara de seguido tomaron {intentos} intentos</p>
    </>
  )
}

export default App
