import convert from "convert";

const dias = 5;
const gigabytes = 2;

const minutos = convert(dias, "days").to("minutes");
const bytes = convert(gigabytes, "gigabytes").to("bytes");

console.log(`${dias} dias equivalem a ${minutos} minutos.`);
console.log(`${gigabytes} GB equivalem a ${bytes} bytes.`);
