const pass = document.querySelector("#pass");
const masg = document.querySelector("#message");
const res = document.querySelector("#result");
const buttonPass = document.querySelector("#buttonPass");
pass.addEventListener("input", ()=>{
  if(pass.value.length >0 ){
    masg.style.display = 'block';
  }
  else{
    masg.style.display = 'none';
  }
  if(pass.value.length < 4 ){
    res.innerHTML = "короткий";
    masg.style.color = "Red";
  }
  else if(pass.value.length < 8 & pass.value.length > 4 ){
    res.innerHTML = "средний";
    masg.style.color = "Yellow";
  }
  else if(pass.value.length > 8 ){
    res.innerHTML = "надежный";
    masg.style.color = "Green";
  } 
})
function check(){
  var input = pass.value;
  const spec = document.querySelector("#specal");
  const rreess = document.querySelector("#res");
  const space = document.querySelector("#space");
  const resSpc = document.querySelector("#spc");
  if(input.match(/[^A-Za-z0-9-'']/i))
  {
    spec.style.display = 'block';
    rreess.innerHTML = 'есть';
    spec.style.color = 'green';
  }
  else{
    spec.style.display = 'block';
    rreess.innerHTML = 'нету';
    spec.style.color = 'red';
  }
  if(input.match(" ")){
    space.style.display = 'block';
    resSpc.innerHTML = 'есть';
    space.style.color = 'red';
  }
  else{
    space.style.display = 'block';
    resSpc.innerHTML = 'нету';
    space.style.color = 'green';
  }
  }
buttonPass.addEventListener('click', check);