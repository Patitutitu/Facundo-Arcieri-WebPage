function copyToClipBoard() {

    

    navigator.clipboard.writeText("arciericabj97@hotmail.com").then(function() {
        alert("Email was copy successfully!");
      }, function() {
        alert("Email wasn't copy successfully!");
      });
    

   

}
