var fs = require('fs'); 

module.exports = { 
    name: 'addproblem', 
    description: 'adds a fie to a list', 
    execute(message){ 
        message.attachments.forEach(a => {
            fs.writeFileSync(`./${a.name}`, a.file); // Write the file to the system synchronously.
        }); 


     //   let txtFile = ''
        //let img = message.content.slice

      //  let allImages = fs.readFile('./images/images.txt', 'utf-8', function(err, data){ 
      //      fs.writeFile('./images/images.txt', , (err)=>{}); 
      //  }); 

       // txtFile += allImages;

    }
}