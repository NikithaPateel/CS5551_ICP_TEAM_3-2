/*
let img = new Image()
img.src = "text.png"
img.onload = function(){
    console.log("loaded....","$$$$$");
    Tesseract.recognize(img).progress((progress)=>{
        console.log(progress,"$$$$");
        if(progress.status=== 'recognizing text'){
            $('#progress').text(progress.progress+100+"%");
        }
    }).then((result)=>{
        console.log(result,"$$$$");
        $('#result').text(result.text);

    })
}
*/
