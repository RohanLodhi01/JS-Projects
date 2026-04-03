function generateQR() {
  const text = document.getElementById("userInput").value;
  const qrContainer = document.getElementById("qrContainer");
  qrContainer.innerHTML = "";

  // get the QR size from the user
  let size = getSize();

  // create new QR code intance
  new QRCode(qrContainer, {
    text: text,
    width: size,
    height: size,
    colorDark: "black",
    colorLight: "white",
    correctLevel: QRCode.CorrectLevel.H,
  });
}

// let selectedSize = 0;
function getSize() {
  // const sizeSelect = document.querySelector("#sizes");
  // let selectedSize = parseInt(sizeSelect.value);
  // return selectedSize;

  return parseInt(document.getElementById("sizes").value);
}

function downloadQR() {
  const canvas = document.querySelector("canvas");

  if (canvas) {
    const link = document.createElement("a");
    link.download = "qrcode.png"; //filename
    link.href = canvas.toDataURL("image/png");
    link.click();
  } else {
    alert("Please Generate a QR code first!");
  }
}
