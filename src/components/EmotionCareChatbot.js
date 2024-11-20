import React, { useState } from 'react';
import { Heart, MessageCircle, Calendar, Mic, ArrowRight } from 'lucide-react';

const EmotionCareChatbot = () => {
  const [selectedEmoji, setSelectedEmoji] = useState('😊');
  
  const emojis = ['😊', '😢', '😡', '😔', '😄', '😌'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
      {/* 네비게이션 바 */}
      <nav className="bg-white shadow-sm p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-pink-500" />
            <span className="text-xl font-bold text-gray-800">마음이음</span>
          </div>
          <div className="flex space-x-4">
            <button className="px-4 py-2 rounded-full bg-pink-100 text-pink-600 hover:bg-pink-200 transition-colors">
              로그인
            </button>
          </div>
        </div>
      </nav>

      {/* 메인 컨텐츠 */}
      <main className="max-w-6xl mx-auto p-8">
        {/* 헤더 섹션 */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            AI 챗봇과 함께하는 마음 케어
          </h1>
          <p className="text-gray-600 mb-8">
            언제 어디서나 당신의 이야기를 들어드립니다
          </p>
          <button className="bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition-colors shadow-lg">
            대화 시작하기
          </button>
        </section>

        {/* 주요 기능 카드 */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* 실시간 감정 분석 카드 */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <MessageCircle className="h-6 w-6 text-pink-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2">실시간 감정 분석</h3>
            <p className="text-gray-600">맞춤형 대화로 당신의 마음을 이해합니다</p>
          </div>

          {/* 음성 상담 카드 */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Mic className="h-6 w-6 text-purple-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2">음성 상담</h3>
            <p className="text-gray-600">편안하게 말로 이야기하세요</p>
          </div>

          {/* 감정 기록 카드 */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Calendar className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2">감정 기록</h3>
            <p className="text-gray-600">나의 감정 변화를 기록해보세요</p>
          </div>
        </div>

        {/* 오늘의 감정 선택 */}
        <section className="mt-16 bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-center">오늘의 감정을 선택해주세요</h2>
          <div className="flex justify-center space-x-4 mb-8">
            {emojis.map((emoji) => (
              <button
                key={emoji}
                onClick={() => setSelectedEmoji(emoji)}
                className={`text-3xl p-4 rounded-full transition-transform hover:scale-110 
                  ${selectedEmoji === emoji ? 'bg-pink-100 scale-110' : 'bg-gray-50'}`}
              >
                {emoji}
              </button>
            ))}
          </div>
          <div className="text-center">
            <button className="flex items-center justify-center space-x-2 mx-auto bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity">
              <span>기록하기</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EmotionCareChatbot;
