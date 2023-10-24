import ListGroup from "./components/ListGroup/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import Like from "./components/Like";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import categories from "./expense-tracker/categories";
import ProductList from "./components/ProductList";

function App() {
  const [category, setCategory] = useState("");
  console.log(category);
  return (
    <div>
      <select
        name="categories"
        id="categories"
        className="form-select"
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      <ProductList category={category}></ProductList>
    </div>
  );
}
export default App;
