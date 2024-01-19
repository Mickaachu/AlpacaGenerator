import { ears } from "../../../constants"
function Ears({selectEars}) {
  console.log(selectEars)
    const EarsSelector = (selectedEars) => {
        switch(selectedEars) {
            case 'default': return ears.DefaultEars
            case 'tiltBackward': return ears.tiltBackward
            case 'tiltForward': return ears.tiltForward
            default: return ears.DefaultEars
        }
    }
  return (
    <img src={EarsSelector(selectEars)} alt="Ears" className=" h-80 w-64 absolute top-[31px] left-5 " />
  )
}

export default Ears