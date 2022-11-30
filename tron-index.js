// const TronWeb = require('tronweb')
// const TronWeb = tronweb
const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider("https://api.trongrid.io");
const solidityNode = new HttpProvider("https://api.trongrid.io");
const eventServer = new HttpProvider("https://api.trongrid.io");
const privateKey = 'ceab4d6bdeeffa48594515d6e0d8c851bccce62a32a4f7b37614a6d635326dd0';
const tronWeb = new TronWeb(fullNode,solidityNode,eventServer,privateKey);


const abiJSON = JSON.parse('{"entrys":[{"inputs":[{"name":"_owner","type":"address"},{"name":"_coins","type":"address[3]"},{"name":"_pool_token","type":"address"},{"name":"_A","type":"uint256"},{"name":"_fee","type":"uint256"},{"name":"_admin_fee","type":"uint256"},{"name":"_fee_converter","type":"address"}],"stateMutability":"Nonpayable","type":"Constructor"},{"inputs":[{"indexed":true,"name":"provider","type":"address"},{"name":"token_amounts","type":"uint256[3]"},{"name":"fees","type":"uint256[3]"},{"name":"invariant","type":"uint256"},{"name":"token_supply","type":"uint256"}],"name":"AddLiquidity","type":"Event"},{"inputs":[{"indexed":true,"name":"deadline","type":"uint256"},{"indexed":true,"name":"admin","type":"address"}],"name":"CommitNewAdmin","type":"Event"},{"inputs":[{"indexed":true,"name":"deadline","type":"uint256"},{"name":"fee","type":"uint256"},{"name":"admin_fee","type":"uint256"}],"name":"CommitNewFee","type":"Event"},{"inputs":[{"indexed":true,"name":"admin","type":"address"}],"name":"NewAdmin","type":"Event"},{"inputs":[{"name":"fee","type":"uint256"},{"name":"admin_fee","type":"uint256"}],"name":"NewFee","type":"Event"},{"inputs":[{"indexed":true,"name":"fee_converter","type":"address"}],"name":"NewFeeConverter","type":"Event"},{"inputs":[{"name":"old_A","type":"uint256"},{"name":"new_A","type":"uint256"},{"name":"initial_time","type":"uint256"},{"name":"future_time","type":"uint256"}],"name":"RampA","type":"Event"},{"inputs":[{"indexed":true,"name":"provider","type":"address"},{"name":"token_amounts","type":"uint256[3]"},{"name":"fees","type":"uint256[3]"},{"name":"token_supply","type":"uint256"}],"name":"RemoveLiquidity","type":"Event"},{"inputs":[{"indexed":true,"name":"provider","type":"address"},{"name":"token_amounts","type":"uint256[3]"},{"name":"fees","type":"uint256[3]"},{"name":"invariant","type":"uint256"},{"name":"token_supply","type":"uint256"}],"name":"RemoveLiquidityImbalance","type":"Event"},{"inputs":[{"indexed":true,"name":"provider","type":"address"},{"name":"token_amount","type":"uint256"},{"name":"coin_amount","type":"uint256"}],"name":"RemoveLiquidityOne","type":"Event"},{"inputs":[{"name":"A","type":"uint256"},{"name":"t","type":"uint256"}],"name":"StopRampA","type":"Event"},{"inputs":[{"indexed":true,"name":"buyer","type":"address"},{"name":"sold_id","type":"int128"},{"name":"tokens_sold","type":"uint256"},{"name":"bought_id","type":"int128"},{"name":"tokens_bought","type":"uint256"}],"name":"TokenExchange","type":"Event"},{"payable":true,"stateMutability":"Payable","type":"Fallback"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"A","stateMutability":"view","type":"function"},{"inputs":[{"name":"amounts","type":"uint256[3]"},{"name":"min_mint_amount","type":"uint256"}],"name":"add_liquidity","stateMutability":"nonpayable","type":"function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"admin_actions_deadline","stateMutability":"view","type":"function"},{"outputs":[{"type":"uint256"}],"constant":true,"inputs":[{"name":"i","type":"uint256"}],"name":"admin_balances","stateMutability":"view","type":"function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"admin_fee","stateMutability":"view","type":"function"},{"name":"apply_new_fee","stateMutability":"nonpayable","type":"function"},{"name":"apply_transfer_ownership","stateMutability":"nonpayable","type":"function"},{"outputs":[{"type":"uint256"}],"constant":true,"inputs":[{"type":"uint256"}],"name":"balances","stateMutability":"view","type":"function"},{"outputs":[{"type":"uint256"}],"constant":true,"inputs":[{"name":"amounts","type":"uint256[3]"},{"name":"deposit","type":"bool"}],"name":"calc_token_amount","stateMutability":"view","type":"function"},{"outputs":[{"type":"uint256"}],"constant":true,"inputs":[{"name":"_token_amount","type":"uint256"},{"name":"i","type":"uint128"}],"name":"calc_withdraw_one_coin","stateMutability":"view","type":"function"},{"outputs":[{"type":"address"}],"constant":true,"inputs":[{"type":"uint256"}],"name":"coins","stateMutability":"view","type":"function"},{"inputs":[{"name":"_fee_converter","type":"address"}],"name":"commit_fee_converter","stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"new_fee","type":"uint256"},{"name":"new_admin_fee","type":"uint256"}],"name":"commit_new_fee","stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_owner","type":"address"}],"name":"commit_transfer_ownership","stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"i","type":"uint128"},{"name":"j","type":"uint128"},{"name":"dx","type":"uint256"},{"name":"min_dy","type":"uint256"}],"name":"exchange","stateMutability":"nonpayable","type":"function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"fee","stateMutability":"view","type":"function"},{"outputs":[{"type":"address"}],"constant":true,"name":"fee_converter","stateMutability":"view","type":"function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"future_A","stateMutability":"view","type":"function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"future_A_time","stateMutability":"view","type":"function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"future_admin_fee","stateMutability":"view","type":"function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"future_fee","stateMutability":"view","type":"function"},{"outputs":[{"type":"address"}],"constant":true,"name":"future_owner","stateMutability":"view","type":"function"},{"outputs":[{"type":"uint256"}],"constant":true,"inputs":[{"name":"i","type":"uint128"},{"name":"j","type":"uint128"},{"name":"dx","type":"uint256"}],"name":"get_dy","stateMutability":"view","type":"function"},{"outputs":[{"type":"uint256"}],"constant":true,"inputs":[{"name":"i","type":"uint128"},{"name":"j","type":"uint128"},{"name":"dx","type":"uint256"}],"name":"get_dy_underlying","stateMutability":"view","type":"function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"get_virtual_price","stateMutability":"view","type":"function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"initial_A","stateMutability":"view","type":"function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"initial_A_time","stateMutability":"view","type":"function"},{"name":"kill_me","stateMutability":"nonpayable","type":"function"},{"outputs":[{"type":"address"}],"constant":true,"name":"owner","stateMutability":"view","type":"function"},{"inputs":[{"name":"_future_A","type":"uint256"},{"name":"_future_time","type":"uint256"}],"name":"ramp_A","stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_amount","type":"uint256"},{"name":"min_amounts","type":"uint256[3]"}],"name":"remove_liquidity","stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"amounts","type":"uint256[3]"},{"name":"max_burn_amount","type":"uint256"}],"name":"remove_liquidity_imbalance","stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_token_amount","type":"uint256"},{"name":"i","type":"uint128"},{"name":"min_amount","type":"uint256"}],"name":"remove_liquidity_one_coin","stateMutability":"nonpayable","type":"function"},{"name":"revert_new_parameters","stateMutability":"nonpayable","type":"function"},{"name":"revert_transfer_ownership","stateMutability":"nonpayable","type":"function"},{"name":"stop_ramp_A","stateMutability":"nonpayable","type":"function"},{"outputs":[{"type":"address"}],"constant":true,"name":"token","stateMutability":"view","type":"function"},{"outputs":[{"type":"uint256"}],"constant":true,"name":"transfer_ownership_deadline","stateMutability":"view","type":"function"},{"name":"unkill_me","stateMutability":"nonpayable","type":"function"},{"name":"withdraw_admin_fees","stateMutability":"nonpayable","type":"function"}]}');
const address = "TKcEU8ekq2ZoFzLSGFYCUY6aocJBX9X31b"; // sign
const abiCode = abiJSON.entrys;

