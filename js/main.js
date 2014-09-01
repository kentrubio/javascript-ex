
            function doThething(){
                alert("Yes it worked");
            }

            var elem = document.getElementById("link-a");

            elem.addEventListener("click", doThething, false);

            //hide

            var button = document.getElementById("hide"),
            	target = document.getElementById("target");

            function hide(){
            	target.setAttribute("class","hide");
            }

            button.addEventListener("click",hide,false);