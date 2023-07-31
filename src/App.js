import { useStore, rootStore, Provider } from "./models/root";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Provider
        value={{
          root: rootStore
        }}
      >
        <CardItemCount />
        <CartAddButton />
      </Provider>
    </div>
  );
}

const CartAddButton = () => {
  const root = useStore();
  return (
    <>
      {Math.random()}
      <button onClick={() => root.cart.addItem("hello")}>Add Item</button>
    </>
  );
};

const CardItemCount = () => {
  const root = useStore();
  return <p>{root.cart.count}</p>;
};
