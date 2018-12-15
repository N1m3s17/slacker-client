var user = {
"user": {
 "name": "Kat",
 "image": "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
 "full-name" : "Katherine Vicks",
 "phone" : "416-382-3820",
 "city" : "Toronto, ON",
 "email" : "kat@myemail.com",
 "street" : "34 Leval St, M63 3N2",
 "description" : "Strong user experience (UX) design skills. Experience in user research and interaction design gained through corporate and nonprofit externships. Completed three externships during summer breaks to gain experience in UX design and information architecture. Excels at managing usability testing for XYZ landing pages in preparation for Web site redesign.Very competent in testing parameters, prepared prototypes, recruited users, facilitated tests and reported results."
 }
};

var messages = {
 {
 "user": {
 "name": "Kat",
 "image": "https://images.pexels.com/photos/415829/pexels-photo415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=25"
 },
 "message": {
 "text": "I'm changing the due date on the landing page because I need more time. The designs look great!",
 "date": 1534885670000
 }
}
 {
 "user": {
 "name": "Ron",
 "image": "https://images.pexels.com/photos/1498335/pexels-photo1498335.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=25"
},
 "message": {
 "text": "I'm changing the due date on the landing page because I need more time. The designs look great!",
 "date": 1534485670000
 }
}
 {
 "user": {
 "name": "Benny",
 "image": "https://images.pexels.com/photos/614810/pexels-photo614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=25"
 },
 "message": {
 "text": "It is great to finally see this project complete",
 "date": 1534785670000
 }
}
 {
 "user": {
 "name": "Betty",
 "image": "https://images.pexels.com/photos/1498778/pexels-photo1498778.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=25"
 },
 "message": {
 "text": "Next time I will be able to see things better",
 "date": 1537564070000
 }
}

document.title = user['user']['full-name'];

document.getElementById("profile_pic").src = user['user']['image'];
document.getElementById("name_header").innerHTML = user['user']['full-name'];
document.getElementById("my_name").innerHTML = user['user']['name'];
document.getElementById("location").innerHTML = user['user']['city'];
document.getElementById("main_content").innerHTML = user['user']['description'];
document.getElementById("phone_number").innerHTML = user['user']['phone'];
document.getElementById("home_address").innerHTML = user['user']['street'];
document.getElementById("email_address").innerHTML = user['user']['email'];
