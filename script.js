let index = 0;

function mudarCor(){

    let colors = ["red","blue","green","yellow","orange","pink","puple"]

    document.getElementsByTagName("body")[0].style.background = colors[index++];

    if(index > colors.length - 1){
        index = 0;
    }

}