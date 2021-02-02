const cep = document.querySelector('#cep');
const cpf_cnpj = document.querySelector('#cpf_cnpj');
const uf = document.querySelector('#uf');
const nome = document.querySelector('#nome');
let descricao_tipo = document.querySelector('#descricao_tipo');

let btn_filter = document.getElementById('btn_cadastrar');

const desbloquear = ()=>{
    if(cpf_cnpj.value.length == 14){
        descricao_tipo.value = 'cnpj';
        cpf_cnpj.style.border = "1px solid green";
    }else if(cpf_cnpj.value.length == 11){
        descricao_tipo.value = 'cpf';
        cpf_cnpj.style.border = "1px solid green";
    }else{
        btn_filter.disabled = true;
        cep.style.border = "1px solid red";
        cpf_cnpj.style.border = "1px solid red";
        uf.style.border = "1px solid red";
        nome.style.border = "1px solid red"; 
    }
    if(nome.value.length > 5){
        nome.style.border = "1px solid green";
    }else{
        nome.style.border = "1px solid red";
    }
    if(cep.value.length == 8){
        cep.style.border = "1px solid green";
    }else{
        cep.style.border = "1px solid red";
    }
    if(uf.value.length == 2){
        uf.style.border = "1px solid green";
    }else{
        uf.style.border = "1px solid red";
    }
    if(nome.value.length > 5 && cep.value.length == 8 && uf.value.length == 2 && cpf_cnpj.value.length >= 11 && cpf_cnpj.value.length <= 14){
        btn_filter.disabled = false;
    }else{
        btn_filter.disabled = true;
    } 
}
const bloquear = ()=>{
    btn_filter.disabled = true;
}

nome.addEventListener('blur', desbloquear, false);
cep.addEventListener('blur', desbloquear, false);
uf.addEventListener('blur', desbloquear, false);
cpf_cnpj.addEventListener('blur', desbloquear, false);

nome.addEventListener('focus', bloquear, false);
cep.addEventListener('focus', bloquear, false);
uf.addEventListener('focus', bloquear, false);
cpf_cnpj.addEventListener('focus', bloquear, false);

const btn_ajuda = document.getElementById('btn_ajuda');
const btn_fecharAjuda = document.getElementById('fechar');
const ajuda = document.getElementById('campo_ajuda')

btn_ajuda.addEventListener('click',()=>{
    ajuda.style.visibility = 'visible';
    ajuda.style.zIndex = 999;
})
btn_fecharAjuda.addEventListener('click',()=>{
    ajuda.style.visibility = 'hidden';
    ajuda.style.zIndex = -1;
});