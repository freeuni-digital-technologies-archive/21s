---
title: 12. პროგრამების შექმნის პროცესი (არასავალდებულო)
parent: ლექციები
---

> ეს ლექცია მთლიანად არის არასავალდებულო და არ შევა ფინალურ გამოცდაში


# მნიშვნელოვანი პრინციპები პროგრამირებისგან
## მოდულარობა, კავშირები, გამოყენებადი კომპონენტები


### API
![](https://www.altexsoft.com/media/2019/06/https-lh6-googleusercontent-com-_nyclktg8po_wx5-.png)
ნებისმიერი მოქმედება, რომელიც სერვერთან გჭირდება, არის აქედან რომელიმე კატეგორიის
- get - რესურსის მიღება
- post/put - რესურსის შექმნა/განახლება
- delete - რესურსის წაშლა

- სხვადასხვა პოპულარული სერვისების API [any-api](https://any-api.com/)
- spotify API-ს გამოყენების მაგალითი

### Framework
### Library



## პარალელურობა

## დოკუმენტაცია

## tech debt

## ვერსიების მკაცრად გამოყოფა
პროგრამები არასდროს არიან იზოლირებულად და ერთმანეთთან და ოპერატიულ სისტემასთან ინტერაქციისას ჭირდებათ იმის ცოდნა, რა ფუნქციები აქვთ. ამ ინფორმაციას გაძლევს ვერსიის ნომერი.

### backwards compatibility

## devops cycle
![](https://phoenixnap.com/blog/wp-content/uploads/2020/05/devops-differences.jpg)

### Testing

### CI/CD

### Deployment


# პროცესის მენეჯმენტი
## ნაბიჯები და ტრადიციული მიდგომა

![waterfall model](https://images.ukdissertations.com/118/0518331.001.jpg)

## ასეთი მოდელის უარყოფითი მხარეები

- No working software is produced until late during the life cycle.
- High amounts of risk and uncertainty.
- Not a good model for complex and object-oriented projects.
- Poor model for long and ongoing projects.
- Not suitable for the projects where requirements are at a moderate to high risk of changing. So, risk and uncertainty is high with this process model.
- It is difficult to measure progress within stages.
- Cannot accommodate changing requirements.
- Adjusting scope during the life cycle can end a project.
- Integration is done as a "big-bang. at the very end, which doesn't allow identifying any technological or business bottleneck or challenges early.

დადებითი მხარეებიც აქვს, [უფრო ვრცლად ორივეზე](https://www.tutorialspoint.com/sdlc/sdlc_waterfall_model.htm).


## პროგრესული მოდელები
- კორპორატიული სანამ გახდებოდა
- მცირე გუნდები 
 
თუმცა, ეს არ ნიშნავს, რომ მანამდე პროგრესული იდეები არ არსებობდა. ჯერ კიდევ 60-იანებში, როდესაც unix იქმნებოდა, AT&T-ს პროგრამისტები ხშირად იყენებდნენ ღია ოფისს ახალ იდეებზე სასაუბროდ და სპონტანური დეველოპმენტისთვის. ზოგადად, waterfall მიდგომა ეწინააღმდეგება პროგრამისტების და კომპიუტერული მეცნიერების პრაგმატულობას. 


### Unix გუნდის მუშაობის პრინციპები

> The Unix room was, in some ways, ahead of the curve in providing a large open space with tables where people could work or just hang out. It was often noisy, but it made for very effective communication. Everyone had a private office, but everyone spent some time in the communal space, perhaps just for coffee, or to ask a question about how something worked. And when the system was small and the group was compact, it was also the place to hear about new ideas and new programs. 

[სრული სტატია იუნიქსის ისტორიაზე](https://www.networkworld.com/article/2168942/in-their-own-words--unix-pioneers-remember-the-good-times.html)

## Unix Philosophy
უნივერსალური best practice
1. Make each program do one thing well. To do a new job, build afresh rather than complicate old programs by adding new "features".
2. Expect the output of every program to become the input to another, as yet unknown, program. Don't clutter output with extraneous information. Avoid stringently columnar or binary input formats. Don't insist on interactive input.
3. Design and build software, even operating systems, to be tried early, ideally within weeks. Don't hesitate to throw away the clumsy parts and rebuild them.
4. Use tools in preference to unskilled help to lighten a programming task, even if you have to detour to build the tools and expect to throw some of them out after you've finished using them.

თუმცა, ეს მიდგომა იყო გამონაკლისი და პრაქტიკაში უკვე განხილული waterfall მოდელი გამოიყენებოდა

## Agile

ტერმინის პოპულარიზაცია უკავშირდება 2001 წელს [მანიფესტის](https://agilemanifesto.org/iso/ka/manifesto.html) გამოქვეყნებას, მაგრამ მანამდეც იყო უკვე დაწყებული.

### მთავარი მიზანი

![waterfall და agile შედარება](https://upload.wikimedia.org/wikipedia/commons/c/c7/Waterfall_Vs_Agile_m%2Cmethod.png)


### ალტერნატიული მოდელი

- ჯერ იქმნება ტესტები
- ნებისმიერ დროს უნდა არსებობდეს მუშა პროგრამა
- rubber duck - მეორე ადამიანის მსჯელობაში მარტივად ჩანს ხარვეზი. მეტიც, საკუთარი მსჯელობის ხმამაღლა ლაპარაკშიც კი. (სამსახურში მენტორის გამოცდილება, ამ საგანში კარელის ბაგის მაგალითი) 
![მოდელი](https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Extreme_Programming.svg/640px-Extreme_Programming.svg.png?1591684649299). 


### scrum

მენეჯმენტის ერთ-ერთი მიდგომა.

A key principle of Scrum is the dual recognition that customers will change their minds about what they want or need (often called requirements volatility[11]) and that there will be unpredictable challenges—for which a predictive or planned approach is not suited. 


### scrum roles
- product owner
- development team
- scrum master

### scrum practices
- sprints
- stand ups
- retrospectives

### kanban

The major differences between Scrum and Kanban is that in Scrum work is divided into sprints that last a fixed amount of time, whereas in Kanban the flow of work is continuous.

### სხვა Agile პრაქტიკები
- pair programming
- unit tests, continuous development
- continous integration, reproducible builds


### ხშირად დაშვებული შეცდომები Agile გამოყენებისას

პრაქტიკების და მიდგომების ერთობლიობა და არა რაიმე კონკრეტული და მკაცრი პროცესი.

აუცილებლად გასათვალისწინებელია ინდივიდუალური გუნდის არსებული სპეციფიკა. უნდა მოხდეს მცირე, კომფორტული ცვლილებებით ნავიგაცია და არა დამღლელი და დამაბნეველი დიდი ცვლილებების შექმნა.


ბიუროკრატიული და მოუქნელი გარემო თუ არ შეიცვალა, შეიძლება უარესიც კი იყოს, რადგან წინა პროცესი, რამდენადაც ცუდი არ უნდა ყოფილიყო, მუშაობდა და ხალხი შეჩვეული იყო.

თუ რომელიმე პრაქტიკის დანერგვა უფრო მეტ დროს გართმევთ, ვიდრე გიზოგავთ, გადადეთ მოგვიანებისთვის.

წარმატებას განსაზღვრავს გაუმჯობესებაზე კონცენტრირება და არა კონკრეტულ მიზანზე ფიქსაცია. ასევე სასიცოცხლოდ მნიშვნელოვანია ინდივიდუალური ძალისხმევა და ცვლილებისთვის მზაობა. ამიტომ, დასაწყისში ისეთი ცვლილებების არჩევა სჯობს, რომელსაც მალე ექნება დადებითი შედეგები. ამის დანახვა დაეხმარება გუნდის სკეპტიკურად განწყობილ წევრებს, რომ დამატებითი ძალისხმევა ღირებულია.

თავად თასქების მსგავსად, agile-ის იმპლემენტაცია უნდა იყოს ნაბიჯ-ნაბიჯ და გუნდს ქონდეს სივრცე, ადაპტირდეს ახალ ცვლილებებთან


