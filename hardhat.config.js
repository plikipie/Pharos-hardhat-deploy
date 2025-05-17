require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    pharos: {
      url: "https://testnet.dplabs-internal.com/", // URL from RPC Pharos
      accounts: [process.env.PRIVATE_KEY]  // Input Private Key in .env
    }
  }
};

