const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Dynamic destination based on request path
const storageConfig = multer.diskStorage({
  destination: function (req, file, cb) {
    let folderPath = "public/uploads"; // default fallback

    // ✅ Pehle product check karo, fir store
    if (req.originalUrl.toLowerCase().includes("product")) {
      folderPath = "public/productimages";
    } else if (req.originalUrl.toLowerCase().includes("store")) {
      folderPath = "public/storeimages";
    }

    // ✅ Folder banaye agar exist nahi karta
    fs.mkdirSync(folderPath, { recursive: true });

    cb(null, folderPath);
  },

  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  }
});

// ✅ File filter (sirf image allow)
const fileFilterConfig = function (req, file, cb) {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only images allowed"), false);
  }
};

// ✅ Multer setup
const upload = multer({
  storage: storageConfig,
  limits: {
    fileSize: 1024 * 1024 * 5 // 5 MB
  },
  fileFilter: fileFilterConfig
});

module.exports = upload;
