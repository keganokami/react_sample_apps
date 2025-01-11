import { useRef } from 'react'

export function ClickCounter() {
  let ref = useRef(0)

  function handleClick() {
    ref.current = ref.current + 1
    alert('You clicked ' + ref.current + ' times!')
  }

  return (
    <>
      <button onClick={handleClick}>Click me!</button>
      <p>
        {/* refをJSXの中で参照してもhandleClickではレンダリングされないので変わらない。 */}
        {ref.current} times clicked
      </p>
    </>
  )
}
