const  DLMM = require('@meteora-ag/dlmm').default
const { Connection, PublicKey } = require('@solana/web3.js');
const dotenv = require('dotenv')
dotenv.configDotenv({path:'./.env'})
const USER = new PublicKey(process.env.USER_PUBKEY);
const POOL = new PublicKey(process.env.TARGET_POOL)

async function main() {
    const connection = new Connection(process.env.RPC) // You can get your desired pool address from the API https://dlmm-api.meteora.ag/pair/all
    const positions = await DLMM.getAllLbPairPositionsByUser(connection, USER, {lbPair:POOL.toBase58()});
    positions.forEach(position => {
        console.log(position);
        console.log(position.lbPairPositionsData);
    })
}
main()

async function rebalance () {
    // withdraw

    // swap half on jup

    // create new position

}