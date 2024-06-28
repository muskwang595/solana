import { Keypair } from "@solana/web3.js"
import base58 from 'bs58'

// 从 id.json 生成账户
import { readFileSync } from 'fs'
const userKeypair1 = Keypair.fromSecretKey(
    Buffer.from(JSON.parse(readFileSync('./id.json', "utf-8")))
)
console.log(userKeypair1)
// 使用 base58 编码，得到字符串型
console.log(`The public key is:`,userKeypair1.publicKey.toBase58())
// 使用 base58 编码，得到字符串型
console.log(`The secret key is:`,base58.encode(userKeypair1.secretKey))


