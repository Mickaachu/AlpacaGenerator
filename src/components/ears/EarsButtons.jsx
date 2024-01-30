import Button from "../Button"

function EarsButtons({style}) {
  
  const handleButton = (value) => {
    style(value)
    console.log(value)
  }
  
  return (
    <div className="flex flex-wrap gap-2 lg:max-w-lg">
      <Button Title="default" Name="ears" OnChanged={handleButton}/>
      <Button Title="tiltBackward" Name="ears" OnChanged={handleButton}/>
      <Button Title="tiltForward" Name="ears" OnChanged={handleButton}/>
    </div>
  )
}

export default EarsButtons