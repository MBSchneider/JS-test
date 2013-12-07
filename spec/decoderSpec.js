describe("Decoder", function() {
  it("decodes an encrypted string from the URL", function() {
    // override the getCypherText and getPassword functions because
    // we can't access document.URL directly
    // and we can't ask the user for interaction

    decoder.getURL = function() { decoder.encrURL = CryptoJS.AES.encrypt("a test string","password"); };
    decoder.getOpenPassword   = function() { decoder.openPassword = "password"; };
    expect(decoder.decrypt()).toEqual("a test string");
  });
});
