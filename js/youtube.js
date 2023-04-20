// 2. 이 코드는 Iframe Player API를 비동기적으로 로드한다. !!필수!!
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. API 코드를 다운로드 받은 다음에 <iframe>을 생성하는 기능 (youtube player도 더불어)
function onYouTubeIframeAPIReady() {
 player = new YT.Player('player', {
   videoId: 'An6LvWQuj_8', // 최초 재생할 유튜브 영상 ID
   playerVars: {
    autoplay: true, // 자동 재생 유무
    loop: true, // 반복 재생 유무
    playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 ID 목록
   },
   events: {
    onReady: function (event) {
      event.target.mute() // 음소거
    }
   }
 });
}

