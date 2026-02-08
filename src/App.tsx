import { useState } from 'react'
import './App.css'
import { generateMnemonic, mnemonicToSeed }from "bip39";
import { Keypair } from '@solana/web3.js';
import { Wallet } from 'ethers';
import { derivePath } from 'ed25519-hd-key';
import nacl from 'tweetnacl';
import { HDNodeWallet } from 'ethers';

function App() {
  const [mnemonic, setMnemonic] = useState("");
  const [wallet, setWallet] = useState('solana');
  const [ethWallet, setEthWallet] = useState<Wallet[]>([]);
  const [solWallet, setSolWallet] = useState<Keypair[]>([]);
  const [solanaIdx, setSolanaIdx] = useState(0);
  const [ethIdx, setEthIdx] = useState(0);
  const [copyButtonClicked, setCopyButtonClicked] = useState(false);

  const getMnemonic = () => {
    const mnemonic = generateMnemonic();
    setMnemonic(mnemonic);
    setCopyButtonClicked(false);
  };

  const generateSolanaWallet = (mnemonic: string) => {
    if(mnemonic =""){
      alert("Please generate mnemonic first")
      return;
    }
    const seed = mnemonicToSeed(mnemonic);
    const path = `m/44/501'/${solanaIdx}'/0'`;
    const newSeed = derivePath(path, seed.toString()).key;
    const secret = nacl.sign.keyPair.fromSeed(newSeed).secretKey;
    const pair = Keypair.fromSecretKey(secret);
    console.log(pair);
    setSolanaIdx(solanaIdx + 1);
    setSolWallet([...solWallet, pair]);
  }

  const generateEthWallet = async (mnemonic: string) => {
    if (mnemonic === "") {
      alert("Please generate mnemonic first")
      return;
    }
    const seed = await mnemonicToSeed(mnemonic);
    const path = `m/44'/60'/${ethIdx}'/0'`;
    const hdNode = HDNodeWallet.fromSeed(seed);
    const child = hdNode.derivePath(path);
    const privateKey = child.privateKey;
    const wallet = new Wallet(privateKey);
    setEthIdx(ethIdx + 1);
    setEthWallet([...ethWallet, wallet]);
  }
  const copyMnemonic = async () => {
    if (mnemonic === "") return;
    await navigator.clipboard.writeText(mnemonic);
    setCopyButtonClicked(true);
  };

  return ( 
  <>
  </>
  )
  
}

export default App
