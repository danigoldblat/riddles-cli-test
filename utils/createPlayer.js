import input from 'analiza-sync'
export function create_player(name,time){
    const obj ={
        name: name,
        time:time
   }
   return obj;
}
export function get_input_player(){
    const name= input(`What is your name? : `);
    const time = []
   
    return create_player(name,time)
 }