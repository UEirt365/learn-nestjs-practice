import { readFile, writeFile } from 'fs/promises';

export class MessageRepository {
  async findAll() {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);
    return messages;
  }

  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);
    console.log(messages[id]);

    return messages[id];
  }

  async createOne(message: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    const id = Math.floor(Math.random() * 999);
    messages[id] = { id, message };

    await writeFile('messages.json', JSON.stringify(messages));
  }
}
