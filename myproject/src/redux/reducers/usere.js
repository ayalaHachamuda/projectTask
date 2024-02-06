import produce from 'immer';
const initialState={
    usersList:[
        
        // {   idNumber: '356547859', firstName: 'דסי', lastName: 'כהן'}, 
       
        // {   idNumber: '325745222', firstName: 'אילה', lastName: 'צדוק'},
        // {   idNumber: '322348422', firstName: 'צביה', lastName: 'לוי' }, 
        // {   idNumber: '32578922', firstName: 'חנה', lastName: 'כהן' },
    ],
    userCount:4
};
export default produce((state,action)=>{
    console.log("usersListaaaaaa", state.usersList)
    console.log("action", action.payLoad)
    switch(action.type){
        case 'ADD_USER':
        { 
            state.usersList.push(action.payLoad)
        state.userCount+=1;
        console.log("usersListkkkkkkkkkkkkkkkkkkkkkk", state.usersList)
        }
        
        break;
    case 'UPDATE_USER':
    {
        const userFound=state.usersList.find(x=>x.id==action.payLoad.id)
        if(userFound!=null){
        userFound.lastName=action.payLoad.lastName;
        
       
    }
    else
    console.log('the user not found!')
    }
    break;
    case 'DELETE_USER':
        state.usersList=state.usersList.filter(usersList => usersList.idNumber !== action.payload)
        console.log("state.usersList",state.usersList)
        console.log('הייתי פההההההה')
        // // const index=state.usersList.findIndex(x=>x.id==action.payLoad.id)
        // if (index>-1) {
        //     //const index = state.usersList.indexOf(userDelete); // Get the index of the object
          
        //     if (index > -1) {
        //         usersList.splice(index, 1); // Remove the object from the array
        //     }
         
        // }
        // else
        //   console.log('the user not found!')



        // console.log("usersList iam in delete", usersList)
        // const index=usersList.findIndex(x=>x.id==action.payLoad)
        // console.log('index',index)
        // // const index=state.usersList.findIndex(x=>x.id==action.payLoad.id)
        // if (index>-1) {
        //     //const index = state.usersList.indexOf(userDelete); // Get the index of the object
          
        //     if (index > -1) {
        //         usersList.splice(index, 1); // Remove the object from the array
        //     }
         
        // }
        // else
        //   console.log('the user not found!')
        case 'GET_USER_LIST':{
            state.usersList=action.payLoad
        }
        break;
            }
   
}, initialState)