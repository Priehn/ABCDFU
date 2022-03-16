const dpi = window.devicePixelRatio;
const cv = document.querySelector('#myCanvas');
console.log(cv);

const style_height = +getComputedStyle(cv).getPropertyValue("height").slice(0, -2);

const style_width = +getComputedStyle(cv).getPropertyValue("width").slice(0, -2);
cv.setAttribute('height', style_height*dpi);
cv.setAttribute('width', style_width*dpi);

console.log("canvas: "+cv.width);
const ciGray = '#dfdfdf', ciBlue = '#18A0FB';
// const bcv = document.createElement('canvas');
// const ratio = 3;
// bcv.width = cv.width*ratio;
// bcv.height = cv.height*ratio;
// console.log("backCanvas Dimensions: "+bcv.width+", "+bcv.height);


// const bctx = bcv.getContext('2d');

cv.width = 1920;
cv.height = 1080;
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
}
drawVideoScreen(ctx,cv.width, cv.height);
//ctx.drawImage(bcv, 0, 0, canvas.width, canvas.height);

function myFunction() {
    let links = document.getElementsByClassName("links");
    //console.log(links); //debug output
    for (let i = 0; i<links.length; i++)
        if (links[i].style.display == "none")
            links[i].style.display = "block";
        else
            links[i].style.display = "none";

};
