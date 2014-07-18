<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<title>mPopup v.1</title>
    <style type="text/css">
        .popTrigger{
            width: 150px;
            height: 50px;
            margin: 20px;
            font-size: 17px;
            outline: 0;
        }
    </style>
	<script src="http://code.jquery.com/jquery-latest.js"></script>
	<script type="text/javascript" src="mPopup.js"></script>
    <script type="text/javascript">
        $(function(){
            
            $(".popTrigger").mPopup({
                headerText : "mPopup JQuery Plugin" /* parameters */ 
            });
            
        });
    </script>
</head>
<body>
    
    <!--    Example of usage-->    
    <button class="popTrigger" data-mAjax='{"ajaxData":"1","ajaxData2":"2"}'>mPopup Load</button>
    
</body> 
</html>