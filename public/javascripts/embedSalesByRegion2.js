var viz2;
function initViz2() {
    var containerDiv = document.getElementById("vizContainer2"),
        url = "https://public.tableau.com/views/SampleSalesbyRegion/Dashboard1?:embed=y&:display_count=yes&publish=yes",
        options = {
            hideTabs: true,
            hideToolbar: true,
            onFirstInteractive: function () {
                console.log("Run this code when the viz has finished loading.");
            }
        };
    
    viz2 = new tableau.Viz(containerDiv, url, options); 
     
    // Create a viz object and embed it in the container div.
}

// function hideViz2() {
//     setTimeout(
//         function(){ 
//             viz2.hide();
//         }, 3000
//     );
// }

// function showViz2() {
//     viz2.show()
// }