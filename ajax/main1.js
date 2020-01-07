// Event listener for button
document.getElementById('button').addEventListener('click', loadText);

function loadText() {
    // Create XHR object
    var xhr = new XMLHttpRequest();
    // Open - type, URL/FIle name, async
    xhr.open('GET', 'sample1.txt', true); // set true so it's gonna be asynchronous
    console.log('READYSTATE: ', xhr.readyState);

    // OPTIONAL - used for loading loaders (loading page symbol)
    xhr.onprogress = function () {
        console.log('READYSTATE: ', xhr.readyState);
    }
    xhr.onload = function () { // onload isn't going to run unless it's READY
        console.log('READYSTATE: ', xhr.readyState);
        if (this.status == 200) { // 200 is OK
            //console.log(this.responseText);
            // add and output it to the <div id="text"> tags
            document.getElementById('text').innerHTML = this.responseText;
        }
        else if(this.status = 404) { // if the file not found
            document.getElementById('text').innerHTML = 'Not Found';
        }
    }

    xhr.onerror = function () {
        console.log('Request error!');
    }
    // xhr.onreadystatechange = function(){
    //     console.log('READYSTATE: ', xhr.readyState);
    //     if(this.readyState == 4 && this.status == 200){
    //         //console.log(this.responseText);
    //     }
    // }

    // Send request
    xhr.send();
}

// readyState values
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is readyState

// HTTP status
// 200: OK
// 403: Forbidden
// 404: Not Found