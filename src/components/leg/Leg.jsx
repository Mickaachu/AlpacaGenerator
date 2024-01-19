import { leg } from "../../../constants"
function Legs({selectLegs}) {
    const LegsSelector = (selectedLegs) => {
        switch(selectedLegs) {
            case 'default' : return leg.legDefault
            case 'bubbleTea' : return leg.bubbleTea
            case 'cookie' : return leg.cookie
            case 'gameConsole' : return leg.gameConsole
            case 'tiltBackward' : return leg.tiltBackward
            case 'tiltForward' : return leg.tiltForward
            default: return leg.legDefault
        }
    }
  return (
    <img src={LegsSelector(selectLegs)} alt="Legs" className=" h-80 w-64 absolute top-[31px] left-8 z-20" />
  )
}

export default Legs