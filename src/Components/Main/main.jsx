import { useState } from "react";
import "./main.css";

const Main = () => {
  // Initialize state with an array of ingredients
  const [state, setState] = useState(["oregno", "chiken", "tomato"]);

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault(); // Prevent default form submission behavior

    // Get the input value
    const inputValue = e.target.elements.ingredient.value.trim(); // Use `e.target.elements` to access the input

    if (inputValue) {
      // Add the new ingredient to the state
      setState((prevState) => [...prevState, inputValue]);
      e.target.reset(); // Clear the input field after submission
    }
  }
  console.log(state)
  const ingredient = state.map((item) => {
    return (
            <li key={item}>{item}</li>
    )
})

  return (
    <>
      <main className="main-section">
        <form className="form-section" onSubmit={handleSubmit}>
          <input
            aria-label="add ingredient"
            type="text"
            placeholder="e.g tomato paste"
            name="ingredient"
          />
          <button>Add ingredient</button>
        </form>
        <ul>
            {ingredient}
        </ul>
      </main>
    </>
  );
};

export default Main;
