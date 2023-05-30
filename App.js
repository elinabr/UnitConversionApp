import React, { useState } from "react";
import "./App.css";

function App() {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);
  const [centimeters, setCentimeters] = useState(0);
  const [inches, setInches] = useState(0);
  const [meters, setMeters] = useState(0);
  const [feet, setFeet] = useState(0);
  const [kilometers, setKilometers] = useState(0);
  const [miles, setMiles] = useState(0);
  const [ounce, setOunce] = useState(0);
  const [gram, setGrams] = useState(0);
  const [pound, setPounds] = useState(0);
  const [kilogram, setKilograms] = useState(0);

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
    setMeters(value / 3.28084);
  }

  function handleKilometersChange(e) {
    const value = e.target.value;
    setKilometers(value);
    setMiles(value * 0.621371);
  }

  function handleMilesChange(e) {
    const value = e.target.value;
    setMiles(value);
    setKilometers(value / 0.621371);
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

  function handleFocus(e) {
    e.target.select();
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
            onFocus={handleFocus}
          />
          <span>Celsius</span>
        </div>
        <div className="conversion-input">
          <input
            type="number"
            value={fahrenheit}
            onChange={handleFahrenheitChange}
            onFocus={handleFocus}
          />
          <span>Fahrenheit</span>
        </div>
      </div>
      <div className="conversion-container">
        <h2 className="conversion-header">Small Length Conversion</h2>
        <div className="conversion-input">
          <input
            type="number"
            value={centimeters}
            onChange={handleCentimetersChange}
            onFocus={handleFocus}
          />
          <span>Centimeters</span>
        </div>
        <div className="conversion-input">
          <input
            type="number"
            value={inches}
            onChange={handleInchesChange}
            onFocus={handleFocus}
          />
          <span>Inches</span>
        </div>
      </div>
      <div className="conversion-container">
        <h2 className="conversion-header">Medium Length Conversion</h2>
        <div className="conversion-input">
          <input
            type="number"
            value={meters}
            onChange={handleMetersChange}
            onFocus={handleFocus}
          />
          <span>Meters</span>
        </div>
        <div className="conversion-input">
          <input
            type="number"
            value={feet}
            onChange={handleFeetChange}
            onFocus={handleFocus}
          />
          <span>Feet</span>
        </div>
      </div>
      <div className="conversion-container">
        <h2 className="conversion-header">Large Length Conversion</h2>
        <div className="conversion-input">
          <input
            type="number"
            value={kilometers}
            onChange={handleKilometersChange}
            onFocus={handleFocus}
          />
          <span>Kilometers</span>
        </div>
        <div className="conversion-input">
          <input
            type="number"
            value={miles}
            onChange={handleMilesChange}
            onFocus={handleFocus}
          />
          <span>Miles</span>
        </div>
      </div>
      <div className="conversion-container">
        <h2 className="conversion-header">Small Weight Conversion</h2>
        <div className="conversion-input">
          <input
            type="number"
            value={ounce}
            onChange={handleOunceChange}
            onFocus={handleFocus}
          />
          <span>Ounces</span>
        </div>
        <div className="conversion-input">
          <input
            type="number"
            value={gram}
            onChange={handleGramsChange}
            onFocus={handleFocus}
          />
          <span>Grams</span>
        </div>
      </div>
      <div className="conversion-container">
        <h2 className="conversion-header">Large Weight Conversion</h2>
        <div className="conversion-input">
          <input
            type="number"
            value={pound}
            onChange={handlePoundChange}
            onFocus={handleFocus}
          />
          <span>Pounds</span>
        </div>
        <div className="conversion-input">
          <input
            type="number"
            value={kilogram}
            onChange={handleKilogramsChange}
            onFocus={handleFocus}
          />
          <span>Kilograms</span>
        </div>
      </div>
    </div>
  );
}

export default App;
