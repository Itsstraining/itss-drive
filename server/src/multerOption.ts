import { extname } from 'path';
import { existsSync, mkdirSync } from 'fs';
import { diskStorage } from 'multer';
import { v4 as uuid } from 'uuid';
import { HttpException, HttpStatus } from '@nestjs/common';

// Multer configuration
export const multerConfig = {
    dest: process.env.UPLOAD_LOCATION,
};

// Multer upload options
export const multerOptions = {
    storage: diskStorage({
        // File modification details
        destination: "./public/images",
        filename: (req: any, file: any, cb: any) => {
            cb(null, generateFilename(file));
        },
    }),
};

function generateFilename(file) {
    return `${file.originalname}`;
  }