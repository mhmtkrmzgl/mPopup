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
            popupMode : '', // ajax,direct,galery
            ajaxPage : 'ajax.php',  // the ajax page
            ajaxData : {},
            popupSpeed : '500', // effect speed
            popupEffect : '', // just fade effect parameter --> 'fade'
            loaderGif : 'items/wait.gif',
            cancelPng : 'items/cancel.png',
            galeryClass : 'mGalery',
            loaderClass : 'mPopupLoader',
            wrapperClass : 'mPopupWrapper',
            headerClass : 'mPopupHeader',
            contentClass : 'mPopupContent',
            backClass : 'mPopupBack',
            mPopupBack : '#333', // popup background color
            mPopupBackTrans : '0.8', // popup background opacity
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
            titleBack : '#333',
            titleHeight : '30',
            titleTextColor : '#fff',
            titleTextSize : '13',
            cancelHeight : '15',
            cancelWidth : '15',
            wrapperOverFlow : 'auto',
            headerPopup : true,
            contLoading : true,   // loader image
            keyboard : true,  // keyboard control
            autoLoad : false, // auto popup when page load
            galeryTitle : false  // galery with/ without title
        }, options);
        
        return this.each(function() {
            
            if(opts.popupMode === 'ajax'){
                
                if(opts.autoLoad){

                    var autoContent = '';
                
                    var dataOpts = opts;

                    dataOpts.ajaxData = $(this).attr("data-mAjax");

                    $.mPopupLoad(dataOpts,autoContent); 

                }

                $(this).click(function(){ 

                    var autoContent = '';
                    
                    var dataOpts = opts;

                    dataOpts.ajaxData = $(this).attr("data-mAjax");

                    $.mPopupLoad(dataOpts,autoContent); 
                    
                });
            }
            
            else if(opts.popupMode === 'direct'){
                
                if(opts.autoLoad){
                    
                    var autoContent = $(this).html();

                    $.mPopupLoad(opts,autoContent); 

                }                
            }
            
            else if(opts.popupMode === 'galery'){
                
                if(opts.galeryTitle){
                    
                    $(this).click(function(){ 

                        var bigImg = $(this).attr("data-img");
                    
                        var mTitle = $(this).attr("alt");

                        var imgContent = '<img class="popImage" src="'+ bigImg +'" alt="'+ mTitle +'" /><h3 class="imgTitle">'+ mTitle +'</h3>';
                        
                        $.mPopupLoad(opts,imgContent); 
                        
                    });
                    
                }
                
                else{
                    
                    $(this).click(function(){ 

                        var bigImg = $(this).attr("data-img");
                    
                        var mTitle = $(this).attr("alt");
                        
                        var imgContent = '<img class="popImage" src="'+ bigImg +'" alt="'+ mTitle +'" />';

                        $.mPopupLoad(opts,imgContent); 
                        
                    });
                    
                }
            }
            
            else{
                
                alert("There is no popupMode !");
                
            }
            
        });
    };    

    $.mPopupLoad = function(options,content){
        
        this.opts = options;
        
        this.cont = content;
        
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
            'min-height' : this.opts.wrapperHeight + "px",
            'border' : this.opts.wrapperBorderSize+' solid '+this.opts.wrapperBorderColor,
            'overflow' : this.opts.wrapperOverFlow
        });
        
        if(this.opts.popupEffect === 'fade') {this.dom.$popUp.css('display' , 'none');}
        
        if(this.opts.headerPopup){
            
            if(this.opts.headerHeight < 25){ this.opts.headerHeight = 25; }
            
            this.dom.$popUpHeader = $('<div><h2>'+this.opts.headerText+'</h2><a class="mPopupRemover" href="javascript:void(0)"><img src="'+this.opts.cancelPng+'" alt="cancel" /></a></div>').addClass(this.opts.headerClass).css({
                'display' : 'block',
                'float' : 'left',
                'width' : '100%',
                'height' : this.opts.headerHeight + "px",
                'background' : this.opts.headerBack,
                'border-bottom' : this.opts.headerBottomSize+'px solid '+this.opts.headerBottomColor
            });

            this.dom.$popUpHeader.find('h2').css({
                'display' : 'block',
                'float' : 'left',
                'padding' : 0,
                'margin' : 0,
                'margin-left' : '10px',            
                'color' : this.opts.headerTextColor,
                'height' : this.opts.headerHeight + "px",
                'font':  this.opts.headerTextSize+'px Verdana',
            });

            this.dom.$popUpHeader.find('h2').css('line-height' , this.opts.headerHeight + "px");

            this.dom.$popUpHeader.find('img.popImage').css({
                'display' : 'block',
                'float' : 'left',
                'padding' : 0,
                'margin' : 0, 
            });

            this.dom.$popUpHeader.find('a.mPopupRemover').css({
                'display' : 'block',
                'float' : 'right',
                'padding' : 0,
                'margin' : (this.opts.headerHeight/2 - this.opts.cancelHeight/2) + 'px 12px',
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
            
        }
        
        else{
            
            this.opts.headerHeight = 0;
            
            this.opts.headerBottomSize = 0;
            
            var newSize = parseInt(this.opts.wrapperWidth) + parseInt(this.opts.cancelWidth) + 10;
            
            this.dom.$popUp.css({"width" : newSize, "border" : "none"});
            
            this.dom.$popUpRight = $('<div><a class="mPopupRemover" href="javascript:void(0)"><img src="'+this.opts.cancelPng+'" alt="cancel" /></a></div>').css({
                'display' : 'block',
                'float' : 'right',
                'width' : this.opts.cancelWidth + "px",
                'height' : '100%',
                'padding' : '0',
                'padding-left' : '10px',
                'background' : 'transparent',
                'border-bottom' : this.opts.headerBottomSize+'px solid '+this.opts.headerBottomColor
            });
            
            this.dom.$popUpRight.find('a.mPopupRemover').css({
                'display' : 'block',
                'float' : 'right',
                'padding' : 0,
                'margin' : 0,
                'width' : this.opts.cancelWidth + "px",
                'height' : this.opts.cancelHeight + "px",
            });

            this.dom.$popUpRight.find('a.mPopupRemover img').css({
                'display' : 'block',
                'padding' : 0,
                'margin' : 0,
                'width' : this.opts.cancelWidth + "px",
                'height' : this.opts.cancelHeight + "px",
            });
            
        }
        
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
            'float' : 'left',
            'width' : this.opts.wrapperWidth,
            'min-height' : (this.opts.wrapperHeight - this.opts.headerBottomSize - this.opts.headerHeight)+'px',
            'background' : this.opts.contentBack,
            'overflow' : this.opts.wrapperOverFlow          
        });
        
        if ( this.opts.keyboard ){
            $.keyboard = function(event){
                var key = event.which || event.keyCode;
                if ( key === 27 ){ 
                    $("." + options.wrapperClass).remove();
                    $("." + options.backClass).remove();
                    $(document).off('keydown', $.keyboard);
                    popupHeight = 0;
                    popupWidth = 0;
                }
                return false;
            };
            
            $("." + options.wrapperClass).hover(function(){
                $(document).on('keydown',  $.keyboard);
            }, function(){
                $(document).off('keydown', $.keyboard);
                popupHeight = 0;
                popupWidth = 0;
            });
            
            $("." + options.backClass).hover(function(){
                $(document).on('keydown',  $.keyboard);
            }, function(){
                $(document).off('keydown', $.keyboard);
                popupHeight = 0;
                popupWidth = 0;3
            });
        }
        
        if(this.opts.contLoading){ this.dom.$popUpContent.append(this.dom.$popUpLoader); }
        
        if(this.opts.headerPopup){ this.dom.$popUp.append(this.dom.$popUpHeader); }
        
        this.dom.$popUp.append(this.dom.$popUpContent);
        
        if(!this.opts.headerPopup){ this.dom.$popUp.append(this.dom.$popUpRight); }
        
        $('body').append(this.dom.$popUpBack).append(this.dom.$popUp);
        
        if(this.opts.popupEffect === 'fade'){
            this.dom.$popUp.fadeIn(this.opts.popupSpeed);
        }
        
        $(document).on('keydown',  $.keyboard);
        
        if(this.cont == ''){
            $.ajax({
                url : this.opts.ajaxPage,
                type :"post",
                data : JSON.parse(this.opts.ajaxData),
                success : function(response){
                    $("." + options.contentClass).html(response);
                }
            });
        }
        
        else{
            
            $("." + options.contentClass).html(this.cont);
            
            this.dom.$popUpContent.find('h3.imgTitle').css({
                'display' : 'block',
                'float' : 'left',
                'padding' : 0,
                'margin' : 0,
                'width' : '100%',
                'text-indent' : '10px',
                'background' : this.opts.titleBack,         
                'color' : this.opts.titleTextColor,
                'height' : this.opts.titleHeight + "px",
                'font':  this.opts.titleTextSize+'px Verdana',
            });

            this.dom.$popUpContent.find('h3.imgTitle').css('line-height' , this.opts.titleHeight + "px");
        }        
        
        var popupHeight = 0;
        var popupWidth = 0;
        var windowWidth = document.documentElement.clientWidth;
        var windowHeight = document.documentElement.clientHeight;
        popupHeight = this.dom.$popUp.height();
        popupWidth = this.dom.$popUp.width();
        
        this.dom.$popUp.css({
            "top": windowHeight/2-popupHeight/2,
            "left": windowWidth/2-popupWidth/2
        });
            
        $("a.mPopupRemover", this.dom.$popUp).on("click",function(){
            $("." + options.wrapperClass).remove();
            $("." + options.backClass).remove();
            $(document).off('keydown', $.keyboard);
            popupHeight = 0;
            popupWidth = 0;
        });
        
        this.dom.$popUpBack.on("click",function(){
            $("." + options.wrapperClass).remove();
            $("." + options.backClass).remove();
            $(document).off('keydown', $.keyboard);
            popupHeight = 0;
            popupWidth = 0;
        });
        
    };
  
})(jQuery);