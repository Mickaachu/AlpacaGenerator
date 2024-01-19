import { accessories} from "../../../constants"
function Accessories({selectAccessories}) {
    const AccessoriesSelector = (selectedAccessories) => {
        switch(selectedAccessories) {
            case 'earings': return accessories.earings
            case 'flower': return accessories.flower
            case 'glasses': return accessories.glasses
            case 'headphone': return accessories.headphone
            
        }
    }
  return (
    
    selectAccessories === "none" ? null : <img src={AccessoriesSelector(selectAccessories)} alt="Accessories" className=" h-80 w-64 absolute top-[31px] left-5 z-20" />  
    
  )
}

export default Accessories