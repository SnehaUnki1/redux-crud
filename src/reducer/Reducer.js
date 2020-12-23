import React from 'react';

const userReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_USER":
            let tempState = [...state, action.payload];
            localStorage.setItem("users", JSON.stringify(tempState));
            return tempState;
       
         case "UPDATE_USER":
            let temUpdate = state.map((obj) => {
                const { id, first, last, email, mobile } = action.payload;
                if (obj.id === id) {
                    obj.first = first;
                    obj.last = last;
                    obj.email = email;
                    obj.mobile = mobile;
                }
                return obj;
            });

            localStorage.setItem("users", JSON.stringify(temUpdate));
            return temUpdate;

        case "DELETE_USER":
            let temDel = state.filter((x) => x.id !== action.payload);
            localStorage.setItem("users",JSON.stringify(temDel));
            return temDel;
        default:
            return state;
    }
}

export default userReducer;