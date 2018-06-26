
function getProjects(){
    // Send the PUT request.
    $.ajax("/api", {
      type: "GET"
    }).then(
      function(data) {
        allProjects= data;
        console.log(allProjects);
      }
    );
  };

function data(){
  // getProjects();
  allProjects=[
    {title:'Portfolio',
     desc: 'Project 1 info here..'
    },
    {title:'CompAct',
     desc: 'Project 2 info here..'
    },
    {title:'CompAct',
     desc: 'Project 2 info here..'
    }];
  return allProjects
}

module.exports = {data}