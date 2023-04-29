function registerUserRoutes(app, dbConnection){

    app.post('/user', async (req, res) => {
        res.status(200).json({message: 'user created'});
    });

    app.get('/user', async (req, res) => {
        res.status(200).json({message: 'user found'});
    });

    app.put('/user', async (req, res) => {
        res.status(200).json({message: 'user updated'});
    });

    app.delete('/user', async (req, res) => {
        res.status(200).json({message: 'user deleted'});
    });

}

module.exports = {
    registerUserRoutes
}