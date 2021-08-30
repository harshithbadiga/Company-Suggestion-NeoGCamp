import { useState } from "react";
import "./styles.css";

const CompaniesLib = {
  ProductBased: [
    {
      name: "Amazon",
      headquarters: "Seattle",
      description: "One of the leading companies in the E-commerce industry!",
      capital: "💰💰💎"
    },
    {
      name: "Apple",
      headquarters: "California",
      description: "One of the leading companies in the Mobile industry!",
      capital: "💰💰💎"
    },
    {
      name: "Google",
      headquarters: "California",
      description: "One of the leading companies in the Advertising industry!",
      capital: "💰💰💎"
    }
  ],
  ServiceBased: [
    {
      name: "TCS",
      headquarters: "Mumbai",
      description: "It was founded in 1968, by Mr.J.R.D.Tata!",
      capital: "💰💰💎"
    },
    {
      name: "Infosys",
      headquarters: "Bengaluru",
      description: "It was founded in 1981, by Mr.Narayana Murthy!",
      capital: "💰💰💎"
    },
    {
      name: "Accenture",
      headquarters: "Dublin",
      description: "It was founded in 1989, by Mr.Clarence DeLany!",
      capital: "💰💰💎"
    }
  ],
  HealthBased: [
    {
      name: "Cerner",
      headquarters: "Kansas City",
      description:
        "Cerner Corporation is an American supplier of health information technology services, devices, and hardware, founded  in 1979",
      capital: "💰💰💎"
    },
    {
      name: "Cigna",
      headquarters: "Connecticut",
      description:
        "Cigna is an American multinational managed healthcare and insurance company, founded in 1982",
      capital: "💰💰💎"
    },
    {
      name: "Humana",
      headquarters: "Kentucky",
      description:
        "It is a for-profit Healthcare insurance company, founded in 1961",
      capital: "💰💰💎"
    }
  ]
};

var companyInfo = Object.keys(CompaniesLib);

export default function App() {
  const [showCompany, setShowCompany] = useState("HealthBased");

  function clickHandler(genre) {
    setShowCompany(genre);
  }
  return (
    <div className="App">
      <h1>A brief summary on the types of Companies</h1>
      <h5> Click on the type of Company to know more! </h5>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        {companyInfo.map((genre) => (
          <button
            style={{
              margin: "1rem 2rem",
              padding: "0.5rem",
              borderRadius: "1rem",
              outline: "none"
            }}
            onClick={() => clickHandler(genre)}
          >
            {" "}
            {genre}{" "}
          </button>
        ))}
      </div>
      <hr />
      <ul style={{ listStyle: "none", textAlign: "left" }}>
        {CompaniesLib[showCompany].map((myCompany) => (
          <li
            style={{
              border: "1px black solid",
              padding: "1rem",
              margin: "2rem",
              borderRadius: "1rem"
            }}
          >
            <h2>{myCompany.name}</h2>
            <h6 style={{ fontWeight: "bold", fontSize: "1rem" }}>
              {myCompany.headquarters}
            </h6>
            <p>{myCompany.description}</p>
            <h6 style={{ fontWeight: "bold", fontSize: "1rem" }}>
              {myCompany.capital}
            </h6>
          </li>
        ))}
      </ul>
    </div>
  );
}
