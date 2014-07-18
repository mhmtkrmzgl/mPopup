/**
 * @fileOverview jquery-mpopup, the jQuery mPopup
 * @author <a href="mailto:mhmtkrmzgl@gmail.com">Mehmet Kırmızıgül</a>
 * Facebook --> https://www.facebook.com/mhmtkrmzgl
 * Twitter  --> http://www.twitter.com/mhmtkrmzgl
 * @version 1.0
 * @requires jQuery
 * @see https://github.com/mhmtkrmzgl/mPopup
 */

(function($) {
  
    $.fn.mPopup = function(options) {
        
        var opts = $.extend({
            ajaxPage : 'ajax.php',
            ajaxData : {},
            loaderGif : 'items/wait.gif',
            cancelPng : 'items/cancel.png',
            loaderClass : 'mPopupLoader',
            wrapperClass : 'mPopupWrapper',
            headerClass : 'mPopupHeader',
            contentClass : 'mPopupContent',
            backClass : 'mPopupBack',
            mPopupBack : '#333',
            mPopupBackTrans : '0.8',
            wrapperWidth : '800',
            wrapperHeight : '500',
            wrapperBorderColor : '#ddd',
            wrapperBorderSize : '1px',
            headerBack : '#eee',
            contentBack : '#fff',
            headerHeight : '50',
            headerText : 'mPopup',
            headerTextColor : '#aaa',
            headerTextSize : '20',
            headerBottomColor : '#ccc',
            headerBottomSize : '2',
            cancelHeight : '15',
            cancelWidth : '15',
            wrapperOverFlow : 'auto',
            contLoading : true,            
        }, options);
        
        return this.each(function() {
            
            $(this).click(function(){ 
                
                var dataOpts = opts;
                
                dataOpts.ajaxData = $(this).attr("data-mAjax");
                
                $.mPopupLoad(dataOpts); 
            });
            
        });
    };    

    $.mPopupLoad = function(options){
        
        this.opts = options;
        
        this.dom = {};
        
        this.dom.$popUpBack = $('<div></div>').addClass(this.opts.backClass).css({
            'position' : 'fixed',      
            'height' : '100%',
            'width' : '100%',
            'top' : '0',
            'left' : '0',
            'background' : this.opts.mPopupBack,
            'opacity' : this.opts.mPopupBackTrans,   
            'z-index' : '9997',         
        });
        
        this.dom.$popUp = $('<div></div>').addClass(this.opts.wrapperClass).css({
            'position' : 'fixed',
            '_position' : 'absolute',
            'z-index' : '9998',
            'width' : this.opts.wrapperWidth + "px",
            'height' : this.opts.wrapperHeight + "px",
            'border' : this.opts.wrapperBorderSize+' solid '+this.opts.wrapperBorderColor,
            'overflow' : this.opts.wrapperOverFlow
        });
        
        this.dom.$popUpHeader = $('<div><h1>'+this.opts.headerText+'</h1><a class="mPopupRemover" href="javascript:void(0)"><img src="'+this.opts.cancelPng+'" alt="cancel" /></a></div>').addClass(this.opts.headerClass).css({
            'float' : 'left',
            'width' : '100%',
            'height' : this.opts.headerHeight + "px",
            'background' : this.opts.headerBack,
            'border-bottom' : this.opts.headerBottomSize+'px solid '+this.opts.headerBottomColor
        });
        
        this.dom.$popUpHeader.find('h1').css({
            'display' : 'block',
            'float' : 'left',
            'padding' : 0,
            'margin' : 0,
            'height' : this.opts.headerHeight + "px",
            'color' : this.opts.headerTextColor,
            'margin-left' : '10px',            
            'line-height' : this.opts.headerHeight + "px",
            'font':  this.opts.headerTextSize+' Verdana',
        });
        
        this.dom.$popUpHeader.find('a.mPopupRemover').css({
            'display' : 'block',
            'float' : 'right',
            'padding' : 0,
            'margin' : '17.5px 12px',
            'width' : this.opts.cancelWidth + "px",
            'height' : this.opts.cancelHeight + "px",
        });
        
        this.dom.$popUpHeader.find('a.mPopupRemover img').css({
            'display' : 'block',
            'padding' : 0,
            'margin' : 0,
            'width' : this.opts.cancelWidth + "px",
            'height' : this.opts.cancelHeight + "px",
        });
        
        this.dom.$popUpLoader = $('<div></div>').addClass(this.opts.loaderClass).css({
            'background' : 'url('+this.opts.loaderGif+') no-repeat center center',
            'height' : '100%',
            'width' : '100%',
            'left' : '0',
            'top' : '0',
            'z-index' : '1000',            
        });
        
        this.dom.$popUpContent = $('<div></div>').addClass(this.opts.contentClass).css({ 
            'display' : 'block',
            'width' : '100%',
            'height' : (this.opts.wrapperHeight - this.opts.headerBottomSize - this.opts.headerHeight)+'px',
            'background' : this.opts.contentBack,
            'overflow' : this.opts.wrapperOverFlow          
        });
        
        if(this.opts.contLoading){ this.dom.$popUpContent.append(this.dom.$popUpLoader); }
        
        this.dom.$popUp.append(this.dom.$popUpHeader);
        
        this.dom.$popUp.append(this.dom.$popUpContent);
        
        $('body').append(this.dom.$popUpBack).append(this.dom.$popUp);
        
        var windowWidth = document.documentElement.clientWidth;
        var windowHeight = document.documentElement.clientHeight;
        var popupHeight = this.dom.$popUp.height();
        var popupWidth = this.dom.$popUp.width();
        
        this.dom.$popUp.css({
            "top": windowHeight/2-popupHeight/2,
            "left": windowWidth/2-popupWidth/2
        });
        
        $.ajax({
            url : this.opts.ajaxPage,
            type :"post",
            data : JSON.parse(this.opts.ajaxData),
            success : function(response){
                $("." + options.contentClass).html(response);
            }
        });
            
        $("a.mPopupRemover", this.dom.$popUp).on("click",function(){
            $("." + options.wrapperClass).remove();
            $("." + options.backClass).remove();
        });
        
        this.dom.$popUpBack.on("click",function(){
            $("." + options.wrapperClass).remove();
            $("." + options.backClass).remove();
        });
        
    };
  
})(jQuery);