function t(t){return(''+t).padStart(2,'0')}function e(e=new Date){return function(e=new Date){return t(e.getHours()+':'+t(e.getMinutes()))}(e)+':'+t(e.getSeconds())}const n=function(t,e=document){return e.querySelector(t)}('.clock');n&&setInterval((()=>{n.textContent=e()}),1e3);
