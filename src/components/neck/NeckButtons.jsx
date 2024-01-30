import Button from "../Button"

function NeckButtons({style}) {
  
  const handleButton = (value) => {
    style(value)
    console.log(value)
  }
  
  return (
    <div className="flex flex-wrap gap-2 lg:max-w-xl">
      <Button Title="default" Name="neck" OnChanged={handleButton}/>
      <Button Title="bend-forward" Name="neck" OnChanged={handleButton}/>
      <Button Title="bend-backward" Name="neck" OnChanged={handleButton}/>
      <Button Title="thick" Name="neck" OnChanged={handleButton}/>
    </div>
  )
}

export default NeckButtons