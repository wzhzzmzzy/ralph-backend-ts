-- 用户
create table user
(
    id         int auto_increment primary key,
    cookies    text                                                               null,
    slot       int                                   default 5                    not null,
    email      varchar(320)                                                       not null,
    password   varchar(32)                                                        not null,
    createTime datetime(6)                           default CURRENT_TIMESTAMP(6) not null,
    statue     enum ('normal', 'admin', 'anonymous') default 'normal'             not null comment '用户状态',
    constraint
        unique (email)
);

-- 串
create table segment
(
    id          int auto_increment primary key,
    cookie      varchar(7)                                                               not null comment '发串饼干',
    channel     varchar(20)                                                              not null comment '发串频道',
    status      enum ('sage', 'deleted', 'normal', 'fixed') default 'normal'             not null comment '串的状态',
    warning     text                                                                     null comment '提示信息，集中串等',
    createTime  datetime(6)                                 default CURRENT_TIMESTAMP(6) not null,
    updateTime  datetime(6)                                 default CURRENT_TIMESTAMP(6) not null,
    sageTime    timestamp                                                                null,
    deletedTime timestamp                                                                null,
    userId      int                                                                      null,
    constraint foreign key (userId) references user (id)
);

-- 回复
create table reply
(
    id        int auto_increment primary key,
    title     text              null,
    text      text              not null,
    image     text              not null,
    cookie    varchar(7)        not null comment '发串饼干',
    deleted   tinyint default 0 not null comment '是否已删除',
    userId    int               null,
    segmentId int               null,
    constraint
        foreign key (segmentId) references segment (id),
        foreign key (userId) references user (id)
);

-- 反馈
create table issue
(
    id        int auto_increment primary key,
    issueType enum ('tipOff', 'issue') default 'issue' not null comment '反馈类型',
    reason    text                                     not null,
    segmentId int                                      null,
    userId    int                                      null,
    constraint
        foreign key (userId) references user (id)
);
