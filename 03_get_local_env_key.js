// 从 私钥字符串 生成账户，配合 .env 配置文件
import { Keypair } from "@solana/web3.js"
import "dotenv/config"
import base58 from 'bs58'
const userKeypair2 =  Keypair.fromSecretKey(base58.decode(process.env.SECRET_KEY))
console.log(userKeypair2)
// 转换为Base58编码
console.log(`The public key is:`,userKeypair2.publicKey.toBase58())
// 处理私钥的打印格式
console.log(`The secret key is:`,base58.encode(userKeypair2.secretKey))

