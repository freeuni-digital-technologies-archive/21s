---
title: ხანის აკადემიის მასალის შეჯამება
parent: რესურსები
---

## HTML/CSS შესავალი
### შესავალი HTML-ში
- HTML სტრუქტურა, head, body, title
```html
<html>
    <head>
        <title> საიტის სათაური </title>
    </head>
    <body>
    
    </body>
</html>
```
- h1, h2 ... h6 თეგები, h1 ყველაზე დიდი ზომის ტექსტი, h6 ყველაზე პატარა ზომის
```html
<h1> დიდი ზომის ტექსტი </h1>
<h6> პატარა ზომის ტექსტი </h6>
```
- პარაგრაფის თეგი p და ბრეიქი br, პარაგრაფის თეგი ქმნის ახალ პარაგრაფს, ხოლო ბრეიქს კი ჩამოჰყავს ახალ ხაზზე ტექსტი, ბრეიქი არის ერთატრიბუტიანი თეგი რომელსაც ცალკე დახურვის ტეგი არ სჭირდება
```html
<p>
ვარდს გაეფურჩქნა კოკორი, <br> გადაჰხვეოდა იასა
</p>
```

- ტექსტის კორექტორები <em>em</em> - იტალიკი და <strong> strong </strong> - ბოლდი
- ul და ol სიები, ul წერტილებით აკეთებს სიას, ol ნომრებით ქმნის სიას
```html
<ul>
    <li>They're furry!</li>
    <li>Great listeners!</li>
    <li>Eat all your leftover carrots!</li>
</ul>
<ol>
    <li>Bugs bunny</li>
    <li>Thumper</li>
    <li>Easter Bunny</li>
</ol>
```
- სურათის ჩამატება და მისთვის სიმაღლის და სიგანის შეცვლა, src ვწერთ ფოტოს ლინკს, alt-ში კი ვწერთ სურათის ვერ გახსნის შემთხვევაში რა უნდა დაბეჭდოს HTML-მა, width და height კი ვცვლით სიმაღლეს და სიგანეს, მხოლოდ ერთის შეცვლა ავტომატურად შეცვლის მეორეს მაგალითად თუ თავდაპირველი სურათის მონაცემებია სიმაღლე 200, სიგანე 300 და ჩვენ დავუწერთ, რომ სიმაღლე მიანიჭოს 300 სიგანე ავტომატურად გახდება პროპორციულად 450-ის ტოლი, სურათი არის ერთატრიბუტიანი თეგი რომელსაც ცალკე დახურვის ატრიბუტი არ ესაჭიროება
```html
<img src="https://www.kasandbox.org/programming-images/animals/rabbit.png" alt="Rabbit with lop ears in barn" width="203" height="50">
```

### შესავალი CSS-ში
- style თეგი, color და background-color სტილები, color ცვლის ტექსტის ფერს, background-color კი ცვლის უკანა ფონის ფერს
- id და class-ის მინიჭება თეგებითვის და სტაილში ცვლილება მათი საშუალებით შეგვიძლია ელემენტების დაჯგუფება და შემდეგ მათზე შესაბამისი სტილების მინიჭება,style-ში #ს ვწერთ id-ის წინ, .ს ვწერთ კლასის სახელის წინ
- rgb ფერთა გამა დამოკიდებულია რა დოზითაა აღებული ფერში წითელი მწვანე და ლურჯი (rgb: r-red, g-green, b-blue) მაგ: rgb(255, 0, 0) - წითელი
```css
<style>
    p {
        color: rgb(191, 0, 255);
    }    
    #idName {
        background-color: yellow;
    }
    .className {
        color: rgb(191, 0, 255);
    }
</style>
```


### მეტი HTML თეგი
- ტექსტებზე, სურათებზე და სხვადასხვა ატრიბუტებზე <a href="google.com"> ბმულის დადება </a> href-ის შიგნით ვწერთ იმ ლინკს რომელზეც გვინდა გადავიდეთ და შემდეგ გახსნის და დახურვის ატრიბუტებში ვსვავთ რაც გვინდა რომ ამ ლინკის ქვეშ მოექცეს
```html
<a href="google.com">
    <img src="https://www.kasandbox.org/programming-images/animals/rabbit.png" alt="Rabbit with lop ears in barn" width="203" height="50">
</a>
```
- HTML ცხრილების შექმნა დეტალურად დაკომენტარებული ცხრილი ქვევით
- კოდის კომენტირება  `<!-- კომენტარი -->`
```html
<table>
    <thead>
        <tr>
            <!-- სათაურის სახელები -->
            <th>Pet name</th>
            <th>Species</th>
            <th>Color</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <!-- მეორე ხაზი -->
            <td>Black & white</td>
            <td>rabbit</td>
            <td>black and white</td>
        </tr>
        <tr>
            <!-- მესამე ხაზი -->
            <td>Daemon</td>
            <td>cat</td>
            <td>black</td>
        </tr>
        <tr>
            <!-- მეოთხე ხაზი -->
            <td>Angel</td>
            <td>cat</td>
            <td>orange</td>
        </tr>
    </tbody>
</table>
```


