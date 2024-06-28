/**
 * 获取rpc网络 需要买；主网很卡
 * https://dev.helius.xyz/rpcs/my
 */
// 依次引入三个库
import { Keypair, Connection, LAMPORTS_PER_SOL,PublicKey } from "@solana/web3.js"
import "dotenv/config"
import base58 from 'bs58'

// 读取 .env 文件中的私钥字符串
const userKeypair =  Keypair.fromSecretKey(base58.decode(process.env.SECRET_KEY))
// console.log(userKeypair)

/**
 * 实盘
 * https://mainnet.helius-rpc.com/?api-key=040e5ad8-6482-4d90-be5b-bbbbdcf262df
 */
// 连接到 Devnet
const devConnection = new Connection('https://devnet.helius-rpc.com/?api-key=9fc1bee2-a8b0-4ed5-93f6-a0dfc850013c')

// 我的地址
const add = userKeypair.publicKey.toBase58()
console.log("add",add)
const userAdd = new PublicKey(add)

// 获取账户余额
const balance = await devConnection.getBalance(userAdd)

// 转化成 SOL 数量
const balanceInSol = balance / LAMPORTS_PER_SOL

console.log(`用户 ${userAdd} -- 余额 ${balanceInSol} SOL`)
