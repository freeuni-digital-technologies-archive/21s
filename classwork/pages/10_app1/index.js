// მარტივი ვერსია ლაიქის გარეშე
function createPostv1() {
	let textElem = document.getElementById('post-text')
	let postsElem = document.getElementById('posts')
	let postElem = '<div>' + textElem.value + '</div>'
	postsElem.insertAdjacentHTML('afterbegin', postElem)
}

let POSTS_ID = 0

/** 
 * იმისთვის, რომ ლაიქის ღილაკი მუშაობდეს, ლაიქ ფუნქციამ უნდა იცოდეს,
 * რომელ პოსტს დავაჭირეთ. ამ ინფორმაციის "შენახვა" შეგვიძლია
 * ახალი პოსტის ელემენტის შექმნისას
 */
function createPost() {
	let textElem = document.getElementById('post-text')
	let postsElem = document.getElementById('posts')
	// ამ სიმბოლოთი დაწყებულ სტრინგებში შეგიძლიათ გამოიყენოთ
	// ჯავასკრიტპის ცვლადები და სტრინგი დაწეროთ რამდენიმე ხაზზე
	postElem = `
		<div class="post" id="post${POSTS_ID}">
			<div class="post-text">
				${textElem.value}
			</div>
			<span class="likes-number">0</span> likes
			<!--ფუნქციის გამოძახებისას შეგვიძლია არგუმენტი გამოვიძახოთ
			ნახეთ როგორ ემატება ეს ხაზი inspect element-ის გამოიყენებით-->
			<button onclick="like(${POSTS_ID})" class="like-button">like</button>
		</div>
	`
	POSTS_ID++
	postsElem.insertAdjacentHTML('afterbegin', postElem)
}

function like(postId) {
	let postElem = document.getElementById('post' + postId)
	let likesElem = postElem.getElementsByClassName('likes-number')[0]
	let currentLikes = Number(likesElem.innerText)
	likesElem.innerText = currentLikes + 1
}
