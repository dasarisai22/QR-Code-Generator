let input = document.getElementById("url")
let btn = document.getElementById("qr_btn")
btn.addEventListener("click",()=>{
    if (!input.value.trim()) {
        alert("Please enter a URL first")
        return
    }
    
    let qrlink = `https://image-charts.com/chart?chs=150x150&cht=qr&chl=${encodeURIComponent(input.value)}`
    let qr_img = document.getElementById("qr_img")
    qr_img.src = qrlink
    
    qr_img.onerror = () => alert("Invalid URL - could not generate QR code")
})