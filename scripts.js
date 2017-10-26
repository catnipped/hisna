window.onload = function () {
    var colors = ['#45FF9F', '#BA4ACC', '#E6858A', '#F7C432', '#44989B', '#418201', '#5DC7E1', '#B22D28', '#7BEB00', '#BB6EA7', '#F8A47F'];
    var colors2 = [];
    var index;
    var a = document.getElementsByClassName('randomcolor');
    for (index = 0; index < a.length; ++index) {
        var b = Math.floor(Math.random() * colors.length - 1) + 1;
        console.log(b)
        var color = colors[b];
        colors2.push(color);
        colors.splice(b,0);
        if (colors.length == 0) {
          colors = colors2
          colors2 = []
        };
        a[index].style.color = color;
    };
};

var i = 0;
function switchchannel() {
    var image=document.getElementById("tv");
    if (image != null) {
        var images = ["image1.gif","image2.gif","image3.gif"]
        console.log(image)
        if (++i >= images.length) i = 0;
        image.src=images[i];
    }
}
setInterval(switchchannel, 7000);