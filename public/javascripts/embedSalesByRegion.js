
var viz;
var counter=0;
function initViz() {
    counter=1;
    var containerDiv = document.getElementById("vizContainer"),
        url = "https://public.tableau.com/views/Portal-SalesByRegion/Dashboard1?:embed=y&:display_count=yes&publish=yes",
        options = {
            hideTabs: true,
            hideToolbar: false,
            onFirstInteractive: function () {
                console.log("Run this code when the viz has finished loading.");
            }
        };
    
    viz = new tableau.Viz(containerDiv, url, options);
     
    // Create a viz object and embed it in the container div.
}

function hideViz() {
    setTimeout(
        function(){ 
            viz.hide();
        }, 3000
    );
}

function showViz() {
    if (counter===0){
        initViz();
    }
    else{
        viz.show();
    }
}


function hideVizQuick() {
    viz.hide();
}

function hideNav(){
    var e = document.getElementById('logOut');
    e.style.display = 'block';
    var f = document.getElementById('logIn');
    f.style.display = 'none';
    var g = document.getElementById('username');
    g.style.display = 'none';
    var h = document.getElementById('password');
    h.style.display = 'none';
}

function showNav(){
    var e = document.getElementById('logIn');
    e.style.display = 'block';
    var f = document.getElementById('logOut');
    f.style.display = 'none';
    var g = document.getElementById('username');
    g.style.display = 'block';
    var h = document.getElementById('password');
    h.style.display = 'block';
}