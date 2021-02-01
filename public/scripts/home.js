const cep = document.querySelector('#cep');
const cpf_cnpj = document.querySelector('#cpf_cnpj');
const uf = document.querySelector('#uf');
let btn_filter = document.getElementById('btn_filter');

const desbloquear = ()=>{
    if(cep.value.length == 8 && cpf_cnpj.value.length == 14 && uf.value.length == 2){
        btn_filter.disabled = false;
    }else{
        btn_filter.disabled = true;
    }
}
const bloquear = ()=>{
    btn_filter.disabled = true;
}

cep.addEventListener('blur', desbloquear, false);
uf.addEventListener('blur', desbloquear, false);
cpf_cnpj.addEventListener('blur', desbloquear, false);

cep.addEventListener('focus', bloquear, false);
uf.addEventListener('focus', bloquear, false);
cpf_cnpj.addEventListener('focus', bloquear, false);