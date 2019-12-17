/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */

function billingFunction(){
	var name=document.getElementById('shippingName');
	var code=document.getElementById('shippingZip');
	 if(document.getElementById('same').checked){
	  billingName.value=name.value;
	  billingZip.value=code.value;	
	 }

	 else
	 {
	 	billingName.value='';
	 	billingZip.value='';
	 }
}