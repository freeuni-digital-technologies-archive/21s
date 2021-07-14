---
title: 09. ვები
parent: ლექციები
---

## აპლიკაციის შრის პროტოკოლები
- რა მოწყობილობები იყენებენ ინტერნეტს?

## კომპიუტერის პორტები
რა სახის კავშირი შეიძლება იყოს ორ კომპიუტერს შორის?
- ssh
- ftp
- http

# რა არის ვები

[შექმნის მოტივაცია](https://webfoundation.org/about/vision/history-of-the-web/)

## რისგან შედგება
- სერვერები 
- კლიენტები

ერთი და იგივე კომპიუტერზე შეიძლება იყოს რამდენიმე სერვერი და კლიენტი. 

### სერვერი
ნებისმიერი კომპიუტერი, სადაც არის რესურსი
- ფაილი
- მესიჯი/ინფორმაცია
- გენერირებული საიტი
- პროგრამა, რომელიც საიტს აგენერირებს


### კლიენტი
- ბრაუზერი
- აპლიკაცია
- სხვა პროგრამა


## მთავარი კომპონენტები
- HTML
- URI/URL
- HTTP

ქსელი უკვე დიდი ხანია არსებობდა, მაგრამ ყველა ორ კომპიუტერს შორის პროგრამული კავშირი არ იყო იმდენად მარტივი


### HTML
ტექსტის ფორმატირების ენა (არა პროგრამული)
HyperText Markup Language. The markup (formatting) language for the web.
ფაილების ფორმატი (შეეძლოთ ვორდი აერჩიათ)

### HTTP
რესურსების მიმოცვლის პროტოკოლი (TCP/IP-ის ზედა შრე)
თავიდან html ფაილები და მისი შემადგენელი ნაწილები, მაგრამ ახლა ვები უფრო მეტს მოიცავს

Hypertext Transfer Protocol. Allows for the retrieval of linked resources from across the web.


### HTTP სპეციფიკაცია

- request/response
- status codes (404)
- stateless (არაფერი ვიცით წინა კავშირის შესახებ)

### URL/URI - მისამართი
უნიკალური იდენთიფიკატორი

<img src="./img/uri.png">

Uniform Resource Identifier. A kind of “address” that is unique and used to identify to each resource on the web. It is also commonly called a URL.
პორტი: ვირტუალური 'კარები'


### ბრაუზერი

ყველაზე გავრცელებული კლიენტი


#### რა ხდება, როდესაც საიტზე შევდივართ?


#### 1. ბრაუზერი არკვევს, რა მისამართზეა ეს სერვერი
ამისთვის გამოიყენება სპეციალური სერვერები.

სახელი: დომეინი
მისამართი: IP
სახელის მისამართთან დაკავშირება: dns
ერთ სერვერზე რომ ყველა შედიოდეს და უზარმაზარ სიაში უწევდეს პროგრამას ძებნა, არ იქნებოდა მოსახერხებელი. ამიტომ dns ალგორითმი არის განაწილებული

### როგორ ხდება DNS რეზოლუცია

<img src="https://www.cloudflare.com/img/learning/dns/what-is-dns/dns-lookup-diagram.png
">

### DNS ნაწილები

<img src="https://i.ytimg.com/vi/S8G63sJPPj0/maxresdefault.jpg">


#### ვინ ფლობს ამ სერვერებს?
- სახელმწიფო
- ISP
- ნებისმიერი კომპანია ან ორგანიზაცია

[მეტი დეტალი](https://www.quora.com/Who-manages-runs-and-maintains-DNS-servers)

არსებობს "თავისუფალი დნს", შეგიძლია რომელიმე საიტს კომპიუტერის მასშტაბით დაარქვა სახელი.

### დომეინის ყიდვა
- [ვინ ანაწილებს დომეინებს](https://nic.ge/)
- [ვინ აქირავებს საქართველოში](https://www.namespace.ge/)
- [კარგი საიტი საერთაშორისო დომეინებისთვის](https://www.namecheap.com/)

#### DNS არჩევა

DNS პარამეტრების შეცვლა შეიძლება ოპერატიულ სისტემაში, როუტერში ან კონკრეტული კავშირის დროს. 

დნს სერვერის არჩევანს შეიძლება დიდი გავლენა ქონდეს ბრაუზინგზე. მაგალითისთვის ნახეთ [1.1.1.1](https://1.1.1.1/)

> მთლიანი საკითხის [კარგი შეჯამება](https://www.cloudflare.com/learning/dns/what-is-dns/)

### ბრაუზერის სხვა ფუნქციები

### cookies

სპეციალური დოკუმენტი, რომელიც საიტს შეუძლია შეინახოს ბრაუზერის მეხსიერებაში, რომ ამ საიტის სხვა გვერდზე გადასვლისას რაიმე ინფორმაცია დაიმახსოვროს (მაგალითად, რომელი ენა აირჩიე, რა დაამატე საყიდლების სიაში). 
- [უფრო დეტალურად](https://www.youtube.com/watch?v=I01XMRo2ES)
- [როგორ გამოიყენება cookies თვალთვალისთვის](https://privacy.net/stop-cookies-tracking/)

#### GDPR
როგორ იყენებენ ჩვენს პირად ინფორმაციას საიტები, აპლიკაციები, [მაცივრები :)](https://66.media.tumblr.com/32a4e9e7601224f418ddcbe32323b860/tumblr_p9aii5eJXo1rman24o1_1280.jpg)
GDPR არის ევროკავშირის კანონპროექტი საკუთარ მონაცემებზე უფლებების "დასაბრუნებლად". 

### http/https details
რამდენად "ნამდვილია" კავშირი

სკემერები ხშირად სხვა სიმბოლოებს იყენებენ (მაგალითად, რუსული a ეფლის საიტზე), რომ მომხმარებელი მოატყუონ და უსაფრთხოებასთან დაკავშირებული ინფორმაცია შეაყვანინო.

### security/access controls
რომ, მაგალითად, კონკრეტულ საიტს მხოლოდ მის cookies-ზე ქონდეს კონტროლი. ახლა უკვე არეგულირებს ვიდეო კამერის, მიკროფონის ნებართვებს

### კითხვები
მაგალითად: როგორ ხდება autocomplete ძებნისას?

კლავიატურის ყოველ დაჭერაზე გუგლს უგზავნის მოთხოვნას

<section class="non-compulsory" markdown="1">
## მთავარი იდეები


### დეცენტრალიზაცია
No permission is needed from a central authority to post anything on the web, there is no central controlling node, and so no single point of failure … and no “kill switch”! This also implies freedom from indiscriminate censorship and surveillance.


### თანასწორობა - არანაირი დისკრიმინაცია

If I pay to connect to the internet with a certain quality of service, and you pay to connect with that or a greater quality of service, then we can both communicate at the same level. This principle of equity is also known as Net Neutrality.


### საზოგადოებასთან ჩართულობა

Instead of code being written and controlled by a small group of experts, it was developed in full view of everyone, encouraging maximum participation and experimentation.


### უნივერსალურობა / თავისუფლება

For anyone to be able to publish anything on the web, all the computers involved have to speak the same languages to each other, no matter what different hardware people are using; where they live; or what cultural and political beliefs they have. In this way, the web breaks down silos while still allowing diversity to flourish.


### კონსესუსი
For universal standards to work, everyone had to agree to use them. Tim and others achieved this consensus by giving everyone a say in creating the standards, through a transparent, participatory process at W3C.

</section>

## საინტერესო საიტები
- [გააქრე რეკლამები შენი მთლიანი ქსელიდან](https://pi-hole.net/)
- [ერთ-ერთი ყველაზე უსაფრთხო ბრაუზერი](https://brave.com/)