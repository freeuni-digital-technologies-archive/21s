let POSTS_ID = 0

function createPost() {
	let textElem = document.getElementById('new-post-text')
	let post = {
		text: textElem.value,
		likes: 0
		id: POSTS_ID
	}
	POSTS_ID++
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
			<button onclick="likePost(${post.id})" class="post-like-button">like</button>`
}

function likePost(postId) {
	let postElem = document.querySelector('#post' + postId)
	let likesElem = postElem.querySelector('.post-likes-number')
	let currentLikes = Number(likesElem.innerText)
	likesElem.innerText = currentLikes + 1
}
