import "bootstrap/dist/css/bootstrap.min.css";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { TodoApp } from "./08-useReducer/TodoApp";
import { MainApp } from "./09-useContext/MainApp";
// import ReactHookFormExample from "./hooks/ReactHookFormExample";
// import { FocusScreen } from "./04-useRef/FocusScreen";
// import { CallbackHook } from "./06-memos/CallBackHook";
// import CustomForm from "./hooks/CustomForm";
// import { CounterApp } from "./01-useState/CounterApp";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
// import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
// import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
// import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <CounterApp /> */}
    {/* <CounterWithCustomHook /> */}
    {/* <SimpleForm /> */}
    {/* <FormWithCustomHook/> */}
    {/* <MultipleCustomHooks /> */}
    {/* <FocusScreen /> */}

    {/* <CallbackHook /> */}
    {/* <CustomForm /> */}

    {/* <ReactHookFormExample /> */}
    <TodoApp/>
    {/* <MainApp /> */}
  </StrictMode>
);
