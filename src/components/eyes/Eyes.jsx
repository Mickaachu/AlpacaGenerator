import { eyes } from "../../../constants"
function Eyes({selectEyes}) {
    const EyesSelector = (selectedEyes) => {
        switch(selectedEyes) {
            case 'default': return eyes.defaultEyes
            case 'angry': return eyes.angry
            case 'naughty': return eyes.naughty
            case 'panda': return eyes.panda
            case 'smart': return eyes.smart
            case 'star': return eyes.star

            default: return eyes.defaultEyes
        }
    }
  return (
    <img src={EyesSelector(selectEyes)} alt="Eyes" className=" h-80 w-72 absolute top-[31px] left-5 z-20 " />
  )
}

export default Eyes