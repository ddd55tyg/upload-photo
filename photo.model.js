
const{Schema,model}=require('mongoose')

const schema=Schema({
    title:String,
    path:String
})
schema.post('init',function(doc){//mongoose  middlware   pre قبل    post بعد
    doc.path="http://localhost:3000/"+doc.path
})

module.exports=model('photo',schema)