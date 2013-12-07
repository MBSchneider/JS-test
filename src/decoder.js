  var encoder = {
    setMessage: function(message) {
      this.message = document.getElementById("message").value;
    },
    getPassword: function() {
      this.password = prompt("Input password: ");
    },
    setUrl: function() {
      this.url = document.URL+"?url="+encodeURI(this.encrypt());
    },
    replaceMessageWithUrl: function () {
      //document.getElementById("message").value = this.url;
      return this.url;
    },
    encrypt: function() {
      this.cypher = CryptoJS.AES.encrypt(this.message, this.password);
      //console.log(CryptoJS.AES.decrypt(cypher, this.password).toString(CryptoJS.enc.Utf8));
      return this.cypher;
    },
    protect: function() {
      this.setMessage();
      this.getPassword();
      this.setUrl();
      return this.replaceMessageWithUrl();
    }
  };

/*document.getElementById("encrypt").onclick=function(){
  encoder.protect();
};*/


  // Decrypt a message in the URL
  var decoder = {
    getURL: function() {
      this.encrURL = document.URL.split("?url=")[1];
      if (this.encrURL === undefined){
        document.getElementById("message").value = "No message is present in the html.  Please input an encrypted html to get the message.";
        return;
      }
    },
    getOpenPassword: function(){
      this.openPassword = prompt("Input password to read message: ");
    },

    decodeURL: function() {
      this.decodedURL = decodeURI(this.encrURL);
    },

    convertMessage: function() {
      this.openMessage = CryptoJS.AES.decrypt(this.decodedURL, this.openPassword).toString(CryptoJS.enc.Utf8);
    },

    displayMessage: function() {
      return this.openMessage;
    },

    decrypt: function() {
      this.getURL();
      this.getOpenPassword();
      this.decodeURL();
      this.convertMessage();
      return this.displayMessage();
    }
  };

/*  document.getElementById("decrypt").onclick=function(){
    decoder.decrypt();
  };*/
