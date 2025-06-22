const express = require("express")
const app = express()
const multer = require("multer")
const path = require("path")

app.use("/uploads",express.static("uploads"))


const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });


app.post('/upload-single', upload.single('photo',5), (req, res) => {
  console.log('Single:', req.file);
  res.send('Single file uploaded: ' + req.file.filename);
});

app.post("/upload-array",upload.array("photos"),(req,res)=>{
    console.log("array",req.files)
      res.send('array file uploaded: ' + req.files.length);
})

app.post('/upload-fields', upload.fields([
  { name: 'avatar', maxCount: 1 },
  { name: 'doc', maxCount: 1 }
]), (req, res) => {
  console.log('Fields:', req.files);
  res.send('Multiple field files uploaded');
});


app.listen(3000,()=>{
    console.log('Server running on http://localhost:3000')
})