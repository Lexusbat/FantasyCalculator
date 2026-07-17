import Button from './buttons'

const BUTTONS = [
  '1','2','3',
  '4','5','6',
  '7','8','9',
  '0',
]

function ButtonGrid({ display, setDisplay }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
      {BUTTONS.map((value) => (
        <Button key={value} value={value} display={display} setDisplay={setDisplay} />
      ))}
    </div>
  )
}

export default ButtonGrid;
