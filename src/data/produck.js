import breadImg from "./Img/Bread/Danish-Coklat-Belepotan.jpg"
import rotiImg from "./Img/Bread/Korean-Garlic-Cream-Cheese.jpeg"
import cakeImg from "./Img/cake/Lemon-Tart-15-X-15-Cm.jpeg"
import donatImg from "./Img/donut/black-jack.jpg"
import pudding from "./Img/pudding/Panna-Cotta-Cendol-Cup.jpeg"

const product = [
    {id:1, name:"Roti Kacang", category:"roti", price:7000, img:breadImg, desc:"", process:true} ,
    {id:1, name:"Korean Garlic Cream Cheese", category:"roti", price:12000, img:rotiImg, desc:"", process:true} ,
    {id:2, name:"Kue Keju", category:"kue", price:20000, img:cakeImg, process:true},
    {id:3, name:"Donat 8 Rasa", category:"donat", price:40000, img:donatImg, process:false},
    {id:4, name:"Es Teh Manis Anget Ga Pake Gula", category:"sideMenu", price:5000, img:pudding, process:false}
]

export default product