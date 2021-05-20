var box = document.getElementById('box')
var c = 0

function n(){
    if(c == 0){
        document.getElementById('box').style.fontWeight = "700"
        c++
    } else {
        document.getElementById('box').style.fontWeight = "400"
        c--
    }
}