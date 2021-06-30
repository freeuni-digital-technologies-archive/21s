let POSTS_ID = 0

/** 
 * იმისთვის, რომ ლაიქის ღილაკი მუშაობდეს, ლაიქ ფუნქციამ უნდა იცოდეს,
 * რომელ პოსტს დავაჭირეთ. ამ ინფორმაციის "შენახვა" შეგვიძლია
 * ახალი პოსტის ელემენტის შექმნისას
 */
function createNewPost() {
	let textElem = document.getElementById('new-post-text')
	let postsElem = document.getElementById('posts-container')
	postElem = `
		<div class="post-container" id="post${POSTS_ID}">
			<div class="post-text">
				${textElem.value}
			</div>
			<span class="post-likes-number">0</span> likes
			<button onclick="likePost(${POSTS_ID})" class="post-like-button">like</button>
		</div>
	`
	POSTS_ID++
	postsElem.insertAdjacentHTML('afterbegin', postElem)
}



function likePost(postId) {
	let postElem = document.querySelector('#post' + postId)
	let likesElem = postElem.querySelector('.post-likes-number')
	let currentLikes = Number(likesElem.innerText)
	likesElem.innerText = currentLikes + 1
}
