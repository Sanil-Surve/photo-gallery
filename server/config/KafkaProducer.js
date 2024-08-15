const kafka = require('kafka-node');

const client = new kafka.KafkaClient({ kafkaHost: process.env.KAFKA_BROKER });
const producer = new kafka.Producer(client);

producer.on('ready', () => {
  console.log('Kafka Producer is connected.');
});

producer.on('error', (error) => {
  console.error('Kafka Producer error:', error);
});

const sendToKafka = (message) => {
  const payloads = [{ topic: 'photoTopic', messages: JSON.stringify(message) }];
  producer.send(payloads, (err, data) => {
    if (err) console.error('Error sending to Kafka:', err);
    else console.log('Message sent to Kafka:', data);
  });
};

module.exports = sendToKafka;