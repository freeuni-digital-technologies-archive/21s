// მარტივი ვერსია
function createPostv1() {
	let textElem = document.getElementById('post-text')
	let postsElem = document.getElementById('posts')
	let postElem = '<div>' + textElem.value + '</div>'
	postsElem.insertAdjacentHTML('afterbegin', postElem)
}

let POSTS_ID = 0

function createNewPost() {
	let textElem = document.getElementById('new-post-text')
	let postsElem = document.getElementById('posts-container')
	// ამ სიმბოლოთი დაწყებულ სტრინგებში შეგიძლიათ გამოიყენოთ
	// ჯავასკრიტპის ცვლადები და სტრინგი დაწეროთ რამდენიმე ხაზზე
	postElem = `
		<div class="post-container" id="post${POSTS_ID}">
			<div class="post-text">
				${textElem.value}
			</div>
		</div>
	`
	// ზემოთ მოცემულ ღილაკზე დაჭერისას ფუნქციის გამოძახებისას შეგვიძლია არგუმენტი გამოვიძახოთ
	// ნახეთ როგორ ემატება ეს ხაზი inspect element-ის გამოიყენებით-->
	POSTS_ID++
	postsElem.insertAdjacentHTML('afterbegin', postElem)
}

