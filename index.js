const Web3 = require('web3')
const rpcURL = 'https://celo-mainnet.infura.io/v3/002d525e2a0f405dbcc3de0c03b7ad30' // Your RCP URL goes here
const web3 = new Web3(rpcURL)
const address = '0xd26114cd6EE289AccF82350c8d8487fedB8A0C07';
web3.eth.getBalance('TCvPkHT5vpPnTsTdkz3gdDdqPDyrijEWmG', (err, wei) => {
  // 余额单位从wei转换为ether
  balance = web3.utils.fromWei(wei, 'ether')
  console.log("balance: " + balance)
})
// const abi = { "entrys": [{ "inputs": [{ "name": "_owner", "type": "address" }, { "name": "_coins", "type": "address[3]" }, { "name": "_pool_token", "type": "address" }, { "name": "_A", "type": "uint256" }, { "name": "_fee", "type": "uint256" }, { "name": "_admin_fee", "type": "uint256" }, { "name": "_fee_converter", "type": "address" }], "stateMutability": "Nonpayable", "type": "Constructor" }, { "inputs": [{ "indexed": true, "name": "provider", "type": "address" }, { "name": "token_amounts", "type": "uint256[3]" }, { "name": "fees", "type": "uint256[3]" }, { "name": "invariant", "type": "uint256" }, { "name": "token_supply", "type": "uint256" }], "name": "AddLiquidity", "type": "Event" }, { "inputs": [{ "indexed": true, "name": "deadline", "type": "uint256" }, { "indexed": true, "name": "admin", "type": "address" }], "name": "CommitNewAdmin", "type": "Event" }, { "inputs": [{ "indexed": true, "name": "deadline", "type": "uint256" }, { "name": "fee", "type": "uint256" }, { "name": "admin_fee", "type": "uint256" }], "name": "CommitNewFee", "type": "Event" }, { "inputs": [{ "indexed": true, "name": "admin", "type": "address" }], "name": "NewAdmin", "type": "Event" }, { "inputs": [{ "name": "fee", "type": "uint256" }, { "name": "admin_fee", "type": "uint256" }], "name": "NewFee", "type": "Event" }, { "inputs": [{ "indexed": true, "name": "fee_converter", "type": "address" }], "name": "NewFeeConverter", "type": "Event" }, { "inputs": [{ "name": "old_A", "type": "uint256" }, { "name": "new_A", "type": "uint256" }, { "name": "initial_time", "type": "uint256" }, { "name": "future_time", "type": "uint256" }], "name": "RampA", "type": "Event" }, { "inputs": [{ "indexed": true, "name": "provider", "type": "address" }, { "name": "token_amounts", "type": "uint256[3]" }, { "name": "fees", "type": "uint256[3]" }, { "name": "token_supply", "type": "uint256" }], "name": "RemoveLiquidity", "type": "Event" }, { "inputs": [{ "indexed": true, "name": "provider", "type": "address" }, { "name": "token_amounts", "type": "uint256[3]" }, { "name": "fees", "type": "uint256[3]" }, { "name": "invariant", "type": "uint256" }, { "name": "token_supply", "type": "uint256" }], "name": "RemoveLiquidityImbalance", "type": "Event" }, { "inputs": [{ "indexed": true, "name": "provider", "type": "address" }, { "name": "token_amount", "type": "uint256" }, { "name": "coin_amount", "type": "uint256" }], "name": "RemoveLiquidityOne", "type": "Event" }, { "inputs": [{ "name": "A", "type": "uint256" }, { "name": "t", "type": "uint256" }], "name": "StopRampA", "type": "Event" }, { "inputs": [{ "indexed": true, "name": "buyer", "type": "address" }, { "name": "sold_id", "type": "int128" }, { "name": "tokens_sold", "type": "uint256" }, { "name": "bought_id", "type": "int128" }, { "name": "tokens_bought", "type": "uint256" }], "name": "TokenExchange", "type": "Event" }, { "payable": true, "stateMutability": "Payable", "type": "Fallback" }, { "outputs": [{ "type": "uint256" }], "constant": true, "name": "A", "stateMutability": "view", "type": "function" }, { "inputs": [{ "name": "amounts", "type": "uint256[3]" }, { "name": "min_mint_amount", "type": "uint256" }], "name": "add_liquidity", "stateMutability": "Nonpayable", "type": "Function" }, { "outputs": [{ "type": "uint256" }], "constant": true, "name": "admin_actions_deadline", "stateMutability": "view", "type": "function" }, { "outputs": [{ "type": "uint256" }], "constant": true, "inputs": [{ "name": "i", "type": "uint256" }], "name": "admin_balances", "stateMutability": "view", "type": "function" }, { "outputs": [{ "type": "uint256" }], "constant": true, "name": "admin_fee", "stateMutability": "view", "type": "function" }, { "name": "apply_new_fee", "stateMutability": "Nonpayable", "type": "Function" }, { "name": "apply_transfer_ownership", "stateMutability": "Nonpayable", "type": "Function" }, { "outputs": [{ "type": "uint256" }], "constant": true, "inputs": [{ "type": "uint256" }], "name": "balances", "stateMutability": "view", "type": "function" }, { "outputs": [{ "type": "uint256" }], "constant": true, "inputs": [{ "name": "amounts", "type": "uint256[3]" }, { "name": "deposit", "type": "bool" }], "name": "calc_token_amount", "stateMutability": "view", "type": "function" }, { "outputs": [{ "type": "uint256" }], "constant": true, "inputs": [{ "name": "_token_amount", "type": "uint256" }, { "name": "i", "type": "uint128" }], "name": "calc_withdraw_one_coin", "stateMutability": "view", "type": "function" }, { "outputs": [{ "type": "address" }], "constant": true, "inputs": [{ "type": "uint256" }], "name": "coins", "stateMutability": "view", "type": "function" }, { "inputs": [{ "name": "_fee_converter", "type": "address" }], "name": "commit_fee_converter", "stateMutability": "Nonpayable", "type": "Function" }, { "inputs": [{ "name": "new_fee", "type": "uint256" }, { "name": "new_admin_fee", "type": "uint256" }], "name": "commit_new_fee", "stateMutability": "Nonpayable", "type": "Function" }, { "inputs": [{ "name": "_owner", "type": "address" }], "name": "commit_transfer_ownership", "stateMutability": "Nonpayable", "type": "Function" }, { "inputs": [{ "name": "i", "type": "uint128" }, { "name": "j", "type": "uint128" }, { "name": "dx", "type": "uint256" }, { "name": "min_dy", "type": "uint256" }], "name": "exchange", "stateMutability": "Nonpayable", "type": "Function" }, { "outputs": [{ "type": "uint256" }], "constant": true, "name": "fee", "stateMutability": "view", "type": "function" }, { "outputs": [{ "type": "address" }], "constant": true, "name": "fee_converter", "stateMutability": "view", "type": "function" }, { "outputs": [{ "type": "uint256" }], "constant": true, "name": "future_A", "stateMutability": "view", "type": "function" }, { "outputs": [{ "type": "uint256" }], "constant": true, "name": "future_A_time", "stateMutability": "view", "type": "function" }, { "outputs": [{ "type": "uint256" }], "constant": true, "name": "future_admin_fee", "stateMutability": "view", "type": "function" }, { "outputs": [{ "type": "uint256" }], "constant": true, "name": "future_fee", "stateMutability": "view", "type": "function" }, { "outputs": [{ "type": "address" }], "constant": true, "name": "future_owner", "stateMutability": "view", "type": "function" }, { "outputs": [{ "type": "uint256" }], "constant": true, "inputs": [{ "name": "i", "type": "uint128" }, { "name": "j", "type": "uint128" }, { "name": "dx", "type": "uint256" }], "name": "get_dy", "stateMutability": "view", "type": "function" }, { "outputs": [{ "type": "uint256" }], "constant": true, "inputs": [{ "name": "i", "type": "uint128" }, { "name": "j", "type": "uint128" }, { "name": "dx", "type": "uint256" }], "name": "get_dy_underlying", "stateMutability": "view", "type": "function" }, { "outputs": [{ "type": "uint256" }], "constant": true, "name": "get_virtual_price", "stateMutability": "view", "type": "function" }, { "outputs": [{ "type": "uint256" }], "constant": true, "name": "initial_A", "stateMutability": "view", "type": "function" }, { "outputs": [{ "type": "uint256" }], "constant": true, "name": "initial_A_time", "stateMutability": "view", "type": "function" }, { "name": "kill_me", "stateMutability": "Nonpayable", "type": "Function" }, { "outputs": [{ "type": "address" }], "constant": true, "name": "owner", "stateMutability": "view", "type": "function" }, { "inputs": [{ "name": "_future_A", "type": "uint256" }, { "name": "_future_time", "type": "uint256" }], "name": "ramp_A", "stateMutability": "Nonpayable", "type": "Function" }, { "inputs": [{ "name": "_amount", "type": "uint256" }, { "name": "min_amounts", "type": "uint256[3]" }], "name": "remove_liquidity", "stateMutability": "Nonpayable", "type": "Function" }, { "inputs": [{ "name": "amounts", "type": "uint256[3]" }, { "name": "max_burn_amount", "type": "uint256" }], "name": "remove_liquidity_imbalance", "stateMutability": "Nonpayable", "type": "Function" }, { "inputs": [{ "name": "_token_amount", "type": "uint256" }, { "name": "i", "type": "uint128" }, { "name": "min_amount", "type": "uint256" }], "name": "remove_liquidity_one_coin", "stateMutability": "Nonpayable", "type": "Function" }, { "name": "revert_new_parameters", "stateMutability": "Nonpayable", "type": "Function" }, { "name": "revert_transfer_ownership", "stateMutability": "Nonpayable", "type": "Function" }, { "name": "stop_ramp_A", "stateMutability": "Nonpayable", "type": "Function" }, { "outputs": [{ "type": "address" }], "constant": true, "name": "token", "stateMutability": "view", "type": "function" }, { "outputs": [{ "type": "uint256" }], "constant": true, "name": "transfer_ownership_deadline", "stateMutability": "view", "type": "function" }, { "name": "unkill_me", "stateMutability": "Nonpayable", "type": "Function" }, { "name": "withdraw_admin_fees", "stateMutability": "Nonpayable", "type": "Function" }] };
// // console.log(abiCode);
// const contract = new web3.eth.Contract(abi, address)

// contract.methods.totalSupply().call((err, result) => { console.log(result) })