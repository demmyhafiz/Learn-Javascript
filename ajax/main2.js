document.getElementById('button1').addEventListener('click', loadUser1); // click behaviour and function loadUser1
document.getElementById('button2').addEventListener('click', loadUser2); // click behaviour and function loadUser2

function loadUser1(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'user1.json', true);
    // Fetch data from the user1.json asynchronously
    xhr.onload = function(){
        if(this.status == 200){
            var user1 = JSON.parse(this.responseText); // use JSON.parse to be able to access the values of the json file
            // select each properties values
            var output = `<ul>
            <li>ID: ${user1.id}</li>
            <li>Name: ${user1.name}</li>
            <li>Email: ${user1.email}</li>
            </ul>`;
            document.getElementById('user1').innerHTML = output;
            //console.log(user.name);
            //console.log(this.responseText)
        }
    }
    xhr.send();
}

function loadUser2(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'user2.json', true);
    // Fetch data from the user1.json asynchronously
    xhr.onload = function(){
        if(this.status == 200){
            var user2 = JSON.parse(this.responseText); // use JSON.parse to be able to access the values of the json file
            // select each properties values
            var output = '';
            for(var i in user2){
              output += `<ul>
            <li>ID: ${user2[i].id}</li>
            <li>Name: ${user2[i].name}</li>
            <li>Email: ${user2[i].email}</li>
            </ul>`;
            }
            document.getElementById('user2').innerHTML = output;
            //console.log(user.name);
            //console.log(this.responseText)
        }
    }
    xhr.send();
}