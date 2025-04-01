import crypto from "crypto";

export const getSalt = () => {
    const salt = crypto
    .randomBytes(30)
    .toString("base64url")
    .substring(0,process.env.SALT);
    return salt;
};

export const hashPassword = (text, salt) => {
    const newMsg = salt + text;
    const hashing = crypto.createHash("sha512");
    // md4, md5, sha1, sha224, sha256, sha384, sha 512
    const hash = hashing.update(newMsg).digest("base64url");
    //binary, hex, base64, base64url
    //console.log(salt+hash);
    return hash; 
};