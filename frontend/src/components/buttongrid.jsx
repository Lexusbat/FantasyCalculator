import Button from './buttons'

const BUTTONS = [
  "7", "8", "9", "/",
  "4", "5", "6", "*",
  "1", "2", "3", "-",
  "0", ".", "=", "+"
];

function ButtonGrid({ display, setDisplay }) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {BUTTONS.map((value) => (
        <Button key={value} value={value} display={display} setDisplay={setDisplay} />
      ))}
    </div>
  )
}

export default ButtonGrid;
