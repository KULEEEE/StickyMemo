var json = new Array();

export function Getjson(){
  return Getfromlocal('DATA');
};

export function Setjson(addjson){
  if(Getfromlocal('DATA')!= 'no'){
    var hi = Getfromlocal('DATA');
    var tempt = new Array();
    for(var i=0; i<hi.length; i++){
      tempt.push(hi[i]);
    }
  }
    tempt.push(addjson);
    const uniquearr = tempt.reduceRight((prev, now) => {
        if (!prev.some(obj => obj.noteid == now.noteid )) {
          prev.push(now);
        }
        return prev;
      }, []);
      json = uniquearr.reverse();
      localStorage.setItem('DATA', JSON.stringify(json));
      //localStorage.clear();
};

export function Deletejson(id){
  if(Getfromlocal('DATA')!= 'no'){
    var hi = Getfromlocal('DATA');
    var tempt = new Array();
    for(var i=0; i<hi.length; i++){
      tempt.push(hi[i]);
    }
  }
  const uniquearr = tempt.reduceRight((prev, now) => {
      if (!prev.some(obj => obj.noteid == now.noteid )) {
        prev.push(now);
      }
      return prev;
    }, []);
    json = uniquearr.reverse();
  json = json.filter(it => it.noteid != id);
  localStorage.setItem('DATA', JSON.stringify(json));
};

function Getfromlocal(data){
  const getfromlocal = localStorage.getItem(data);
  if(getfromlocal !== null){
    const parsing = JSON.parse(getfromlocal);
    return parsing;
  }

  return "no";
}