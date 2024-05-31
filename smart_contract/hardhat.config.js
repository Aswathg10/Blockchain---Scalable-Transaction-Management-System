require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.24',
  networks: {
    ropsten: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/IlTiim9QRN_SwWJY7tXfzYFtHnyoEsw5',
      accounts: ['926f7056f1e2ac52674d53595c4f017e63a21e596c27470a5ec2f9ee1a5a7e65'],
    },
  },
};


