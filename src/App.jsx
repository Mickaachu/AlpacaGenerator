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
import ArrayList from "../constants/ArrayList"
import { useState, useRef} from "react"
import * as htmlToImage from 'html-to-image';
import download from "downloadjs";
function App() {
  const alpacaref = useRef(null)

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
  }

  const handleRandomStyle = () => {
    const randomAlpaca = {}
    for(const style in ArrayList) {
      const randomStyle = ArrayList[style][Math.floor(Math.random() * ArrayList[style].length)]
      randomAlpaca[style] = randomStyle
    }
    setAlpaca(randomAlpaca)
    
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

  const handleDownload = () => {
    htmlToImage.toPng(alpacaref.current)
      .then(function (dataUrl) {
        download(dataUrl, 'my-alpaca.png');
    });
  }

  
  return (
    <main className="flex flex-col justify-center items-center text-center lg:text-left">
      <h1 className="font-bold p-4 text-4xl lg:text-5xl text-blue-950">
        Alapaca Generator
      </h1>
      <div className="flex flex-col justify-center items-center gap-5
        lg:flex-row lg:justify-evenly lg:gap-16
      ">
        <div>
          <div ref={alpacaref}>
            <Alpaca alpaca={alpaca} />
          </div>
          <div className="flex gap-4">
            <button onClick={handleRandomStyle} className="bg-blue-500 flex items-center text-white gap-2 rounded-md min-w-40 hover:bg-blue-700">
              <img src="../src/shuffle.png " className="w-4" alt="randomize selection" />
              Randomize
            </button>
            <button onClick={handleDownload} className="bg-blue-500 text-white hover:bg-blue-700 flex items-center gap-2 rounded-md min-w-40">
              <img src="../src/download-file.png " className="w-5" alt="randomize selection" />
              Download
            </button>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-5">
            <h2>Accessorize the Alpaca's</h2>
            <div className="flex flex-wrap max-w-2xl gap-1 justify-center items-center lg:max-w-lg lg:justify-start">
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
