var account;

document.addEventListener("DOMContentLoaded", function(){
    if(window.ethereum){
        ethereum.request({method:"eth_requestAccounts"}).then((account) =>{
            account = account[0];
            console.log(account)
        })
    }
    else{
        console.log("Please install metamask")
    }

    
})
