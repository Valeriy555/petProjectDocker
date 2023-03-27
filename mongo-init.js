db.createUser(
    {
        user: 'valera',
        pwd: 'valera1982',
        roles: [
            {
                role: 'readWrite',
                db: 'petProjectDocker'
            }
        ]
    }
)