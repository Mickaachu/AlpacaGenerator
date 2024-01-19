import Button from "../Button"

function EyesButtons({style}) {
  
  const handleButton = (value) => {
    style(value)
    console.log(value)
  }
  
  return (
    <div className="flex flex-wrap gap-2">
      <Button Title="default" Name="eyes" OnChanged={handleButton}/>
      <Button Title="angry" Name="eyes" OnChanged={handleButton}/>
      <Button Title="naughty" Name="eyes" OnChanged={handleButton}/>
      <Button Title="panda" Name="eyes" OnChanged={handleButton}/>
      <Button Title="smart" Name="eyes" OnChanged={handleButton}/>
      <Button Title="star" Name="eyes" OnChanged={handleButton}/>

    </div>
  )
}

export default EyesButtons