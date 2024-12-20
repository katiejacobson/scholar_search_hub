import { useState } from "react";
import "./App.css";
import Header from "../Header/Header.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="page">
        <h1>Scholar Search Hub</h1>
        <p>Let's get started!</p>
        <div className="page_content">
          <div>
            <Header />
            {/* SearchForm */}
          </div>
          <div>{/* ArticleSection */}</div>
        </div>
      </div>
    </>
  );
}

export default App;
