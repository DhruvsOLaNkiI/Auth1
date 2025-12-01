const multer = require( 'multer');
const { v4: uuidv4 } = require("uuid");

const storage = multer.diskStorage({
destination: function (req, file, cb) { cb(null, 'uploads/') 

},// Destination folder for uploads
filename: function (req, file, cb) {
    const uniqueFilename = uuidv4(); // Generating a unique filename using UUID
    cb(null, uniqueFilename); // Use the unique filename for the uploaded file
}
}); 
const upload = multer({ storage: storage });