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

function createPost(post, callback) { // make createPost function with post and callback parameter to passed in
	setTimeout(() => {
		posts.push(post); // get the posts array, then add new/push new one to the end of array (the result of post that has been passed in)
		callback(); // call the callback parameter, so it will add/create FIRST the getPosts function (not WAIT for getPosts show up in 2sec) then push the result of post parameter from createPost result to the posts array WHEN it's been 3sec
	}, 3000); // set the time to wait in 3sec
}

// getPosts();
createPost({ title: 'Post Three', body: 'This is post three' }, getPosts); // instantiate the object/pass in to post parameter, then call the getPost function