var qrcode = require("qrcode-ternimal");

qrcode.generate("This will be small QRCode, eh!", {small: true},functioin(qrcode){
  console.log(qrcode);
});
