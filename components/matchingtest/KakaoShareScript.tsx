export default function KakaoShareScript() {
  // const URL= window.location.href;
  const URL = 'https://www.google.com';
  const { Kakao } = window;
  Kakao.Share.createDefaultButton({
    container: '#kakaotalk-sharing-btn',
    objectType: 'feed',
    content: {
      title: 'Acode 향수 플랫폼',
      description: 'Acode에서 나에게 맞는 향수를 찾아보세요!',
      imageUrl:
        'http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
      link: {
        mobileWebUrl: URL,
        webUrl: URL,
      },
    },

    buttons: [
      {
        title: '테스트결과 보러가기',
        link: {
          mobileWebUrl: URL,
          webUrl: URL,
        },
      },
    ],
  });
}
