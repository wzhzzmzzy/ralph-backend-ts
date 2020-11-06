-- 用户
CREATE TABLE IF NOT EXISTS User (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    slot INTEGER DEFAULT 0,                   -- 饼干槽数
    email VARCHAR(320) NOT NULL UNIQUE,
    cookies VARCHAR(100) DEFAULT NULL UNIQUE -- 饼干，按 cookie1;cookie2;cookie3;cookie4;cookie5; 排列
) AUTO_INCREMENT = 1;

-- 串
CREATE TABLE IF NOT EXISTS Segment (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    user_id INTEGER DEFAULT NULL,
    cookie CHAR(7) NOT NULL,
    warning TEXT DEFAULT NULL,
    channel VARCHAR(20) NOT NULL,
    sage BOOL DEFAULT FALSE,
    deleted BOOL DEFAULT FALSE,
    create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    sage_time TIMESTAMP DEFAULT NULL,
    deleted_time TIMESTAMP DEFAULT NULL,

    FOREIGN KEY (user_id) REFERENCES User(id) ON DELETE SET DEFAULT
) AUTO_INCREMENT = 1;

-- 回复
CREATE TABLE IF NOT EXISTS Reply (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    user_id INTEGER DEFAULT NULL,
    cookie CHAR(7) DEFAULT NULL,
    segment_id INTEGER NOT NULL,
    title TEXT DEFAULT NULL,
    text TEXT NOT NULL,
    image TEXT DEFAULT NULL,
    deleted BOOL DEFAULT FALSE,
    create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id) REFERENCES User(id) ON DELETE SET DEFAULT,
    FOREIGN KEY (segment_id) REFERENCES Segment(id) ON DELETE CASCADE
) AUTO_INCREMENT = 1;

-- 举报
CREATE TABLE IF NOT EXISTS TipOff (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    user_id INTEGER DEFAULT NULL,
    cookie CHAR(7) NOT NULL,
    reason TEXT NOT NULL,
    segment_id INTEGER NOT NULL,
    reply_id INTEGER NOT NULL,
    status INTEGER DEFAULT 0,

    FOREIGN KEY (user_id) REFERENCES User(id) ON DELETE SET DEFAULT,
    FOREIGN KEY (segment_id) REFERENCES Segment(id) ON DELETE CASCADE,
    FOREIGN KEY (reply_id) REFERENCES Reply(id) ON DELETE CASCADE
) AUTO_INCREMENT = 1;