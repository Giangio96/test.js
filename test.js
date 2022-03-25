async function recoTag(){
    let tag = await fetch('https://cataas.com/api/tags') 
    let array = await tag.json() 
    console.log(array);
 
    let list = array.slice(4,9);
    let secondList = array.slice(14,19);

    let lists = list.concat(secondList);
    console.log(lists);
   

    let select = document.getElementById('cats-select');
    

          
    
} 

 recoTag();



 /*
    https://cataas.com/#/
 * Scrivere uno script che recupera i tags dall'api, 
 di questi ne prende dal quinto al decimo e dal quindicesimo al ventesimo
 *  creare un menù dropdown con i 10 tag recuperati e alla selezione di un elemento del menù 
 *  effettua una chiamata all'api recuperando un elemento con il tag selezionato
 *  di questo elemento, bisogna mostrare nella pagina html la foto del gatto e i tags di quell'elemento
 *  formattati in questo modo "tag1 - tag2 - tag3"
*/