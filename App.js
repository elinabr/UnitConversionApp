import React, { useState } from "react";
import "./App.css";
import { FaCopy } from "react-icons/fa";

function App() {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);
  const [centimeters, setCentimeters] = useState(0);
  const [inches, setInches] = useState(0);
  const [meter, setMeter] = useState(0);
  const [feet, setFeet] = useState(0);
  const [kilometer, setKilometer] = useState(0);
  const [mile, setMile] = useState(0);
  const [ounce, setOunce] = useState(0);
  const [gram, setGrams] = useState(0);
  const [pound, setPounds] = useState(0);
  const [kilogram, setKilograms] = useState(0);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  function handleCelsiusChange(e) {
    const value = e.target.value;
    setCelsius(value);
    setFahrenheit(value * 1.8 + 32);
  }

  function handleFahrenheitChange(e) {
    const value = e.target.value;
    setFahrenheit(value);
    setCelsius((value - 32) / 1.8);
  }

  function handleCentimetersChange(e) {
    const value = e.target.value;
    setCentimeters(value);
    setInches(value * 0.3937);
  }

  function handleInchesChange(e) {
    const value = e.target.value;
    setInches(value);
    setCentimeters(value / 0.3937);
  }

  function handleMetersChange(e) {
    const value = e.target.value;
    setMeters(value);
    setFeet(value * 3.28084);
  }

  function handleFeetChange(e) {
    const value = e.target.value;
    setFeet(value);
    setMeter(value / 3.28084);
  }

  function handleKilometersChange(e) {
    const value = e.target.value;
    setKilometer(value);
    setMile(value * 0.621371);
  }

  function handleMilesChange(e) {
    const value = e.target.value;
    setMile(value);
    setKilometer(value / 0.621371);
  }

  function handleOunceChange(e) {
    const value = e.target.value;
    setOunce(value);
    setGrams(value * 28.3495);
  }

  function handleGramsChange(e) {
    const value = e.target.value;
    setGrams(value);
    setOunce(value / 28.3495);
  }

  function handlePoundChange(e) {
    const value = e.target.value;
    setPounds(value);
    setKilograms(value * 0.453592);
  }

  function handleKilogramsChange(e) {
    const value = e.target.value;
    setKilograms(value);
    setPounds(value / 0.453592);
  }

  return (
    <div className="app-container">
      <h1 className="app-title">Unit Converter</h1>
      <div className="conversion-container">
        <h2 className="conversion-header">Temperature Conversion</h2>
        <div className="conversion-input">
          <input
            type="number"
            value={celsius}
            onChange={handleCelsiusChange}
          />
          <button onClick={() => copyToClipboard(celsius)}>
            <FaCopy />
          </button>
          <span>Celsius</span>
        </div>
        <div className="conversion-input">
          <input
            type="number"
            value={fahrenheit}
            onChange={handleFahrenheitChange}
          />
          <button onClick={() => copyToClipboard(fahrenheit)}>
            <FaCopy />
          </button>
          <span>Fahrenheit</span>
        </div>
      </div>
      <div className="conversion-container">
        <h2 className="conversion-header">Length Conversion</h2>
        <div className="conversion-input">
          <input
            type="number"
            value={centimeters}
            onChange={handleCentimetersChange}
          />
          <button onClick={() => copyToClipboard(centimeters)}>
            <FaCopy />
          </button>
          <span>Centimeters</span>
        </div>
        <div className="conversion-input">
          <input type="number" value={inches} onChange={handleInchesChange} />
          <button onClick={() => copyToClipboard(inches)}>
            <FaCopy />
          </button>
          <span>Inches</span>
        </div>
      </div>
      <div className="conversion-container">
        <h2 className="conversion-header">Weight Conversion</h2>
        <div className="conversion-input">
          <input
            type="number"
            value={ounce}
            onChange={handleOunceChange}
          />
          <button onClick={() => copyToClipboard(ounce)}>
            <FaCopy />
          </button>
          <span>Ounces</span>
        </div>
        <div className="conversion-input">
          <input
            type="number"
            value={gram}
            onChange={handleGramsChange}
          />
          <button onClick={() => copyToClipboard(gram)}>
            <FaCopy />
          </button>
          <span>Grams</span>
        </div>
        <div className="conversion-input">
          <input
            type="number"
            value={pound}
            onChange={handlePoundChange}
          />
          <button onClick={() => copyToClipboard(pound)}>
            <FaCopy />
          </button>
          <span>Pounds</span>
        </div>
        <div className="conversion-input">
          <input
            type="number"
            value={kilogram}
            onChange={handleKilogramsChange}
          />
          <button onClick={() => copyToClipboard(kilogram)}>
            <FaCopy />
          </button>
          <span>Kilograms</span>
        </div>
      </div>
    </div>
  );
}

export default App;

