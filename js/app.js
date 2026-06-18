
const pages=[
'01-pencatatan-keluarga.png',
'02-contoh-penulisan-nama.png',
'03-penentuan-kbli.png',
'04-penggunaan-internet.png',
'05-aset.png',
'06-pendapatan-usaha.png',
'07-pengeluaran-usaha.png',
'08-pengeluaran-keluarga.png'
];
let idx=0;

function showPage(id){
document.querySelectorAll('.page').forEach(x=>x.classList.remove('active'));
document.getElementById(id).classList.add('active');
}
function render(){
document.getElementById('poster').src='images/'+pages[idx];
document.getElementById('title').innerText='Halaman '+(idx+1)+' / '+pages.length;
}
function next(){if(idx<pages.length-1){idx++;render();}}
function prev(){if(idx>0){idx--;render();}}
function goTo(i){idx=i;showPage('viewer');render();}
render();

if('serviceWorker' in navigator){navigator.serviceWorker.register('sw.js');}
