$(document).ready(function(){
    $('#body img').click(function() {
        // var $this=$(this);
        // var newvar=$this.data("alt-src");
        // $this.data('alt-src',$this.attr('src'));
        // $(this).attr('src',newvar);
        // var $this=$(this);
        var newvar=$(this).data("alt-src");
        $(this).data('alt-src',$(this).attr('src'));
        $(this).attr('src',newvar);        
      });        
});

