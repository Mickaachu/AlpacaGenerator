import Button from "../Button"

function HairButtons({style}) {
  
  const handleButton = (value) => {
    style(value)
    console.log(value)
  }
  
  return (
    <div className="flex flex-wrap gap-2">
      <Button Title="default" Name="eyes" OnChanged={handleButton}/>
      <Button Title="curls" Name="eyes" OnChanged={handleButton}/>
      <Button Title="bangs" Name="eyes" OnChanged={handleButton}/>
      <Button Title="elegant" Name="eyes" OnChanged={handleButton}/>
      <Button Title="fancy" Name="eyes" OnChanged={handleButton}/>
      <Button Title="quiff" Name="eyes" OnChanged={handleButton}/>
      <Button Title="short" Name="eyes" OnChanged={handleButton}/>
     

    </div>
  )
}

export default HairButtons