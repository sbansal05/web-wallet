import { useState } from 'react'
import './App.css'
import { generateMnemonic, mnemonicToSeed }from "bip39";
import { Keypair } from '@solana/web3.js';
import { Wallet } from 'ethers';
import { derivePath } from 'ed25519-hd-key';
import nacl from 'tweetnacl';
import { HDNodeWallet } from 'ethers';
import Title from './components/Title';
import WalletSwitcher from './components/WalletSwitcher';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Tooltip as ReactTooltip} from "react-tooltip";
import CopyButton from './components/CopyButton';
import { CheckIcon } from './components/icons/tabler-check';
import { EyeIcon } from './components/icons/tabler-eye';
import SolanaWallet from './components/Solana/SolanaWallet';
import EthereumWallet from './components/Ethereum/EthereumWallet';
import { ToastContainer } from 'react-toastify';

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
  

  return ( 
  <div className='flex w-full overflow-hidden min-h-screen items-center felx-col bg-slate-900'>
    <Title />
    <WalletSwitcher setWalletType={setWallet}/>
    <Button className='py-2 px-4 rounded w-[80%] border-slate-200 border-3' aria-label='Generate Mnemonic' onClick={getMnemonic} />
    <div className='flex py-2 px-4 w-[80%]'>
      <Input className='py-2 w-full px-4 outline-none font-2xl' value={mnemonic}></Input>
      {mnemonic && copyButtonClicked ? <CopyButton className='bg-white border-0 px-2 hover:text-gray-600 duration-300' name={mnemonic} label={<CheckIcon />} /> : <CopyButton className='bg-white border-0 px-2 hover: text-gray-500 duration-300' name={mnemonic} label={<EyeIcon />} setState={setCopyButtonClicked} />}
      <Button className='py-2 px-4 rounded-r' {...wallet === "solana" ? {onClick: () => generateSolanaWallet(mnemonic)} : {onClick: () => generateEthWallet(mnemonic)}} aria-label='Generate Wallet'/>
    </div> 
    {wallet === 'solana' ? <SolanaWallet solanaWallets={solWallet}/> : <EthereumWallet ethereumWallets={ethWallet}/>}
    <ReactTooltip className="translate-y-5" id="copy-button"/> 
    <ToastContainer/>
  </div>
  )
  
}

export default App
