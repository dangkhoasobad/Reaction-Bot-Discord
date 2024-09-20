const { Client, GatewayIntentBits, ActivityType } = require('discord.js');
const config = require('./config.json');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
  console.log('Bot đã sẵn sàng!');

  // Cập nhật trạng thái của bot
  client.user.setActivity('đang nhắc Khoa hunt bot', { type: ActivityType.Playing });

  // Bắt đầu farm OwO mỗi 15 giây
  startOwOFarming();
});

// Hàm gửi tin nhắn nhắc nhở farm OwO mỗi 15 giây
function startOwOFarming() {
  const adminUser = client.users.cache.get(config.idAdmin);

  if (!adminUser) {
    console.error('Không tìm thấy admin với ID được cung cấp.');
    return;
  }

  setInterval(() => {
    adminUser.send('Nhắc nhở: Hãy sử dụng lệnh `owo hunt`!');
  }, 15000); // 15 giây
}

// Đăng nhập bot
client.login(config.tokenBot);
