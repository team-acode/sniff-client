import React, { useState, useEffect } from 'react';
import { LinkLogo, KakaoShare } from '@/public/images';
import Image from 'next/image';

interface ResultModalProps {
  onClose: () => void;
}

const ResultModal = ({ onClose }: ResultModalProps) => {
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (showAlert) {
      timer = setTimeout(() => {
        setShowAlert(false);
      }, 1000);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [showAlert]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const copyToClipboardFallback = (text: string) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      setAlertMessage('URL이 클립보드에 복사되었습니다!');
      setShowAlert(true);
    } catch (err) {
      setAlertMessage('URL 복사에 실패했습니다.');
      setShowAlert(true);
    } finally {
      document.body.removeChild(textArea);
    }
  };

  const copyToClipboard = () => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(window.location.href)
        .then(() => {
          setAlertMessage('URL이 클립보드에 복사되었습니다!');
          setShowAlert(true);
        })
        .catch(() => {
          setAlertMessage('URL 복사에 실패했습니다.');
          copyToClipboardFallback(window.location.href);
        });
    } else {
      copyToClipboardFallback(window.location.href);
    }
  };
  const Currentlocation = window.location.href;

  const kakaoShare = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      const appKey = process.env.NEXT_PUBLIC_KAKAO_APP_KEY;
      const templateId = 103731;
      if (!kakao.isInitialized()) {
        kakao.init(appKey);
      }
      kakao.Share.sendCustom({
        templateId,
        templateArgs: {
          btnTitle: '테스트하러가기',
          id: 'perfumes/1',
        },
      });
    }
  };

  // const kakaoshare2 = () => {
  //   const { Kakao } = window;
  //   // process.env.NODE_ENV ? 'development'
  //   // const location = 'http://acode-fragrance.com';
  //   const location = window.location.href;
  //   // const modifiedLocation = location.replace('http://localhost:3000', '');
  //   const modifiedLocation = location.replace('http://172.30.1.78:3000', '');
  //   console.log(`https://acode-fragrance.com${modifiedLocation}`);
  //   Kakao.Share.sendDefault({
  //     objectType: 'feed',
  //     content: {
  //       title: 'Acode',
  //       description:
  //         '나만의 취향과 분위기에 맞는 향수가 궁금하다면, 어코드에서 확인해보세요',
  //       imageUrl: '',
  //       link: {
  //         mobileWebUrl: `https://acode-fragrance.com${modifiedLocation}`,
  //         webUrl: `https://acode-fragrance.com${modifiedLocation}`,
  //       },
  //     },
  //     buttons: [
  //       {
  //         title: '웹으로 보기',
  //         link: {
  //           mobileWebUrl: `https://acode-fragrance.com${modifiedLocation}`,
  //           webUrl: `https://acode-fragrance.com${modifiedLocation}`,
  //         },
  //       },
  //     ],
  //   });
  // };
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClose();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label="Close modal"
    >
      <div
        className="bg-white p-6 w-[321px] h-[189px] rounded"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={() => {}}
        role="none"
      >
        <div className="h1 text-center mb-4">공유하기</div>
        <div className="flex flex-row justify-center gap-x-10 h2">
          <div className="flex flex-col">
            <button type="button" onClick={() => kakaoShare()}>
              <div className="mb-2">
                <Image src={KakaoShare} alt="공유하기" />
              </div>
              <div>카카오톡</div>
            </button>
          </div>
          {/* <div className="flex flex-col">
            <button type="button" onClick={() => kakaoshare2()}>
              <div className="mb-2">
                <Image src={KakaoShare} alt="공유하기" />
              </div>
              <div>카카오톡</div>
            </button>
          </div> */}
          <div
            className="flex flex-col"
            onClick={copyToClipboard}
            onKeyDown={(e) => {
              if (e.key === 'Enter') copyToClipboard();
            }}
            role="button"
            tabIndex={0}
          >
            <div className="mb-2">
              <LinkLogo />
            </div>
            <div>URL복사</div>
          </div>
        </div>
      </div>

      {showAlert && (
        <div className="absolute bg-white p-4 rounded-lg shadow-lg">
          <p>{alertMessage}</p>
        </div>
      )}
    </div>
  );
};

export default ResultModal;
