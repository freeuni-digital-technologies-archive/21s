let posts = new Database('posts')

let previousPosts = posts.getAll()
for (let post of previousPosts) {
	addPost(post)
}

function createPost() {
	let textElem = document.getElementById('new-post-text')
	let post = posts.create({
		text: textElem.value,
		likes: 0
	})
	addPost(post)
}

function addPost(post) {
	let postsElem = document.getElementById('posts-container')
	let postElem = getPostElem(post)
	postsElem.insertAdjacentHTML('afterbegin', postElem)
}

function getPostElem(post){ 
	let likesElem = getPostLikesElem(post)
	return `
		<div class="post-container" id="post${post.id}">
			<div class="post-text">
				${post.text}
			</div>
			${likesElem}
		</div>
	`
}

function getPostLikesElem(post) {
	return `<span class="post-likes-number">${post.likes}</span> likes
			<button onclick="like(${post.id})" class="post-like-button">like</button>`
}

function likePost(postId) {
	let postElem = document.querySelector('#post' + postId)
	let likesElem = postElem.querySelector('.post-likes-number')
	let post = posts.getById(postId)
	post.likes++
	posts.update(post)
	likesElem.innerText = post.likes
}
