module.exports = {
  directories: {
    test: "./contracts/truffle-tests",
  },
  networks: {
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 7545, // Ganache standard Ethereum port (default: none)
      network_id: "*", // Any network (default: none)
    },
    rinkeby: {
      host: "localhost",
      port: 8545,
      network_id: 4, // specifies rinkeby network
      gas: 10000000,
    },
  },
  contracts_directory: "./src/contracts",
  contracts_build_directory: "./src/abis",
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
