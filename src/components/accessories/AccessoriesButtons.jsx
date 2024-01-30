import Button from "../Button"

function AccessoriesButtons({style}) {
  
  const handleButton = (value) => {
    style(value)
  }
  
  return (
    <div className="flex flex-wrap gap-2 lg:max-w-lg">
      <Button Title="earings" Name="accessories" OnChanged={handleButton}/>
      <Button Title="glasses" Name="accessories" OnChanged={handleButton}/>
      <Button Title="flower" Name="accessories" OnChanged={handleButton}/>
      <Button Title="headphone" Name="accessories" OnChanged={handleButton}/>
      <Button Title="none" Name="accessories" OnChanged={handleButton}/>
    </div>
  )
}

export default AccessoriesButtons