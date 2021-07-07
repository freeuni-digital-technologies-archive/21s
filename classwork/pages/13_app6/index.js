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
			${getPostContent(post)}
			${likesElem}
			${getPostComments(post)}
		</div>
	`
}

function getPostContent(post) {
	return `<div class="post-text">
				${post.text}
			</div>`
}

function getPostComments(post) {
	return `<div class="post-comments-space">
		post comments
		<div class="post-comments-container"></div>
		<textarea class="post-comment-input"></textarea>
		<button class="post-comment-button" onclick="addPostComment(${post.id})">add comment</button>
	</div>`
}

function addPostComment(postId) {
	let postElem = document.querySelector('#post' + postId)
	let postComments = postElem.querySelector('.post-comments-container')
	let commentText = postElem.querySelector('.post-comment-input').value
	let commentElem = getPostCommentElem(postId, commentText)
	postComments.insertAdjacentHTML('beforeend', commentElem)
}

function getPostCommentElem(postId, commentText) {
	return `<div class="post-comment">${commentText}</div>`
}


function getPostLikesElem(post) {
	return `<span class="post-likes-number">${post.likes}</span> likes
			<button onclick="likePost(${post.id})" class="post-like-button">like</button>
			<button onclick="deletePost(${post.id})">delete</button>`
}

function deletePost(postId) {
	// წავშალოთ ელემენტი
	deleteElement('post' + postId)
	// წავშალოთ მონაცემი
	posts.delete(postId)
}

// ყურადღება მიაქციეთ, რომ ეს არის ელემენტის id (ანუ მაგალითად "post13") და არა 
// პოსტის id number (13). ამის გამო ვწერთ querySelectorში პირდაპირ '#' + id
// და არა '#post' + id
function deleteElement(id) {
	let elem = document.querySelector('#' + id)
	elem.parentNode.removeChild(elem)
}

function likePost(postId) {	
	let postElem = document.querySelector('#post' + postId)
	let likesElem = postElem.querySelector('.post-likes-number')
	let post = posts.getById(postId)
	post.likes++
	posts.update(post)
	likesElem.innerText = post.likes
}
