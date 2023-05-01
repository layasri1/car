const initialData={
    loading:false        //by default it is false
};

export const alertsReducer=(state=initialData, action)=>{

    switch(action.type){
        case 'LOADING':{
            return{
                ...state,                  //whether loading is T or F we can say from actions only
                loading:action.payload       //api request 
            }                                 // after completing api request set loading is false
        }
        default:return state
    }
}