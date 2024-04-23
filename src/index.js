import {createWriteStream} from 'fs'

const writeStream = createWriteStream('test-stream.txt');

// writeStream.write('Test-2\r\n');
// writeStream.write('Test-3\r\n');
// writeStream.write('Test-4\r\n');
// writeStream.write('Test-5\r\n');

// let count = 1;

for (let count = 0; count < 10; count++) {
    writeStream.write(`Test-${count}\r\n`);
    console.log(`Test-${count}` , 'has created')
}

// setInterval(() => {
//     writeStream.write(`Test-${count}\r\n`);
//     console.log(`Test-${count}` , 'has created')
//     count++;
// }, 1000);

writeStream.end()
