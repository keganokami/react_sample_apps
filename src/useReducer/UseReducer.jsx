/* eslint-disable default-case */
import { useReducer, useState } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT': {
      return { 
        ...state,
        age: state.age + 1 
      };
    }
    case 'DECREMENT': {
      return { 
        ...state,
        age: state.age - 1 
      };
    }
    case 'CHANGE_NAME': {
      return {
        ...state,
        name: action.name
      }
    }
  }


  throw new Error('Unhandled action type: ' + action.type);
}

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, { name: 'Taylor', age: 42 });
  const [name, setName] = useState('');

  function handleIncrement() {
    // 同じイベントハンドラの中ではstateは更新されない
    console.log(state.age) // 42
    dispatch({ type: 'INCREMENT' });
    console.log(state.age) // 42
    
    // reducer関数を呼び出してstateを更新する
    const action = { type: 'INCREMENT' };
    dispatch(action);

    const nextAge = reducer(state, action)
    console.log(nextAge.age) // 43
  } 

  return (
    <>
      <div>
        {/* <button onClick={() => {
        dispatch({ type: 'INCREMENT' });
      }}> */}
        <button onClick={handleIncrement}>Increment age</button>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch({ type: 'DECREMENT' })
          }}
        >
          Decrement age
        </button>
      </div>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
        <button
          onClick={() => {
            dispatch({ type: 'CHANGE_NAME', name: name })
          }}
        >
          Change Name
        </button>
      </div>
      <p>
        Age: {state.age}
        Name: {state.name}
      </p>
    </>
  )
}