function geraQRcode() {
    let url = document.querySelector('input[name="d"]').value;
    let qrcodeContainer = document.getElementById('qrcode');
    qrcodeContainer.innerHTML = ""; // Limpa qualquer QR Code existente
    new QRCode(qrcodeContainer, url); // Gera um novo QR Code com a URL atual

    if(url.length <= 0) {
        qrcodeContainer.innerHTML = `
        <img src="assets/img/qrcode.png" alt="QR Code exemplo" class="object-cover opacity-[.5]">
        `;
    }
}

document.getElementById('download-qr-btn').addEventListener('click', function() {
    var qrcodeContainer = document.getElementById('qrcode');
    var qrCanvas = qrcodeContainer.querySelector('canvas');
    if (qrCanvas) {
        var dataUrl = qrCanvas.toDataURL('image/png');
        var link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'qrcode.png';
        link.click();
    } else {
        alert('Por favor, gere um QR Code primeiro.');
    }
});