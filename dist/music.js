const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: false,   //是否自动播放
    loop: 'all',       //循环
    volume: 0.6,        //默认音量
    listFolded: true,    //列表折叠
    listMaxHeight: 60,   //列表默认最大高度
    audio: [
        {
            name: 'Anchor Made of Gold',
            artist: 'Jenny Wilson',
            url: 'http://music.163.com/song/media/outer/url?id=18803171.mp3',
            cover: 'https://p2.music.126.net/BqFjMP44bu3U4AaJLy2ZQA==/2542070884196718.jpg?',
        },
        {
            name: 'Wonderwall',
            artist: 'Oasis',
            url: 'http://music.163.com/song/media/outer/url?id=4226257.mp3',
            cover: 'https://p1.music.126.net/TYNhwqXvKqKSwwPSspv4dg==/788349837159268.jpg?',
        },
        {
            name: 'Sundaland of mind',
            artist: 'tokyo blue weeps',
            url: 'http://music.163.com/song/media/outer/url?id=854041.mp3',
            cover: 'https://p1.music.126.net/PNZUnZJ53MH4fbr0xi2jFQ==/699289395277436.jpg?',
        }
    ]
});
