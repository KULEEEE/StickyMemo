var json = new Array();
var tempt = new Array();

export function Getjson(){
    return json;
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
}