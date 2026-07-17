

function Button({ value, display, setDisplay }) {
  function handleClick() {
    setDisplay(String(display ?? '') + value)
  }

  return (
    <button onClick={handleClick} style={{ padding: 12, border: '1px solid #999', borderRadius: 6 }}>
      {value}
    </button>
  )
}

export default Button;
