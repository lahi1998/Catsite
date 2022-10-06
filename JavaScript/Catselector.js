const cat1 = document.getElementById("1")
const cat2 = document.getElementById("2")
const cat3 = document.getElementById("3")
const cat4 = document.getElementById("4")
const cat5 = document.getElementById("5")

cat1.addEventListener("click", Cat1)
cat2.addEventListener("click", Cat2)
cat3.addEventListener("click", Cat3)
cat4.addEventListener("click", Cat4)
cat5.addEventListener("click", Cat5)

function Cat1()
{
    document.getElementById("mainCat").src = "images/carrot.jfif";
    document.getElementById("mainText").innerHTML = "Carrot the monster."
    document.getElementById("mainText2").innerHTML = " "
}
function Cat2()
{
    document.getElementById("mainCat").src = "images/Leo.jfif";
    document.getElementById("mainText").innerHTML = "Leo the bastard."
    document.getElementById("mainText2").innerHTML = " "
}
function Cat3()
{
    document.getElementById("mainCat").src = "images/rip, rap, rup.jpg";
    document.getElementById("mainText").innerHTML = "Rip, Rap og rup"
    document.getElementById("mainText2").innerHTML = "Please ikke sagsøg mig."
}
function Cat4()
{
    document.getElementById("mainCat").src = "images/danskeren.jfif";
    document.getElementById("mainText").innerHTML = "Danskeren."
    document.getElementById("mainText2").innerHTML = " "
}
function Cat5()
{
    document.getElementById("mainCat").src = "images/cocaine.jpg";
    document.getElementById("mainText").innerHTML = "Snowball."
    document.getElementById("mainText2").innerHTML = " "
}