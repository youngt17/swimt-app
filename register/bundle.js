
ConvertFile = function () {
  var input = document.querySelector('input').files;
  if(!input.length){
    alert("No file selected");
    return;
  } 
  var file = input[0];

  var reader = new FileReader();
  reader.onload = (function() {
    return function(e) {
      var fileData = e.target.result.trim().split('\n').map(row => row.split(','));      
      var HEADERS = ["time", "yaw", "pitch", "roll", "heading", "ax", "ay", "az", "gx", "gy", "gz", "mx", "my", "mz"];
         

      const RESULT = {};

      // Assign every heading to the result.
      for (const HEADING of HEADERS) RESULT[HEADING] = [];

      fileData.map(row =>
          // Each row → each column, number of columns === number of headers
          row.map((column, i) =>
            RESULT[HEADERS[i]]
            .push(Number(column))
          )

        );
        console.log(RESULT);
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://127.0.0.1:8080/data/add');
        xhr.responseType = 'json';        
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(RESULT));
      };
  })(file);
  reader.readAsText(file);;
};






