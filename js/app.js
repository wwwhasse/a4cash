!function(){
        var t;
        try{
            for(t=0; 10 > t; t++)history.pushState({},"","#")
            onpopstate = function(t){
                t.state && location.replace("#")
            }
        } catch(o){}
}()
