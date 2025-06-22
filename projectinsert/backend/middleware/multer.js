const multer = require("multer")
const path = require("path")

const storageConfig = multer.diskStorage({
  // destination is uploads folder under the project directory
  destination: path.join(__dirname, "pictures"),
  filename: (req, file, cb) => {
    // file name is prepended with current time in milliseconds to handle duplicate file names
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// file filter for filtering only images
const fileFilterConfig = function(req, file, cb) {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png/jpg/jpeg") {
    // calling callback with true as mimetype of file is image
    cb(null, true);
  } else {
    // false to indicate not to store the file
    cb(null, false);
  }
};

// creating multer object for storing with configuration
const upload = multer({
  // applying storage and file filter
  storage: storageConfig,
  limits: {
    // limits file size to 5 MB
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilterConfig,
});

module.exports = upload;





