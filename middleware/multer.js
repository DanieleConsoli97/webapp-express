import multer from "multer";
// funzione upload
const storage = multer.diskStorage({
    destination: "public/img/films",  // cartella di destinazione
    filename:(req ,file, cb) =>{
        console.log('Uploading file:', file.originalname);
        const uniquename= `${Date.now()}-${file.originalname}`; // nome univoco
        cb(null,uniquename);
    }
    
})
const upload = multer({storage})
export default upload;