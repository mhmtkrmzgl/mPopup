<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<title>mPopup v.1</title>
    <style type="text/css">
        .popTrigger{
            display : none;
        }
    </style>
	<script src="http://code.jquery.com/jquery-latest.js"></script>
	<script type="text/javascript" src="mPopup.js"></script>
    <script type="text/javascript">
        $(function(){
            
            /* parameters */ 
            $(".popTrigger").mPopup({
                popupMode : 'direct',
                autoLoad : true,
                headerHeight : '30',
                headerTextSize : '16',
                headerText : 'mPopup JQuery Plugin (AutoLoad with Direct Content)',
            });
            
        });
    </script>
</head>
<body>
    
    <!--    Example of usage-->    
    <div class="popTrigger">mPopup JQuery Plugin (AutoLoad with Direct Content)</div>
    
</body> 
</html>