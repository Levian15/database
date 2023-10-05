const{request, response}=require('express')
const usersList=(req,res)=>{
    res.json({msg:'Hola usario, llevame con tu lider...'})

}

module.exports={usersList};