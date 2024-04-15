const loger = (req,res,next)=>{
    console.log(`the api has a new ${req.methode}request for url ${req.url}`);

    next();
}
module.exports= loger