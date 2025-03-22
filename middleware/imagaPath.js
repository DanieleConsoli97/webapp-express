// funzione che utilizzi l'host base e il path per creare un path completo della ratella public + la parte successiva da prendere dal database
function setImagePath(req,res,next){
    req.imagePath = `${req.protocol}://${req.get('host')}/img/films/`
    next();
}
export default setImagePath;