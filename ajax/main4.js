document.getElementById('button').addEventListener('click', getName);
document.getElementById('getForm').addEventListener('submit', getName);
document.getElementById('postForm').addEventListener('submit', postName);

function getName(e){
    e.preventDefault();

    var name = document.getElementById('name1').value;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'proses.php?name='+name, true);

    xhr.onload = function(){
        if(this.status == 200){
           //console.log(this.responseText);
           var user = this.responseText;
           var output = `<li>${user}</li>`;
        }
        document.getElementById('user1').innerHTML = output;
    }
    xhr.send();
}

function postName(e){
    e.preventDefault();

    var name = document.getElementById('name2').value;
    var params = "name="+name;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'proses.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.onload = function(){
        // if(this.status == 200){
        //    //console.log(this.responseText);
        //    var user = this.responseText;
        //    var output = `<li>${user}</li>`;
        // }
        // document.getElementById('user2').innerHTML = output;
        console.log(this.responseText);
    }
    xhr.send(params);
}