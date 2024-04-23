import {createReadStream} from 'fs'

const readStream = createReadStream('test-stream.txt');

readStream.on('data', (data) => {
  console.log('data => ' , data.toString());
})