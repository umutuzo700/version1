<script>
    var http =require('http');
    var dt =require('umuhire anuarite');
    http.createServer(function(req,res) 
    {
      res.writeHead(200,{'content-Type':''});
      res.write("The date and time are currently:" + dt.myDateTime());
      res.end();
      
    }).listen(8080);
  
  </script>

