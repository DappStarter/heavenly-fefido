require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half climb frown skull traffic develop remain smile grid enroll bridge gasp'; 
let testAccounts = [
"0x56efb9958b7593213d5e83e51161bf800a057ec0dfd30d1753b8c05980f2c3d0",
"0xbd5601e309f05cd0862963ee6fd186132a5e59ae0d54299f1db982880b5e65c7",
"0x162012fd57cea36be329a17635b43ae4d1e1f7738fd08bd35a4bafe4e9312806",
"0x9df94a6f8b96693610a1beeb854d8a1bd0714fab5f50102d837f965d2b0317f6",
"0x94e6ca8d3779ce1fcf6a6f1a4246256e89b57e1bba36ea9cd17c3dc673f72020",
"0x4e5f2d2f4bed3e650bfe8060dfaf28cd1832f493cbc86fa6f413926bafb62c71",
"0xe67585a4db066dd0e072e95fbd6229e3335012123c76d4b26ce30e966827222e",
"0x5f673ad515a189150ca4b07d24e004c7c6531d8ab11ea0cf1210ee1966899259",
"0x822bcacc617cbbde6986620afc81ae303c8dd7a416a48942490d257d634c1da7",
"0x6dc6e06eae568573b6ac8a3b4640a16ee92a6c2ca7f52e59a4f87fea1f0d3d7c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
