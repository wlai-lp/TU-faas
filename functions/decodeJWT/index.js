function lambda(input, callback) {
    var jwt = input.payload.jwt;
    console.info("jwt value is " + jwt);
    var tokenDecodablePart = jwt.split(".")[1];
    var jsonPayload = Buffer.from(tokenDecodablePart, "base64").toString();
    var userId = JSON.parse(jsonPayload).userId;
    var result = {};
    //result.result = jsonPayload;
    result.userId = userId;
    console.info("user id is " + userId);
    callback(null, result);
}