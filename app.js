const  DLMM = require('@meteora-ag/dlmm').default
const { Connection, PublicKey } = require('@solana/web3.js');
const dotenv = require('dotenv')
dotenv.configDotenv({path:'./.env'})
const USER = new PublicKey(process.env.USER_PUBKEY);
const POOL = new PublicKey(process.env.TARGET_POOL);
const RPC = process.env.RPC;

async function main() {
    const connection = new Connection(RPC)
    const positions = await DLMM.getAllLbPairPositionsByUser(connection, USER, {lbPair:POOL.toBase58()});
    positions.forEach(position => {
        console.log(position);
        console.log(position.lbPairPositionsData);
    })
}
main()