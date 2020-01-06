// Asynchronus is when something's going on but don't want to wait until that thing is done to continue the program
// want to continue while it's happening asynchronously
// Synchronus is when something happens and it wait until it's completely finished, then do next program

const posts = [
	{	title: 'Post one', // first object in array
		body: 'This is post one'
	},
	{	title: 'Post two',
		body: 'This is post two' 
	}
];

function getPosts() { // make getPosts function
	setTimeout(() => { // make setTimeout function (it means how much time it need to show/outpu the result
		let output = ''; // make placeholder for the result
		posts.forEach((post) => { // loops through the post array aka object inside
			output += `<li>${post.title}</li>`; // then add each of them to output variable
		});
		document.body.innerHTML = output; // then append/add the output result to the body html
	}, 2000); // wait for 2sec to show up
}
// PROMISES
function createPost(post, callback) { // make createPost function with post and callback parameter to passed in
	return new Promise((resolve, reject) => {
	setTimeout(() => {
		posts.push(post); // get the posts array, then add new/push new one to the end of array (the result of post that has been passed in)
		const error = false;
		if (!error) { // if it is TRUE
			resolve();
		} else { // if it is FALSE
			reject('Error: Something went wrong');
		}
	}, 2000);
});
}

//createPost({ title: 'Post three', body: 'This is post three' })
//.then(getPosts) // after the createPost has been added to the posts array, call the getPosts function
//.catch(err => console.log(err)); // but IF there's an ERROR, output it to the console
/*
// Promise All
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Goodbye')
);
const promise4 = fetch ('https://jsonplaceholder.typicode.com/users').then(res => res.json());

Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values)); // get and add all the promise variable at a time within 2 sec
*/

// THIS IS BETTER WAY TO PROMISE Asynchronus with await

async function initFetchUsers() {
	await createPost({ title: 'Post three', body: 'This is post three' });
	getPosts(); // it works same as before when it use callback function. promise.all, .then, .catch
	//const res = await fetch ('https://jsonplaceholder.typicode.com/users');
	//const data = await res.json();
	//console.log(data);
}
	initFetchUsers();
