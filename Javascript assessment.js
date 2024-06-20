// create a variable to hold NFT's
const NFTs=[];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name,_eyeColor,_shirtType,_bling) {
   const NFT={
      "name":_name,
      "eyeColor":_eyeColor,
      "shirtType":_shirtType,
      "bling":_bling
   }
   NFTs.push(NFT);
   console.log("Minted:"+_name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
   let i=0;
   while(i<NFTs.length){
      console.log("\nNFT "+(i+1)+":");
      console.log("Name\t\t:"+NFTs[i].name);
      console.log("Eye Color\t:"+NFTs[i].eyeColor);
      console.log("Shirt Type\t:"+NFTs[i].shirtType);
      console.log("Bling\t\t:"+NFTs[i].bling);
      i=i+1;
   }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
   console.log("\nNo. of NFTs: "+(NFTs.length))

}

// call your functions below this line
mintNFT("Ram","Black","Formal","Watch");
mintNFT("Govind","Brown","Hoodie","Gold Chain");
mintNFT("John","Blue","T-Shirt","Watch");
listNFTs();
getTotalSupply();
