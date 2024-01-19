import { neck } from "../../../constants"
function Neck({selectNeck}) {
    const neckSelector = (selectedNeck) => {
        switch(selectedNeck) {
            case 'bend-backward': return neck.bendBackward
            case 'bend-forward': return neck.bendForward
            case 'default': return neck.defaultNeck
            case 'thick': return neck.thick
            default: return neck.defaultNeck
        }
    }
  return (
    <img src={neckSelector(selectNeck)} alt="neck" className="w-72 absolute top-10 left-0" />
  )
}

export default Neck