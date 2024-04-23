import {createReadStream, createWriteStream} from 'fs'
import { createGzip } from 'zlib';

const readImgStream =  createReadStream('deadpool.jpg');
const writeImgCompressionStream = createWriteStream('deadpool.gz');

readImgStream
    .pipe(createGzip({
        //flush = เคลียร์ pipe 
        flush: 0,
    }))
    .pipe(writeImgCompressionStream)
    .on('finish', () => {
        console.log('compressed finished');
        readImgStream.close();
    });

