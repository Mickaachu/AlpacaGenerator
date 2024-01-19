import Button from "../Button"

function MouthButtons({style}) {
  
  const handleButton = (value) => {
    style(value)
    console.log(value)
  }
  
  return (
    <div className="flex flex-wrap gap-2">
      <Button Title="default" Name="mouth" OnChanged={handleButton}/>
      <Button Title="astonished" Name="mouth" OnChanged={handleButton}/>
      <Button Title="eating" Name="mouth" OnChanged={handleButton}/>
      <Button Title="laugh" Name="mouth" OnChanged={handleButton}/>
      <Button Title="tongue" Name="mouth" OnChanged={handleButton}/>

    </div>
  )
}

export default MouthButtons