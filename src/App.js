import ButtonMUI from "./components/ButtonMUI/ButtonMUI";
import store from "./redux/store";
import { Provider } from "react-redux";
import "./styles/App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App bg-success bg-opacity-50 border border-success rounded-2 d-flex w-50
      p-3 m-auto position-absolute top-50 start-50 translate-middle">
        <ButtonMUI />
      </div>
    </Provider>
  );
}

export default App;
