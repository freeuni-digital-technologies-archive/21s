let posts = new Database('posts')

let previousPosts = posts.getAll()
for (let post of previousPosts) {
	addPost(post)
}
// let post = posts.create({text: 'post1'})
// console.log(post)
// let post2 = posts.create({text: 'post2'})
// console.log(post2)

// let allPosts = posts.getAll()
// console.log(allPosts)


// მარტივი ვერსია ლაიქის გარეშე
function createPostv1() {
	let textElem = document.getElementById('post-text')
	let postsElem = document.getElementById('posts')
	let postElem = '<div>' + textElem.value + '</div>'
	postsElem.insertAdjacentHTML('afterbegin', postElem)
}

// let POSTS_ID = 0

/** 
 * იმისთვის, რომ ლაიქის ღილაკი მუშაობდეს, ლაიქ ფუნქციამ უნდა იცოდეს,
 * რომელ პოსტს დავაჭირეთ. ამ ინფორმაციის "შენახვა" შეგვიძლია
 * ახალი პოსტის ელემენტის შექმნისას
 */
function createPost() {
	let textElem = document.getElementById('new-post-text')
	// ამ სიმბოლოთი დაწყებულ სტრინგებში შეგიძლიათ გამოიყენოთ
	// ჯავასკრიტპის ცვლადები და სტრინგი დაწეროთ რამდენიმე ხაზზე
	let post = posts.create({
		text: textElem.value,
		likes: 0
		// id: POSTS_ID
	})
	// POSTS_ID++
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
	// ფუნქციის გამოძახებისას შეგვიძლია არგუმენტი გამოვიძახოთ
	// ნახეთ როგორ ემატება ეს ხაზი inspect element-ის გამოიყენებით	
	return `<span class="likes-number">${post.likes}</span> likes
			<button onclick="like(${post.id})" class="like-button">like</button>`
}

function like(postId) {
	let postElem = document.getElementById('post' + postId)
	let likesElem = postElem.getElementsByClassName('likes-number')[0]
	let post = posts.getById(postId)
	post.likes++
	posts.update(post)
	likesElem.innerText = post.likes
}
