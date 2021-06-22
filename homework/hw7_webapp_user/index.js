let POSTS_ID_COUNTER = 1;

function createNewPost() {
    let text = document.getElementById("new-post-text").value;
    let postsElem = document.getElementById('posts')
    let postId = POSTS_ID_COUNTER
    POSTS_ID_COUNTER++;
    let postElem = `
  	<div id="post${postId}" class='post-container'>
  		<div class="post-text">${text}</div>
  	</div>`;
    postsElem.insertAdjacentHTML("afterbegin", postElem);
}
