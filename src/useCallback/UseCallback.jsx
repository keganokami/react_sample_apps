import { useCallback, useEffect, useState, useRef } from "react";



export function UseCallbackComponent({str2}) {

  // eslint-disable-next-line no-undef
  const [counter, setCounter] = useState(0);

  const sampleFunction = useCallback((str) => {
    return str + " useCallback" + str2;
  }, [str2]);


  // キャッシュの確認
  const prev = useRef();
  useEffect(() => {
    if (prev.current !== sampleFunction) {
      console.log("UseCallbackComponent: function changed");
    } else {
      console.log("UseCallbackComponent: function not changed");
    }
    prev.current = sampleFunction;
    // Counterを依存配列に指定していないのでCounterが変わっても関数が再レンダリングされない。
    // 初回の表示だけUseCallbackComponent: function changedがコンソールに表示される。
    // Counterを追加すればボタンを押すごとに再レンダーされる
  }, [sampleFunction]);

  // CounterIncrementFunction
  const counterIncrementFunction = useCallback((counter) => {
    setCounter(counter => counter + 1);
  }, []);


  return (
    <div className="UseCallbackComponent">
      <h2>
        useCallback Component
      </h2>
      <p>{sampleFunction('aaa')}</p>
      <p>Counter: {counter}</p>
      <button onClick={counterIncrementFunction}>Increment</button>
    </div>
  );
}