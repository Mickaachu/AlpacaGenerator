import Button from "../Button"

function LegButtons({style}) {
  
  const handleButton = (value) => {
    style(value)
    console.log(value)
  }
  
  return (
    <div className="flex flex-wrap gap-2">
      <Button Title="default" Name="leg" OnChanged={handleButton}/>
      <Button Title="bubbleTea" Name="leg" OnChanged={handleButton}/>
      <Button Title="cookie" Name="leg" OnChanged={handleButton}/>
      <Button Title="gameConsole" Name="leg" OnChanged={handleButton}/>
      <Button Title="tiltBackward" Name="leg" OnChanged={handleButton}/>
      <Button Title="tiltForward" Name="leg" OnChanged={handleButton}/>
    </div>
  )
}

export default LegButtons