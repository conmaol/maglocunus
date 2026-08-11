# JSON web tokens

A JSON web woken (JWT) is a compact, self-contained way of representing information that can be securely passed between systems, most commonly used for authentication and authorisation in web applications and APIs.

A JWT is like a tamper-evident identity card – it contains information about a user, and is digitally signed so that the recipient can verify that it has not been altered.

The typical process is as follows:
1. You log into a web application (using your username and password for authentication).
2. The server creates a JWT for your session and sends it back to your browser.
3. Your browser stores the JWT as a cookie.
4. Your browser send the JWT back to the web server as part of each subsequent HTTP request.
5. The server verifies the JWT (using its signature), and either accepts or rejects the HTTP request.

## JWT structure

A JWT consists of three parts separated by dots:
```
{header}.{payload}.{signature}
```
The JWT **header** describes the token, for example:
```
{
  "alg": "HS256",
  "typ": "JWT"
}
```
In other words, this is a JSON web token, and it was signed using the HMAC SHA-256 algorithm.

The JWT **payload** contains a number of ‘claims’, like:
```
{
  "sub": "123456",    // generally the user ID
  "name": "Mark",
  "role": "admin",
  "exp": 1786520000   // expiration date of the token – a Unix timestamp in seconds
}
```

The signature prevents tampering. It is calculated by running a hash function over the header and payload. If someone changes the payload, the signature no longer matches, and the server rejects the token.

Note that JWTs are usually [Base64](../b/Base64.md)URL-encoded during transit. For example:

```
{"alg": "HS256","typ": "JWT"}
```
is encoded as `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9`.





----

Back up to: [Maglocunus](../index.md)
