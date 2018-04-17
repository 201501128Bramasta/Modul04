let thLahir = [1965,2008,1992];

function KriteriaDewasa(thLahir){
  let umur = [];
  let Dewasa = [];
  
    for( let i = 0; i < thLahir.length; i ++){
    umur[i] = 2016- thLahir[i];
    console.log(umur[i]);}

    for(i = 0; i < umur.length; i++){
        if(umur[i] >= 18){
            console.log('Personal nomor ' + (i+1) + ' berumur ' + umur[i] + ' tahun adalah termasuk Kriteria Dewasa ');
            Dewasa.push(true);} 
        else{
            console.log('Personal nomor ' + (i+1) + ' berumur ' + umur[i] + ' tahun adalah termasuk Kriteria Belum Dewasa ');
            Dewasa.push(false)}
        }

    return Dewasa;
    }

KriteriaDewasa(thLahir);