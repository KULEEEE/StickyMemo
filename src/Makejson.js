var json = new Array();
var tempt = new Array();

export function Getjson(){
  return Getfromlocal('DATA');
};

export function Setjson(addjson){
    tempt.push(addjson);
    const uniquearr = tempt.reduceRight((prev, now) => {
        if (!prev.some(obj => obj.noteid == now.noteid )) {
          prev.push(now);
        }
        return prev;
      }, []);
      json = uniquearr.reverse();
      localStorage.setItem('DATA', JSON.stringify(json));
};

export function Deletejson(id){
  json = json.filter(it => it.noteid != id);
  tempt = tempt.filter(it => it.noteid != id)
};

function Getfromlocal(data){
  const getfromlocal = localStorage.getItem(data);
  if(getfromlocal !== 'NULL'){
    const parsing = JSON.parse(getfromlocal);
    return parsing;
  }
}