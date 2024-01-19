import Button from "../Button"
import { backgroundImages } from "../../../constants"
function BGButtons({style}) {
  
  const handleButton = (value) => {
    style(value)
    console.log(value)
  }
  
  return (
    <div className="flex flex-wrap gap-2">
      <Button Title="blue-1" Name="background" OnChanged={handleButton} >
        <img src={backgroundImages.blue50} alt="default"  className="w-[20px] h-[20px] rounded-full"/>
      </Button>
      <Button Title="blue-2" Name="background" OnChanged={handleButton} >
        <img src={backgroundImages.blue60} alt="default"  className="w-[20px] h-[20px] rounded-full"/>
      </Button>
      <Button Title="blue-3" Name="background" OnChanged={handleButton} >
        <img src={backgroundImages.blue70} alt="default"  className="w-[20px] h-[20px] rounded-full"/>
      </Button>
      <Button Title="darkblue-1" Name="background" OnChanged={handleButton} >
        <img src={backgroundImages.darkblue30} alt="default"  className="w-[20px] h-[20px] rounded-full"/>
      </Button>
      <Button Title="darkblue-2" Name="background" OnChanged={handleButton} >
        <img src={backgroundImages.darkblue50} alt="default"  className="w-[20px] h-[20px] rounded-full"/>
      </Button>
      <Button Title="darkblue-3" Name="background" OnChanged={handleButton} >
        <img src={backgroundImages.darkblue70} alt="default"  className="w-[20px] h-[20px] rounded-full"/>
      </Button>
      <Button Title="green-1" Name="background" OnChanged={handleButton} >
        <img src={backgroundImages.green50} alt="default"  className="w-[20px] h-[20px] rounded-full"/>
      </Button>
      <Button Title="green-2" Name="background" OnChanged={handleButton} >
        <img src={backgroundImages.green60} alt="default"  className="w-[20px] h-[20px] rounded-full"/>
      </Button>
      <Button Title="green-3" Name="background" OnChanged={handleButton} >
        <img src={backgroundImages.green70} alt="default"  className="w-[20px] h-[20px] rounded-full"/>
      </Button>
      <Button Title="grey-1" Name="background" OnChanged={handleButton} >
        <img src={backgroundImages.grey40} alt="default"  className="w-[20px] h-[20px] rounded-full"/>
      </Button>
      <Button Title="grey-2" Name="background" OnChanged={handleButton} >
        <img src={backgroundImages.grey70} alt="default"  className="w-[20px] h-[20px] rounded-full"/>
      </Button>
      <Button Title="grey-3" Name="background" OnChanged={handleButton} >
        <img src={backgroundImages.grey80} alt="default"  className="w-[20px] h-[20px] rounded-full"/>
      </Button>
      <Button Title="orange-1" Name="background" OnChanged={handleButton} >
        <img src={backgroundImages.red50} alt="default"  className="w-[20px] h-[20px] rounded-full"/>
      </Button>
      <Button Title="orange-2" Name="background" OnChanged={handleButton} >
        <img src={backgroundImages.red60} alt="default"  className="w-[20px] h-[20px] rounded-full"/>
      </Button>
      <Button Title="orange-3" Name="background" OnChanged={handleButton} >
        <img src={backgroundImages.red70} alt="default"  className="w-[20px] h-[20px] rounded-full"/>
      </Button>
      <Button Title="yellow-1" Name="background" OnChanged={handleButton} >
        <img src={backgroundImages.yellow50} alt="default"  className="w-[20px] h-[20px] rounded-full"/>
      </Button>
      <Button Title="yellow-2" Name="background" OnChanged={handleButton} >
        <img src={backgroundImages.yellow60} alt="default"  className="w-[20px] h-[20px] rounded-full"/>
      </Button>
      <Button Title="yellow-3" Name="background" OnChanged={handleButton} >
        <img src={backgroundImages.yellow70} alt="default"  className="w-[20px] h-[20px] rounded-full"/>
      </Button>
     


    </div>
  )
}

export default BGButtons