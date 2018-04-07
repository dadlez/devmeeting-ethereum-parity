const Web3 = require('web3')

run()

async function run () {
  const web3 = new Web3('http://localhost:8545')

  try {
    const { number: latestNumber } = await web3.eth.getBlock('latest');

    for (let i = 0; i < 3; i++) {
      let block = await web3.eth.getBlock(latestNumber - i);

      const hash = block.hash;
      const parentHash = block.parentHash;
      const number = block.number;

      console.log({ number, hash, parentHash });
    }
    
  } catch (e){
    console.error(e);
  }

}
