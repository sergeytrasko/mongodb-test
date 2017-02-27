import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_URI);
const Person = mongoose.model('Person', {
  name: String
});


class PersonService {

  async getByName(name) {
    const person = await Person.find({name});
    return person;
  }

  async create(name) {
    const p = new Person({name});
    await p.save();
  }

}

export default new PersonService();
