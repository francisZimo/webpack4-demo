require.ensure(['./a','./b'],function(require){
    var content1=require('./a');
    var content2=require('./b');
    document.open();
    document.write('<h1>'+content1+content2+'</h1>');
    document.close();
})

