export default {
  port: 1337,
  origin: "http://localhost:3000",
  dbUri: "mongodb://localhost:27017/rest-api-tutorial",
  saltWorkFactor: 10,
  accessTokenTtl: "15m",
  refreshTokenTtl: "1y",
  publicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCXzZerpx9qdaelwt1U7NCpWXQK
km1OW4ohDF/7g01xDtYf8Nox9wzhhVQrFD+G4eaJoWxIhJYQTgT4ijMlpjXs07Mc
wktcMX49h6Eoo6ZddOMl380UpivkaO+h80miG4JCFAM0G0pUoeNT8h6L9zHqr/yE
oBRd3RAsqxeCKwKrswIDAQAB
-----END PUBLIC KEY-----`,
  privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIICXAIBAAKBgQCXzZerpx9qdaelwt1U7NCpWXQKkm1OW4ohDF/7g01xDtYf8Nox
9wzhhVQrFD+G4eaJoWxIhJYQTgT4ijMlpjXs07McwktcMX49h6Eoo6ZddOMl380U
pivkaO+h80miG4JCFAM0G0pUoeNT8h6L9zHqr/yEoBRd3RAsqxeCKwKrswIDAQAB
AoGASdYpcMewQzMJIVpgF7+8WrL0+3NvkU57KEoBoa+jClviENUw/F6jOEqGvxFx
OOVGIimPJtK+vx2D03Q9HpHy5gfG3Q0hXq8RABfzOkgKOQJYEb/CtkadRo9sqPpw
PtXaFrwYNPevqzUydk5Y4imQN0yycmKPirgWP2GGZj8nAxECQQDMmWI6BkE+8p0H
PszrkpDlAo3p/4oMW4XgoxBbIuHMuzYZi6d6FUvcOjGI88ktTBSMIhwjF5K/lIBU
RXcKjzKJAkEAvfCtHN6oLs22MXp1AZBTSIfLp/8C4nLfW6VMboR+Sw9R5MatTuTI
W4seeBxn1/DU88IhU579maYMX8TFMITNWwJATAPMz9wVD6saFmAJyJhKxxsc2Mx9
YLv8UIqlAAdEt0jy/6i4T45sAeWJE+XnX7H9jFb79znB5vXoe+bXJJAxaQJBAK9P
WeigleiFFBl85kvoMwZp2A4Z8EakMgX7fp0vCwYqgLLAsat0vHzJ3fiMd0g3T8Yg
svPkdjt/qEIocryChqsCQGnInFDk9fC5C8G1Ez2N/p0WztoPDNKfYVDGZ8IRMjEy
rPeH03CIhIoh6QPPg02GKC3VumQxgwOe2wkQ2OgHYLE=
-----END RSA PRIVATE KEY-----`,

  googleClientId:
    "1043635653594-imqh535ph89husfqbbbct122f2i53h37.apps.googleusercontent.com",
  googleClientSecret: 
    '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',
  googleOAuthRedirectUrl: 'http://localhost:1337/api/sessions/oauth/google',
}
