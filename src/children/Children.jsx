// https://ja.react.dev/learn/passing-props-to-a-component#passing-jsx-as-children
// 上記のApp.jsコードを以下のように変更することでchildren以下のコンポーネントが再レンダリングされないことを確認する。

import Avatar from './Avatar.js';
import { useState } from 'react';

function Card({ children }) {
  const [counter, setCounter] = useState(0);

  console.log('Card component is rendered');
  return (
    <div className="card">
      {children}
      <button onClick={() => setCounter(counter + 1)}>Increment Counter</button>
    </div>
  );
}

export default function Profile() {
  console.log('Profile component is rendered');
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  );
}
