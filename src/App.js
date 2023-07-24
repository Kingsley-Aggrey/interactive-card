import { useState } from 'react';
import './App.css';
import { Form, Head, ThankYou } from './Components';

function App() {
  // Card details variables
  const [cardHolderName, setCardHolderName] = useState("")
  const [cardNumber, setCardNumber] = useState("")
  const [expDate, setExpDate] = useState({
    month: "",
    year: ""
  })
  const [cvc, setCvc] = useState("")
  const [validCard, setValidCard] = useState(false)

  return (
    <div className="App">
      <Head
        cardHolderName={cardHolderName}
        cardNumber={cardNumber}
        expDate={expDate}
        cvc={cvc}
      />

      {
        !validCard ? <Form
          cardHolderName={cardHolderName}
          cardNumber={cardNumber}
          expDate={expDate}
          cvc={cvc}
          setCardHolderName={setCardHolderName}
          setCardNumber={setCardNumber}
          setExpDate={setExpDate}
          setCvc={setCvc}
          setValidCard={setValidCard}
        /> :
          <ThankYou
            setCardHolderName={setCardHolderName}
            setCardNumber={setCardNumber}
            setExpDate={setExpDate}
            setCvc={setCvc}
            setValidCard={setValidCard}
          />
      }
    </div>
  );
}

export default App;
