var parser = require("./StringParser").parse;
const fs = require('fs');
function ToSVGLib(e){var a = {};e.children.forEach((e)=>{if(e.id){a[e.id] = e;}}); return a ;}
function LoadFile (url,callback){
  fs.readFile(url,'utf8',function(err,text){
    if (err){ throw err };
    callback(parser(text));
  });
}
function LoadFolder (url,callback){
  var data = {};
  fs.readdir('./'+url,(err,f) => { if (err){ throw err };
     f = f.filter((n)=>{ return !!n.match(/\.svg$/); })
     f.forEach((name,i)=>{
      var last = (i == f.length-1);
      LoadFile('./'+url+"/"+name,(e)=>{
           data[name.split(".")[0].replace("-","_")] = e ;
           if(last){callback(data);}
      })
     })
  });
}
function LoadLib (url,callback){
  LoadFile(url,(e)=>{callback(ToSVGLib(e))});
;}
module.exports = {file:LoadFile,folder:LoadFolder,lib:LoadLib}
