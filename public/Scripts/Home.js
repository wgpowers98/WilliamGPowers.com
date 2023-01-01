blockMove = false;
function neonScriptEnter ()
{
    SignJS = document.getElementById("neonListen");
    SignJS.classList.add("Neon");
    
}

function neonScriptLeave() 
{
    SignJS = document.getElementById("neonListen");
    SignJS.classList.remove("Neon");
}

function showCoords(event) 
{
    if (blockMove)
    {
        var x = event.clientX;
        var y = event.clientY;
        M = document.getElementById("FollowM");
        M.style.paddingLeft = x-15+"px";
        M.style.paddingTop = y-440+"px";
    }
}

function movable()
{
    if (blockMove)
    {
        blockMove = false;
    } else 
    {
        blockMove = true;
    }
}

