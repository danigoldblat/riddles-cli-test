
import { AllRiddles } from "./riddles/riddle indax.js";
import { get_input_player } from "../utils/createPlayer.js";
import { askRiddle } from "../utils/function.js";
while(true){
    console.log(`Welcome to the game`);
    const obj_player = get_input_player()
    console.log(`hi ${obj_player.name}`)
    const play = askRiddle()
    console.log(play)
    
}