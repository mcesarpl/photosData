import elasticsearch from 'elasticsearch';

class ElasticServer {

  private client: elasticsearch.Client;

  create() {
    this.client = new elasticsearch.Client({
      host: process.env.ELASTIC_SERVER,
      log: 'trace',
    });
  }

  async ping() {
    try {
      await this.client.ping({
        requestTimeout: 1000,
      });
    } catch (error) {
      console.trace(error.message);
    }
  }

  async init() {
    this.create();
    await this.ping();
  }
}


export default new ElasticServer();