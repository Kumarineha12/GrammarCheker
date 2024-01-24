const typechar=document.getElementById('txtarea')
const totalchar=document.getElementById('ttchar')
const remChar=document.getElementById('remchar')
let noOfChar=0;
const UpdateValue=()=>{
  noOfChar=typechar.value.length;
  totalchar.innerHTML=noOfChar;
  remChar.innerHTML=1000-noOfChar
}
typechar.addEventListener('keyup',()=>UpdateValue());
const Copy=()=>{
    typechar.select();
    typechar.setSelectionRange(0,1000);
    navigator.clipboard.writeText(typechar.value);
}