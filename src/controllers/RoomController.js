module.exports = {
    create(req, res) {
        let roomId = 0

         /* Gera o numero da sala */
         for(var i = 0; i < 6; i++){
            i == 0 ? roomId = Math.floor(Math.random() * 10).toString() :
            roomId += Math.floor(Math.random() * 10).toString()
        }
        
        res.redirect(`/room/${roomId}`)
    }
}