function reqListener(){
	let snippets = this.responseText.split('/// ')
	snippets = snippets.filter(e => e.length > 0).map(e => {
		const elemName = e.split('\n')[0]
		const code = e.substr(e.indexOf('\n')+1).replace(/\n*$/, '')
		const codeElem = document.createElement('pre')
		codeElem.innerHTML=`<code className='language-javascript'>${code}</code>`
		document.getElementById(elemName).appendChild(codeElem)
		hljs.highlightAll();
	})

}

var head  = document.getElementsByTagName('head')[0];
var linkElem  = document.createElement('div');
linkElem.innerHTML = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/styles/default.min.css" integrity="sha512-kZqGbhf9JTB4bVJ0G8HCkqmaPcRgo88F0dneK30yku5Y/dep7CZfCnNml2Je/sY4lBoqoksXz4PtVXS4GHSUzQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
`


const script = document.getElementById('main-script')
const src = script.src
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", src);
oReq.send();