let warnStatus = false;
document.querySelector('#warnStatus').innerHTML = '关闭';

async function get_dy(param1, param2, param3){
  let contract = await tronWeb.contract(abiCode,address)
  let result = await contract.get_dy(param1, param2, param3).call();
  console.log(tronWeb.toDecimal(result._hex));
  return tronWeb.toDecimal(result._hex)
}

function checkWranRage(res) {
  let param1 = document.querySelector('#param1').value;
  let param2 = document.querySelector('#param2').value;
  console.log('param1',Number(param1))
  if(Number(param1)<=res) {
    console.log('大于param1')
    var mp3Url = "./param1.mp3";
    var player = new Audio(mp3Url);
    player.play();
  }
  if(res <= Number(param2)) {
    console.log('小于param2')
    var mp3Url = "./param2.mp3";
    var player = new Audio(mp3Url);
    player.play();
  }
}

function searchDY(callback) {
  let i_uint128_val = document.querySelector('#i_uint128_val').value;
  let j_uint128_val = document.querySelector('#j_uint128_val').value;
  let dx_uint256_val = document.querySelector('#dx_uint256_val').value;
  console.log(i_uint128_val);
  console.log(j_uint128_val);
  console.log(dx_uint256_val);
  let i_uint128_val_BigNumber = tronWeb.BigNumber(i_uint128_val)
  let j_uint128_val_BigNumber = tronWeb.BigNumber(j_uint128_val)
  let dx_uint256_val_BigNumber = tronWeb.BigNumber(dx_uint256_val)
  console.log(i_uint128_val_BigNumber.toString(10));
  try {
    let result = get_dy(i_uint128_val_BigNumber.toString(10), j_uint128_val_BigNumber.toString(10), dx_uint256_val_BigNumber.toString(10));
    result.then((res) => {
      if(warnStatus) {
        checkWranRage(res);
      }
      callback && callback(res)
    })
  } catch (error) {
    console.log('once error', error)
  }
}
// 单次查询
document.querySelector('#onceBtn')?.addEventListener('click', function () {
  searchDY((res) => {
    document.querySelector('#once_res').innerHTML = res
  })
})
let searchInterval = null;

// 定时轮训
document.querySelector('#startTimeOutBtn')?.addEventListener('click', function () {
  let time = document.querySelector('#time').value;
  searchInterval = setInterval(() => {
    searchDY((res) => {
      document.querySelector('#time_res').innerHTML = res
    })
  }, time*1000);
})

// 取消定时轮训
document.querySelector('#cancelTimeOutBtn')?.addEventListener('click', function () {
  clearInterval(searchInterval);
})

document.querySelector('#startWarnBtn')?.addEventListener('click', function () {
  warnStatus = true;
  document.querySelector('#warnStatus').innerHTML = '开启';
})

document.querySelector('#closeWarnBtn')?.addEventListener('click', function () {
  warnStatus = false;
  document.querySelector('#warnStatus').innerHTML = '关闭';
})