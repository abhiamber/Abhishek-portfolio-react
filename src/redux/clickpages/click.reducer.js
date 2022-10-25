import { ABOUT_CLICK, CONTACT_CLICK, HOME_CLICK, PROJECT_CLICK, SKILLS_CLICK } from "./click.type"


const initialState={

    about:false,
    home:false,
    skills:false,
    project:false,
    contact:false
}

export const clickrReducer=(state=initialState,{type})=>{

    switch(type){

        case ABOUT_CLICK:{
            return {...state,about:true,home:false,skills:false,project:false,contact:false}
        }

        case HOME_CLICK:{
            return {...state,about:false,home:true,skills:false,project:false,contact:false}
        }

        case PROJECT_CLICK:{
            return {...state,about:false,home:false,skills:false,project:true,contact:false}
        }

        case SKILLS_CLICK:{
            return {...state,about:false,home:false,skills:true,project:false,contact:false}
        }
        case CONTACT_CLICK:{
            return {...state,about:false,home:false,skills:false,project:false,contact:true}
        }
        


        default :{
            return state
        }
    }
}