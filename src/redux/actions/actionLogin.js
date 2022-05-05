import { typeslogin } from "../types/types"


export const logout =()=>{
    return{
        type: typeslogin.logout
    }
}

export const loginSync =(user, pass)=>{
    return{
            type: typeslogin.login,
            payload: { user, pass}
    }
}