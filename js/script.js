$(document).ready(function(){
    width = window.innerWidth
    height = window.innerHeight

    if (width <= 575) {
        for(var i = 4; i < 10; i++)
            {
                document.getElementById('case' + String(i)).style.display = 'none';
                console.log(i)
            }
    }
})