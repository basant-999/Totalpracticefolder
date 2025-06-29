const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Dynamic destination based on request path
const storageConfig = multer.diskStorage({
  destination: function (req, file, cb) {
    let folderPath = "public/uploads"; // default fallback

    if (req.baseUrl.includes("store")) {
      folderPath = "public/storeimages";
    } else if (req.baseUrl.includes("product")) {
      folderPath = "public/productimages";
    }

    // ✅ create folder if not exists
    fs.mkdirSync(folderPath, { recursive: true });

    cb(null, folderPath);
  },

  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  }
});

// ✅ Corrected fileFilter
const fileFilterConfig = function (req, file, cb) {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true); // allow
  } else {
    cb(new Error("Only images allowed"), false); // reject
  }
};

const upload = multer({
  storage: storageConfig,
  limits: {
    fileSize: 1024 * 1024 * 5 // 5 MB
  },
  fileFilter: fileFilterConfig
});

module.exports = upload;
