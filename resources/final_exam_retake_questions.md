---
title: ფინალური გამოცდის გადაბარების კითხვები
parent: რესურსები
---

## ლექციები
### 1. 2 ქულა
ჩამოთვლილთაგან რომელი სტრუქტურა გამოიყენებს კოდის ბლოკებს?

- [ ] ფუნქცია
- [ ] while loop
- [ ] for loop
- [ ] if statement
- [ ] მხოლოდ loop-ები (for, while)
- [ ] loop-ები და if statement
- [ ] არცერთი
- [x] ყველა (loop-ები, if statement და ფუნქცია)

## 2. 1 ქულა
ჩამოთვლილთაგან, რომელ სტრუქტურას შეუძლია კოდის ბლოკის გამეორება 1-ზე მეტჯერ?

- [ ] while loop
- [ ] for loop
- [ ] if statement
- [ ] loop-ები და if statement
- [ ] მხოლოდ if statement
- [ ] ყველა (loop-ები, if statement და ფუნქცია)
- [ ] არცერთი პასუხი არ არის სწორი/რამდენიმე პასუხი არის სწორი
- [x] მხოლოდ loop-ები (for, while)


## 3. 1 ქულა
კომპიუტერის რა ნაწილში ინახება დაინსტალირებული პროგრამის ინსტრუქციები?
- [ ] პროცესორი (cpu)
- [ ] მეხსიერება (RAM)
- [x] დისკი (hdd/ssd)
- [ ] არცერთი პასუხი არ არის სწორი/რამდენიმე პასუხი არის სწორი


## 4. 1 ქულა
რა ტიპის ფაილებისთვის გამოიყენება დაარქივებით კომპრესირება?
- [ ] მხოლოდ ფოტო
- [ ] მხოლოდ ვიდეო
- [ ] მხოლოდ ტექსტური ფაილი
- [ ] მხოლოდ ვიდეო, ტექსტური ფაილი და ფოტო
- [x] ნებისმიერი ფაილისთვის
- [ ] არცერთი პასუხი არ არის სწორი/რამდენიმე პასუხი არის სწორი

## 5. 2 ქულა
რომელი პროტოკოლის გამოყენება არის უკეთესი ვიდეოზარის დროს?
- [x] UDP
- [ ] TCP
- [ ] Wifi
- [ ] IP
- [ ] არცერთი პასუხი არ არის სწორი/რამდენიმე პასუხი არის სწორი

## 6. 1 ქულა
რომელი შრე არის ბმულის/Data link შრის ზემოთ? (ანუ იყენებს მას)
- [ ] აპლიკაცია/Application
- [ ] ფიზიკური/Physical
- [ ] ქსელი/Network
- [x] ტრანსპორტი/Transport
- [ ] არცერთი პასუხი არ არის სწორი

## 7. 2 ქულა
ჩამოთვლილთაგან, რომელია ლოგიკური ოპერატორის მაგალითი?
- [ ] მიმატება/გამოკლების ოპერატორები +, -
- [ ] გამრავლება/გაყოფის ოპერატორები * , /
- [x] შედარების ოპერატორები ===, !==
- [ ] არცერთი პასუხი არ არის სწორი/რამდენიმე პასუხი არის სწორი

## 8. 1 ქულა
რომელი პროგრამის მიზანია გადათარგმნოს ერთი კომპიუტერისთვის დაწერილი მანქანურ კოდს მეორე კომპიუტერისთვის?
- [ ] python
- [ ] assembly
- [ ] java
- [ ] javascript
- [x] არცერთი პასუხი არ არის სწორი/რამდენიმე პასუხი არის სწორი

## 9. 2 ქულა
ქვემოთ ჩამოთვლილთაგან, რომელი ფუნქციისთვის არის საჭირო cookie?
- [ ] ყველა
- [ ] არცერთი
- [x] საიტზე ენის არჩევანის დამახსოვრება
- [ ] dns რეზოლუცია
- [ ] https კავშირისთვის საჭირო გასაღების შენახვა

## 10. 2 ქულა
რომელი პროტოკოლი უზრუნველყოფს ბრაუზერის მიერ სერვერისთვის გაგზავნილ მოთხოვნაში მონაცემების დაშიფვრას?
- [ ] http
- [x] https
- [ ] PPGE
- [ ] dns
- [ ] არცერთი პასუხი არ არის სწორი/რამდენიმე პასუხი არის სწორი

<!-- 16 -->
## სემინარები

