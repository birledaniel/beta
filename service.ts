alert(3);
//doar de test
//
//end test
function searchFor(array:any[]){
    return array.filter(x=>x.id!=0);
}
alert(2);
alert('am modificat aici');
function modify(item){
  return (item.length>0)? item.name: 'nu avem nimic' ;
}
