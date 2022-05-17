import React from "react";
import "./App.css"

const App = () => {
    const boys = [
        {
            name: "Ragb",
            age: 23,
            phone: "01126665914",
        },
        {
            name: "ali",
            age: 24,
            phone: "01126665915",
        },
        {
            name: "Ahmed",
            age: 25,
            phone: "01126665916",
        }
    ];
    const cards = boys.map((name, age, phone, idx) => (
        <div className="cardWraper" key={idx}>
            <div>name: {name}</div>
            <div>age: {age}</div>
            <div>phone: {phone}</div>
        
        </div>
    ));
    return( 
    <div className="mainContainer">
        {cards}
        
    </div>
    );
};
export default App;