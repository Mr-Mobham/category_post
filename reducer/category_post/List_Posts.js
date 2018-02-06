const Global = {
  Arry      : []
}



function List_Posts(state = Global, action) {
  switch (action.type) {
    case "LIST--POSTS":{
      const data       = action.data;
      let _index       = action.index;
      let _trust       = true;
      if (state.Arry != 0) {
        _index+=  1;
        state.Arry.map((content,index)=>{
          if (content.status_post == _index) {
            _trust = false;
          }
        });
        if (_trust) {
          data.map((text,index)=>{
              state = {
                Arry:[...state.Arry, text]
              };
          });
        }

      }
      else {
        data.map((text,index)=>{
         state = {
           Arry:[...state.Arry, text]
         }
       });
      }




      // return{
      //   ...state,
      //   Arry : [
      //     ...state.Arry,Arry
      //   ]
      // }

      break;
    }

  }
  return state;
}


export default List_Posts;
