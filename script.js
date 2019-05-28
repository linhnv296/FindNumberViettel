function FindPhoneNumber(phones) {
    let regexp = /^[0][9][678][0-9]{7}$/;
    let regexp1 = /^[0][3][68][0-9]{7}$/;
    this.phonesVT=[];
    this.phones = phones;
    this.checkviettel = function () {
        for(let i =0; i < this.phones.length; i++){
            if(regexp.test(this.phones[i]) ||regexp1.test(this.phones[i])){
                console.log(this.phones[i]);
                this.phonesVT.push(this.phones[i]);
            }
        }
        alert(this.phonesVT);
    }

}

let phones = ["0987667765", "0911223343","0334434567","9898989998","0384434567"];
let findphon = new FindPhoneNumber(phones);
findphon.checkviettel()