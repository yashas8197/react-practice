import { useState } from "react";

const PosNegNumber = () => {
  const [count, setCount] = useState(0);
  const posNegNum = count >= 0 ? "positive" : "negative";
  return (
    <div>
      <p>Count: {count}</p>
      <p>The Count is {posNegNum}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

const UserLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const clickHandler = () => {
    if (username && password) {
      setIsLoggedIn(true);
    }
  };

  const WelcomeComponent = () => {
    return (
      <div>
        <h2>Welcome {username}!</h2>
      </div>
    );
  };
  if (!isLoggedIn) {
    return (
      <div>
        <h1>User Login</h1>
        <label>Username: </label>
        <input onChange={(event) => setUsername(event.target.value)} />
        <br />
        <br />
        <label>Password: </label>
        <input
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <br />

        <button onClick={clickHandler}>Login</button>
      </div>
    );
  } else {
    return <WelcomeComponent />;
  }
};

const TempConverter = () => {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(32);

  /*  const fahrenheitFormula = (celsius * 9) / 5 + 32;

  const celsiusFormula = ((fahrenheit - 32) * 5) / 9; */

  const handleCelsiusChange = (event) => {
    let c = event.target.value;
    setCelsius(c);
    setFahrenheit((c * 9) / 5 + 32);
  };

  const handleFahrenheitChange = (event) => {
    let f = event.target.value;
    setFahrenheit(f);
    setCelsius(((f - 32) * 5) / 9);
  };

  return (
    <div>
      <h2>Temperature Converter</h2>
      <label>Celsius: </label>
      <input
        min="0"
        type="number"
        onChange={handleCelsiusChange}
        value={celsius}
      />
      <br />
      <br />
      <label>Fahrenheit: </label>
      <input
        min="32"
        type="number"
        onChange={handleFahrenheitChange}
        value={fahrenheit}
      />
    </div>
  );
};

const ShoppingCart = () => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addItemToCart = (product, price) => {
    setItems([...items, { name: product, amount: price }]);
    setTotal(total + price);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - {item.amount}
          </li>
        ))}
      </ul>
      <p>Total Price: ${total}</p>
      <button onClick={() => addItemToCart("Product A", 10)}>
        Add Product A
      </button>
      <button onClick={() => addItemToCart("Product B", 20)}>
        Add Product B
      </button>
    </div>
  );
};

const QuizApp = () => {
  const [questionNum, setQuestionNum] = useState(0);
  const [answer, setAnswer] = useState("");
  const questions = [
    "What is the national bird of India?",
    "How many colors are there in Indian flag?",
    "What is the color of sky?",
  ];

  const clickHandler = () => {
    if (answer) {
      setQuestionNum((prev) => prev + 1);
      setAnswer("");
    }
  };

  return (
    <div>
      <h2>Quiz App</h2>

      {questionNum < questions.length ? (
        <div>
          <p>{questions[questionNum]}</p>
          <br />
          <input
            onChange={(event) => setAnswer(event.target.value)}
            value={answer}
          />
          <button onClick={clickHandler}>Next</button>
        </div>
      ) : (
        <p>You have answered all the question</p>
      )}
    </div>
  );
};
export default function App() {
  return (
    <main>
      <PosNegNumber />
      <UserLogin />
      <TempConverter />
      <ShoppingCart />
      <QuizApp />
    </main>
  );
}
