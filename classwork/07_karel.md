---
title: 07. ცვლადები და ფუნქციის return (კარელში)
parent: სემინარები
---

- TOC
{:toc}


## ცვლადები
### ახალი ცვლადის შექმნა, შეცვლა და გამოყენება
```js
function moveBalls() {
    move();
    move();
    move();
    var numberOfBalls = 0;
    while (ballsPresent()) {
        takeBall();
        numberOfBalls = numberOfBalls + 1;
        // numberOfBalls++; 
    }
    move();
    for (var i=0; i<numberOfBalls; i++) {
        putBall();
    }
}
```

### რას ნიშნავს 'მნიშვნელობის დაბრუნება'


### ცვლადების ტიპები
- რიცხვი - Number 0, -4, 5.3 და ა.შ
- ბულის მნიშვნელობა - Boolean - შეიძლება იყოს true ან false

### რიცხვითი ოპერატორები
აბრუნებს რიცხვს
- +, -, *, /

- <, ===


### როგორ მუშაობს for loop

```js
function moveBalls() {
    move();
    move();
    move();
    var N = pickBalls();
    move();
    var i = 0;
    while(i < numberOfBalls) {
        putBall();
        i++;
    }
    move();
}
```

## ფუნქციიდან მნიშვნელობის დაბრუნება
რატომ გვჭირდება: 
- კოდის სისუფთავისთვის (ფუნქციის ზომის შემცირება, )
- ერთი გამოთვლის რამდენჯერმე გამოსაყენებლად

ისევე, როგორც ცვლადის სახელის დაწერის დროს რიცხვით ჩანაცვლდება ეს ცვლადი, ფუნქციის გამოძახებისას მის ადგილას დაბრუნდება ის მნიშვნელობა, რაც return-ის შემდეგ წერია


```js
function moveBalls() {
    move();
    move();
    move();
    var N = pickBalls();
    move();
    for (var i=0; i<N; i++) {
        putBall();
    }
}

function pickBalls() {
    var numberOfBalls = 0;
    while (ballsPresent()) {
        takeBall();
        numberOfBalls++;
    }
    return numberOfBalls;
}
```

# მაგალითები კარელში
## 1. შემოწმება, დევს თუ არა ბურთი
ბოლო უჯრაზე დადოს ბურთი, თუ სადმე ბურთი იდო (ბოლო უჯრაზე ვიცით, რომ ბურთი არ დევს)
```js
function checkIfBallExists() {
    var numberOfBalls = countBalls();
    if (numberOfBalls > 0) {
        putBall();
    }
}

/**
გავა ქუჩის ბოლომდე და დააბრუნებს რამდენი უჯრაზე იდო ერთი ბურთი მაინც (ბოლო უჯრის გამოკლებით)
**/
function countBalls() {
    var N = 0;
    while(frontIsClear()) {
        if (ballsPresent()) {
            N++;
        }
        move();
    }
    return N
}
```

უფრო სწორი ვარიანტი
```js
function checkIfBallExists2() {
    var ballExists = false;
    while(frontIsClear()) {
        if (ballsPresent()) {
            ballExists = true;
        }
        move();
    }
    if (ballExists) {
        putBall();
    }
}
```

## 2. სამყაროს შუა წერტილში მისვლა
```js
function goToMiddle() {
    var numberOfSquares = countSquares();
    turnAround();
    for (var i = 0; i < numberOfSquares/2; i++) {
        move();
    }
}

function countSquares() {
    var N = 1; // დააკვირდით, რატომ იწყება თვლა 1-დან
    while(frontIsClear()) {
        move();
        N++;
    }
}
```

სხვა ვარიანტი. მიუხედავად იმისა, რომ მეტი კოდი და მოძრაობაა, ორი უპირატესობა აქვს.

1. ფუნქცია ორ პასუხისმგებლობას არ ასრულებს (ბურთების დათვლასთან ერთად ადგილის, მიმართულების შეცვლა)
2. ფუნქციის გამოყენებას შევძლებთ ნებისმიერ სხვა ამოცანაში (მაგალითად, შემდეგში)

```js
function goToMiddle() {
    var numberOfSquares = countSquares();
    for (var i = 0; i < numberOfSquares/2; i++) {
        move();
    }
}

function countSquares() {
    var N = 1; 
    while(frontIsClear()) {
        move();
        N++;
    }
    turnAround();
    while(frontIsClear()) {
        move();
    }
    turnAround()
}
```

## 3. პირველ უჯრაზე სამყაროს ზომის რაოდენობის ბურთების დადება

```js
function ex3() {
    var numberOfSquares = countSquares(); // მეორე ვერსია
    for (var i = 0; i < numberOfSquares; i++) {
        putBall();
    }
}
```

## 4. მიმატება

```js
function add() {
    move();
    var numberOfBalls = 0;
    while (ballsPresent()) {
        pickBall()
        numberOfBalls++;
    }
    move();
    while (ballsPresent()) {
        pickBall()
        numberOfBalls++;
    }
    for (var i = 0; i < numberOfBalls; i++) {
        putBall();
    }
}
```

უკეთესი ვარიანტი

```js
function add() {
    move();
    var a = pickBalls();
    move();
    var b = pickBalls();
    for (var i = 0; i < a+b; i++) {
        putBall();
    }
}
```



