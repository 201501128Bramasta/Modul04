var runBenJonson = 2000;
var runBejo = 1800;
var pushUpBenJonson = 100;
var pushUpBejo = 80;
var pushUpBendol = 70;
var runBendol = 1750;
function hitungskor(jaraktempuh,repetisi)
{
    var winner = ((jaraktempuh/100)+(repetisi/20))*4;
    return winner;
}
var nilaiBenJonson=hitungskor(runBenJonson,pushUpBenJonson);
var nilaiBejo=hitungskor(runBejo,pushUpBejo);
var nilaiBendol=hitungskor(runBendol,pushUpBendol);
console.log(nilaiBenJonson);
console.log(nilaiBejo);
console.log(nilaiBendol);
if(nilaiBejo>nilaiBenJonson && nilaiBejo>nilaiBendol)
    console.log('BEJO Menang Dengan Skor' +nilaiBejo);
else if(nilaiBendol>nilaiBejo && nilaiBendol>nilaiBenJonson)
    console.log('BENDOL Menang Dengan Skor' +nilaiBendol);
else
{
    console.log('BENJONSON Menang Dengan Skor' +nilaiBenJonson);
}