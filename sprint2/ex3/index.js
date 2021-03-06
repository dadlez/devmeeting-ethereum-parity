const Web3 = require('web3')

run()

async function run () {
  const web3 = new Web3('http://localhost:8545')

  // 3/ Wykorzystujemy listę kont, żeby wybrać nadawcę i odbiorcę
  const accounts = await web3.eth.getAccounts();
  console.log('accounts:', accounts)
  const from = accounts[1];
  const to = from;
  // Przesyłamy dodatkowo jakąś wartość w ETH
  const value = 50000;

  try {
    // 4/ wysylamy transakcje podająć tylko te pola, na których nam zależy.
    // Reszta (gas,gasPrice,nonce) zostanie dobrana automatycznie.
    const txHash = await web3.eth.sendTransaction({
      from, to, value
    })

    // W przypadku zaakceptowania transakcji przez użytkownika dostajemy jej hash.
    console.log(`Transaction sent with hash: ${txHash}`)
  } catch (e) {
    // Obsługujemy potencjalny błąd (lub odrzucenie przez użytkownika)
    console.error(`Could not send transaction: ${e}`)
  }
}
