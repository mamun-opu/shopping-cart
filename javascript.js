//***************************** price *********************//
var priceP = document.getElementById("phonPrice").innerText;
const phonePrice = parseFloat(priceP);
// console.log(phonePrice,"--------phonePrice")
var priceC = document.getElementById("casePrice").innerText;
const casePrice = parseFloat(priceC);
// console.log(casePrice,"--------casePrice")
//***************************** price *********************//

//*********************decreaseFuction*********************//
function Decrease(NumId,priceId,itemPrice){
    var itemNumber = document.getElementById(NumId).value;
    if (itemNumber > 0) {
       itemNumber--;
       document.getElementById(NumId).value = itemNumber;
    }
    var paymentAmount = itemPrice*itemNumber;
    document.getElementById(priceId).innerText = paymentAmount;
}
//*********************decreaseFuction*********************//

//*********************increaseFuction*********************//
function Increase(NumId,priceId,itemPrice){
    var itemNumber = document.getElementById(NumId).value;
    itemNumber++;
    document.getElementById(NumId).value = itemNumber;

    var paymentAmount = itemPrice*itemNumber;
    document.getElementById(priceId).innerText = paymentAmount;
    
 }
//*********************increaseFuction*********************//

var itemCarts = document.getElementsByClassName("cart-item");
for(let cartIndex = 0; cartIndex < itemCarts.length; cartIndex++){
    var selectedItem = itemCarts[cartIndex];
    // var reduceItem = document.getElementsByClassName("fa-minus");
    // for(let reduceIndex = 0;reduceIndex < reduceItem.length; reduceIndex++){
    //     minusSign = reduceItem[reduceIndex];
    //     minusSign.addEventListener("click",function(event){
    //         console.log("reduce koro mama!");
    //         event.stopPropagation();
    //     })
    // }
    selectedItem.addEventListener('click',function(){
            
        if (document.getElementById("phoneMinus") == event.target) {
            // console.log(phonePrice,"asdhfasdhfkasjdfhasdd")
           Decrease("phoneNumber","phonPrice",phonePrice);
           
        }
        else if(
           document.getElementById("phonePlus") == event.target
        ){
           Increase("phoneNumber","phonPrice",phonePrice);
        }
        else if (document.getElementById("removePhone") == event.target) {
            selectedItem.parentNode.removeChild(this);
        } 
        else if(document.getElementById("caseMinus") == event.target) {
           Decrease("caseNumber","casePrice",casePrice);
        }
        else if(
           document.getElementById("casePlus") == event.target
        ){
           Increase("caseNumber","casePrice",casePrice);
        }  
        else if (document.getElementById("removeCase") == event.target) {
            selectedItem.parentNode.removeChild(this);
        } 
        var PaymentP = document.getElementById("phonPrice").innerText;
        var phonePayment = parseFloat(PaymentP);
        var PaymentC = document.getElementById("casePrice").innerText;
        var casePayment = parseFloat(PaymentC);


        var subTotalPayment = phonePayment+casePayment;
        var TotalPayment = phonePayment+casePayment;

        document.getElementById("subtotal").innerText = subTotalPayment;
        document.getElementById("total").innerText = TotalPayment;


    })
}