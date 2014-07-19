<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<title>mPopup v.1</title>
    <style type="text/css">
        .galeryHeader{
            display : block;
            margin : 0 auto;
            background : #eee;
            width: 600px;
            height : 50px;
            text-align : center;
            font : 27px Verdana;
            color : #aaa;
            line-height : 50px;
            border-bottom:1px solid #ccc;
        }
        .mGalery{
            display : block;
            margin : 0 auto;
            background : #eee;
            width: 600px;
            height : 120px;
            margin-bottom :50px;
        }
        .popTrigger{
            display : block;
            float : left;
            width: 100px;
            height: 100px;
            margin: 10px;   
            border-radius : 5px;
            cursor : pointer;
        }
        .popTrigger2{
            display : block;
            float : left;
            width: 100px;
            height: 100px;
            margin: 10px;   
            border-radius : 5px;
            cursor : pointer;
        }
    </style>
	<script src="http://code.jquery.com/jquery-latest.js"></script>
	<script type="text/javascript" src="mPopup.js"></script>
    <script type="text/javascript">
        $(function(){
            
            /* parameters */ 
            $(".popTrigger").mPopup({
                popupMode : 'galery',
                popupEffect : 'fade',
                wrapperWidth : '500',
                wrapperHeight : '500',
                cancelHeight : '25',
                cancelWidth : '25',
                cancelPng : 'items/cancel2.png',
                headerText : "mPopup JQuery Plugin (Galery without Title)",
                headerTextSize : '17',                
                wrapperBorderSize : 0
            });
            
            $(".popTrigger2").mPopup({
                popupMode : 'galery',
                wrapperWidth : '500',
                wrapperHeight : '500',
                cancelHeight : '20',
                cancelWidth : '20',
                cancelPng : 'items/cancel3.png',
                galeryTitle : true,
                wrapperBorderSize : 0,
                headerPopup : false
            });
            
        });
    </script>
</head>
<body>
    
    <!--    Example of usage-->  
    <h1 class="galeryHeader">mPopup Galery without Title</h1>
    <div class="mGalery">
        <img src="galery/t1.jpg" class="popTrigger" data-img="galery/1.jpg" alt="Image 1" />
        <img src="galery/t2.jpg" class="popTrigger" data-img="galery/2.jpg" alt="Image 2" />
        <img src="galery/t3.jpg" class="popTrigger" data-img="galery/3.jpg" alt="Image 3" />
        <img src="galery/t4.jpg" class="popTrigger" data-img="galery/4.jpg" alt="Image 4" />
        <img src="galery/t5.jpg" class="popTrigger" data-img="galery/5.jpg" alt="Image 5" />
    </div>
    
    <h1 class="galeryHeader">mPopup Galery with Title</h1>
    <div class="mGalery">
        <img src="galery/t1.jpg" class="popTrigger2" data-img="galery/1.jpg" alt="Image 1" />
        <img src="galery/t2.jpg" class="popTrigger2" data-img="galery/2.jpg" alt="Image 2" />
        <img src="galery/t3.jpg" class="popTrigger2" data-img="galery/3.jpg" alt="Image 3" />
        <img src="galery/t4.jpg" class="popTrigger2" data-img="galery/4.jpg" alt="Image 4" />
        <img src="galery/t5.jpg" class="popTrigger2" data-img="galery/5.jpg" alt="Image 5" />
    </div>
    
</body> 
</html>