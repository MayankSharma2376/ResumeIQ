import multer from "multer";
import path from "path";
import fs from "fs";

const uploadPath = "src/uploads/resumes";

if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
}

const storage = multer.diskStorage({

    destination(req, file, cb) {
        cb(null, uploadPath);
    },

    filename(req, file, cb) {

        const unique =
            Date.now() +
            "-" +
            Math.round(Math.random() * 1e9);

        cb(
            null,
            unique +
                path.extname(file.originalname)
        );
    }
});

export default multer({
    storage,
    limits: {
        fileSize: 5 * 1024 * 1024
    },
    fileFilter(req, file, cb) {

        if (
            file.mimetype === "application/pdf"
        ) {
            cb(null, true);
        } else {
            cb(
                new Error("Only PDF files allowed")
            );
        }
    }
});