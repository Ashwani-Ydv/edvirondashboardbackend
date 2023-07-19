const MongoClient = require('mongodb').MongoClient;

exports.handler = async (req, res) => {
  const uri = 'mongodb+srv://assignment:edviron@cluster0.ebxruu8.mongodb.net';
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const database = client.db('test');
    console.log("Data base connected");
    const collection = database.collection('payments');

    const defaulters = await collection.find({ due_date: { $lt: new Date() } }).toArray();
    

    res.status(200).json({
        data : defaulters
    })
    // return {
    //   statusCode: 200,
    //   body: JSON.stringify(defaulters),
    // };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  } finally {
    await client.close();
  }
};
