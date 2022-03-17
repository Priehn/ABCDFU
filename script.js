const dpi = window.devicePixelRatio;
const cv = document.querySelector('#myCanvas');
console.log(cv);
const div = document.querySelector('.graphics')
const style_height = window.getComputedStyle(cv).getPropertyValue("height").slice(0, -2);

const style_width = window.getComputedStyle(cv).getPropertyValue("width").slice(0, -2);
cv.setAttribute('height', style_height*dpi);
cv.setAttribute('width', style_width*dpi);

console.log("canvas: "+cv.width);
const ciGray = '#dfdfdf', ciBlue = '#18A0FB';
console.log("cv dimensions: "+cv.width+", "+cv.height);
const ctx = cv.getContext('2d');

function drawVideoScreen(ctx, width, height) {
    ctx.beginPath();
    ctx.rect(0, 0, width, height);
    ctx.fillStyle = ciGray;
    ctx.fill();
    ctx.closePath();
    ctx.moveTo(0, 0);
    ctx.lineTo(width, 0);
    ctx.lineTo(width, height);
    ctx.lineTo(0, height);
    ctx.lineTo(0, 0);
    ctx.lineTo(width, height);
    ctx.moveTo(width, 0);
    ctx.lineTo(0, height);
    ctx.strokeStyle = '#000000';
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(width/2, height/2, height/15,0,  Math.PI*2);
    ctx.fillStyle = ciBlue;
    ctx.fill();
    ctx.fillStyle = '#FFFFFF';
    ctx.moveTo(width/2, height/2);
    ctx.closePath();
}
drawVideoScreen(ctx,cv.width, cv.height);
//ctx.drawImage(bcv, 0, 0, canvas.width, canvas.height);
let links = document.getElementsByClassName("links");

console.log("display: "+links[0].style.display);
function myFunction() {
    let links = document.getElementsByClassName("links");
    console.log(links); //debug output
    for (let i = 0; i<links.length; i++)
        if (links[i].style.display == "block"){
            links[i].style.display = "none";
            console.log("invisible");
        }
        else{
            links[i].style.display = "block";
            console.log("visible");
        }

};