### 11. 2 ქულა
კარელი არის სტანდარტულ საწყის პოზიციაზე, მე-2 და მე-3 უჯრებზე არის n და m რაოდენობის ბურთები (სხვაგან არ არის ბურთები). იგულისხმეთ, რომ სამყაროს ზომა 5-ზე მეტია (და კედლები არ არის). რა მოხდება კოდის გაშვების შემდეგ? (შენიშვნა: moveBalls() ფუნქციაში არ არის შეცდომა და ასრულებს იმ მოვალეობას, რომელიც წერია დოკუმენტაციაში)
```js
function start() {
    while(frontIsClear()) {
        moveBalls();
        move();
    }
}
/*
 გადაიტანს ყველა ბურთს ერთი უჯრიდან მეორეზე
 მუშაობას დაასრულებს იმავე პოზიციაზე, რომელზეც 
 ფუნქციის დაწყებისას იყო
*/ 
function moveBalls() {
    //...
}
```

- [ ] კარელი დადებს n+m ბურთს მე-4 უჯრაზე და დაასრულებს მუშაობას 
- [ ] კარელი დადებს n+m ბურთს მე-2 უჯრაზე და დაასრულებს მუშაობას 
- [ ] კარელი დადებს n+m ბურთს მე-3 უჯრაზე და დაასრულებს მუშაობას 
- [ ] კარელი დადებს n+m ბურთს ქუჩის ბოლოს და დაასრულებს მუშაობას 
- [ ] არცერთი პასუხი არ არის სწორი/რამდენიმე პასუხი არის სწორი
- [x] კარელი ვერ დაასრულებს მუშაობას, რადგან მოხდება error


### 12. 1 ქულა
რომელი სტრუქტურა გამოიყენება ცვლადი ზომის სამყაროში ქუჩის ბოლომდე გასვლისთვის?

- [x] while
- [ ] if
- [ ] for
- [ ] ყველა
- [ ] არცერთი პასუხი არ არის სწორი/რამდენიმე პასუხი არის სწორი


### 13. 1 ქულა
კარელი არის სტანდარტულ საწყის პოზიციაზე, სამყაროში არ არის კედლები (საზღვრების გარდა) ან ბურთები. რა მოხდება მოცემული კოდის გაშვების შემდეგ?

```js
function start() {
    while (frontIsClear()) {
        f1();
    }
}

function f1() {
    move();
    turnRight();
}
```

- [ ] კარელი დაეჯახება კედელს ქუჩის ბოლოს
- [x] კარელი დაეჯახება კედელს, მაგრამ არა ქუჩის ბოლოს (ქუჩის ბოლოს გარდა ყველა სხვა კედელი იგულისხმება)
- [ ] კარელი გავა ქუჩის ბოლოს და დაასრულებს მუშაობას
- [ ] კარელი გააკეთებს ერთ წრეს (ზომას არ აქვს მნიშვნელობა) და დაასრულებს მუშაობას
- [ ] კარელი გაიჭედება უსასრულო ციკლში


### 14. 2 ქულა
რას გააკეთებს მოცემული ფუნქცია? კარელი არის კენტი ზომის სამყაროს შუა წერტილში, სამყაროში საზღვრების გარდა კედლები არ არის, countSquares ფუნქციაში არ არის ბაგი.

```js
function goToMiddle() {
    var numberOfSquares = countSquares();
    turnAround();
    for (var i = 0; i < numberOfSquares/2; i++) {
        move();
    }
}

/* დააბრუნებს სამყაროში უჯრების რაოდენობას
კარელი დაასრულებს მუშაობას ქუჩის ბოლოს, აღმოსავლეთ
მიმართულებით */
function countSquares() {
    //...
}
```

- [ ] ფუნქციაში სინტაქსური შეცდომაა
- [ ] კარელი გაიჭედება უსასრულო ციკლში
- [ ] კარელი დაასრულებს მუშაობას სამყაროს შუა უჯრაზე/უჯრასთან
- [ ] კარელი დაეჯახება კედელს
- [x] არცერთი პასუხი არ არის სწორი/რამდენიმე პასუხი არის სწორი


### 15. 2 ქულა
გვაქვს ობიექტი, სია და ორი ფუნქცია. რომელი ჩამოთვლის კონსოლში ობიექტის ყველა ატრიბუტს?

```js
var myObj = {
    key1: 'attr1',
    key2: 'attr2',
    key3: 4
}

function f1() {
    var myList = ['key1', 'key2', 'key3'];
    for (var i = 0; i < myList.length; i++) {
        console.log(myObj[myList[i]])
    }
}

function f2() {
    for (var i = 1; i < 6; i++) {
        console.log(myObj['key' + myList[i]])
    }
}
```

