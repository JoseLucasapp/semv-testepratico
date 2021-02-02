const cep = document.querySelector('#cep');
const cpf_cnpj = document.querySelector('#cpf_cnpj');
const uf = document.querySelector('#uf');
let btn_filter = document.getElementById('btn_filter');

const desbloquear = ()=>{
    if(cep.value.length == 8 && uf.value.length == 2 && cpf_cnpj.value.length >= 11 && cpf_cnpj.value.length <=14 ){
        btn_filter.disabled = false;
            cep.style.border = "1px solid green";
            cpf_cnpj.style.border = "1px solid green";
            uf.style.border = "1px solid green";
            cep.title = "Preenchido corretamente";
            cpf_cnpj.title = "Preenchido corretamente";
    }else{
        btn_filter.disabled = true;
        cep.style.border = "1px solid red";
        cpf_cnpj.style.border = "1px solid red";
        uf.style.border = "1px solid red";
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