const Global = {
  Arry      : [],
  Tab_Index : []
}



function Tab_Notification(state = Global, action) {
  switch (action.type) {
    case "Tab_Notification":{
      const data = action.data;
      return{
        ...state,Arry: data
      }
      break;
    }

    case "Tab_Update":{
      const index = action.index;
      for (let i = 0; i < state.Arry.length; i++) {
        let Arry = [];
        Arry = state.Arry[i];
        Arry.selected = false;
      }
      return {
        ...state,
        Arry:[
          ...state.Arry.slice(0,index),
          {...state.Arry[index],selected:true},
          ...state.Arry.slice(index + 1)
        ]
      }

      break;
    }
    case "TAB_INDEX":{
      const data = action.index;
      return{
        ...state,Tab_Index: data
      }
      break;
    }

  }
  return state;
}


export default Tab_Notification;
