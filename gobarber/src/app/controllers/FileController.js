import File from '../models/File';
import User from '../models/User';

class FileController {
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;

    const file = await File.create({
      name,
      path,
    });

    const user = await User.findByPk(req.userId);

    user.avatar_id = file.id;
    await user.save();

    return res.json(file);
  }
}

export default new FileController();
