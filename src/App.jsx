import React from "react";
import { TestComponent } from "./useMemo/UseMemo";
import { UseCallbackComponent } from "./useCallback/UseCallback";
// import { GlobalEventListen } from "./useEffect/GlobalEventListen";
import { WrapModalApp } from "./useEffect/WrapModalApp";
import { WrapChatRoomApp } from "./useEffect/chatRoom/WrapChatRoom";
import { ClickCounter } from './ref/ClickCounter'
import UseReducer from "./useReducer/UseReducer";
import AddTask from "./useReducer/addTask/AddTask";
import ContextSample from "./useContext/ContextSample";

export default function MyApp(props) {
  return (
    <div className="MyApp">
      <h1>Hello React.</h1>
      <TestComponent a={1} b={1} />
      <UseCallbackComponent str2={'bbbb'} />
      {/* <GlobalEventListen /> */}
      <WrapModalApp />
      <WrapChatRoomApp />
      <h3>UseRef no render</h3>
      <ClickCounter />
      <h2>Start editing to see some magic happen!</h2>
      <h3>UseReducer</h3>
      <UseReducer />
      <h3>UseReducer2 CRUD</h3>
      <AddTask />
      <h3>UseContext</h3>
      <ContextSample />
    </div>
  )
}

// Log to console
console.log("Hello console");
