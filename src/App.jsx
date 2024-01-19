import { 
  Alpaca,
  AccessoriesButtons, 
  BGButtons, EarsButtons, 
  EyesButtons, 
  HairButtons,
  LegButtons,
  MouthButtons,
  NeckButtons
  } from "./components"
import Button from "./components/Button"

import { useState, useEffect } from "react"

function App() {
  const [styleToEdit, setStyleToEdit] = useState("") 
  
  const [alpaca, setAlpaca] = useState({
    "Accessories" : "none",
    "Ears" : "default",
    "Eyes" : "default",
    "Hair" : "default",
    "Legs" : "default",
    "Mouth" : "default",
    "Neck" : "default",
    "Background" : "default",
  })
 
  const handleStyleToEdit = (value) => {
    setStyleToEdit(value)
    console.log(value)
  }
  const changeStyle = (style) => {
    setAlpaca({...alpaca, [styleToEdit]: style})
    console.log(alpaca)
    
  }


  const showStylesButton = (toEdit) => {
    switch(toEdit) {
      case "Accessories":
        return <AccessoriesButtons style={changeStyle} />
      case "Ears":
        return <EarsButtons  style={changeStyle} />
      case "Eyes":
        return <EyesButtons  style={changeStyle} />
      case "Hair":
        return <HairButtons  style={changeStyle} />
      case "Legs":
        return <LegButtons  style={changeStyle} />
      case "Mouth":
        return <MouthButtons  style={changeStyle} />
      case "Neck":
        return <NeckButtons  style={changeStyle} />
      case "Background":
        return <BGButtons  style={changeStyle} />
    }
  }


  
  return (
    <main>
      <h1 className="font-bold">
        Alapaca Generator
      </h1>
      <div className="flex flex-col">
        <Alpaca alpaca={alpaca} />
        <div>
          <div className="flex flex-col gap-5">
            <h2>Accessorize the Alpaca's</h2>
            <div className="flex flex-wrap max-w-2xl gap-1 ">
              <Button Title="Accessories" Name="ToEdit" OnChanged={handleStyleToEdit}/>
              <Button Title="Ears" Name="ToEdit" OnChanged={handleStyleToEdit}/>
              <Button Title="Eyes" Name="ToEdit" OnChanged={handleStyleToEdit}/>
              <Button Title="Hair" Name="ToEdit" OnChanged={handleStyleToEdit}/>
              <Button Title="Legs" Name="ToEdit" OnChanged={handleStyleToEdit}/>
              <Button Title="Mouth" Name="ToEdit" OnChanged={handleStyleToEdit}/>
              <Button Title="Neck" Name="ToEdit" OnChanged={handleStyleToEdit}/>
              <Button Title="Background" Name="ToEdit" OnChanged={handleStyleToEdit}/>
            </div>
          </div>
          <p>Styles:</p>
            {
              showStylesButton(styleToEdit)
            }
            
          
        
        </div>
      </div>
    </main>
  )
}

export default App
