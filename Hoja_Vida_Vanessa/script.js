function downloadPDF(){

    const element=document.querySelector('#pdf-content');
   

    const otp={
        margin: [10, 5, 15, 5], 
        filename: 'Hoja_de_vida_Vanessa_Muñoz_Castañeda.pdf',
        image: { type: 'jpeg', quality:1},
        html2canvas:{
            scale: 2,
            useCORS: true,
            scrollY:0
        },
        jsPDF:{
            unit:'mm',
            format:'a4',
            orientation: 'portrait' 
        }
    }

    html2pdf().set(otp).from(element).save();

}