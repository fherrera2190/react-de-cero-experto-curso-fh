import ReactDOM from "react-dom/client";
import "./index.css";
// import { TodoApp } from "./08-useReducer/TodoApp";
import { BrowserRouter } from "react-router-dom";
import { MainApp } from "./09-useContext/MainApp";
// import { Padre } from "./07-tarea-memo/Padre";
// import { Memorize } from "./06-memos/Memorize";
// import { MemoHook } from "./06-memos/MemoHook";
// import { CallbackHook } from "./06-memos/CallbackHook";
// import { Layout } from "./05-useLayoutEffect/Layout";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
// import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
// import { FocusScreen } from "./04-useRef/FocusScreen";
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { HooksApp } from './HooksApp.jsx'
// import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
// import './08-useReducer/intro-reducer.js'

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode> Lo saco para que no me tire 2 veces el renderizado del hook
  // </React.StrictMode>
  // <FormWithCustomHook />
  // <MultipleCustomHooks />
  // <Layout/>
  // <Padre />
  <BrowserRouter>
    <MainApp/>
  </BrowserRouter>
);
