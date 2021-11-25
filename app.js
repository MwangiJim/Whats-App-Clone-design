const searchWrapper = document.querySelector('.input-bar');
let inputBox = document.querySelector('input');
let suggestionBox = document.querySelector('.autocom-box');

inputBox.onkeyup =(e)=>{
    let Userdata = e.target.value;

    let emptyArray = [];

    if(Userdata){
        emptyArray = users.filter((data)=>{
           return data.toLocaleLowerCase().startsWith(Userdata.toLocaleLowerCase());
        });
        //console.log(emptyArray);
        emptyArray = emptyArray.map((data)=>{
            return `<li>${data}</li>`;
        });
        console.log(emptyArray);
        suggestionBox.classList.add('active');
        showList(emptyArray);
        let options = document.querySelectorAll('li');
        for(let i=0;i<options.length;i++){
            options[i].setAttribute("onclick","selectedOption(this)");
        }
    }
    else{
        suggestionBox.classList.remove('active');
    }
}
function selectedOption(element){
    let userUption = element.textContent;
    inputBox.value = userUption;
}


function showList(list){
    let ListData;
    if(!list.length){
        userValue = inputBox.value;
        ListData = `<li>${userValue}</li>`;
    }
    else{
        ListData = list.join('');
    }
    suggestionBox.innerHTML = list;
}