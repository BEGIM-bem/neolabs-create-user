const { UserModel } = require('./model');

exports.saveUser = async function (req, res) {
    try {
        console.log(req.body);
        const user = req.body;

        console.log(user);

        const savedUser = await UserModel.create(user);

        res.status(200).json({
            message: 'Пользователь успешно создан!',
            user: savedUser,
        });
    } catch (e) {
        console.log('Произошло ошибка при сохранении пользователя: ', e);
    }
};

exports.getUsers = async function (req, res) {
    try {
        res.status(200).json('ok');
    } catch (e) {
        console.log('Произошло ошибка, при запросе пользователей');
    }
};

exports.editUser = async function (req, res) {
    try {
        const userId = req.params.id;
        const user = req.body;

        const updatedUser = await UserModel.findByIdAndUpdate(userId, user);

        res.status(200).json({
            message: 'Пользователь изменен!',
            user: updatedUser,
        });
    } catch (e) {
        console.log('Произошло ошибка при изменении пользователя!');
    }

};



/* 1) Получение информации о пользователе по его ID.
- Метод запроса [HTTP GET], название эндпоинта /users/:id
*/
exports.info = async function (req, res) {
    try {
        const Find_User_Id = await UserModel.findById(req.params.id)
        res.status(200).json({
            USER: Find_User_Id
        })
    } catch (e) {
        console.log("Произошло ошибка")
    }

}
/* 2) Получение всех пользователей  
- Метод запроса [HTTP GET], название эндпоинта /users*/
exports.all_people_find = async function (req, res) {
    try {
        const All_people_user_find = await UserModel.find({})
        res.status(200).json({ ALL_USERS: All_people_user_find })
    } catch (e) {
        console.log("Произошло ошибка")
    }
}


/*3) Удаление одного  пользователя 
- Метод запроса [HTTP DELETE], название эндпоинта /users/:id*/
exports.DeleteUser = async function (req, res) {
    try {
        const DeleteUser = await UserModel.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message: "Пользователь удалён.",
            user: DeleteUser
        })

    } catch (e) {
        console.log('Произошло ошибка!');

    }
}
