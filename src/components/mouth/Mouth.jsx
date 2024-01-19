import { mouth } from "../../../constants"
function Mouth({selectMouth}) {
    const MouthSelector = (selectedMouth) => {
        switch(selectedMouth) {
            case 'default': return mouth.defaultMouth
            case 'astonished' : return mouth.astonished
            case 'eating' : return mouth.eating
            case 'laugh' : return mouth.laugh
            case 'tongue' : return mouth.tongue
            default: return mouth.defaultMouth
        }
    }
  return (
    <img src={MouthSelector(selectMouth)} alt="Mouth" className=" h-80 w-64 absolute top-[31px] left-5 z-20" />
  )
}

export default Mouth