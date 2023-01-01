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
        M.style.paddingLeft = x-90+"px";
        M.style.paddingTop = y-495+"px";
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

