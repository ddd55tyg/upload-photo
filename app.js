const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb)=> {
    cb(null, 'uploads/')
  },
  filename:(req, file, cb) =>{
    cb(null, Date.now() +  '-' +Math.random() *10+'-' +file.originalname);
  }
})
function fileFilter (req, file, cb) {

if(file.mimetype.startsWith("image")){
    cb(null,true)
}else{
      cb(null,false)

}
}
const upload = multer({ storage,fileFilter })
app.use(upload.single("path"));

app.use(express.static('uploads'))
app.use(express.json());

app.use("/photos", require("./apis/photo.api"));
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

mongoose.connect("mongodb://localhost:27017/photoapp");
