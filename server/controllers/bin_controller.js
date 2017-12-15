module.exports={
    getBins(req, res, next) {
        const db = req.app.get('db');
        const {id} = req.params;
        db.get_shelf([id]).then(response=>{
            return res.status(200).json(response);
        }).catch(console.log)
    },

    getOneBin(req,res,next) {
        const db = req.app.get('db');
        const { id } = req.params;
        db.get_bin([id]).then(response=>{
            return res.status(200).json(response);
        }).catch(console.log)
    } 

    




}