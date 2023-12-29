var i=0
function colorchanger(){

    var colors=['red', 'green','blue','purple','orange','voilet']

    document.getElementsByTagName('body')[0].style.backgroundColor=colors[i++]

    if(i >colors.length -1){
        i=0
    }

}