### CSS ტექსტის თვისებები
- font-size ტექსტის ზომის ცვლილება პიქსელების (font-size: 16px) და ფარდობითი ზომის მიხედვით (მაგ 1.5em აღნიშნავს ტექსტის ზომაზე 1.5ჯერ დიდს) 
- font-style შესაძლებელია ფონტის სტილის ცვლილება (font-style: italic),
- font-weight შეგვიძლია bold, italic
- line-height ხაზებს შორის დაშორების ცვლილება
- text-alingn ტექსტის მდებარეობის შეცვლა შეგვიძლია ცენტრში, მარცხნივ ან მარჯვნივ (text-alingn: center)
- text-decoration შეგვიძლია ტექსტს დამატებითი დეკორაცია გავუკეთოთ მაგალითად underline უკეთებს ქვევით ხაზს
- CSS სტილების მემკვიდრეობითობა: მაგალითად თუ style-ში დავამატებთ Body-ის სტილებს ის გავრცელდება მასში შემავალ ნებისმიერ ელემენტზე
```css
h2 {
    color: rgb(0, 232, 15);
    font-size: 1.5em;
    font-weight: bold;
    line-height: 1px;
    text-align: center;
    text-decoration: underline
} 
```

### CSS განლაგება
- div - გამოიყენება ელემენტების ერთმანეთთან დასაჯგუფებლად და შემდეგ მათზე სხვადასხვა სტილების გამოსაყენებლად, span ძირითადად გამოიყენება ტექსტების, სურათების და შედარებით მცირე ელემენტრბის დასაჯგუფებლად
- overflow თუ ტექსტი ვერ ეტევა ფანჯარაში მაშინ ჩნდება სქროლი შესაძლებელია მხოლოდ მარჯვენა და ქვედა სქროლის დამატება overflow-y და overflow-x
- z-index-ით შეგვიძლია გადაფარვების კონტროლი, რაც უფრო მეტია z-index მით უფრო წინ ჩანს ატრიბუტი, მაგალითად თუ ორი ან მეტი ელემენტი ფარავს ერთმანეთს და გვინდა რომ რომელიმეს ჰქონდეს გადაფარვის უპირატესობა მაგ შემთხვევაში ვიყენებთ z-index
- margin, border, padding საზღვრები დეტალურად გამოსახულია ფოტოზე
- CSS სტილების გადალაგება, float, margin-left, margin-right...
```css
#hopper-pic {
    width: 100px;
    float: left;
    margin-right: 6px;
    margin-bottom: 6px;          
}
```
![ცხრილის ფოტოები](https://www.rithmschool.com/content/html_css_fundamentals/box-model.png)


### CSS სელექტორები
- კლასის და ელემენტის სელექტორის გაერთიანება მაგალითად ქვემოთ მაგალითზე ყველა პარაგრაფზე და warning კლასზე ბორდერი გახდება 5px 
```css
p .warning {
    border: 5px;
}
```
- დინამიური ფსევდო-კლასები ამ შემთხვევაში რადგან წინ a უწერია ლინკ კლასებს: 
    - link ეხება იმ ლინკს რომელზეც ჯერ არ შესულა მომხმარებელი
    - visited ეხება იმ ლინკს რომელზეც უკვე შესულია მომხმარებელი
    - hover თუ კურსორს ლინკზე გადავატარებთ
    - active ლინკზე გადასვლის მომენთში 
    - focus tab-ით ლინკზე გადასვლისას რა უნდა ქნას
```css
a:link {
    color: red;
}
a:visited {
    color: orange;
}
a:hover { 
    background-color: rgb(255, 214, 255);
}  
a:active {
    background-color: rgb(255, 214, 255);
} 
a:focus {
    background-color: rgb(255, 214, 255);
} 
```
- რას ანიჭებს უპირატესობას CSS სტილის მინიჭებისას, თუ ყველა მათგანი ერთიდაიგივე ტექსტსს უთითებს მაშინ პირველ რიგში ითვალისწინებს id-ის შემდეგ class-ს და შემდეგ როგორც ქვედა მაგალითშია პარაგრაფს, ხოლო თუ მაგალითად ორი ერთი და იგივე დონის ატრიბუტი ცდილობს ტექსტის შეცვლას მაშინ ის გადაიხრება სულ ბოლოს რომელიც ეწერება იმისკენ
```css
p {
    font-family: sans-serif;
    color: orange;
}
.important {
    color: red;
    background-color: yellow;
}
.info-paragraph {
    color: blue;
    background-color: orange;
}
#main-paragraph {
    font-weight: bold;
    color: green;
}
```

### CSS ჩასმის სხვა საშუალებები
- სტილის ჩამატება თეგების შიგნით, ამ შემთხვევაში ცალკე გატანის გარეშე შეგვიძლია სტილის ცვლილება
```css
<h1 style="background: salmon; color: white;">Salmon Mania</h1>
```
- CSS ფაილის მიბმა HTML ფაილზე ზედმეტად რომ არ გადაიტვირთოს css სტილებით HTML ფაილი უმჯობესია ცალკე ფაილად ჰქონდეს მიბმული css
```css
<link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/pamelafox/69f97167ba32e3473cda/raw/336006010d620847f275b0bd25bbf7c665b2e1a1/hopper.css">
```
