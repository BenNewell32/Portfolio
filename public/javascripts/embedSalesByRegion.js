
var viz;
function initViz() {
    var containerDiv = document.getElementById("vizContainer"),
        url = "https://public.tableau.com/views/SampleSalesbyRegion/Dashboard1?:embed=y&:display_count=yes&publish=yes",
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
    viz.hide();
}

function showViz() {
    viz.show();
}