- [ ] f1
- [ ] f2
- [x] ორივე
- [ ] არცერთი
- [ ] არცერთი პასუხი არ არის სწორი/რამდენიმე პასუხი არის სწორი




### 16. 2 ქულა
მოცემულია ფუნქცია და ობიექტები. რა მოხდება ბოლო ხაზის შესრულებისას? (იგულისხმეთ, რომ hasPassed ფუნქცია მუშაობს გამართულად, სემინარზე განხილული პრინციპით)

```js
function chooseSubject(student, subject) {
    var prerequisite = subject.prerequisite
    if (prerequisite) {
        if (hasPassed(student, prerequisite)) {
            console.log(student.name + " can choose " + subject.name)
        } else {
           console.log(student.name + " cannot choose " + subject.name)
       }
    } 
}

var ana = {
    name: "Ana",
    passed_subjects: ["Excel"]
}

var excel = {
    name: "Excel",
    prerequisite: false
}

chooseSubject(ana, excel)
```

- [ ] კონსოლში დაიწერება "Ana can choose Excel"
- [ ] კონსოლში დაიწერება "Ana cannot choose Excel"
- [ ] კონსოლში დაიწერება "Ana can choose excel"
- [ ] კონსოლში დაიწერება "Ana cannot choose excel"
- [x] კონსოლში არაფერი დაიწერება, რადგან ასეთი შემთხვევა if/else-ში არ არის გაწერილი


### 17. 2 ქულა
რა არგუმენტები უნდა ქონდეს getPostElem ფუნქციას გადაცემული იმისთვის, რომ ფუნქციამ ყველა საჭირო მონაცემი წაიკითხოს?

```js
/* arg1, arg2, arg3 მაგივრად უნდა ეწეროს თქვენს მიერ არჩეული არგუმენტები (რაოდენობა აუცილებლად არ ემთხვევა) */
function getPostElem(arg1, arg2, arg3){ 
    let likesElem = `<div class='likes-container'></div>`
    return `
        <div class="post-container" id="post${id}">
            <div class="post-text">
                ${post.text}
            </div>
            ${likesElem}
        </div>
}
```

- [ ] likesElem, post და id
- [ ] text და id
- [ ] post, რომელსაც აქვს ატრიბუტები text და id
- [ ] likesElem და post, რომელსაც აქვს text და id
- [x] არცერთი პასუხი არ არის სწორი/რამდენიმე პასუხი არის სწორი


### 18. 1
რომელ ფუნქციაში არის შეცდომა?

```js
function deletePost(postId) {
    deleteElement('post' + id)
    posts.delete(postId)
}

function deleteElement(id) {
    let elem = document.querySelector('#post' + id)
    elem.parentNode.removeChild(elem)
}
```

- [ ] deletePost
- [ ] deleteElement
- [x] ორივე
- [ ] არცერთი



### 19. 1 ქულა
რომელ პოსტს დაალაიქებს ბოლო ხაზი? იგულისხმეთ, რომ გვერდზე 3-ზე მეტი პოსტია და პოსტების id/ლაიქების span არსებობს. spanს კი აქვს კლასი post_like_count

```js
function likePost(postId) {
    let postElem =  document.getElementById('post' + postId); 
    let likeCount = document.querySelector('span#post_like_count');
    likeCount.innerText = Number(likeCount.innerText) + 1;
}

likePost(2)
```

- [ ] პირველ პოსტს
- [ ] მეორე პოსტს
- [ ] ბოლო პოსტს
- [ ] ფუნქციაში არის სინტაქსური შეცდომა
- [x] არცერთ პოსტს არ დაალაიქებს, ფუნქციის გამოძახებისას არაფერი მოხდება


### 20. 2 ქულა
რომელ ხაზზეა შეცდომა?

```js
function addPostComment(postId) {
    // let postElem არის პირველი ხაზი
    let postElem = document.querySelector('#post' + postId)
    let postComments = document.querySelector('.post-comments-container')
    let commentText = document.querySelector('.post-comment-input').value
    let commentElem = getPostCommentElem(postId, commentText)
    postComments.insertAdjacentHTML('beforeend', commentElem)
}
```

- [ ] 2
- [ ] 3
- [ ] 4
- [ ] არცერთ ხაზზე არ არის შეცდომა
- [x] რამდენიმე ხაზზე არის შეცდომა


