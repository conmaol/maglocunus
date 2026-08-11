# Base64

`Base64` is a binary-to-text encoding that uses 64 printable characters to represent each 6-bit segment of a sequence of byte values. This enables binary data to be transmitted on a communication channel that only supports text.


From the command line:
```
> echo -n '{"alg":"HS256","typ":"JWT"}' | base64
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
>
> echo -n `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9` | base64 --decode
{"alg":"HS256","typ":"JWT"}'
>
```

Base64URL encoding is an extension of Base64 where:
- `+` is converted to `-`
- `/` is converted to `_`
- `=` is deleted.

So:
```
> echo -n '{"alg":"HS256","typ":"JWT"}' | base64 | tr '+/' '-_' | tr -d '='
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
>
```

cf. [JSON web tokens](../j/JWTs.md)

----

Back up to: [Maglocunus](../index.md)
