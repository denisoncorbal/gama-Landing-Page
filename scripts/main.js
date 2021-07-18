const form = document.getElementById('form');
form.addEventListener('submit', (e)=>{
    e.preventDefault();

    let nome = document.getElementById('name').value;
    let email = document.getElementById('mail').value;
    let data = {nome, email};
    let convertData = JSON.stringify(data);

    let content = document.getElementById('body-container');
    let loader = '<img src="./images/loader.gif" id="loader" style="display:block;margin-left:auto;margin-right:auto;width:60px;height:60px"/>';
    content.innerHTML = loader;
    
    setTimeout(()=>{        
        localStorage.setItem('lead', convertData);
        
        let sucess = '<img src="./images/sucess.png" id="sucess" style="display:block;margin-left:auto;margin-right:auto;width:700px;height:700px"/>';
        content.innerHTML = sucess;
    }, 2000);    
})    
