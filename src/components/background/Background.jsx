import { backgroundImages } from "../../../constants"
function Background({ background, children}) {
    const bgSelector = (bg) => {
        switch(bg) {
          case 'blue-1' : return backgroundImages.blue50
          case 'blue-2' : return backgroundImages.blue60
          case 'blue-3' : return  backgroundImages.blue70
          case 'darkblue-1' : return  backgroundImages.darkblue30
          case 'darkblue-2' : return  backgroundImages.darkblue50
          case 'darkblue-3' : return  backgroundImages.darkblue70
          case 'green-1' : return   backgroundImages.green50
          case 'green-2' : return   backgroundImages.green60
          case 'green-3' : return   backgroundImages.green70
          case 'grey-1' : return  backgroundImages.grey40
          case 'grey-2': return   backgroundImages.grey70
          case 'grey-3' : return  backgroundImages.grey80
          case 'orange-1' : return   backgroundImages.red50
          case 'orange-2' : return   backgroundImages.red60
          case 'orange-3' : return   backgroundImages.red70
          case 'yellow-1' : return  backgroundImages.yellow50
          case 'yellow-2' : return  backgroundImages.yellow60
          case 'yellow-3' : return backgroundImages.yellow70
          default: return backgroundImages.blue50
      }
    }

  return (
    <>
      <div className="relative h-80 w-80 ">
          <div className="relative z-10 w-full h-full">
            {children}
          </div>
          <img src={bgSelector(background)} alt="background" className="absolute top-0 left-0 h-full w-full" />
      </div>
      <br />
      
    </>
  )
}

export default Background