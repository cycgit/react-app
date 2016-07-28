const ftime = function(timestamp) {
  timestamp = new Date(timestamp).getTime()


  var now = new Date(),
    diff = now.getTime() - timestamp,
    last = new Date(timestamp),
    lastm = '0' + last.getMinutes();
  var out = '';

  if (diff < 60000) { //1分钟内
    out = '刚刚';
  } else if (diff >= 60000 && diff < 3600000) { //1小时内
    out = parseInt(diff / 60000) + '分钟前';
  } else if (diff >= 3600000 && diff < 21600000) { //6小时内
    out = parseInt(diff / 3600000) + '小时前';
  } else if (diff >= 21600000 && diff <= 86400000 && now.getDate() == last.getDate()) {
    out = '今天' + last.getHours() + ':' + lastm.slice(-2);
  } else if (diff >= 21600000 && diff <= 86400000 + (23 - last.getHours()) * 3600000) {
    out = '昨天' + last.getHours() + ':' + lastm.slice(-2);
  } else {
    out = last.getFullYear() + '/' + (last.getMonth() + 1) + '/' + last.getDate();
  }
  return out;


}

export {
  ftime
}
