require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/imuMWYu598-91KRFyZZFinFslozhBUqf',
      accounts: ['ba6ec5e7ba2ca0ed1996c8f51857b93434ed242f488c084b059fa22f6638db30'],
    },
  },
};