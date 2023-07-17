console.log("consola");

document.querySelector("#boton").addEventListener('click',traerDatos);

function traerDatos(){
    console.log("dentro de la funcion");
    const xhttp= new XMLHttpRequest();
    xhttp.open('GET','base_json.json',true)
    xhttp.send();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            let datos=JSON.parse(this.responseText);
            let res=document.querySelector('#res');
            let busc=document.querySelector('#busca');
            let busc1=busc.value;
            let busc2=busc1.toUpperCase();
            console.log(busc2);
            res.innerHTML='';

            for (let item of datos){
                if (item.NOMBRE.includes(busc2)){
                    let vent1= parseFloat(item.VENTA1);
                    let vent2= parseFloat(item.VENTA2);
                    let vent3= parseFloat(item.VENTA3);
                    let iv= parseFloat(item.IVA);
                    vent1=vent1*(1+iv);
                    vent2=vent2*(1+iv);
                    vent3=vent3*(1+iv);
                    res.innerHTML+=`
                        <tr>
                            <td>${item.CODIGO}</td>
                            <td>${item.NOMBRE}</td>
                            <td>${item.IVA}</td>
                            <td>${vent1.toFixed(2)}</td>
                            <td>${vent2.toFixed(2)}</td>
                            <td>${vent3.toFixed(2)}</td>
                            <td>${item.CABYS}</td>
                            <td>${item.CANT}</td>
                        <tr/>
                    `
                }
            }
        }
    }
}

