//url
//URL组成
以下面这个URL为例：

//http://www.aspxfans.com:8080/news/index.asp?boardID=5&ID=24618&page=1#name
//1.协议部分：代表网页使用的是HTTP协议。在Internet中可以使用多种协议，如HTTP，FTP等等。在"HTTP"后面的“//”为分隔符
//2.域名部分：“www.aspxfans.com”。一个URL中，也可以使用IP地址作为域名使用
//3.端口部分：跟在域名后面的是端口，域名和端口之间使用“:”作为分隔符。端口不是一个URL必须的部分，如果省略端口部分，将采用默认端口80/tcp
//4.虚拟目录部分：从域名后的第一个“/”开始到最后一个“/”为止，是虚拟目录部分。虚拟目录也不是一个URL必须的部分。本例中的虚拟目录是“/news/”
//5.文件名部分：从域名后的最后一个“/”开始到“？”为止，是文件名部分，如果没有“?”,则是从域名后的最后一个“/”开始到“#”为止，是文件部分，如果没有“？”和“#”，那么从域名后的最后一个“/”开始到结束，都是文件名部分。本例中的文件名是“index.asp”。文件名部分也不是一个URL必须的部分，如果省略该部分，则使用默认的文件名
//6.锚部分：从“#”开始到最后，都是锚部分。本例中的锚部分是“name”。锚部分也不是一个URL必须的部分（可以理解为定位）
//7.参数部分：从“？”开始到“#”为止之间的部分为参数部分，又称搜索部分、查询部分。本例中的参数部分为“boardID=5&ID=24618&page=1”。参数可以允许有多个参数，参数与参数之间用“&”作为分隔符。



//Breadcrumb Generator     by codewar

//generateBC("mysite.com/very-long-url-to-make-a-silly-yet-meaningful-example/example.htm", " > ") == '<a href="/">HOME</a> > <a href="/very-long-url-to-make-a-silly-yet-meaningful-example/">VLUMSYME</a> > <span class="active">EXAMPLE</span>'
//generateBC("www.very-long-site_name-to-make-a-silly-yet-meaningful-example.com/users/giacomo-sorbi", " + ") == '<a href="/">HOME</a> + <a href="/users/">USERS</a> + <span class="active">GIACOMO SORBI</span>'
function generateBC(url, separator) {
  //your code here
  var url_arr=url.split("/").filter((v)=>{if(v.indexOf("index.")>-1){return false;}return true;});
  if(url_arr[0].indexOf("http")>-1 ){
    url_arr=url_arr.slice(1,url_arr.length);
    }
  let arrLength = url_arr.length-1;
  if(url_arr[arrLength].indexOf(".")>-1){
        url_arr[arrLength] = url_arr[arrLength].slice(0,url_arr[arrLength].indexOf("."));
      }
  if(url_arr[arrLength].indexOf("?")>-1){
        url_arr[arrLength] = url_arr[arrLength].slice(0,url_arr[arrLength].indexOf("?"));
     }
  if(url_arr[arrLength].indexOf("#")>-1){
        url_arr[arrLength] = url_arr[arrLength].slice(0,url_arr[arrLength].indexOf("#"));
    }
  url_arr =  url_arr.filter((v)=>{return v!="";});
  if(url_arr.length===1){return '<span class="active">HOME</span>'}
  let text = ["the","of","in","from","by","with","and", "or", "for", "to", "at", "a"]; 
  var res = '<a href="\/">HOME</a>';
  for(let i=1;i<url_arr.length;i++){
    let item="", item_name="";
    if(url_arr[i].length>30){
       let url_bk = url_arr[i].toLowerCase();
       item_name = url_bk.split("-").filter(function(v){
        for(let index=0;index<text.length;index++){
          if(v===text[index]){return false;}
        }
        return true;
      }).map((v)=>{return v.slice(0,1)}).join("");    
      item_name = item_name.toUpperCase();
    }else if(url_arr[i].split("-").length>1){
           item_name=url_arr[i].toUpperCase().split("-").join(" ");
    }else{
      item_name=url_arr[i].toUpperCase();
    }
    
    if(i===url_arr.length-1){
      item+="<span class=\"active\">" +item_name+"</span>";
    }else{
      let tempi=1,href_name="/";
      while(tempi<=i){
        href_name+=(url_arr[tempi]+"/");
        tempi++;
      }
      item+="<a href=\""+ href_name + "\">" + item_name + "</a>";
    }
    
    res += separator+item;
  }
  
  return res;
}

//别人的解决方案，正则解决
function generateBC(url, separator) {
  var arr = url.replace(/((\/index)?\.(html?|(ph|as)p))|(\?.+|#.+|https?:\/\/|\/$)/g, '').split('/'), link='';
  /*
  | 或的意思
  \/$ 消除最后一个斜杠
  https? 匹配http 或 https     s? 表示一个或0个
  #.+   #和后面的字符
  使用正则需要注意转义字符的使用
  */
  return arr.map(function(v, i, a) {
    if(a.length === 1) {
      return '<span class="active">HOME</span>'
    } else if(i === a.length -1) {
      return '<span class="active">'+ acronymize(v) +'</span>';   
    } else if(i===0) {
      return '<a href="/">HOME</a>';      
    } else {
      link = link ? link + '/' + v : v; 
      return '<a href="/'+ link +'/">'+ acronymize(v) +'</a>';
    }
  }).join(separator);
}

function acronymize(str) {
  var removeList = ["the","of","in","from","by","with","and", "or", "for", "to", "at", "a"],
      re = new RegExp("^(" + removeList.join('|') + ")$"), newStr = '';
  if(str.length > 30) {
    str.split('-').forEach(v => !re.test(v) ? newStr += v[0] : undefined);
    return newStr.toUpperCase();
  } else {
    return str.replace(/-/g, ' ').toUpperCase();;
  }
}