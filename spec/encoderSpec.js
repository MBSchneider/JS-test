describe("Encoder", function() {
  it("encodes a string and password to a URL", function() {
    // override the setMessage and getPassword functions because
    // we can't access document.URL directly
    // and we can't ask the user for interaction

    encoder.setMessage   = function() { encoder.message = "Scooter hates babies!"; };
    encoder.getPassword  = function() { encoder.password = "password2"; };
    expect(encoder.protect()).toEqual(document.URL+"?url="+encoder.cypher);
  });
});
