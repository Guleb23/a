
/*function red(){
  const TeorityPage__Items_Card1 = document.querySelector(".TeorityPage__Items_Card1");
  TeorityPage__Items_Card1.classList.toggle('card2');
}
const butt = document.querySelector('#butt');*/
document.getElementById('butt').addEventListener('click', (e) =>{
  document.querySelector('.TeorityPage__Items_Card11').classList.toggle('card2');
})
document.getElementById('butt2').addEventListener('click', (e) =>{
  document.querySelector('.TeorityPage__Items_Card2').classList.toggle('card2');
})
document.getElementById('butt1').addEventListener('click', (e) =>{
  document.querySelector('.TeorityPage__Items_Card1').classList.toggle('card2');
})