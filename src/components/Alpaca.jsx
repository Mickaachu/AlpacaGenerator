import Background from "./background/Background"
import Ears from "./ears/Ears"
import Hair from "./hair/Hair"
import Neck from "./neck/Neck"
import Nose from "./Nose"
import Mouth from "./mouth/Mouth"
import Eyes from "./eyes/Eyes"
import Legs from "./leg/Leg"
import Accessories from "./accessories/Accessories"


function Alpaca({alpaca, ref}) {
  
  return (
    <div ref={ref}>
        <Background background={alpaca.Background}>
            <Neck selectNeck={alpaca.Neck}/>
            <Hair selectHair={alpaca.Hair} />
            <Nose />
            <Ears selectEars={alpaca.Ears} />
            <Mouth selectMouth={alpaca.Mouth} />
            <Eyes selectEyes={alpaca.Eyes} />
            <Legs selectLegs={alpaca.Legs} />
            <Accessories selectAccessories={alpaca.Accessories}/>
        </Background>
    </div>
  )
}

export default Alpaca