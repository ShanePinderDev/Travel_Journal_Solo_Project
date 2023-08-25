import React from "react";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import data from "./data.jsx";

function App() {
  const cardElements = data.map((item) => {
    return (
      <Card
        key={item.id}
        img={item.imageUrl}
        location={item.location}
        googleMapsUrl={item.googleMapsUrl}
        title={item.title}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
      />
    );
  });

  return (
    <div className="container">
      <Header />
      {cardElements}
      <Footer />
    </div>
  );
}

export default App;
