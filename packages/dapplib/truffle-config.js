require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture globe food ski street repeat machine exchange giraffe light army gather'; 
let testAccounts = [
"0xbff9ec7954d295618392ec9d347a68ee3c8b27081a43b4bdcf9459dca225ebf0",
"0xd05eedbbe8fc39d5f7637b85144610bc32e55bc9654c64a2e1f81302504f407e",
"0x73b6b31ea7aa57a5d99eae091288fe2c1fdcac0232ff8c450eecde4f57edd190",
"0xb183e02a814299d4e48d9c0d7f181c1ac2494347d1707430d55e905c3eec4ac1",
"0x9ba723b07b0bf7bbd79a91a7d2f547e299a0cd5be1c7365cfcf5be000354e67f",
"0x9317039117b8db7e043973e891cd58cbc9e982204d8a9b6efd5de0ba62cd33f9",
"0x8dfb3c9b11262ea7f31f4bc3ad5e19d55107e31a49a558549590214ac2da4a9a",
"0x428a51ddbfc25e1168aea1be7e9530563b72fdf600d62847e45f64a68189d5b2",
"0x6f7f8c814506572a94fc81c122829f6d8854ab092655bbfc628d3bc8531a9a64",
"0x89475b55be85071fe5cad71f6b93fb969b963010fa52ba746fd383b6dbba0dad"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
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
            version: '^0.8.0'
        }
    }
};

