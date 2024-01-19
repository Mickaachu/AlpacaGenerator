import { hair } from "../../../constants"
function Hair({selectHair}) {
    const hairSelector = (selectedHair) => {
        switch(selectedHair) {
            case 'bangs': return hair.bangs
            case 'curls': return hair.curls
            case 'default': return hair.defaultHair
            case 'elegant': return hair.elegant
            case 'fancy': return hair.fancy
            case 'quiff': return hair.quiff
            case 'short': return hair.short
            default: return hair.defaultHair
        }
    }
  return (
    <img src={hairSelector(selectHair)} alt="hair" className=" h-80 w-64 absolute top-[31px] left-5 z-20" />

  )
}

export default Hair