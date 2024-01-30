// var open = require('open');
const robot = require("robotjs");
const moment = require('moment-timezone');
const open = require('open');

// 目標時間
const targetDate = moment.tz('2024-01-26 16:31:00', 'Asia/Taipei');

const interval = setInterval(() => {
    const now = moment();
    const diff = targetDate.diff(now);
    const duration = moment.duration(diff);
    const days = Math.floor(duration.asDays());
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();

    console.log(`距離打卡時間：${days} 天 ${hours} 時 ${minutes} 分 ${seconds} 秒`);
    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(interval);
        console.log('打卡下班了');

        open('https://go.linyuan.com.tw/FKWeb');

        // TODO 打卡

        // robot.moveMouse(100, 100);
        // robot.mouseClick();
        // robot.typeString("ls -al");
        // robot.keyTap("enter");
        process.exit();
    }
}, 1000);