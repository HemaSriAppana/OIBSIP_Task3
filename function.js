const input=document.querySelector('input');
const bn=document.querySelector('.cont>button');
	
bn.addEventListener('click',addList);
input.addEventListener('keyup')
function addList(itm){
    const ntcomplt=document.querySelector('.notcompleted');
    const complt=document.querySelector('.completed');
    const newit=document.createElement('li');
    const chkbtn=document.createElement('button');
    const delbtn=document.createElement('button');

    chkbtn.innerHTML='<i class="fa fa-check"></i>';
    delbtn.innerHTML='<i class="fa fa-trash"></i>'; 
    if(input.value!=='')
    {
        newit.textContent=input.value;
        input.value='';
        ntcomplt.appendChild(newit);
        newit.appendChild(chkbtn);
        newit.appendChild(delbtn);


    }
    chkbtn.addEventListener('click',function(){
        const parent=this.parentNode;
        parent.remove();
        complt.appendChild(parent);
        chkbtn.style.display='none';
    });
    delbtn.addEventListener('click',function(){
        const parent=this.parentNode;
        parent.remove();
        
    });

}