---
title: 03. (არასავალდებულო) CS საფუძვლები
parent: ლექციები
---

ამ გვერდზე მოცემული მთლიანი მასალა არის **არასავალდებულო**


- TOC
{:toc}

## შექმნის მოტივაცია
### პრაქტიკული
- გამოთვლების ასწრაფება/ავტომატიზირება
    + სტატისტიკური
    + მათემატიკური გამოთვლები (ინტეგრალები)
    + მათემატიკური In the seventeenth century, Leibniz after having constructed a successful mechanical calculating machine, dreamt of building a machine that could manipulate symbols in order to determine the truth values of mathematical statements. He realized that the first step would have to be a clean formal language

### თეორიული
#### Hilbert entscheidungsproblem
The problem asks for an algorithm that considers, as input, a statement and answers "Yes" or "No" according to whether the statement is universally valid, i.e., valid in every structure satisfying the axioms. 
#### Godel: Incompleteness Theorem 
<https://www.youtube.com/results?search_query=godel+teded>. The first incompleteness theorem states that no consistent system of axioms whose theorems can be listed by an effective procedure (i.e., an algorithm) is capable of proving all truths about the arithmetic of natural numbers. For any such consistent formal system, there will always be statements about natural numbers that are true, but that are unprovable within the system. The second incompleteness theorem, an extension of the first, shows that the system cannot demonstrate its own consistency. Method of assigning numbers (a Gödel numbering) to logical formulas in order to reduce logic to arithmetic. 
#### Church: Effective Calculability
Before the question could be answered, the notion of "algorithm" had to be formally defined. This was done by Alonzo Church in 1935 with the concept of "effective calculability" based on his λ-calculus [computerphile's video](https://www.youtube.com/watch?v=eis11j_iGMs)
#### Turing: halting problem 
is the problem of determining, from a description of an arbitrary computer program and an input, whether the program will finish running, or continue to run forever. Alan Turing proved in 1936 that a general algorithm to solve the halting problem for all possible program-input pairs cannot exist.

## Theory of computation
The first people to consider the concept of a finite-state machine included a team of biologists, psychologists, mathematicians, engineers and some of the first computer scientists. They all shared a common interest: to model the human thought process, whether in the brain or in a computer. Warren

### Finite state automata
- <https://pages.tacc.utexas.edu/~eijkhout/istc/html/graphics/fsa.jpg
>

რაში გვეხმარება ამ მოდელის სწავლა?
- შექმნის მოტივაცია მხოლოდ კომპიუტერული ალგორითმების მოდელირება არ ყოფილა. ადამიანის ქცევის/პროტოკოლების აღწერაც იყო მიზანი. 
- ეს დიაგრამა არის **მძლავრი**, **ეფექტური** და **სიღრმისეული** აღწერა სხვადასხვა პროცესების. 
- ასევე დააკვირდით იმას, რომ ამ მოდელს არ აქვს და არ ჭირდება **მეხსიერება** 


#### მაგალითები:
- არის თუ არა ტექსტში 0-ების ლუწი რაოდენობა
![](https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/DFAexample.svg/320px-DFAexample.svg.png?1618748006718)
- გვხვდება 001 (ან რამე სხვა ქვეტექსტი) ტექსტში
![](https://s3.amazonaws.com/aspirebuzznew/imagepaste/image10-21-2017-10-18-37.png)
- არ გვხვდება 001 (ან რამე სხვა ქვეტექსტი) ტექსტში
![](https://s3.amazonaws.com/aspirebuzznew/imagepaste/image10-21-2017-10-18-56.png)
- იმის განსაზღვრა, ჩააგდო თუ არა საკმარისი მონეტა მომხმარებელმა აპარატში. 
![](http://www.cybernadian.net/fsm2.gif)


- [Business Process Modeling (BPM)](https://www.wikiwand.com/en/Business_process_modeling), მოთხოვნადი და მაღალანაზღაურებადი სპეციალიზაცია. [ერთ-ერთი პროდუქტის მაგალითი](https://camunda.com/products/camunda-platform/bpmn-engine/). ამ გვერდზე ერთ-ერთი პირველი, რასაც გაცნობენ, არის კოდის ინტერფეისის საშუალებით პროდუქტის უფრო მძლავრად გამოყენების შესაძლებლობა და ინდივიდუალურ საჭიროებებზე მორგება.

#### გამოყენების მიმოხილვა
მუშაობის პრინციპის აღსაქმელად საინტერესო და სახალისოა როგორც პრობლემებისთვის დიაგრამის შექმნა, ასევე არსებული დიაგრამით იმის გამოცნობა, თუ რა პრობლემას აგვარებს. 

მოდელის შესაქმნელად უნდა დაფიქრდეთ და ჩამოაყალიბოთ:
- რა შესაძლო მდგომარეობები (states) არსებობს მოცემულობაში
- რა შესაძლო ნაბიჯები/ქმედებები (input) არსებობს თითოეულ მდგომარეობაში

- [computers without memory - computerphile](https://www.youtube.com/watch?v=vhiiia1_hC4)
### turing machine
თუმცა არის შემთხვევები, როდესაც ეს მეხსიერება გვჭირდება.
- ჩომსკის იერარქია

![](https://media.geeksforgeeks.org/wp-content/uploads/20200902204824/turing-300x146.png)

დიაგრამა მეტწილად გავს აუტომატას, განსხვავება ის არის, რომ დამატებით ინფორმაცი არის - რა დაწეროს და რომელი მიმართულებით გადავიდეს ლენტაზე.

![](https://media.geeksforgeeks.org/wp-content/uploads/addition-1.jpg)

მაგალითად, პროგრამირების ენა განისაზღვრება იმით, შეიძლება თუ არა მასში ტურინგის მანქანის მოდელირება. და შედეგად მივიღეთ ძალიან სამწუხარო შედეგებიც:

თუ გადაწყვეტთ გაეცნოთ ტურინგის მანქანებს და სავარჯიშოები გააკეთოთ, შეგიძლიათ ეს [სიმულატორი](https://iarigby.github.io/turing-machine/) გამოიყენოთ 

# ციფრული გამოთვლების საფუძვლები
## ლოგიკური გეითები
[examples](https://www.wikiwand.com/en/Logic_gate)
- ყველა ოპერაცია, რომელსაც ჩვენ ვაკეთებთ, ამ ბლოკებით არის აგებული. მაგალითად, როგორ შექმნიდით მიმატების გეითს?

![](https://instrumentationtools.com/wp-content/uploads/2017/07/instrumentationtools.com_digital-logic-gates-truthtables.png)
აბსტრაქციის მნიშვნელობა: ისტორიის განმავლობაში იცვლებოდა პრინციპი, რომლითაც ხდებოდა ლოგიკური გეითების იმპლემენტაცია. არცერთ ეტაპზე ამას არ გამოუწვევია პროგრამებში ცვლილება - რადგან აბსტრაქციის დონეები მკაცრად გამიჯნულია.

- [what logic gates do - computerphile](https://www.youtube.com/watch?v=UvI-AMAtrvE)

## ტრანზისტორი

დღევანდელ პროცესორებში ასეულობით მილიონიდან რამდენიმე მილიარდამდე ასეთი ტრანზისტორია.


- [crash course early computing](https://www.youtube.com/watch?v=O5nskjZ_GoI&list=PLH2l6uzC4UEW0s7-KewFLBC1D0l6XRfye&index=2)
- პირველი კომპიუტერები: [crash course electronic computing](https://www.youtube.com/watch?v=LN0ucKNX0hc&list=PLH2l6uzC4UEW0s7-KewFLBC1D0l6XRfye&index=3)
- ორობითი ლოგიკა და ლოგიკური გეითები [crash course boolean logic & logic gates](https://www.youtube.com/watch?v=gI-qXk7XojA&list=PLH2l6uzC4UEW0s7-KewFLBC1D0l6XRfye&index=4)
- ალან ტურინგი [crash course computer science #15](https://www.youtube.com/watch?v=7TycxwFmdB0&list=PLH2l6uzC4UEW0s7-KewFLBC1D0l6XRfye&index=16)


- დისკუსია: ტექნიკური კითხვები ფილმიდან Imitation Game
- დისკუსია: კითხვები წიგნიდან Fire In the Valley
- [Turing's enigma problem](https://www.youtube.com/watch?v=d2NWPG2gB_A)
