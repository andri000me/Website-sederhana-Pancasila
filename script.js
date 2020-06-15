const scroll = document.getElementsByTagName('html')[0];
scroll.style.scrollBehavior = 'smooth';

const link = document.querySelectorAll('main a');
for (let i = 0; i < link.length; i++) {
    link[i].setAttribute('target', '_blank');
}
const tombol = document.getElementById('kirim');

function popup() {
    const tombolMuncul = confirm('Apa data sudah yakin lengkap?')
    if (tombolMuncul === true) {
        alert('Data anda sudah lengkap');
    } else {
        alert('Periksa kembali data anda dan lengkapi!')
    }
}
tombol.onclick = popup;