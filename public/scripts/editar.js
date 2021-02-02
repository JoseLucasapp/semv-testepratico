const cep = document.querySelector('#cep');
const cpf_cnpj = document.querySelector('#cpf_cnpj');
const uf = document.querySelector('#uf');
const nome = document.querySelector('#nome');
let btn_filter = document.getElementById('btn_editar');
let descricao_tipo = document.querySelector('#descricao_tipo');

const desbloquear = ()=>{
    if(nome.value.length > 5 && cep.value.length == 8 && uf.value.length == 2 && cpf_cnpj.value.length >= 11 && cpf_cnpj.value.length <= 14){
        if(cpf_cnpj.value.length == 14){
            descricao_tipo.value = 'cnpj';
            btn_filter.disabled = false;
            nome.style.border = "1px solid green"; 
            cep.style.border = "1px solid green";
            cpf_cnpj.style.border = "1px solid green";
            uf.style.border = "1px solid green";
            cep.title = "Preenchido corretamente";
            cpf_cnpj.title = "Preenchido corretamente";
        }else if(cpf_cnpj.value.length == 11){
            descricao_tipo.value = 'cpf';
            btn_filter.disabled = false;
            nome.style.border = "1px solid green"; 
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
            nome.style.border = "1px solid red"; 
        }
    }else{
        btn_filter.disabled = true;
        cep.style.border = "1px solid red";
        cpf_cnpj.style.border = "1px solid red";
        uf.style.border = "1px solid red";
        nome.style.border = "1px solid red"; 
    }
}
const bloquear = ()=>{
    btn_filter.disabled = true;
}

nome.addEventListener('blur', desbloquear, false);
cep.addEventListener('blur', desbloquear, false);
uf.addEventListener('blur', desbloquear, false);
cpf_cnpj.addEventListener('blur', desbloquear, false);

nome.addEventListener('blur', bloquear, false);
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