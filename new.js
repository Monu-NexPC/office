const appp=() =>{
      var fm = document.createElement("form");
      fm.method='post';
      fm.action='verify';
      fm.id='mcheck';
      document.getElementsByTagName("FORM")[0].append(fm)
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "https://checkout.razorpay.com/v1/checkout.js";
    s.setAttribute('data-key',"rzp_test_AT7nTPD9PEhBSB");
    s.setAttribute('data-amount',"200");
    s.setAttribute('data-currency',"INR");
    s.setAttribute('data-name',"DJ Tiesto");
    s.setAttribute('data-image',"https://s29.postimg.org/r6dj1g85z/daft_punk.jpg");
    s.setAttribute('data-description',"Tron Legacy");
    s.setAttribute('data-prefill.name',"Daft Punk");
    s.setAttribute('data-prefill.email',"customer@merchant.com");
    s.setAttribute('data-prefill.contact',"9999999999");
    s.setAttribute('data-notes.shopping_order_id',"3456");
    s.setAttribute('data-order_id',"order_Jq103DqNjFghaq");
    document.getElementById('mcheck').append(s);
}
