const jlptWords = [
  {
    "kanji": "腕",
    "hiragana": "うで",
    "meaning": "팔"
  },
  {
    "kanji": "運賃",
    "hiragana": "うんちん",
    "meaning": "운임"
  },
  {
    "kanji": "介護",
    "hiragana": "かいご",
    "meaning": "개호, 간호"
  },
  {
    "kanji": "拡充",
    "hiragana": "かくじゅう",
    "meaning": "확충"
  },
  {
    "kanji": "肩",
    "hiragana": "かた",
    "meaning": "어깨"
  },
  {
    "kanji": "警備",
    "hiragana": "けいび",
    "meaning": "경비"
  },
  {
    "kanji": "削除",
    "hiragana": "さくじょ",
    "meaning": "삭제"
  },
  {
    "kanji": "実践",
    "hiragana": "じっせん",
    "meaning": "실천"
  },
  {
    "kanji": "世間",
    "hiragana": "せけん",
    "meaning": "세간, 세상"
  },
  {
    "kanji": "素材",
    "hiragana": "そざい",
    "meaning": "소재"
  },
  {
    "kanji": "破片",
    "hiragana": "はへん",
    "meaning": "파편"
  },
  {
    "kanji": "分析",
    "hiragana": "ぶんせき",
    "meaning": "분석"
  },
  {
    "kanji": "模範",
    "hiragana": "もはん",
    "meaning": "모범"
  },
  {
    "kanji": "迷う",
    "hiragana": "まよう",
    "meaning": "헤매다"
  },
  {
    "kanji": "傾く",
    "hiragana": "かたむく",
    "meaning": "기울다"
  },
  {
    "kanji": "詰まる",
    "hiragana": "つまる",
    "meaning": "막히다"
  },
  {
    "kanji": "定める",
    "hiragana": "さだめる",
    "meaning": "정하다"
  },
  {
    "kanji": "焦る",
    "hiragana": "あせる",
    "meaning": "안달하다"
  },
  {
    "kanji": "荒れる",
    "hiragana": "あれる",
    "meaning": "거칠어지다"
  },
  {
    "kanji": "敗れる",
    "hiragana": "やぶれる",
    "meaning": "지다, 패배하다"
  },
  {
    "kanji": "賢い",
    "hiragana": "かしこい",
    "meaning": "현명하다"
  },
  {
    "kanji": "辛い",
    "hiragana": "からい",
    "meaning": "맵다"
  },
  {
    "kanji": "鋭い",
    "hiragana": "するどい",
    "meaning": "날카롭다, 예리하다"
  },
  {
    "kanji": "厚かましい",
    "hiragana": "あつかましい",
    "meaning": "뻔뻔스럽다"
  },
  {
    "kanji": "乏しい",
    "hiragana": "とぼしい",
    "meaning": "모자라다, 부족하다"
  },
  {
    "kanji": "激しい",
    "hiragana": "はげしい",
    "meaning": "격하다, 심하다"
  },
  {
    "kanji": "勇ましい",
    "hiragana": "いさましい",
    "meaning": "용맹하다, 씩씩하다"
  },
  {
    "kanji": "恐ろしい",
    "hiragana": "おそろしい",
    "meaning": "두렵다"
  },
  {
    "kanji": "鮮やかだ",
    "hiragana": "あざやかだ",
    "meaning": "선명하다, 산뜻하다"
  },
  {
    "kanji": "穏やかだ",
    "hiragana": "おだやかだ",
    "meaning": "온화하다, 평온하다"
  },
  {
    "kanji": "握手",
    "hiragana": "あくしゅ",
    "meaning": "악수"
  },
  {
    "kanji": "衣装",
    "hiragana": "いしょう",
    "meaning": "의상"
  },
  {
    "kanji": "幹事",
    "hiragana": "かんじ",
    "meaning": "간사"
  },
  {
    "kanji": "起床",
    "hiragana": "きしょう",
    "meaning": "기상"
  },
  {
    "kanji": "刑事",
    "hiragana": "けいじ",
    "meaning": "형사"
  },
  {
    "kanji": "検事",
    "hiragana": "けんじ",
    "meaning": "검사"
  },
  {
    "kanji": "腰",
    "hiragana": "こし",
    "meaning": "허리"
  },
  {
    "kanji": "才能",
    "hiragana": "さいのう",
    "meaning": "재능"
  },
  {
    "kanji": "賛否",
    "hiragana": "さんぴ",
    "meaning": "찬부, 찬반"
  },
  {
    "kanji": "情景",
    "hiragana": "じょうけい",
    "meaning": "정경"
  },
  {
    "kanji": "声援",
    "hiragana": "せいえん",
    "meaning": "성원"
  },
  {
    "kanji": "背骨",
    "hiragana": "せぼね",
    "meaning": "등골, 척추"
  },
  {
    "kanji": "善良",
    "hiragana": "ぜんりょう",
    "meaning": "선량"
  },
  {
    "kanji": "途端",
    "hiragana": "とたん",
    "meaning": "찰나, 그 순간"
  },
  {
    "kanji": "農薬",
    "hiragana": "のうやく",
    "meaning": "농약"
  },
  {
    "kanji": "膝",
    "hiragana": "ひざ",
    "meaning": "무릎"
  },
  {
    "kanji": "分解",
    "hiragana": "ぶんかい",
    "meaning": "분해"
  },
  {
    "kanji": "疑う",
    "hiragana": "うたがう",
    "meaning": "의심하다"
  },
  {
    "kanji": "収まる",
    "hiragana": "おさまる",
    "meaning": "진정되다"
  },
  {
    "kanji": "絡まる",
    "hiragana": "からまる",
    "meaning": "얽히다"
  },
  {
    "kanji": "定まる",
    "hiragana": "さだまる",
    "meaning": "정해지다"
  },
  {
    "kanji": "静まる",
    "hiragana": "しずまる",
    "meaning": "가라앉다"
  },
  {
    "kanji": "貯まる",
    "hiragana": "たまる",
    "meaning": "(돈이) 모이다"
  },
  {
    "kanji": "挟まる",
    "hiragana": "はさまる",
    "meaning": "끼이다"
  },
  {
    "kanji": "休まる",
    "hiragana": "やすまる",
    "meaning": "편안해지다"
  },
  {
    "kanji": "務める",
    "hiragana": "つとめる",
    "meaning": "(역할을) 맡다"
  },
  {
    "kanji": "辞める",
    "hiragana": "やめる",
    "meaning": "그만두다"
  },
  {
    "kanji": "暴れる",
    "hiragana": "あばれる",
    "meaning": "날뛰다"
  },
  {
    "kanji": "崩れる",
    "hiragana": "くずれる",
    "meaning": "무너지다"
  },
  {
    "kanji": "潰れる",
    "hiragana": "つぶれる",
    "meaning": "찌부러지다"
  },
  {
    "kanji": "外れる",
    "hiragana": "はずれる",
    "meaning": "빠지다, 안 맞다"
  },
  {
    "kanji": "偉い",
    "hiragana": "えらい",
    "meaning": "훌륭하다"
  },
  {
    "kanji": "渋い",
    "hiragana": "しぶい",
    "meaning": "떫다"
  },
  {
    "kanji": "著しい",
    "hiragana": "いちじるしい",
    "meaning": "뚜렷하다, 현저하다"
  },
  {
    "kanji": "眩しい",
    "hiragana": "まぶしい",
    "meaning": "눈부시다"
  },
  {
    "kanji": "詳細だ",
    "hiragana": "しょうさいだ",
    "meaning": "상세하다"
  },
  {
    "kanji": "優秀だ",
    "hiragana": "ゆうしゅうだ",
    "meaning": "우수하다"
  },
  {
    "kanji": "爽やかだ",
    "hiragana": "さわやかだ",
    "meaning": "상쾌하다"
  },
  {
    "kanji": "記憶",
    "hiragana": "きおく",
    "meaning": "기억"
  },
  {
    "kanji": "求人",
    "hiragana": "きゅうじん",
    "meaning": "구인"
  },
  {
    "kanji": "偶然",
    "hiragana": "ぐうぜん",
    "meaning": "우연"
  },
  {
    "kanji": "刺激",
    "hiragana": "しげき",
    "meaning": "자극"
  },
  {
    "kanji": "垂直",
    "hiragana": "すいちょく",
    "meaning": "수직"
  },
  {
    "kanji": "治療",
    "hiragana": "ちりょう",
    "meaning": "치료"
  },
  {
    "kanji": "容姿",
    "hiragana": "ようし",
    "meaning": "용모"
  },
  {
    "kanji": "競う",
    "hiragana": "きそう",
    "meaning": "겨루다, 경쟁하다"
  },
  {
    "kanji": "抱える",
    "hiragana": "かかえる",
    "meaning": "(떠)안다"
  },
  {
    "kanji": "劣る",
    "hiragana": "おとる",
    "meaning": "뒤떨어지다"
  },
  {
    "kanji": "絞る",
    "hiragana": "しぼる",
    "meaning": "(쥐어)짜다"
  },
  {
    "kanji": "湿る",
    "hiragana": "しめる",
    "meaning": "습기 차다"
  },
  {
    "kanji": "握る",
    "hiragana": "にぎる",
    "meaning": "쥐다"
  },
  {
    "kanji": "離れる",
    "hiragana": "はなれる",
    "meaning": "떨어지다"
  },
  {
    "kanji": "乱れる",
    "hiragana": "みだれる",
    "meaning": "흐트러지다"
  },
  {
    "kanji": "幼い",
    "hiragana": "おさない",
    "meaning": "어리다"
  },
  {
    "kanji": "険しい",
    "hiragana": "けわしい",
    "meaning": "험하다"
  },
  {
    "kanji": "等しい",
    "hiragana": "ひとしい",
    "meaning": "같다, 동등하다"
  },
  {
    "kanji": "柔軟だ",
    "hiragana": "じゅうなんだ",
    "meaning": "유연하다"
  },
  {
    "kanji": "和やかだ",
    "hiragana": "なごやかだ",
    "meaning": "온화하다, 화목하다"
  },
  {
    "kanji": "確認",
    "hiragana": "かくにん",
    "meaning": "확인"
  },
  {
    "kanji": "下降",
    "hiragana": "かこう",
    "meaning": "하강"
  },
  {
    "kanji": "願望",
    "hiragana": "がんぼう",
    "meaning": "바람, 소원"
  },
  {
    "kanji": "企画",
    "hiragana": "きかく",
    "meaning": "기획"
  },
  {
    "kanji": "期日",
    "hiragana": "きじつ",
    "meaning": "기일"
  },
  {
    "kanji": "掲載",
    "hiragana": "けいさい",
    "meaning": "게재"
  },
  {
    "kanji": "軽傷",
    "hiragana": "けいしょう",
    "meaning": "경상"
  },
  {
    "kanji": "下旬",
    "hiragana": "げじゅん",
    "meaning": "하순"
  },
  {
    "kanji": "再度",
    "hiragana": "さいど",
    "meaning": "재차"
  },
  {
    "kanji": "実験",
    "hiragana": "じっけん",
    "meaning": "실험"
  },
  {
    "kanji": "失敗",
    "hiragana": "しっぱい",
    "meaning": "실패"
  },
  {
    "kanji": "処理",
    "hiragana": "しょり",
    "meaning": "처리"
  },
  {
    "kanji": "資料",
    "hiragana": "しりょう",
    "meaning": "자료"
  },
  {
    "kanji": "心配",
    "hiragana": "しんぱい",
    "meaning": "걱정"
  },
  {
    "kanji": "製品",
    "hiragana": "せいひん",
    "meaning": "제품"
  },
  {
    "kanji": "総額",
    "hiragana": "そうがく",
    "meaning": "총액"
  },
  {
    "kanji": "抽選",
    "hiragana": "ちゅうせん",
    "meaning": "추첨"
  },
  {
    "kanji": "強火",
    "hiragana": "つよび",
    "meaning": "센 불"
  },
  {
    "kanji": "戸棚",
    "hiragana": "とだな",
    "meaning": "선반"
  },
  {
    "kanji": "恥",
    "hiragana": "はじ",
    "meaning": "창피"
  },
  {
    "kanji": "被害",
    "hiragana": "ひがい",
    "meaning": "피해"
  },
  {
    "kanji": "一言",
    "hiragana": "ひとこと",
    "meaning": "한마디"
  },
  {
    "kanji": "批評",
    "hiragana": "ひひょう",
    "meaning": "비평"
  },
  {
    "kanji": "費用",
    "hiragana": "ひよう",
    "meaning": "비용"
  },
  {
    "kanji": "負担",
    "hiragana": "ふたん",
    "meaning": "부담"
  },
  {
    "kanji": "本物",
    "hiragana": "ほんもの",
    "meaning": "진짜"
  },
  {
    "kanji": "湖",
    "hiragana": "みずうみ",
    "meaning": "호수"
  },
  {
    "kanji": "密閉",
    "hiragana": "みっぺい",
    "meaning": "밀폐"
  },
  {
    "kanji": "虫歯",
    "hiragana": "むしば",
    "meaning": "충치"
  },
  {
    "kanji": "冷蔵庫",
    "hiragana": "れいぞうこ",
    "meaning": "냉장고"
  },
  {
    "kanji": "扱う",
    "hiragana": "あつかう",
    "meaning": "다루다"
  },
  {
    "kanji": "奪う",
    "hiragana": "うばう",
    "meaning": "빼앗다"
  },
  {
    "kanji": "伴う",
    "hiragana": "ともなう",
    "meaning": "동반하다, 따르다"
  },
  {
    "kanji": "倒す",
    "hiragana": "たおす",
    "meaning": "쓰러트리다"
  },
  {
    "kanji": "接する",
    "hiragana": "せっする",
    "meaning": "접하다"
  },
  {
    "kanji": "当たる",
    "hiragana": "あたる",
    "meaning": "맞다"
  },
  {
    "kanji": "落ちる",
    "hiragana": "おちる",
    "meaning": "떨어지다"
  },
  {
    "kanji": "恨む",
    "hiragana": "うらむ",
    "meaning": "원망하다"
  },
  {
    "kanji": "悔む",
    "hiragana": "くやむ",
    "meaning": "후회하다"
  },
  {
    "kanji": "悩む",
    "hiragana": "なやむ",
    "meaning": "고민하다"
  },
  {
    "kanji": "憎む",
    "hiragana": "にくむ",
    "meaning": "미워하다, 증오하다"
  },
  {
    "kanji": "納める",
    "hiragana": "おさめる",
    "meaning": "넣다, 납입하다"
  },
  {
    "kanji": "貯める",
    "hiragana": "ためる",
    "meaning": "저축하다"
  },
  {
    "kanji": "慰める",
    "hiragana": "なぐさめる",
    "meaning": "위로하다"
  },
  {
    "kanji": "映る",
    "hiragana": "うつる",
    "meaning": "비치다"
  },
  {
    "kanji": "怖い",
    "hiragana": "こわい",
    "meaning": "무섭다"
  },
  {
    "kanji": "怪しい",
    "hiragana": "あやしい",
    "meaning": "수상하다"
  },
  {
    "kanji": "貴重だ",
    "hiragana": "きちょうだ",
    "meaning": "귀중하다"
  },
  {
    "kanji": "勧誘",
    "hiragana": "かんゆう",
    "meaning": "권유"
  },
  {
    "kanji": "撮影",
    "hiragana": "さつえい",
    "meaning": "촬영"
  },
  {
    "kanji": "地元",
    "hiragana": "じもと",
    "meaning": "고향"
  },
  {
    "kanji": "省略",
    "hiragana": "しょうりゃく",
    "meaning": "생략"
  },
  {
    "kanji": "尊重",
    "hiragana": "そんちょう",
    "meaning": "존중"
  },
  {
    "kanji": "油断",
    "hiragana": "ゆだん",
    "meaning": "방심"
  },
  {
    "kanji": "備える",
    "hiragana": "そなえる",
    "meaning": "대비하다, 비치하다"
  },
  {
    "kanji": "圧勝",
    "hiragana": "あっしょう",
    "meaning": "압승"
  },
  {
    "kanji": "大幅",
    "hiragana": "おおはば",
    "meaning": "대폭"
  },
  {
    "kanji": "規模",
    "hiragana": "きぼ",
    "meaning": "규모"
  },
  {
    "kanji": "行事",
    "hiragana": "ぎょうじ",
    "meaning": "행사"
  },
  {
    "kanji": "恐怖",
    "hiragana": "きょうふ",
    "meaning": "공포"
  },
  {
    "kanji": "極端",
    "hiragana": "きょくたん",
    "meaning": "극단"
  },
  {
    "kanji": "拒否",
    "hiragana": "きょひ",
    "meaning": "거부"
  },
  {
    "kanji": "計算",
    "hiragana": "けいさん",
    "meaning": "계산"
  },
  {
    "kanji": "継続",
    "hiragana": "けいぞく",
    "meaning": "계속"
  },
  {
    "kanji": "景色",
    "hiragana": "けしき",
    "meaning": "경치"
  },
  {
    "kanji": "現象",
    "hiragana": "げんしょう",
    "meaning": "현상"
  },
  {
    "kanji": "山頂",
    "hiragana": "さんちょう",
    "meaning": "산꼭대기"
  },
  {
    "kanji": "至急",
    "hiragana": "しきゅう",
    "meaning": "시급, 급히"
  },
  {
    "kanji": "姿勢",
    "hiragana": "しせい",
    "meaning": "자세"
  },
  {
    "kanji": "持続",
    "hiragana": "じぞく",
    "meaning": "지속"
  },
  {
    "kanji": "焦点",
    "hiragana": "しょうてん",
    "meaning": "초점"
  },
  {
    "kanji": "相互",
    "hiragana": "そうご",
    "meaning": "상호, 서로"
  },
  {
    "kanji": "装置",
    "hiragana": "そうち",
    "meaning": "장치"
  },
  {
    "kanji": "損害",
    "hiragana": "そんがい",
    "meaning": "손해"
  },
  {
    "kanji": "知識",
    "hiragana": "ちしき",
    "meaning": "지식"
  },
  {
    "kanji": "調整",
    "hiragana": "ちょうせい",
    "meaning": "조정"
  },
  {
    "kanji": "調節",
    "hiragana": "ちょうせつ",
    "meaning": "조절"
  },
  {
    "kanji": "逃亡",
    "hiragana": "とうぼう",
    "meaning": "도망"
  },
  {
    "kanji": "隣",
    "hiragana": "となり",
    "meaning": "옆"
  },
  {
    "kanji": "針",
    "hiragana": "はり",
    "meaning": "바늘"
  },
  {
    "kanji": "返却",
    "hiragana": "へんきゃく",
    "meaning": "반환, 반납"
  },
  {
    "kanji": "貿易",
    "hiragana": "ぼうえき",
    "meaning": "무역"
  },
  {
    "kanji": "防災",
    "hiragana": "ぼうさい",
    "meaning": "방재"
  },
  {
    "kanji": "要求",
    "hiragana": "ようきゅう",
    "meaning": "요구"
  },
  {
    "kanji": "幼稚",
    "hiragana": "ようち",
    "meaning": "유치"
  },
  {
    "kanji": "世の中",
    "hiragana": "よのなか",
    "meaning": "세상"
  },
  {
    "kanji": "理論",
    "hiragana": "りろん",
    "meaning": "이론"
  },
  {
    "kanji": "祝う",
    "hiragana": "いわう",
    "meaning": "축하하다"
  },
  {
    "kanji": "占う",
    "hiragana": "うらなう",
    "meaning": "점치다"
  },
  {
    "kanji": "補う",
    "hiragana": "おぎなう",
    "meaning": "보충하다"
  },
  {
    "kanji": "蓄える",
    "hiragana": "たくわえる",
    "meaning": "저축하다"
  },
  {
    "kanji": "除く",
    "hiragana": "のぞく",
    "meaning": "제거하다"
  },
  {
    "kanji": "隠す",
    "hiragana": "かくす",
    "meaning": "감추다, 숨기다"
  },
  {
    "kanji": "戻す",
    "hiragana": "もどす",
    "meaning": "되돌리다"
  },
  {
    "kanji": "略する",
    "hiragana": "りゃくする",
    "meaning": "생략하다"
  },
  {
    "kanji": "傷む",
    "hiragana": "いたむ",
    "meaning": "상하다"
  },
  {
    "kanji": "囲む",
    "hiragana": "かこむ",
    "meaning": "둘러싸다"
  },
  {
    "kanji": "済む",
    "hiragana": "すむ",
    "meaning": "끝나다"
  },
  {
    "kanji": "積む",
    "hiragana": "つむ",
    "meaning": "쌓다"
  },
  {
    "kanji": "挟む",
    "hiragana": "はさむ",
    "meaning": "끼다"
  },
  {
    "kanji": "改める",
    "hiragana": "あらためる",
    "meaning": "고치다, 개선하다"
  },
  {
    "kanji": "占める",
    "hiragana": "しめる",
    "meaning": "차지하다"
  },
  {
    "kanji": "深める",
    "hiragana": "ふかめる",
    "meaning": "깊게 하다"
  },
  {
    "kanji": "含める",
    "hiragana": "ふくめる",
    "meaning": "포함하다"
  },
  {
    "kanji": "腐る",
    "hiragana": "くさる",
    "meaning": "썩다"
  },
  {
    "kanji": "減る",
    "hiragana": "へる",
    "meaning": "줄다"
  },
  {
    "kanji": "慣れる",
    "hiragana": "なれる",
    "meaning": "익숙해지다"
  },
  {
    "kanji": "触れる",
    "hiragana": "ふれる",
    "meaning": "접하다"
  },
  {
    "kanji": "憎い",
    "hiragana": "にくい",
    "meaning": "밉다"
  },
  {
    "kanji": "悔しい",
    "hiragana": "くやしい",
    "meaning": "분하다"
  },
  {
    "kanji": "清潔だ",
    "hiragana": "せいけつだ",
    "meaning": "청결하다"
  },
  {
    "kanji": "率直だ",
    "hiragana": "そっちょくだ",
    "meaning": "솔직하다"
  },
  {
    "kanji": "豊富だ",
    "hiragana": "ほうふだ",
    "meaning": "풍부하다"
  },
  {
    "kanji": "密接だ",
    "hiragana": "みっせつだ",
    "meaning": "밀접하다"
  },
  {
    "kanji": "盛んだ",
    "hiragana": "さかんだ",
    "meaning": "왕성하다, 활발하다"
  },
  {
    "kanji": "運搬",
    "hiragana": "うんぱん",
    "meaning": "운반"
  },
  {
    "kanji": "解散",
    "hiragana": "かいさん",
    "meaning": "해산"
  },
  {
    "kanji": "快癒",
    "hiragana": "かいゆ",
    "meaning": "쾌유"
  },
  {
    "kanji": "拡散",
    "hiragana": "かくさん",
    "meaning": "확산"
  },
  {
    "kanji": "活躍",
    "hiragana": "かつやく",
    "meaning": "활약"
  },
  {
    "kanji": "休養",
    "hiragana": "きゅうよう",
    "meaning": "휴양"
  },
  {
    "kanji": "恐縮",
    "hiragana": "きょうしゅく",
    "meaning": "송구함, 황송함"
  },
  {
    "kanji": "競争",
    "hiragana": "きょうそう",
    "meaning": "경쟁"
  },
  {
    "kanji": "経費",
    "hiragana": "けいひ",
    "meaning": "경비, 비용"
  },
  {
    "kanji": "検証",
    "hiragana": "けんしょう",
    "meaning": "검증"
  },
  {
    "kanji": "減少",
    "hiragana": "げんしょう",
    "meaning": "감소"
  },
  {
    "kanji": "抗議",
    "hiragana": "こうぎ",
    "meaning": "항의"
  },
  {
    "kanji": "交渉",
    "hiragana": "こうしょう",
    "meaning": "교섭"
  },
  {
    "kanji": "香水",
    "hiragana": "こうすい",
    "meaning": "향수"
  },
  {
    "kanji": "洪水",
    "hiragana": "こうずい",
    "meaning": "홍수"
  },
  {
    "kanji": "構想",
    "hiragana": "こうそう",
    "meaning": "구상"
  },
  {
    "kanji": "項目",
    "hiragana": "こうもく",
    "meaning": "항목"
  },
  {
    "kanji": "個体",
    "hiragana": "こたい",
    "meaning": "개체"
  },
  {
    "kanji": "示唆",
    "hiragana": "しさ",
    "meaning": "시사"
  },
  {
    "kanji": "執筆",
    "hiragana": "しっぴつ",
    "meaning": "집필"
  },
  {
    "kanji": "収集",
    "hiragana": "しゅうしゅう",
    "meaning": "수집"
  },
  {
    "kanji": "執着",
    "hiragana": "しゅうちゃく",
    "meaning": "집착"
  },
  {
    "kanji": "寿命",
    "hiragana": "じゅみょう",
    "meaning": "수명"
  },
  {
    "kanji": "除外",
    "hiragana": "じょがい",
    "meaning": "제외"
  },
  {
    "kanji": "相違",
    "hiragana": "そうい",
    "meaning": "상이"
  },
  {
    "kanji": "臓器",
    "hiragana": "ぞうき",
    "meaning": "장기"
  },
  {
    "kanji": "操作",
    "hiragana": "そうさ",
    "meaning": "조작"
  },
  {
    "kanji": "中継",
    "hiragana": "ちゅうけい",
    "meaning": "중계"
  },
  {
    "kanji": "著者",
    "hiragana": "ちょしゃ",
    "meaning": "저자"
  },
  {
    "kanji": "通訳",
    "hiragana": "つうやく",
    "meaning": "통역(가)"
  },
  {
    "kanji": "特徴",
    "hiragana": "とくちょう",
    "meaning": "특징"
  },
  {
    "kanji": "土台",
    "hiragana": "どだい",
    "meaning": "토대, 기초"
  },
  {
    "kanji": "反復",
    "hiragana": "はんぷく",
    "meaning": "반복"
  },
  {
    "kanji": "病棟",
    "hiragana": "びょうとう",
    "meaning": "병동"
  },
  {
    "kanji": "奉仕",
    "hiragana": "ほうし",
    "meaning": "봉사"
  },
  {
    "kanji": "補充",
    "hiragana": "ほじゅう",
    "meaning": "보충"
  },
  {
    "kanji": "役人",
    "hiragana": "やくにん",
    "meaning": "공무원, 관리"
  },
  {
    "kanji": "遺言",
    "hiragana": "ゆいごん",
    "meaning": "유언"
  },
  {
    "kanji": "連合",
    "hiragana": "れんごう",
    "meaning": "연합"
  },
  {
    "kanji": "合間",
    "hiragana": "あいま",
    "meaning": "틈, 사이"
  },
  {
    "kanji": "脚",
    "hiragana": "あし",
    "meaning": "다리"
  },
  {
    "kanji": "頭",
    "hiragana": "あたま",
    "meaning": "머리"
  },
  {
    "kanji": "穴",
    "hiragana": "あな",
    "meaning": "구멍"
  },
  {
    "kanji": "息",
    "hiragana": "いき",
    "meaning": "숨"
  },
  {
    "kanji": "岩",
    "hiragana": "いわ",
    "meaning": "바위"
  },
  {
    "kanji": "裏",
    "hiragana": "うら",
    "meaning": "뒤"
  },
  {
    "kanji": "表",
    "hiragana": "おもて",
    "meaning": "겉"
  },
  {
    "kanji": "顔",
    "hiragana": "かお",
    "meaning": "얼굴"
  },
  {
    "kanji": "香り",
    "hiragana": "かおり",
    "meaning": "향기"
  },
  {
    "kanji": "煙",
    "hiragana": "けむり",
    "meaning": "연기"
  },
  {
    "kanji": "小型",
    "hiragana": "こがた",
    "meaning": "소형"
  },
  {
    "kanji": "坂",
    "hiragana": "さか",
    "meaning": "비탈길, 언덕"
  },
  {
    "kanji": "境",
    "hiragana": "さかい",
    "meaning": "경계"
  },
  {
    "kanji": "砂",
    "hiragana": "すな",
    "meaning": "모래"
  },
  {
    "kanji": "隅",
    "hiragana": "すみ",
    "meaning": "구석"
  },
  {
    "kanji": "咳",
    "hiragana": "せき",
    "meaning": "기침"
  },
  {
    "kanji": "種",
    "hiragana": "たね",
    "meaning": "씨, 종자"
  },
  {
    "kanji": "田畑",
    "hiragana": "たはた",
    "meaning": "논밭"
  },
  {
    "kanji": "旅",
    "hiragana": "たび",
    "meaning": "여행"
  },
  {
    "kanji": "泥",
    "hiragana": "どろ",
    "meaning": "진흙"
  },
  {
    "kanji": "蓮",
    "hiragana": "はす",
    "meaning": "연꽃"
  },
  {
    "kanji": "旗",
    "hiragana": "はた",
    "meaning": "깃발"
  },
  {
    "kanji": "肌",
    "hiragana": "はだ",
    "meaning": "피부"
  },
  {
    "kanji": "羽",
    "hiragana": "はね",
    "meaning": "날개"
  },
  {
    "kanji": "幅",
    "hiragana": "はば",
    "meaning": "폭"
  },
  {
    "kanji": "肘",
    "hiragana": "ひじ",
    "meaning": "팔꿈치"
  },
  {
    "kanji": "骨",
    "hiragana": "ほね",
    "meaning": "뼈"
  },
  {
    "kanji": "迷子",
    "hiragana": "まいご",
    "meaning": "미아"
  },
  {
    "kanji": "都",
    "hiragana": "みやこ",
    "meaning": "수도, 고을"
  },
  {
    "kanji": "昔",
    "hiragana": "むかし",
    "meaning": "옛날"
  },
  {
    "kanji": "覆う",
    "hiragana": "おおう",
    "meaning": "덮다, 감싸다"
  },
  {
    "kanji": "慕う",
    "hiragana": "したう",
    "meaning": "그리워하다"
  },
  {
    "kanji": "養う",
    "hiragana": "やしなう",
    "meaning": "기르다, 양육하다"
  },
  {
    "kanji": "整える",
    "hiragana": "ととのえる",
    "meaning": "정돈하다, 갖추다"
  },
  {
    "kanji": "吠える",
    "hiragana": "ほえる",
    "meaning": "짖다"
  },
  {
    "kanji": "抱く",
    "hiragana": "いだく",
    "meaning": "안다, 품다"
  },
  {
    "kanji": "輝く",
    "hiragana": "かがやく",
    "meaning": "빛나다"
  },
  {
    "kanji": "乾く",
    "hiragana": "かわく",
    "meaning": "마르다"
  },
  {
    "kanji": "効く",
    "hiragana": "きく",
    "meaning": "효과가 있다"
  },
  {
    "kanji": "叩く",
    "hiragana": "たたく",
    "meaning": "두드리다"
  },
  {
    "kanji": "嘆く",
    "hiragana": "なげく",
    "meaning": "탄식하다, 한탄하다"
  },
  {
    "kanji": "開く",
    "hiragana": "ひらく",
    "meaning": "열리다"
  },
  {
    "kanji": "下げる",
    "hiragana": "さげる",
    "meaning": "내리다"
  },
  {
    "kanji": "妨げる",
    "hiragana": "さまたげる",
    "meaning": "방해하다"
  },
  {
    "kanji": "越す",
    "hiragana": "こす",
    "meaning": "넘다"
  },
  {
    "kanji": "耕す",
    "hiragana": "たがやす",
    "meaning": "갈다, 경작하다"
  },
  {
    "kanji": "催す",
    "hiragana": "もよおす",
    "meaning": "개최하다"
  },
  {
    "kanji": "許す",
    "hiragana": "ゆるす",
    "meaning": "허락하다, 용서하다"
  },
  {
    "kanji": "叫ぶ",
    "hiragana": "さけぶ",
    "meaning": "소리치다, 외치다"
  },
  {
    "kanji": "沈む",
    "hiragana": "しずむ",
    "meaning": "가라앉다, 침몰하다"
  },
  {
    "kanji": "固める",
    "hiragana": "かためる",
    "meaning": "굳히다, 단단히 하다"
  },
  {
    "kanji": "憧れる",
    "hiragana": "あこがれる",
    "meaning": "동경하다"
  },
  {
    "kanji": "溢れる",
    "hiragana": "あふれる",
    "meaning": "(흘러)넘치다"
  },
  {
    "kanji": "恐れる",
    "hiragana": "おそれる",
    "meaning": "두려워하다"
  },
  {
    "kanji": "粗い",
    "hiragana": "あらい",
    "meaning": "조잡하다"
  },
  {
    "kanji": "淡い",
    "hiragana": "あわい",
    "meaning": "옅다"
  },
  {
    "kanji": "清い",
    "hiragana": "きよい",
    "meaning": "맑다, 깨끗하다"
  },
  {
    "kanji": "狡い",
    "hiragana": "ずるい",
    "meaning": "교활하다, 능글맞다"
  },
  {
    "kanji": "酷い",
    "hiragana": "ひどい",
    "meaning": "심하다"
  },
  {
    "kanji": "羨ましい",
    "hiragana": "うらやましい",
    "meaning": "부럽다"
  },
  {
    "kanji": "大人しい",
    "hiragana": "おとなしい",
    "meaning": "얌전하다"
  },
  {
    "kanji": "重々しい",
    "hiragana": "おもおもしい",
    "meaning": "무게 있다"
  },
  {
    "kanji": "悲しい",
    "hiragana": "かなしい",
    "meaning": "슬프다"
  },
  {
    "kanji": "厳しい",
    "hiragana": "きびしい",
    "meaning": "엄격하다"
  },
  {
    "kanji": "詳しい",
    "hiragana": "くわしい",
    "meaning": "자세하다"
  },
  {
    "kanji": "寂しい",
    "hiragana": "さびしい",
    "meaning": "외롭다, 쓸쓸하다"
  },
  {
    "kanji": "図々しい",
    "hiragana": "ずうずうしい",
    "meaning": "뻔뻔하다"
  },
  {
    "kanji": "望ましい",
    "hiragana": "のぞましい",
    "meaning": "바람직하다"
  },
  {
    "kanji": "貧しい",
    "hiragana": "まずしい",
    "meaning": "가난하다, 빈곤하다"
  },
  {
    "kanji": "空しい",
    "hiragana": "むなしい",
    "meaning": "허무하다, 공허하다"
  },
  {
    "kanji": "目覚しい",
    "hiragana": "めざましい",
    "meaning": "눈부시다"
  },
  {
    "kanji": "珍しい",
    "hiragana": "めずらしい",
    "meaning": "희귀하다, 드물다"
  },
  {
    "kanji": "優しい",
    "hiragana": "やさしい",
    "meaning": "다정하다"
  },
  {
    "kanji": "若々しい",
    "hiragana": "わかわかしい",
    "meaning": "젊디젊다"
  },
  {
    "kanji": "過激だ",
    "hiragana": "かげきだ",
    "meaning": "과격하다"
  },
  {
    "kanji": "勝手だ",
    "hiragana": "かってだ",
    "meaning": "제멋대로이다"
  },
  {
    "kanji": "簡潔だ",
    "hiragana": "かんけつだ",
    "meaning": "간결하다"
  },
  {
    "kanji": "危険だ",
    "hiragana": "きけんだ",
    "meaning": "위험하다"
  },
  {
    "kanji": "軽率だ",
    "hiragana": "けいそつだ",
    "meaning": "경솔하다"
  },
  {
    "kanji": "結構だ",
    "hiragana": "けっこうだ",
    "meaning": "훌륭하다"
  },
  {
    "kanji": "厳重だ",
    "hiragana": "げんじゅうだ",
    "meaning": "엄중하다"
  },
  {
    "kanji": "賢明だ",
    "hiragana": "けんめいだ",
    "meaning": "현명하다"
  },
  {
    "kanji": "強引だ",
    "hiragana": "ごういんだ",
    "meaning": "강압적이다"
  },
  {
    "kanji": "短気だ",
    "hiragana": "たんきだ",
    "meaning": "성미가 급하다"
  },
  {
    "kanji": "微妙だ",
    "hiragana": "びみょうだ",
    "meaning": "미묘하다"
  },
  {
    "kanji": "平等だ",
    "hiragana": "びょうどうだ",
    "meaning": "평등하다"
  },
  {
    "kanji": "面倒だ",
    "hiragana": "めんどうだ",
    "meaning": "귀찮다"
  },
  {
    "kanji": "有効だ",
    "hiragana": "ゆうこうだ",
    "meaning": "유효하다"
  },
  {
    "kanji": "陽気だ",
    "hiragana": "ようきだ",
    "meaning": "쾌활하다"
  },
  {
    "kanji": "利口だ",
    "hiragana": "りこうだ",
    "meaning": "영리하다"
  },
  {
    "kanji": "細やかだ",
    "hiragana": "こまやかだ",
    "meaning": "세세하다"
  },
  {
    "kanji": "賑やかだ",
    "hiragana": "にぎやかだ",
    "meaning": "번화하다"
  },
  {
    "kanji": "永久",
    "hiragana": "えいきゅう",
    "meaning": "영구"
  },
  {
    "kanji": "管理",
    "hiragana": "かんり",
    "meaning": "관리"
  },
  {
    "kanji": "傾向",
    "hiragana": "けいこう",
    "meaning": "경향"
  },
  {
    "kanji": "視察",
    "hiragana": "しさつ",
    "meaning": "시찰"
  },
  {
    "kanji": "捨てる",
    "hiragana": "すてる",
    "meaning": "버리다"
  },
  {
    "kanji": "至る",
    "hiragana": "いたる",
    "meaning": "이르다"
  },
  {
    "kanji": "削る",
    "hiragana": "けずる",
    "meaning": "깎다, 삭감하다"
  },
  {
    "kanji": "去る",
    "hiragana": "さる",
    "meaning": "떠나다, 지나가다"
  },
  {
    "kanji": "演習",
    "hiragana": "えんしゅう",
    "meaning": "연습, 실습"
  },
  {
    "kanji": "大勢",
    "hiragana": "おおぜい",
    "meaning": "많은 사람"
  },
  {
    "kanji": "帯",
    "hiragana": "おび",
    "meaning": "띠"
  },
  {
    "kanji": "機嫌",
    "hiragana": "きげん",
    "meaning": "기분, 기색"
  },
  {
    "kanji": "希望",
    "hiragana": "きぼう",
    "meaning": "희망"
  },
  {
    "kanji": "警護",
    "hiragana": "けいご",
    "meaning": "경호"
  },
  {
    "kanji": "毛糸",
    "hiragana": "けいと",
    "meaning": "털실"
  },
  {
    "kanji": "研修",
    "hiragana": "けんしゅう",
    "meaning": "연수"
  },
  {
    "kanji": "故郷",
    "hiragana": "こきょう",
    "meaning": "고향"
  },
  {
    "kanji": "衣",
    "hiragana": "ころも",
    "meaning": "옷, 의복"
  },
  {
    "kanji": "施設",
    "hiragana": "しせつ",
    "meaning": "시설"
  },
  {
    "kanji": "志望",
    "hiragana": "しぼう",
    "meaning": "지망"
  },
  {
    "kanji": "弱点",
    "hiragana": "じゃくてん",
    "meaning": "약점"
  },
  {
    "kanji": "住居",
    "hiragana": "じゅうきょ",
    "meaning": "주거"
  },
  {
    "kanji": "住宅",
    "hiragana": "じゅうたく",
    "meaning": "주택"
  },
  {
    "kanji": "受講",
    "hiragana": "じゅこう",
    "meaning": "수강"
  },
  {
    "kanji": "情",
    "hiragana": "じょう",
    "meaning": "정"
  },
  {
    "kanji": "消失",
    "hiragana": "しょうしつ",
    "meaning": "소실"
  },
  {
    "kanji": "診察",
    "hiragana": "しんさつ",
    "meaning": "진찰"
  },
  {
    "kanji": "診断",
    "hiragana": "しんだん",
    "meaning": "진단"
  },
  {
    "kanji": "選挙",
    "hiragana": "せんきょ",
    "meaning": "선거"
  },
  {
    "kanji": "損失",
    "hiragana": "そんしつ",
    "meaning": "손실"
  },
  {
    "kanji": "短編",
    "hiragana": "たんぺん",
    "meaning": "단편"
  },
  {
    "kanji": "投票",
    "hiragana": "とうひょう",
    "meaning": "투표"
  },
  {
    "kanji": "布",
    "hiragana": "ぬの",
    "meaning": "천"
  },
  {
    "kanji": "俳優",
    "hiragana": "はいゆう",
    "meaning": "배우"
  },
  {
    "kanji": "避難",
    "hiragana": "ひなん",
    "meaning": "피난"
  },
  {
    "kanji": "疲労",
    "hiragana": "ひろう",
    "meaning": "피로"
  },
  {
    "kanji": "袋",
    "hiragana": "ふくろ",
    "meaning": "봉투"
  },
  {
    "kanji": "返品",
    "hiragana": "へんぴん",
    "meaning": "반품"
  },
  {
    "kanji": "欲",
    "hiragana": "よく",
    "meaning": "욕심"
  },
  {
    "kanji": "失う",
    "hiragana": "うしなう",
    "meaning": "잃다"
  },
  {
    "kanji": "敬う",
    "hiragana": "うやまう",
    "meaning": "공경하다"
  },
  {
    "kanji": "押える",
    "hiragana": "おさえる",
    "meaning": "억누르다, 누르다"
  },
  {
    "kanji": "準える",
    "hiragana": "なぞらえる",
    "meaning": "견주다, 비교하다"
  },
  {
    "kanji": "就く",
    "hiragana": "つく",
    "meaning": "취임하다"
  },
  {
    "kanji": "任せる",
    "hiragana": "まかせる",
    "meaning": "맡기다"
  },
  {
    "kanji": "捕まえる",
    "hiragana": "つかまえる",
    "meaning": "붙잡다"
  },
  {
    "kanji": "積もる",
    "hiragana": "つもる",
    "meaning": "쌓이다"
  },
  {
    "kanji": "散る",
    "hiragana": "ちる",
    "meaning": "(꽃이) 지다"
  },
  {
    "kanji": "照る",
    "hiragana": "てる",
    "meaning": "비추다, 빛나다"
  },
  {
    "kanji": "掘る",
    "hiragana": "ほる",
    "meaning": "파다"
  },
  {
    "kanji": "逃れる",
    "hiragana": "のがれる",
    "meaning": "피하다, 도망치다"
  },
  {
    "kanji": "別れる",
    "hiragana": "わかれる",
    "meaning": "헤어지다, 이별하다"
  },
  {
    "kanji": "柔らかい",
    "hiragana": "やわらかい",
    "meaning": "부드럽다"
  },
  {
    "kanji": "乱暴だ",
    "hiragana": "らんぼうだ",
    "meaning": "난폭하다"
  },
  {
    "kanji": "豊かだ",
    "hiragana": "ゆたかだ",
    "meaning": "풍부하다, 유복하다"
  },
  {
    "kanji": "絶えず",
    "hiragana": "たえず",
    "meaning": "끊임없이"
  },
  {
    "kanji": "違反",
    "hiragana": "いはん",
    "meaning": "위반"
  },
  {
    "kanji": "帰省",
    "hiragana": "きせい",
    "meaning": "귀성"
  },
  {
    "kanji": "救う",
    "hiragana": "すくう",
    "meaning": "구하다, 구제하다"
  },
  {
    "kanji": "快い",
    "hiragana": "こころよい",
    "meaning": "상쾌하다, 유쾌하다"
  },
  {
    "kanji": "好調だ",
    "hiragana": "こうちょうだ",
    "meaning": "순조롭다, 호조이다"
  },
  {
    "kanji": "異色",
    "hiragana": "いしょく",
    "meaning": "이색"
  },
  {
    "kanji": "売れ行き",
    "hiragana": "うれゆき",
    "meaning": "팔림새"
  },
  {
    "kanji": "演技",
    "hiragana": "えんぎ",
    "meaning": "연기"
  },
  {
    "kanji": "お札",
    "hiragana": "おさつ",
    "meaning": "지폐"
  },
  {
    "kanji": "害",
    "hiragana": "がい",
    "meaning": "해"
  },
  {
    "kanji": "快調",
    "hiragana": "かいちょう",
    "meaning": "쾌조"
  },
  {
    "kanji": "係員",
    "hiragana": "かかりいん",
    "meaning": "담당자"
  },
  {
    "kanji": "拡張",
    "hiragana": "かくちょう",
    "meaning": "확장"
  },
  {
    "kanji": "看護",
    "hiragana": "かんご",
    "meaning": "간호"
  },
  {
    "kanji": "系統",
    "hiragana": "けいとう",
    "meaning": "계통"
  },
  {
    "kanji": "硬貨",
    "hiragana": "こうか",
    "meaning": "금속 화폐, 동전"
  },
  {
    "kanji": "在籍",
    "hiragana": "ざいせき",
    "meaning": "재적"
  },
  {
    "kanji": "参考",
    "hiragana": "さんこう",
    "meaning": "참고"
  },
  {
    "kanji": "参照",
    "hiragana": "さんしょう",
    "meaning": "참조"
  },
  {
    "kanji": "指示",
    "hiragana": "しじ",
    "meaning": "지시"
  },
  {
    "kanji": "実施",
    "hiragana": "じっし",
    "meaning": "실시"
  },
  {
    "kanji": "出張",
    "hiragana": "しゅっちょう",
    "meaning": "출장"
  },
  {
    "kanji": "趣味",
    "hiragana": "しゅみ",
    "meaning": "취미"
  },
  {
    "kanji": "症状",
    "hiragana": "しょうじょう",
    "meaning": "증상"
  },
  {
    "kanji": "精算",
    "hiragana": "せいさん",
    "meaning": "정산"
  },
  {
    "kanji": "製造",
    "hiragana": "せいぞう",
    "meaning": "제조"
  },
  {
    "kanji": "損",
    "hiragana": "そん",
    "meaning": "손해"
  },
  {
    "kanji": "団体",
    "hiragana": "だんたい",
    "meaning": "단체"
  },
  {
    "kanji": "罪",
    "hiragana": "つみ",
    "meaning": "죄"
  },
  {
    "kanji": "討議",
    "hiragana": "とうぎ",
    "meaning": "토의"
  },
  {
    "kanji": "毒",
    "hiragana": "どく",
    "meaning": "독"
  },
  {
    "kanji": "発行",
    "hiragana": "はっこう",
    "meaning": "발행"
  },
  {
    "kanji": "保証",
    "hiragana": "ほしょう",
    "meaning": "보증"
  },
  {
    "kanji": "本日",
    "hiragana": "ほんじつ",
    "meaning": "금일, 오늘"
  },
  {
    "kanji": "目標",
    "hiragana": "もくひょう",
    "meaning": "목표"
  },
  {
    "kanji": "催し",
    "hiragana": "もよおし",
    "meaning": "모임, 행사"
  },
  {
    "kanji": "陽気",
    "hiragana": "ようき",
    "meaning": "양기, 명랑함"
  },
  {
    "kanji": "従う",
    "hiragana": "したがう",
    "meaning": "따르다"
  },
  {
    "kanji": "沿う",
    "hiragana": "そう",
    "meaning": "따르다,따라가다"
  },
  {
    "kanji": "伝える",
    "hiragana": "つたえる",
    "meaning": "전하다"
  },
  {
    "kanji": "迎える",
    "hiragana": "むかえる",
    "meaning": "맞이하다"
  },
  {
    "kanji": "抜く",
    "hiragana": "ぬく",
    "meaning": "뽑다, 빼내다"
  },
  {
    "kanji": "省く",
    "hiragana": "はぶく",
    "meaning": "줄이다, 생략하다"
  },
  {
    "kanji": "招く",
    "hiragana": "まねく",
    "meaning": "초대하다, 부르다"
  },
  {
    "kanji": "焦げる",
    "hiragana": "こげる",
    "meaning": "타다"
  },
  {
    "kanji": "応じる",
    "hiragana": "おうじる",
    "meaning": "응하다"
  },
  {
    "kanji": "混じる",
    "hiragana": "まじる",
    "meaning": "섞다"
  },
  {
    "kanji": "推す",
    "hiragana": "おす",
    "meaning": "밀다, 추천하다"
  },
  {
    "kanji": "見逃す",
    "hiragana": "みのがす",
    "meaning": "놓치다"
  },
  {
    "kanji": "束ねる",
    "hiragana": "たばねる",
    "meaning": "묶다"
  },
  {
    "kanji": "踏む",
    "hiragana": "ふむ",
    "meaning": "밟다"
  },
  {
    "kanji": "縮める",
    "hiragana": "ちぢめる",
    "meaning": "줄어들다"
  },
  {
    "kanji": "配る",
    "hiragana": "くばる",
    "meaning": "나눠주다"
  },
  {
    "kanji": "凍る",
    "hiragana": "こおる",
    "meaning": "얼다"
  },
  {
    "kanji": "荒い",
    "hiragana": "あらい",
    "meaning": "거칠다"
  },
  {
    "kanji": "濃い",
    "hiragana": "こい",
    "meaning": "진하다, 짙다"
  },
  {
    "kanji": "真っ白い",
    "hiragana": "まっしろい",
    "meaning": "새하얗다"
  },
  {
    "kanji": "永遠だ",
    "hiragana": "えいえんだ",
    "meaning": "영원하다"
  },
  {
    "kanji": "急だ",
    "hiragana": "きゅうだ",
    "meaning": "급하다"
  },
  {
    "kanji": "具体的だ",
    "hiragana": "ぐたいてきだ",
    "meaning": "구체적이다"
  },
  {
    "kanji": "収穫",
    "hiragana": "しゅうかく",
    "meaning": "수확"
  },
  {
    "kanji": "接続",
    "hiragana": "せつぞく",
    "meaning": "접속"
  },
  {
    "kanji": "討論",
    "hiragana": "とうろん",
    "meaning": "토론"
  },
  {
    "kanji": "福祉",
    "hiragana": "ふくし",
    "meaning": "복지"
  },
  {
    "kanji": "争う",
    "hiragana": "あらそう",
    "meaning": "다투다"
  },
  {
    "kanji": "真剣だ",
    "hiragana": "しんけんだ",
    "meaning": "진지하다"
  },
  {
    "kanji": "勢い",
    "hiragana": "いきおい",
    "meaning": "기세"
  },
  {
    "kanji": "援助",
    "hiragana": "えんじょ",
    "meaning": "원조"
  },
  {
    "kanji": "開催",
    "hiragana": "かいさい",
    "meaning": "개최"
  },
  {
    "kanji": "寄付",
    "hiragana": "きふ",
    "meaning": "기부"
  },
  {
    "kanji": "距離",
    "hiragana": "きょり",
    "meaning": "거리"
  },
  {
    "kanji": "講義",
    "hiragana": "こうぎ",
    "meaning": "강의"
  },
  {
    "kanji": "講師",
    "hiragana": "こうし",
    "meaning": "강사"
  },
  {
    "kanji": "混乱",
    "hiragana": "こんらん",
    "meaning": "혼란"
  },
  {
    "kanji": "指摘",
    "hiragana": "してき",
    "meaning": "지적"
  },
  {
    "kanji": "塾",
    "hiragana": "じゅく",
    "meaning": "학원"
  },
  {
    "kanji": "出世",
    "hiragana": "しゅっせ",
    "meaning": "출세"
  },
  {
    "kanji": "招待",
    "hiragana": "しょうたい",
    "meaning": "초대"
  },
  {
    "kanji": "象徴",
    "hiragana": "しょうちょう",
    "meaning": "상징"
  },
  {
    "kanji": "組織",
    "hiragana": "そしき",
    "meaning": "조직"
  },
  {
    "kanji": "抵抗",
    "hiragana": "ていこう",
    "meaning": "저항"
  },
  {
    "kanji": "手帳",
    "hiragana": "てちょう",
    "meaning": "수첩"
  },
  {
    "kanji": "伝授",
    "hiragana": "でんじゅ",
    "meaning": "전수"
  },
  {
    "kanji": "伝承",
    "hiragana": "でんしょう",
    "meaning": "전승"
  },
  {
    "kanji": "伝達",
    "hiragana": "でんたつ",
    "meaning": "전달"
  },
  {
    "kanji": "伝統",
    "hiragana": "でんとう",
    "meaning": "전통"
  },
  {
    "kanji": "登録",
    "hiragana": "とうろく",
    "meaning": "등록"
  },
  {
    "kanji": "批判",
    "hiragana": "ひはん",
    "meaning": "비판"
  },
  {
    "kanji": "変更",
    "hiragana": "へんこう",
    "meaning": "변경"
  },
  {
    "kanji": "補助",
    "hiragana": "ほじょ",
    "meaning": "보조"
  },
  {
    "kanji": "礼儀",
    "hiragana": "れいぎ",
    "meaning": "예의"
  },
  {
    "kanji": "抗う",
    "hiragana": "あらがう",
    "meaning": "저항하다"
  },
  {
    "kanji": "負う",
    "hiragana": "おう",
    "meaning": "지다, 짊어지다"
  },
  {
    "kanji": "誘う",
    "hiragana": "さそう",
    "meaning": "권하다"
  },
  {
    "kanji": "拾う",
    "hiragana": "ひろう",
    "meaning": "줍다"
  },
  {
    "kanji": "与える",
    "hiragana": "あたえる",
    "meaning": "주다"
  },
  {
    "kanji": "驚く",
    "hiragana": "おどろく",
    "meaning": "놀라다"
  },
  {
    "kanji": "導く",
    "hiragana": "みちびく",
    "meaning": "인도하다"
  },
  {
    "kanji": "属する",
    "hiragana": "ぞくする",
    "meaning": "속하다"
  },
  {
    "kanji": "果たす",
    "hiragana": "はたす",
    "meaning": "(역할을) 완수하다"
  },
  {
    "kanji": "重ねる",
    "hiragana": "かさねる",
    "meaning": "포개다, 겹치다"
  },
  {
    "kanji": "尋ねる",
    "hiragana": "たずねる",
    "meaning": "찾다, 묻다"
  },
  {
    "kanji": "責める",
    "hiragana": "せめる",
    "meaning": "탓하다, 책망하다"
  },
  {
    "kanji": "努める",
    "hiragana": "つとめる",
    "meaning": "노력하다, 힘쓰다"
  },
  {
    "kanji": "逆らう",
    "hiragana": "さからう",
    "meaning": "거스르다, 반항하다"
  },
  {
    "kanji": "暮らす",
    "hiragana": "くらす",
    "meaning": "살다, 생활하다"
  },
  {
    "kanji": "頼る",
    "hiragana": "たよる",
    "meaning": "의지하다"
  },
  {
    "kanji": "守る",
    "hiragana": "まもる",
    "meaning": "지키다"
  },
  {
    "kanji": "訪れる",
    "hiragana": "おとずれる",
    "meaning": "찾아오다"
  },
  {
    "kanji": "破れる",
    "hiragana": "やぶれる",
    "meaning": "찢어지다"
  },
  {
    "kanji": "湿っぽい",
    "hiragana": "しめっぽい",
    "meaning": "축축하다"
  },
  {
    "kanji": "晴やかだ",
    "hiragana": "はれやかだ",
    "meaning": "쾌청하다"
  },
  {
    "kanji": "即座に",
    "hiragana": "そくざに",
    "meaning": "즉시, 즉각"
  },
  {
    "kanji": "沿岸",
    "hiragana": "えんがん",
    "meaning": "연안"
  },
  {
    "kanji": "演劇",
    "hiragana": "えんげき",
    "meaning": "연극"
  },
  {
    "kanji": "演出",
    "hiragana": "えんしゅつ",
    "meaning": "연출"
  },
  {
    "kanji": "応募",
    "hiragana": "おうぼ",
    "meaning": "응모"
  },
  {
    "kanji": "開場",
    "hiragana": "かいじょう",
    "meaning": "개장"
  },
  {
    "kanji": "拡大",
    "hiragana": "かくだい",
    "meaning": "확대"
  },
  {
    "kanji": "家訓",
    "hiragana": "かくん",
    "meaning": "가훈"
  },
  {
    "kanji": "間隔",
    "hiragana": "かんかく",
    "meaning": "간격"
  },
  {
    "kanji": "観測",
    "hiragana": "かんそく",
    "meaning": "관측"
  },
  {
    "kanji": "奇数",
    "hiragana": "きすう",
    "meaning": "홀수"
  },
  {
    "kanji": "救済",
    "hiragana": "きゅうさい",
    "meaning": "구제"
  },
  {
    "kanji": "協力",
    "hiragana": "きょうりょく",
    "meaning": "협력"
  },
  {
    "kanji": "空想",
    "hiragana": "くうそう",
    "meaning": "공상"
  },
  {
    "kanji": "空腹",
    "hiragana": "くうふく",
    "meaning": "공복"
  },
  {
    "kanji": "経営",
    "hiragana": "けいえい",
    "meaning": "경영"
  },
  {
    "kanji": "決意",
    "hiragana": "けつい",
    "meaning": "결의"
  },
  {
    "kanji": "現状",
    "hiragana": "げんじょう",
    "meaning": "현 상태"
  },
  {
    "kanji": "幻想",
    "hiragana": "げんそう",
    "meaning": "환상"
  },
  {
    "kanji": "検討",
    "hiragana": "けんとう",
    "meaning": "검토"
  },
  {
    "kanji": "減量",
    "hiragana": "げんりょう",
    "meaning": "감량"
  },
  {
    "kanji": "功績",
    "hiragana": "こうせき",
    "meaning": "공적"
  },
  {
    "kanji": "講堂",
    "hiragana": "こうどう",
    "meaning": "강당"
  },
  {
    "kanji": "公募",
    "hiragana": "こうぼ",
    "meaning": "공모"
  },
  {
    "kanji": "効率",
    "hiragana": "こうりつ",
    "meaning": "효율"
  },
  {
    "kanji": "故障",
    "hiragana": "こしょう",
    "meaning": "고장"
  },
  {
    "kanji": "誇張",
    "hiragana": "こちょう",
    "meaning": "과장"
  },
  {
    "kanji": "混雑",
    "hiragana": "こんざつ",
    "meaning": "혼잡"
  },
  {
    "kanji": "裁判",
    "hiragana": "さいばん",
    "meaning": "재판"
  },
  {
    "kanji": "拾得",
    "hiragana": "しゅうとく",
    "meaning": "습득"
  },
  {
    "kanji": "趣旨",
    "hiragana": "しゅし",
    "meaning": "취지"
  },
  {
    "kanji": "瞬間",
    "hiragana": "しゅんかん",
    "meaning": "순간"
  },
  {
    "kanji": "障害",
    "hiragana": "しょうがい",
    "meaning": "장애, 장해"
  },
  {
    "kanji": "詳細",
    "hiragana": "しょうさい",
    "meaning": "상세"
  },
  {
    "kanji": "招来",
    "hiragana": "しょうらい",
    "meaning": "초래"
  },
  {
    "kanji": "助言",
    "hiragana": "じょげん",
    "meaning": "조언"
  },
  {
    "kanji": "徐行",
    "hiragana": "じょこう",
    "meaning": "서행"
  },
  {
    "kanji": "制限",
    "hiragana": "せいげん",
    "meaning": "제한"
  },
  {
    "kanji": "設計",
    "hiragana": "せっけい",
    "meaning": "설계"
  },
  {
    "kanji": "先祖",
    "hiragana": "せんぞ",
    "meaning": "선조"
  },
  {
    "kanji": "倉庫",
    "hiragana": "そうこ",
    "meaning": "창고"
  },
  {
    "kanji": "題材",
    "hiragana": "だいざい",
    "meaning": "소재, 주제"
  },
  {
    "kanji": "対等",
    "hiragana": "たいとう",
    "meaning": "대등"
  },
  {
    "kanji": "題名",
    "hiragana": "だいめい",
    "meaning": "제목"
  },
  {
    "kanji": "脱落",
    "hiragana": "だつらく",
    "meaning": "탈락"
  },
  {
    "kanji": "知性",
    "hiragana": "ちせい",
    "meaning": "지성"
  },
  {
    "kanji": "秩序",
    "hiragana": "ちつじょ",
    "meaning": "질서"
  },
  {
    "kanji": "挑戦",
    "hiragana": "ちょうせん",
    "meaning": "도전"
  },
  {
    "kanji": "田園",
    "hiragana": "でんえん",
    "meaning": "전원"
  },
  {
    "kanji": "同情",
    "hiragana": "どうじょう",
    "meaning": "동정"
  },
  {
    "kanji": "特権",
    "hiragana": "とっけん",
    "meaning": "특권"
  },
  {
    "kanji": "鈍感",
    "hiragana": "どんかん",
    "meaning": "둔감"
  },
  {
    "kanji": "濃度",
    "hiragana": "のうど",
    "meaning": "농도"
  },
  {
    "kanji": "繁栄",
    "hiragana": "はんえい",
    "meaning": "번영"
  },
  {
    "kanji": "判断",
    "hiragana": "はんだん",
    "meaning": "판단"
  },
  {
    "kanji": "比較",
    "hiragana": "ひかく",
    "meaning": "비교"
  },
  {
    "kanji": "比率",
    "hiragana": "ひりつ",
    "meaning": "비율"
  },
  {
    "kanji": "復興",
    "hiragana": "ふっこう",
    "meaning": "부흥"
  },
  {
    "kanji": "付録",
    "hiragana": "ふろく",
    "meaning": "부록"
  },
  {
    "kanji": "冒険",
    "hiragana": "ぼうけん",
    "meaning": "모험"
  },
  {
    "kanji": "防止",
    "hiragana": "ぼうし",
    "meaning": "방지"
  },
  {
    "kanji": "包装",
    "hiragana": "ほうそう",
    "meaning": "포장"
  },
  {
    "kanji": "補給",
    "hiragana": "ほきゅう",
    "meaning": "보급"
  },
  {
    "kanji": "免許",
    "hiragana": "めんきょ",
    "meaning": "면허"
  },
  {
    "kanji": "領土",
    "hiragana": "りょうど",
    "meaning": "영토"
  },
  {
    "kanji": "録音",
    "hiragana": "ろくおん",
    "meaning": "녹음"
  },
  {
    "kanji": "跡継ぎ",
    "hiragana": "あとつぎ",
    "meaning": "후계자"
  },
  {
    "kanji": "傾き",
    "hiragana": "かたむき",
    "meaning": "기울기, 경사"
  },
  {
    "kanji": "暮れ",
    "hiragana": "くれ",
    "meaning": "연말, 해 질 녘"
  },
  {
    "kanji": "滴",
    "hiragana": "しずく",
    "meaning": "물방울"
  },
  {
    "kanji": "請う",
    "hiragana": "こう",
    "meaning": "청하다, 부탁하다"
  },
  {
    "kanji": "替える",
    "hiragana": "かえる",
    "meaning": "바꾸다"
  },
  {
    "kanji": "換える",
    "hiragana": "かえる",
    "meaning": "교환하다"
  },
  {
    "kanji": "枯れる",
    "hiragana": "かれる",
    "meaning": "시들다, 마르다"
  },
  {
    "kanji": "着替える",
    "hiragana": "きがえる",
    "meaning": "갈아입다"
  },
  {
    "kanji": "預かる",
    "hiragana": "あずかる",
    "meaning": "맡다"
  },
  {
    "kanji": "召し上がる",
    "hiragana": "めしあがる",
    "meaning": "드시다"
  },
  {
    "kanji": "相次ぐ",
    "hiragana": "あいつぐ",
    "meaning": "잇따르다"
  },
  {
    "kanji": "揚げる",
    "hiragana": "あげる",
    "meaning": "높이 올리다"
  },
  {
    "kanji": "通じる",
    "hiragana": "つうじる",
    "meaning": "통하다, 이해되다"
  },
  {
    "kanji": "壊す",
    "hiragana": "こわす",
    "meaning": "부수다"
  },
  {
    "kanji": "減らす",
    "hiragana": "へらす",
    "meaning": "줄이다"
  },
  {
    "kanji": "召す",
    "hiragana": "めす",
    "meaning": "드시다, 입다"
  },
  {
    "kanji": "害する",
    "hiragana": "がいする",
    "meaning": "해치다"
  },
  {
    "kanji": "損する",
    "hiragana": "そんする",
    "meaning": "손해 보다"
  },
  {
    "kanji": "罪する",
    "hiragana": "つみする",
    "meaning": "처벌하다"
  },
  {
    "kanji": "毒する",
    "hiragana": "どくする",
    "meaning": "해치다"
  },
  {
    "kanji": "慌てる",
    "hiragana": "あわてる",
    "meaning": "당황하다"
  },
  {
    "kanji": "結ぶ",
    "hiragana": "むすぶ",
    "meaning": "맺다, 묶다"
  },
  {
    "kanji": "摘む",
    "hiragana": "つむ",
    "meaning": "따다, 꺾다"
  },
  {
    "kanji": "微笑む",
    "hiragana": "ほほえむ",
    "meaning": "미소짓다"
  },
  {
    "kanji": "勧める",
    "hiragana": "すすめる",
    "meaning": "권하다, 추천하다"
  },
  {
    "kanji": "縛る",
    "hiragana": "しばる",
    "meaning": "묶다"
  },
  {
    "kanji": "光る",
    "hiragana": "ひかる",
    "meaning": "빛나다"
  },
  {
    "kanji": "隠れる",
    "hiragana": "かくれる",
    "meaning": "숨다"
  },
  {
    "kanji": "壊れる",
    "hiragana": "こわれる",
    "meaning": "부서지다"
  },
  {
    "kanji": "潔い",
    "hiragana": "いさぎよい",
    "meaning": "(미련 없이) 깨끗하다"
  },
  {
    "kanji": "薄い",
    "hiragana": "うすい",
    "meaning": "얇다, 희박하다"
  },
  {
    "kanji": "硬い",
    "hiragana": "かたい",
    "meaning": "딱딱하다, 단단하다"
  },
  {
    "kanji": "可愛い",
    "hiragana": "かわいい",
    "meaning": "귀엽다"
  },
  {
    "kanji": "尊い",
    "hiragana": "とうとい",
    "meaning": "귀중하다"
  },
  {
    "kanji": "名高い",
    "hiragana": "なだかい",
    "meaning": "유명하다"
  },
  {
    "kanji": "分厚い",
    "hiragana": "ぶあつい",
    "meaning": "두툼하다"
  },
  {
    "kanji": "深い",
    "hiragana": "ふかい",
    "meaning": "깊다"
  },
  {
    "kanji": "古い",
    "hiragana": "ふるい",
    "meaning": "오래다"
  },
  {
    "kanji": "醜い",
    "hiragana": "みにくい",
    "meaning": "보기 흉하다"
  },
  {
    "kanji": "弱い",
    "hiragana": "よわい",
    "meaning": "약하다"
  },
  {
    "kanji": "若い",
    "hiragana": "わかい",
    "meaning": "젊다"
  },
  {
    "kanji": "暖かい",
    "hiragana": "あたたかい",
    "meaning": "따뜻하다, 포근하다"
  },
  {
    "kanji": "細かい",
    "hiragana": "こまかい",
    "meaning": "잘다, 세세하다"
  },
  {
    "kanji": "軟らかい",
    "hiragana": "やわらかい",
    "meaning": "부드럽다"
  },
  {
    "kanji": "可笑しい",
    "hiragana": "おかしい",
    "meaning": "이상하다"
  },
  {
    "kanji": "新ただ",
    "hiragana": "あらただ",
    "meaning": "새롭다"
  },
  {
    "kanji": "円滑だ",
    "hiragana": "えんかつだ",
    "meaning": "원활하다"
  },
  {
    "kanji": "快適だ",
    "hiragana": "かいてきだ",
    "meaning": "쾌적하다, 편안하다"
  },
  {
    "kanji": "格別だ",
    "hiragana": "かくべつだ",
    "meaning": "각별하다"
  },
  {
    "kanji": "奇妙だ",
    "hiragana": "きみょうだ",
    "meaning": "기묘하다"
  },
  {
    "kanji": "広大だ",
    "hiragana": "こうだいだ",
    "meaning": "광대하다"
  },
  {
    "kanji": "小柄だ",
    "hiragana": "こがらだ",
    "meaning": "몸집이 작다"
  },
  {
    "kanji": "質素だ",
    "hiragana": "しっそだ",
    "meaning": "검소하다"
  },
  {
    "kanji": "地味だ",
    "hiragana": "じみだ",
    "meaning": "수수하다"
  },
  {
    "kanji": "素敵だ",
    "hiragana": "すてきだ",
    "meaning": "멋지다, 근사하다"
  },
  {
    "kanji": "手頃だ",
    "hiragana": "てごろだ",
    "meaning": "알맞다, 적당하다"
  },
  {
    "kanji": "平凡だ",
    "hiragana": "へいぼんだ",
    "meaning": "평범하다"
  },
  {
    "kanji": "無口だ",
    "hiragana": "むくちだ",
    "meaning": "과묵하다"
  },
  {
    "kanji": "明確だ",
    "hiragana": "めいかくだ",
    "meaning": "명확하다"
  },
  {
    "kanji": "朗らかだ",
    "hiragana": "ほがらかだ",
    "meaning": "명랑하다"
  },
  {
    "kanji": "壁際",
    "hiragana": "かべぎわ",
    "meaning": "벽가, 벽 옆"
  },
  {
    "kanji": "食べづらい",
    "hiragana": "たべづらい",
    "meaning": "먹기 힘들다"
  },
  {
    "kanji": "家族連れ",
    "hiragana": "かぞくづれ",
    "meaning": "가족 동반"
  },
  {
    "kanji": "異文化",
    "hiragana": "いぶんか",
    "meaning": "이문화"
  },
  {
    "kanji": "現制度",
    "hiragana": "げんせいど",
    "meaning": "현재의 제도"
  },
  {
    "kanji": "最接近",
    "hiragana": "さいせっきん",
    "meaning": "최접근"
  },
  {
    "kanji": "主成分",
    "hiragana": "しゅせいぶん",
    "meaning": "주성분"
  },
  {
    "kanji": "低価格",
    "hiragana": "ていかかく",
    "meaning": "낮은 가격, 저가"
  },
  {
    "kanji": "無計画",
    "hiragana": "むけいかく",
    "meaning": "무계획"
  },
  {
    "kanji": "私宛て",
    "hiragana": "わたしあて",
    "meaning": "내 앞"
  },
  {
    "kanji": "管理下",
    "hiragana": "かんりか",
    "meaning": "관리하"
  },
  {
    "kanji": "北側",
    "hiragana": "きたがわ",
    "meaning": "북쪽"
  },
  {
    "kanji": "結婚観",
    "hiragana": "けっこんかん",
    "meaning": "결혼관"
  },
  {
    "kanji": "別れ際",
    "hiragana": "わかれぎわ",
    "meaning": "헤어질 때"
  },
  {
    "kanji": "決定権",
    "hiragana": "けっていけん",
    "meaning": "결정권"
  },
  {
    "kanji": "食べ頃",
    "hiragana": "たべごろ",
    "meaning": "먹기 적당한 때"
  },
  {
    "kanji": "日本式",
    "hiragana": "にほんしき",
    "meaning": "일본식"
  },
  {
    "kanji": "スキー場",
    "hiragana": "スキーじょう",
    "meaning": "스키장"
  },
  {
    "kanji": "ボール状",
    "hiragana": "ボールじょう",
    "meaning": "공 형상"
  },
  {
    "kanji": "政治色",
    "hiragana": "せいじしょく",
    "meaning": "정치색"
  },
  {
    "kanji": "対抗心",
    "hiragana": "たいこうしん",
    "meaning": "대항심"
  },
  {
    "kanji": "会員制",
    "hiragana": "かいいんせい",
    "meaning": "회원제"
  },
  {
    "kanji": "受験生",
    "hiragana": "じゅけんせい",
    "meaning": "수험생"
  },
  {
    "kanji": "都会育ち",
    "hiragana": "とかいそだち",
    "meaning": "도시에서 자람"
  },
  {
    "kanji": "頼みづらい",
    "hiragana": "たのみづらい",
    "meaning": "부탁하기 어렵다"
  },
  {
    "kanji": "二人連れ",
    "hiragana": "ふたりづれ",
    "meaning": "일행 두 명"
  },
  {
    "kanji": "働き手",
    "hiragana": "はたらきて",
    "meaning": "일꾼"
  },
  {
    "kanji": "絵画展",
    "hiragana": "かいがてん",
    "meaning": "회화전"
  },
  {
    "kanji": "日本風",
    "hiragana": "にほんふう",
    "meaning": "일본풍"
  },
  {
    "kanji": "学年別",
    "hiragana": "がくねんべつ",
    "meaning": "학년별"
  },
  {
    "kanji": "送信元",
    "hiragana": "そうしんもと",
    "meaning": "송신원"
  },
  {
    "kanji": "進学率",
    "hiragana": "しんがくりつ",
    "meaning": "진학률"
  },
  {
    "kanji": "異分野",
    "hiragana": "いぶんや",
    "meaning": "다른 분야, 이분야"
  },
  {
    "kanji": "仮登録",
    "hiragana": "かりとうろく",
    "meaning": "가등록"
  },
  {
    "kanji": "貴団体",
    "hiragana": "きだんたい",
    "meaning": "귀하의 단체"
  },
  {
    "kanji": "再開発",
    "hiragana": "さいかいはつ",
    "meaning": "재개발"
  },
  {
    "kanji": "諸手続き",
    "hiragana": "しょてつづき",
    "meaning": "여러 수속"
  },
  {
    "kanji": "初年度",
    "hiragana": "しょねんど",
    "meaning": "초년도"
  },
  {
    "kanji": "低カロリー",
    "hiragana": "ていカロリー",
    "meaning": "저칼로리"
  },
  {
    "kanji": "同意見",
    "hiragana": "どういけん",
    "meaning": "같은 의견"
  },
  {
    "kanji": "一仕事",
    "hiragana": "ひとしごと",
    "meaning": "한 가지 일"
  },
  {
    "kanji": "不正確だ",
    "hiragana": "ふせいかくだ",
    "meaning": "부정확하다"
  },
  {
    "kanji": "副大臣",
    "hiragana": "ふくだいじん",
    "meaning": "부대신, 부장관"
  },
  {
    "kanji": "本登録",
    "hiragana": "ほんとうろく",
    "meaning": "본등록"
  },
  {
    "kanji": "真後ろ",
    "hiragana": "まうしろ",
    "meaning": "바로 뒤"
  },
  {
    "kanji": "未使用",
    "hiragana": "みしよう",
    "meaning": "미사용"
  },
  {
    "kanji": "無回答",
    "hiragana": "むかいとう",
    "meaning": "무응답"
  },
  {
    "kanji": "名選手",
    "hiragana": "めいせんしゅ",
    "meaning": "명선수"
  },
  {
    "kanji": "来学期",
    "hiragana": "らいがっき",
    "meaning": "다음 학기"
  },
  {
    "kanji": "親子連れ",
    "hiragana": "おやこづれ",
    "meaning": "부모자식 동행"
  },
  {
    "kanji": "和風",
    "hiragana": "わふう",
    "meaning": "일본풍"
  },
  {
    "kanji": "諸外国",
    "hiragana": "しょがいこく",
    "meaning": "여러 외국"
  },
  {
    "kanji": "諸問題",
    "hiragana": "しょもんだい",
    "meaning": "여러 문제"
  },
  {
    "kanji": "真夜中",
    "hiragana": "まよなか",
    "meaning": "한밤중"
  },
  {
    "kanji": "医学界",
    "hiragana": "いがくかい",
    "meaning": "의학계"
  },
  {
    "kanji": "小説家",
    "hiragana": "しょうせつか",
    "meaning": "소설가"
  },
  {
    "kanji": "図書館",
    "hiragana": "としょかん",
    "meaning": "도서관"
  },
  {
    "kanji": "風邪気味",
    "hiragana": "かぜぎみ",
    "meaning": "감기 기운"
  },
  {
    "kanji": "期限切れ",
    "hiragana": "きげんぎれ",
    "meaning": "기한이 끝남"
  },
  {
    "kanji": "危険性",
    "hiragana": "きけんせい",
    "meaning": "위험성"
  },
  {
    "kanji": "予約制",
    "hiragana": "よやくせい",
    "meaning": "예약제"
  },
  {
    "kanji": "線路沿い",
    "hiragana": "せんろぞい",
    "meaning": "철로변"
  },
  {
    "kanji": "応援団",
    "hiragana": "おうえんだん",
    "meaning": "응원단"
  },
  {
    "kanji": "電車賃",
    "hiragana": "でんしゃちん",
    "meaning": "전철비"
  },
  {
    "kanji": "子供連れ",
    "hiragana": "こどもづれ",
    "meaning": "자녀 동반"
  },
  {
    "kanji": "定期的だ",
    "hiragana": "ていきてきだ",
    "meaning": "정기적이다"
  },
  {
    "kanji": "１年前",
    "hiragana": "いちねんまえ",
    "meaning": "1년 전"
  },
  {
    "kanji": "成功率",
    "hiragana": "せいこうりつ",
    "meaning": "성공률"
  },
  {
    "kanji": "日本流",
    "hiragana": "にほんりゅう",
    "meaning": "일본류, 일본식"
  },
  {
    "kanji": "食器類",
    "hiragana": "しょっきるい",
    "meaning": "식기류"
  },
  {
    "kanji": "薄暗い",
    "hiragana": "うすぐらい",
    "meaning": "좀 어둡다, 침침하다"
  },
  {
    "kanji": "各チーム",
    "hiragana": "かくチーム",
    "meaning": "각 팀"
  },
  {
    "kanji": "仮採用",
    "hiragana": "かりさいよう",
    "meaning": "임시 채용"
  },
  {
    "kanji": "旧制度",
    "hiragana": "きゅうせいど",
    "meaning": "구 제도"
  },
  {
    "kanji": "現段階",
    "hiragana": "げんだんかい",
    "meaning": "현 단계"
  },
  {
    "kanji": "高性能",
    "hiragana": "こうせいのう",
    "meaning": "고성능"
  },
  {
    "kanji": "再放送",
    "hiragana": "さいほうそう",
    "meaning": "재방송"
  },
  {
    "kanji": "総売上",
    "hiragana": "そううりあげ",
    "meaning": "매상 총액"
  },
  {
    "kanji": "半透明",
    "hiragana": "はんとうめい",
    "meaning": "반투명"
  },
  {
    "kanji": "非公式",
    "hiragana": "ひこうしき",
    "meaning": "비공식"
  },
  {
    "kanji": "本採用",
    "hiragana": "ほんさいよう",
    "meaning": "본채용"
  },
  {
    "kanji": "真新しい",
    "hiragana": "まあたらしい",
    "meaning": "완전히 새롭다"
  },
  {
    "kanji": "未経験",
    "hiragana": "みけいけん",
    "meaning": "미경험"
  },
  {
    "kanji": "無責任",
    "hiragana": "むせきにん",
    "meaning": "무책임"
  },
  {
    "kanji": "来シーズン",
    "hiragana": "らいシーズン",
    "meaning": "다음 시즌"
  },
  {
    "kanji": "２対１",
    "hiragana": "にたいいち",
    "meaning": "2대 1"
  },
  {
    "kanji": "建築家",
    "hiragana": "けんちくか",
    "meaning": "건축가"
  },
  {
    "kanji": "福祉家",
    "hiragana": "ふくしか",
    "meaning": "복지가"
  },
  {
    "kanji": "自由化",
    "hiragana": "じゆうか",
    "meaning": "자유화"
  },
  {
    "kanji": "制度下",
    "hiragana": "せいどか",
    "meaning": "제도하"
  },
  {
    "kanji": "自然界",
    "hiragana": "しぜんかい",
    "meaning": "자연계"
  },
  {
    "kanji": "遅刻がち",
    "hiragana": "ちこくがち",
    "meaning": "지각이 잦음"
  },
  {
    "kanji": "病気がち",
    "hiragana": "びょうきがち",
    "meaning": "병이 잦음"
  },
  {
    "kanji": "責任感",
    "hiragana": "せきにんかん",
    "meaning": "책임감"
  },
  {
    "kanji": "人生観",
    "hiragana": "じんせいかん",
    "meaning": "인생관"
  },
  {
    "kanji": "疲れ気味",
    "hiragana": "つかれぎみ",
    "meaning": "피곤한 기미"
  },
  {
    "kanji": "在庫切れ",
    "hiragana": "ざいこぎれ",
    "meaning": "재고 없음"
  },
  {
    "kanji": "窓際",
    "hiragana": "まどぎわ",
    "meaning": "창가"
  },
  {
    "kanji": "保証金",
    "hiragana": "ほしょうきん",
    "meaning": "보증금"
  },
  {
    "kanji": "皮ごと",
    "hiragana": "かわごと",
    "meaning": "껍질째"
  },
  {
    "kanji": "丸ごと",
    "hiragana": "まるごと",
    "meaning": "통째로"
  },
  {
    "kanji": "気温差",
    "hiragana": "きおんさ",
    "meaning": "기온차"
  },
  {
    "kanji": "国内産",
    "hiragana": "こくないさん",
    "meaning": "국내산"
  },
  {
    "kanji": "警察署",
    "hiragana": "けいさつしょ",
    "meaning": "경찰서"
  },
  {
    "kanji": "税務署",
    "hiragana": "ぜいむしょ",
    "meaning": "세무서"
  },
  {
    "kanji": "川沿い",
    "hiragana": "かわぞい",
    "meaning": "강가, 냇가"
  },
  {
    "kanji": "修理代",
    "hiragana": "しゅうりだい",
    "meaning": "수리비"
  },
  {
    "kanji": "電気代",
    "hiragana": "でんきだい",
    "meaning": "전기세"
  },
  {
    "kanji": "出来立て",
    "hiragana": "できたて",
    "meaning": "갓 완성함"
  },
  {
    "kanji": "焼き立て",
    "hiragana": "やきたて",
    "meaning": "갓 구움"
  },
  {
    "kanji": "一戸建て",
    "hiragana": "いっこだて",
    "meaning": "독채"
  },
  {
    "kanji": "三階建て",
    "hiragana": "さんがいだて",
    "meaning": "3층 건물"
  },
  {
    "kanji": "バレエ団",
    "hiragana": "バレエだん",
    "meaning": "발레단"
  },
  {
    "kanji": "出身地",
    "hiragana": "しゅっしんち",
    "meaning": "출신지"
  },
  {
    "kanji": "生産地",
    "hiragana": "せいさんち",
    "meaning": "생산지"
  },
  {
    "kanji": "色違い",
    "hiragana": "いろちがい",
    "meaning": "색이 다름"
  },
  {
    "kanji": "手間賃",
    "hiragana": "てまちん",
    "meaning": "수고비"
  },
  {
    "kanji": "醤油漬け",
    "hiragana": "しょうゆづけ",
    "meaning": "간장에 절임"
  },
  {
    "kanji": "話しづらい",
    "hiragana": "はなしづらい",
    "meaning": "말하기 어렵다"
  },
  {
    "kanji": "優先度",
    "hiragana": "ゆうせんど",
    "meaning": "우선도"
  },
  {
    "kanji": "演技派",
    "hiragana": "えんぎは",
    "meaning": "연기파"
  },
  {
    "kanji": "慎重派",
    "hiragana": "しんちょうは",
    "meaning": "신중파"
  },
  {
    "kanji": "成田発",
    "hiragana": "なりたはつ",
    "meaning": "나리타발"
  },
  {
    "kanji": "限定版",
    "hiragana": "げんていばん",
    "meaning": "한정판"
  },
  {
    "kanji": "日本語版",
    "hiragana": "にほんごばん",
    "meaning": "일본어판"
  },
  {
    "kanji": "交通費",
    "hiragana": "こうつうひ",
    "meaning": "교통비"
  },
  {
    "kanji": "久しぶり",
    "hiragana": "ひさしぶり",
    "meaning": "오랜만"
  },
  {
    "kanji": "専門別",
    "hiragana": "せんもんべつ",
    "meaning": "전문별"
  },
  {
    "kanji": "子供向け",
    "hiragana": "こどもむけ",
    "meaning": "어린이용"
  },
  {
    "kanji": "女性向け",
    "hiragana": "じょせいむけ",
    "meaning": "여성용"
  },
  {
    "kanji": "発行元",
    "hiragana": "はっこうもと",
    "meaning": "발행원"
  },
  {
    "kanji": "収穫量",
    "hiragana": "しゅうかくりょう",
    "meaning": "수확량"
  },
  {
    "kanji": "記憶力",
    "hiragana": "きおくりょく",
    "meaning": "기억력"
  },
  {
    "kanji": "雑誌類",
    "hiragana": "ざっしるい",
    "meaning": "잡지류"
  },
  {
    "kanji": "異世界",
    "hiragana": "いせかい",
    "meaning": "이세계"
  },
  {
    "kanji": "薄味",
    "hiragana": "うすあじ",
    "meaning": "담백한 맛"
  },
  {
    "kanji": "薄色",
    "hiragana": "うすいろ",
    "meaning": "옅은 색"
  },
  {
    "kanji": "激辛",
    "hiragana": "げきから",
    "meaning": "아주 매움"
  },
  {
    "kanji": "激安",
    "hiragana": "げきやす",
    "meaning": "아주 쌈"
  },
  {
    "kanji": "現時点",
    "hiragana": "げんじてん",
    "meaning": "현시점"
  },
  {
    "kanji": "高学歴",
    "hiragana": "こうがくれき",
    "meaning": "고학력"
  },
  {
    "kanji": "好成績",
    "hiragana": "こうせいせき",
    "meaning": "좋은 성적"
  },
  {
    "kanji": "好都合",
    "hiragana": "こうつごう",
    "meaning": "안성맞춤"
  },
  {
    "kanji": "最下位",
    "hiragana": "さいかい",
    "meaning": "최하위"
  },
  {
    "kanji": "最先端",
    "hiragana": "さいせんたん",
    "meaning": "최첨단"
  },
  {
    "kanji": "再評価",
    "hiragana": "さいひょうか",
    "meaning": "재평가"
  },
  {
    "kanji": "再利用",
    "hiragana": "さいりよう",
    "meaning": "재이용, 재활용"
  },
  {
    "kanji": "主原因",
    "hiragana": "しゅげんいん",
    "meaning": "주원인"
  },
  {
    "kanji": "諸条件",
    "hiragana": "しょじょうけん",
    "meaning": "여러 조건"
  },
  {
    "kanji": "初対面",
    "hiragana": "しょたいめん",
    "meaning": "첫 대면"
  },
  {
    "kanji": "新記録",
    "hiragana": "しんきろく",
    "meaning": "신기록"
  },
  {
    "kanji": "総動員",
    "hiragana": "そうどういん",
    "meaning": "총동원"
  },
  {
    "kanji": "多機能",
    "hiragana": "たきのう",
    "meaning": "다기능"
  },
  {
    "kanji": "低レベル",
    "hiragana": "ていレベル",
    "meaning": "낮은 레벨"
  },
  {
    "kanji": "同世代",
    "hiragana": "どうせだい",
    "meaning": "같은 세대"
  },
  {
    "kanji": "同年齢",
    "hiragana": "どうねんれい",
    "meaning": "같은 연령"
  },
  {
    "kanji": "初体験",
    "hiragana": "はつたいけん",
    "meaning": "첫 체험"
  },
  {
    "kanji": "半世紀",
    "hiragana": "はんせいき",
    "meaning": "반세기"
  },
  {
    "kanji": "非常識",
    "hiragana": "ひじょうしき",
    "meaning": "비상식"
  },
  {
    "kanji": "非暴力",
    "hiragana": "ひぼうりょく",
    "meaning": "비폭력"
  },
  {
    "kanji": "一握り",
    "hiragana": "ひとにぎり",
    "meaning": "한 줌"
  },
  {
    "kanji": "不器用",
    "hiragana": "ぶきよう",
    "meaning": "재주가 없음"
  },
  {
    "kanji": "別世界",
    "hiragana": "べっせかい",
    "meaning": "별세계"
  },
  {
    "kanji": "真冬",
    "hiragana": "まふゆ",
    "meaning": "한겨울"
  },
  {
    "kanji": "未提供",
    "hiragana": "みていきょう",
    "meaning": "미제공"
  },
  {
    "kanji": "未発表",
    "hiragana": "みはっぴょう",
    "meaning": "미발표"
  },
  {
    "kanji": "無許可",
    "hiragana": "むきょか",
    "meaning": "무허가"
  },
  {
    "kanji": "無慈悲",
    "hiragana": "むじひ",
    "meaning": "무자비"
  },
  {
    "kanji": "名演技",
    "hiragana": "めいえんぎ",
    "meaning": "명연기"
  },
  {
    "kanji": "和服",
    "hiragana": "わふく",
    "meaning": "일본식 옷"
  },
  {
    "kanji": "心強い",
    "hiragana": "こころづよい",
    "meaning": "든든하다, 믿음직하다"
  },
  {
    "kanji": "心弱い",
    "hiragana": "こころよわい",
    "meaning": "심약하다"
  },
  {
    "kanji": "使用済み",
    "hiragana": "しようずみ",
    "meaning": "사용 완료"
  },
  {
    "kanji": "年明け",
    "hiragana": "としあけ",
    "meaning": "새해, 연초"
  },
  {
    "kanji": "泣き出す",
    "hiragana": "なきだす",
    "meaning": "울기 시작하다"
  },
  {
    "kanji": "粘り強い",
    "hiragana": "ねばりづよい",
    "meaning": "끈기 있다, 끈질기다"
  },
  {
    "kanji": "解約",
    "hiragana": "かいやく",
    "meaning": "해약"
  },
  {
    "kanji": "限定",
    "hiragana": "げんてい",
    "meaning": "한정"
  },
  {
    "kanji": "性格",
    "hiragana": "せいかく",
    "meaning": "성격"
  },
  {
    "kanji": "節約",
    "hiragana": "せつやく",
    "meaning": "절약"
  },
  {
    "kanji": "役目",
    "hiragana": "やくめ",
    "meaning": "역할"
  },
  {
    "kanji": "迫る",
    "hiragana": "せまる",
    "meaning": "다가오다"
  },
  {
    "kanji": "保つ",
    "hiragana": "たもつ",
    "meaning": "유지하다, 보존하다"
  },
  {
    "kanji": "縮む",
    "hiragana": "ちぢむ",
    "meaning": "줄어들다"
  },
  {
    "kanji": "取り払う",
    "hiragana": "とりはらう",
    "meaning": "철거하다"
  },
  {
    "kanji": "触れ合う",
    "hiragana": "ふれあう",
    "meaning": "접촉하다, 닿다"
  },
  {
    "kanji": "騒がしい",
    "hiragana": "さわがしい",
    "meaning": "떠들썩하다"
  },
  {
    "kanji": "偉大だ",
    "hiragana": "いだいだ",
    "meaning": "위대하다"
  },
  {
    "kanji": "大げさだ",
    "hiragana": "おおげさだ",
    "meaning": "과장되다"
  },
  {
    "kanji": "手軽だ",
    "hiragana": "てがるだ",
    "meaning": "간편하다"
  },
  {
    "kanji": "稀だ",
    "hiragana": "まれだ",
    "meaning": "드물다, 희귀하다"
  },
  {
    "kanji": "開設",
    "hiragana": "かいせつ",
    "meaning": "개설"
  },
  {
    "kanji": "関与",
    "hiragana": "かんよ",
    "meaning": "관여"
  },
  {
    "kanji": "口調",
    "hiragana": "くちょう",
    "meaning": "어조"
  },
  {
    "kanji": "後悔",
    "hiragana": "こうかい",
    "meaning": "후회"
  },
  {
    "kanji": "誤解",
    "hiragana": "ごかい",
    "meaning": "오해"
  },
  {
    "kanji": "進出",
    "hiragana": "しんしゅつ",
    "meaning": "진출"
  },
  {
    "kanji": "設備",
    "hiragana": "せつび",
    "meaning": "설비"
  },
  {
    "kanji": "通過",
    "hiragana": "つうか",
    "meaning": "통과"
  },
  {
    "kanji": "添付",
    "hiragana": "てんぷ",
    "meaning": "첨부"
  },
  {
    "kanji": "特定",
    "hiragana": "とくてい",
    "meaning": "특정"
  },
  {
    "kanji": "反則",
    "hiragana": "はんそく",
    "meaning": "반칙"
  },
  {
    "kanji": "報道",
    "hiragana": "ほうどう",
    "meaning": "보도"
  },
  {
    "kanji": "話題",
    "hiragana": "わだい",
    "meaning": "화제"
  },
  {
    "kanji": "追い払う",
    "hiragana": "おいはらう",
    "meaning": "쫓아버리다"
  },
  {
    "kanji": "思い切る",
    "hiragana": "おもいきる",
    "meaning": "결심하다"
  },
  {
    "kanji": "思い込む",
    "hiragana": "おもいこむ",
    "meaning": "믿어 버리다"
  },
  {
    "kanji": "締め切る",
    "hiragana": "しめきる",
    "meaning": "마감하다"
  },
  {
    "kanji": "誓う",
    "hiragana": "ちかう",
    "meaning": "맹세하다"
  },
  {
    "kanji": "溶け込む",
    "hiragana": "とけこむ",
    "meaning": "녹아들다"
  },
  {
    "kanji": "飛びつく",
    "hiragana": "とびつく",
    "meaning": "덤벼들다, 달려들다"
  },
  {
    "kanji": "盛り上がる",
    "hiragana": "もりあがる",
    "meaning": "(흥취가) 높아지다"
  },
  {
    "kanji": "雇う",
    "hiragana": "やとう",
    "meaning": "고용하다"
  },
  {
    "kanji": "一時的だ",
    "hiragana": "いちじてきだ",
    "meaning": "일시적이다"
  },
  {
    "kanji": "劇的だ",
    "hiragana": "げきてきだ",
    "meaning": "극적이다"
  },
  {
    "kanji": "多大だ",
    "hiragana": "ただいだ",
    "meaning": "다대하다"
  },
  {
    "kanji": "苦情",
    "hiragana": "くじょう",
    "meaning": "불평"
  },
  {
    "kanji": "栽培",
    "hiragana": "さいばい",
    "meaning": "재배"
  },
  {
    "kanji": "続出",
    "hiragana": "ぞくしゅつ",
    "meaning": "속출"
  },
  {
    "kanji": "転勤",
    "hiragana": "てんきん",
    "meaning": "전근"
  },
  {
    "kanji": "発揮",
    "hiragana": "はっき",
    "meaning": "발휘"
  },
  {
    "kanji": "普及",
    "hiragana": "ふきゅう",
    "meaning": "보급"
  },
  {
    "kanji": "打ち消す",
    "hiragana": "うちけす",
    "meaning": "부정하다"
  },
  {
    "kanji": "衰える",
    "hiragana": "おとろえる",
    "meaning": "쇠약해지다"
  },
  {
    "kanji": "頼もしい",
    "hiragana": "たのもしい",
    "meaning": "믿음직하다"
  },
  {
    "kanji": "相応しい",
    "hiragana": "ふさわしい",
    "meaning": "적합하다, 어울리다"
  },
  {
    "kanji": "曖昧だ",
    "hiragana": "あいまいだ",
    "meaning": "애매하다"
  },
  {
    "kanji": "独特だ",
    "hiragana": "どくとくだ",
    "meaning": "독특하다"
  },
  {
    "kanji": "着々と",
    "hiragana": "ちゃくちゃくと",
    "meaning": "착착"
  },
  {
    "kanji": "確保",
    "hiragana": "かくほ",
    "meaning": "확보"
  },
  {
    "kanji": "契機",
    "hiragana": "けいき",
    "meaning": "계기"
  },
  {
    "kanji": "気配",
    "hiragana": "けはい",
    "meaning": "기미, 기색"
  },
  {
    "kanji": "邪魔",
    "hiragana": "じゃま",
    "meaning": "방해, 장애"
  },
  {
    "kanji": "提供",
    "hiragana": "ていきょう",
    "meaning": "제공"
  },
  {
    "kanji": "点検",
    "hiragana": "てんけん",
    "meaning": "점검"
  },
  {
    "kanji": "評価",
    "hiragana": "ひょうか",
    "meaning": "평가"
  },
  {
    "kanji": "分担",
    "hiragana": "ぶんたん",
    "meaning": "분담"
  },
  {
    "kanji": "当てはまる",
    "hiragana": "あてはまる",
    "meaning": "꼭 들어맞다"
  },
  {
    "kanji": "行き着く",
    "hiragana": "いきつく",
    "meaning": "다다르다"
  },
  {
    "kanji": "入れ替える",
    "hiragana": "いれかえる",
    "meaning": "교체하다"
  },
  {
    "kanji": "頷く",
    "hiragana": "うなずく",
    "meaning": "끄덕이다"
  },
  {
    "kanji": "追い返す",
    "hiragana": "おいかえす",
    "meaning": "물리치다"
  },
  {
    "kanji": "聞き取る",
    "hiragana": "ききとる",
    "meaning": "청취하다, 알아듣다"
  },
  {
    "kanji": "差し引く",
    "hiragana": "さしひく",
    "meaning": "빼다, 공제하다"
  },
  {
    "kanji": "達する",
    "hiragana": "たっする",
    "meaning": "이르다, 도달하다"
  },
  {
    "kanji": "付け加える",
    "hiragana": "つけくわえる",
    "meaning": "덧붙이다, 추가하다"
  },
  {
    "kanji": "飛び降りる",
    "hiragana": "とびおりる",
    "meaning": "뛰어내리다"
  },
  {
    "kanji": "飛び立つ",
    "hiragana": "とびたつ",
    "meaning": "날아오르다"
  },
  {
    "kanji": "飛び散る",
    "hiragana": "とびちる",
    "meaning": "흩어지다"
  },
  {
    "kanji": "取り付ける",
    "hiragana": "とりつける",
    "meaning": "달다"
  },
  {
    "kanji": "引き止める",
    "hiragana": "ひきとめる",
    "meaning": "말리다"
  },
  {
    "kanji": "引っかかる",
    "hiragana": "ひっかかる",
    "meaning": "걸리다"
  },
  {
    "kanji": "見分ける",
    "hiragana": "みわける",
    "meaning": "분간하다"
  },
  {
    "kanji": "安易だ",
    "hiragana": "あんいだ",
    "meaning": "안이하다"
  },
  {
    "kanji": "活発だ",
    "hiragana": "かっぱつだ",
    "meaning": "활발하다"
  },
  {
    "kanji": "敏感だ",
    "hiragana": "びんかんだ",
    "meaning": "민감하다"
  },
  {
    "kanji": "不安定だ",
    "hiragana": "ふあんていだ",
    "meaning": "불안정하다"
  },
  {
    "kanji": "有利だ",
    "hiragana": "ゆうりだ",
    "meaning": "유리하다"
  },
  {
    "kanji": "完了",
    "hiragana": "かんりょう",
    "meaning": "완료"
  },
  {
    "kanji": "上昇",
    "hiragana": "じょうしょう",
    "meaning": "상승"
  },
  {
    "kanji": "散らかす",
    "hiragana": "ちらかす",
    "meaning": "어지르다"
  },
  {
    "kanji": "濁る",
    "hiragana": "にごる",
    "meaning": "탁해지다"
  },
  {
    "kanji": "輝かしい",
    "hiragana": "かがやかしい",
    "meaning": "빛나다, 눈부시다"
  },
  {
    "kanji": "辛い",
    "hiragana": "つらい",
    "meaning": "괴롭다"
  },
  {
    "kanji": "温厚だ",
    "hiragana": "おんこうだ",
    "meaning": "온후하다, 온화하다"
  },
  {
    "kanji": "徐々に",
    "hiragana": "じょじょに",
    "meaning": "서서히"
  },
  {
    "kanji": "意欲",
    "hiragana": "いよく",
    "meaning": "의욕"
  },
  {
    "kanji": "解消",
    "hiragana": "かいしょう",
    "meaning": "해소"
  },
  {
    "kanji": "改正",
    "hiragana": "かいせい",
    "meaning": "개정"
  },
  {
    "kanji": "改善",
    "hiragana": "かいぜん",
    "meaning": "개선"
  },
  {
    "kanji": "活気",
    "hiragana": "かっき",
    "meaning": "활기"
  },
  {
    "kanji": "機能",
    "hiragana": "きのう",
    "meaning": "기능"
  },
  {
    "kanji": "愚痴",
    "hiragana": "ぐち",
    "meaning": "푸념"
  },
  {
    "kanji": "見当",
    "hiragana": "けんとう",
    "meaning": "예측, 짐작"
  },
  {
    "kanji": "辞退",
    "hiragana": "じたい",
    "meaning": "사퇴"
  },
  {
    "kanji": "視野",
    "hiragana": "しや",
    "meaning": "시야"
  },
  {
    "kanji": "贅沢",
    "hiragana": "ぜいたく",
    "meaning": "사치"
  },
  {
    "kanji": "成長",
    "hiragana": "せいちょう",
    "meaning": "성장"
  },
  {
    "kanji": "専念",
    "hiragana": "せんねん",
    "meaning": "전념"
  },
  {
    "kanji": "体格",
    "hiragana": "たいかく",
    "meaning": "체격"
  },
  {
    "kanji": "強み",
    "hiragana": "つよみ",
    "meaning": "강점"
  },
  {
    "kanji": "訂正",
    "hiragana": "ていせい",
    "meaning": "정정"
  },
  {
    "kanji": "導入",
    "hiragana": "どうにゅう",
    "meaning": "도입"
  },
  {
    "kanji": "特色",
    "hiragana": "とくしょく",
    "meaning": "특색"
  },
  {
    "kanji": "場面",
    "hiragana": "ばめん",
    "meaning": "장면"
  },
  {
    "kanji": "反映",
    "hiragana": "はんえい",
    "meaning": "반영"
  },
  {
    "kanji": "評判",
    "hiragana": "ひょうばん",
    "meaning": "평판"
  },
  {
    "kanji": "比例",
    "hiragana": "ひれい",
    "meaning": "비례"
  },
  {
    "kanji": "夢中",
    "hiragana": "むちゅう",
    "meaning": "열중, 몰두"
  },
  {
    "kanji": "予測",
    "hiragana": "よそく",
    "meaning": "예측"
  },
  {
    "kanji": "得る",
    "hiragana": "える",
    "meaning": "얻다"
  },
  {
    "kanji": "偏る",
    "hiragana": "かたよる",
    "meaning": "치우치다"
  },
  {
    "kanji": "差し支える",
    "hiragana": "さしつかえる",
    "meaning": "방해되다"
  },
  {
    "kanji": "腹を立てる",
    "hiragana": "はらをたてる",
    "meaning": "화를 내다"
  },
  {
    "kanji": "含む",
    "hiragana": "ふくむ",
    "meaning": "포함하다"
  },
  {
    "kanji": "目指す",
    "hiragana": "めざす",
    "meaning": "목표로 하다"
  },
  {
    "kanji": "面する",
    "hiragana": "めんする",
    "meaning": "면하다, 인접하다"
  },
  {
    "kanji": "適度だ",
    "hiragana": "てきどだ",
    "meaning": "적당하다, 알맞다"
  },
  {
    "kanji": "予め",
    "hiragana": "あらかじめ",
    "meaning": "미리, 사전에"
  },
  {
    "kanji": "一気に",
    "hiragana": "いっきに",
    "meaning": "단숨에"
  },
  {
    "kanji": "思い切って",
    "hiragana": "おもいきって",
    "meaning": "과감하게"
  },
  {
    "kanji": "割りと",
    "hiragana": "わりと",
    "meaning": "비교적"
  },
  {
    "kanji": "一致",
    "hiragana": "いっち",
    "meaning": "일치"
  },
  {
    "kanji": "買い上げ",
    "hiragana": "かいあげ",
    "meaning": "매입, 구입"
  },
  {
    "kanji": "覚悟",
    "hiragana": "かくご",
    "meaning": "각오"
  },
  {
    "kanji": "感激",
    "hiragana": "かんげき",
    "meaning": "감격, 감동"
  },
  {
    "kanji": "区分",
    "hiragana": "くぶん",
    "meaning": "구분"
  },
  {
    "kanji": "経理",
    "hiragana": "けいり",
    "meaning": "경리, 회계"
  },
  {
    "kanji": "原則",
    "hiragana": "げんそく",
    "meaning": "원칙"
  },
  {
    "kanji": "参観",
    "hiragana": "さんかん",
    "meaning": "참관"
  },
  {
    "kanji": "失望",
    "hiragana": "しつぼう",
    "meaning": "실망"
  },
  {
    "kanji": "対象",
    "hiragana": "たいしょう",
    "meaning": "대상"
  },
  {
    "kanji": "撤去",
    "hiragana": "てっきょ",
    "meaning": "철거, 제거"
  },
  {
    "kanji": "預ける",
    "hiragana": "あずける",
    "meaning": "맡기다, 예치하다"
  },
  {
    "kanji": "言い張る",
    "hiragana": "いいはる",
    "meaning": "주장하다, 고집하다"
  },
  {
    "kanji": "行き過ぎる",
    "hiragana": "いきすぎる",
    "meaning": "지나치다"
  },
  {
    "kanji": "祈る",
    "hiragana": "いのる",
    "meaning": "기도하다, 빌다"
  },
  {
    "kanji": "受け継ぐ",
    "hiragana": "うけつぐ",
    "meaning": "이어받다, 계승하다"
  },
  {
    "kanji": "打ち切る",
    "hiragana": "うちきる",
    "meaning": "중단하다, 끊다"
  },
  {
    "kanji": "映す",
    "hiragana": "うつす",
    "meaning": "비추다"
  },
  {
    "kanji": "裏切る",
    "hiragana": "うらぎる",
    "meaning": "배신하다, 저버리다"
  },
  {
    "kanji": "描く",
    "hiragana": "えがく",
    "meaning": "그리다"
  },
  {
    "kanji": "書き込む",
    "hiragana": "かきこむ",
    "meaning": "써넣다, 기입하다"
  },
  {
    "kanji": "駆け込む",
    "hiragana": "かけこむ",
    "meaning": "뛰어들다"
  },
  {
    "kanji": "叶える",
    "hiragana": "かなえる",
    "meaning": "이루다"
  },
  {
    "kanji": "凍える",
    "hiragana": "こごえる",
    "meaning": "얼다, 동상에 걸리다"
  },
  {
    "kanji": "探し回る",
    "hiragana": "さがしまわる",
    "meaning": "찾아 돌아다니다"
  },
  {
    "kanji": "冷める",
    "hiragana": "さめる",
    "meaning": "식다, 차가워지다"
  },
  {
    "kanji": "締め出す",
    "hiragana": "しめだす",
    "meaning": "문을 열어 주지 않다"
  },
  {
    "kanji": "過ごす",
    "hiragana": "すごす",
    "meaning": "지내다, 보내다"
  },
  {
    "kanji": "使いこなす",
    "hiragana": "つかいこなす",
    "meaning": "능숙하게 사용하다"
  },
  {
    "kanji": "使い込む",
    "hiragana": "つかいこむ",
    "meaning": "손에 익게 오래 쓰다"
  },
  {
    "kanji": "詰める",
    "hiragana": "つめる",
    "meaning": "채우다, 압축하다"
  },
  {
    "kanji": "連れ出す",
    "hiragana": "つれだす",
    "meaning": "데리고 나가다"
  },
  {
    "kanji": "飛び出す",
    "hiragana": "とびだす",
    "meaning": "뛰쳐나가다"
  },
  {
    "kanji": "取り上げる",
    "hiragana": "とりあげる",
    "meaning": "집어 들다"
  },
  {
    "kanji": "取り扱う",
    "hiragana": "とりあつかう",
    "meaning": "다루다, 취급하다"
  },
  {
    "kanji": "取り掛かる",
    "hiragana": "とりかかる",
    "meaning": "착수하다"
  },
  {
    "kanji": "取り組む",
    "hiragana": "とりくむ",
    "meaning": "몰두하다"
  },
  {
    "kanji": "取り消す",
    "hiragana": "とりけす",
    "meaning": "삭제하다"
  },
  {
    "kanji": "取り出す",
    "hiragana": "とりだす",
    "meaning": "꺼내다, 추출하다"
  },
  {
    "kanji": "腹立つ",
    "hiragana": "はらだつ",
    "meaning": "화나다, 분노하다"
  },
  {
    "kanji": "引き受ける",
    "hiragana": "ひきうける",
    "meaning": "받아들이다"
  },
  {
    "kanji": "引き離す",
    "hiragana": "ひきはなす",
    "meaning": "떼어놓다, 분리하다"
  },
  {
    "kanji": "塞がる",
    "hiragana": "ふさがる",
    "meaning": "막히다, 차단되다"
  },
  {
    "kanji": "振り込む",
    "hiragana": "ふりこむ",
    "meaning": "송금하다, 입금하다"
  },
  {
    "kanji": "見習う",
    "hiragana": "みならう",
    "meaning": "본받다"
  },
  {
    "kanji": "見慣れる",
    "hiragana": "みなれる",
    "meaning": "눈에 익다"
  },
  {
    "kanji": "結びつく",
    "hiragana": "むすびつく",
    "meaning": "결부되다, 연결되다"
  },
  {
    "kanji": "命じる",
    "hiragana": "めいじる",
    "meaning": "명하다"
  },
  {
    "kanji": "持ち込む",
    "hiragana": "もちこむ",
    "meaning": "반입하다"
  },
  {
    "kanji": "汚す",
    "hiragana": "よごす",
    "meaning": "더럽히다"
  },
  {
    "kanji": "寄り掛かる",
    "hiragana": "よりかかる",
    "meaning": "기대다, 의지하다"
  },
  {
    "kanji": "論じる",
    "hiragana": "ろんじる",
    "meaning": "논하다"
  },
  {
    "kanji": "暑い",
    "hiragana": "あつい",
    "meaning": "덥다"
  },
  {
    "kanji": "重苦しい",
    "hiragana": "おもくるしい",
    "meaning": "답답하다"
  },
  {
    "kanji": "心細い",
    "hiragana": "こころぼそい",
    "meaning": "불안하다"
  },
  {
    "kanji": "狡賢い",
    "hiragana": "ずるがしこい",
    "meaning": "교활하다, 간사하다"
  },
  {
    "kanji": "甚だしい",
    "hiragana": "はなはだしい",
    "meaning": "심하다, 극심하다"
  },
  {
    "kanji": "意地悪だ",
    "hiragana": "いじわるだ",
    "meaning": "심술궂다, 짓궂다"
  },
  {
    "kanji": "円満だ",
    "hiragana": "えんまんだ",
    "meaning": "원만하다"
  },
  {
    "kanji": "大まかだ",
    "hiragana": "おおまかだ",
    "meaning": "대략적이다"
  },
  {
    "kanji": "微かだ",
    "hiragana": "かすかだ",
    "meaning": "희미하다, 미약하다"
  },
  {
    "kanji": "気軽だ",
    "hiragana": "きがるだ",
    "meaning": "부담 없다"
  },
  {
    "kanji": "強大だ",
    "hiragana": "きょうだいだ",
    "meaning": "강대하다"
  },
  {
    "kanji": "静かだ",
    "hiragana": "しずかだ",
    "meaning": "조용하다"
  },
  {
    "kanji": "垂直だ",
    "hiragana": "すいちょくだ",
    "meaning": "수직이다"
  },
  {
    "kanji": "盛大だ",
    "hiragana": "せいだいだ",
    "meaning": "성대하다"
  },
  {
    "kanji": "単純だ",
    "hiragana": "たんじゅんだ",
    "meaning": "단순하다"
  },
  {
    "kanji": "忠実だ",
    "hiragana": "ちゅうじつだ",
    "meaning": "충실하다"
  },
  {
    "kanji": "適切だ",
    "hiragana": "てきせつだ",
    "meaning": "적절하다"
  },
  {
    "kanji": "特殊だ",
    "hiragana": "とくしゅだ",
    "meaning": "특수하다"
  },
  {
    "kanji": "遥かだ",
    "hiragana": "はるかだ",
    "meaning": "아득하다"
  },
  {
    "kanji": "不完全だ",
    "hiragana": "ふかんぜんだ",
    "meaning": "불완전하다"
  },
  {
    "kanji": "膨大だ",
    "hiragana": "ぼうだいだ",
    "meaning": "방대하다"
  },
  {
    "kanji": "中断",
    "hiragana": "ちゅうだん",
    "meaning": "중단"
  },
  {
    "kanji": "廃止",
    "hiragana": "はいし",
    "meaning": "폐지"
  },
  {
    "kanji": "生じる",
    "hiragana": "しょうじる",
    "meaning": "발생하다, 생기다"
  },
  {
    "kanji": "妥当だ",
    "hiragana": "だとうだ",
    "meaning": "타당하다"
  },
  {
    "kanji": "愛着",
    "hiragana": "あいちゃく",
    "meaning": "애착"
  },
  {
    "kanji": "辺り",
    "hiragana": "あたり",
    "meaning": "주변"
  },
  {
    "kanji": "引用",
    "hiragana": "いんよう",
    "meaning": "인용"
  },
  {
    "kanji": "海岸",
    "hiragana": "かいがん",
    "meaning": "해안"
  },
  {
    "kanji": "火事",
    "hiragana": "かじ",
    "meaning": "화재"
  },
  {
    "kanji": "鑑賞",
    "hiragana": "かんしょう",
    "meaning": "감상"
  },
  {
    "kanji": "関連",
    "hiragana": "かんれん",
    "meaning": "관련"
  },
  {
    "kanji": "気候",
    "hiragana": "きこう",
    "meaning": "기후"
  },
  {
    "kanji": "共有",
    "hiragana": "きょうゆう",
    "meaning": "공유"
  },
  {
    "kanji": "金額",
    "hiragana": "きんがく",
    "meaning": "금액"
  },
  {
    "kanji": "禁止",
    "hiragana": "きんし",
    "meaning": "금지"
  },
  {
    "kanji": "国旗",
    "hiragana": "こっき",
    "meaning": "국기"
  },
  {
    "kanji": "残高",
    "hiragana": "ざんだか",
    "meaning": "잔고"
  },
  {
    "kanji": "充実",
    "hiragana": "じゅうじつ",
    "meaning": "충실"
  },
  {
    "kanji": "修理",
    "hiragana": "しゅうり",
    "meaning": "수리"
  },
  {
    "kanji": "上達",
    "hiragana": "じょうたつ",
    "meaning": "숙달, 향상"
  },
  {
    "kanji": "印",
    "hiragana": "しるし",
    "meaning": "표시"
  },
  {
    "kanji": "進歩",
    "hiragana": "しんぽ",
    "meaning": "진보"
  },
  {
    "kanji": "清掃",
    "hiragana": "せいそう",
    "meaning": "청소"
  },
  {
    "kanji": "世代",
    "hiragana": "せだい",
    "meaning": "세대"
  },
  {
    "kanji": "早期",
    "hiragana": "そうき",
    "meaning": "조기"
  },
  {
    "kanji": "段階",
    "hiragana": "だんかい",
    "meaning": "단계"
  },
  {
    "kanji": "定年",
    "hiragana": "ていねん",
    "meaning": "정년"
  },
  {
    "kanji": "展開",
    "hiragana": "てんかい",
    "meaning": "전개"
  },
  {
    "kanji": "熱中",
    "hiragana": "ねっちゅう",
    "meaning": "열중, 몰두"
  },
  {
    "kanji": "瓶",
    "hiragana": "びん",
    "meaning": "병"
  },
  {
    "kanji": "蓋",
    "hiragana": "ふた",
    "meaning": "뚜껑"
  },
  {
    "kanji": "法律",
    "hiragana": "ほうりつ",
    "meaning": "법률"
  },
  {
    "kanji": "予報",
    "hiragana": "よほう",
    "meaning": "예보"
  },
  {
    "kanji": "連続",
    "hiragana": "れんぞく",
    "meaning": "연속"
  },
  {
    "kanji": "憐れむ",
    "hiragana": "あわれむ",
    "meaning": "가엾이 여기다"
  },
  {
    "kanji": "薄める",
    "hiragana": "うすめる",
    "meaning": "옅게하다"
  },
  {
    "kanji": "加える",
    "hiragana": "くわえる",
    "meaning": "더하다, 가입시키다"
  },
  {
    "kanji": "優れる",
    "hiragana": "すぐれる",
    "meaning": "뛰어나다"
  },
  {
    "kanji": "潰す",
    "hiragana": "つぶす",
    "meaning": "찌부러뜨리다"
  },
  {
    "kanji": "腫れる",
    "hiragana": "はれる",
    "meaning": "붓다"
  },
  {
    "kanji": "晴れる",
    "hiragana": "はれる",
    "meaning": "(하늘이) 개다"
  },
  {
    "kanji": "漏れる",
    "hiragana": "もれる",
    "meaning": "새다"
  },
  {
    "kanji": "頑固だ",
    "hiragana": "がんこだ",
    "meaning": "완고하다"
  },
  {
    "kanji": "急激だ",
    "hiragana": "きゅうげきだ",
    "meaning": "급격하다"
  },
  {
    "kanji": "鮮明だ",
    "hiragana": "せんめいだ",
    "meaning": "선명하다, 뚜렷하다"
  },
  {
    "kanji": "粗末だ",
    "hiragana": "そまつだ",
    "meaning": "변변찮다"
  },
  {
    "kanji": "着々",
    "hiragana": "ちゃくちゃく",
    "meaning": "착착"
  },
  {
    "kanji": "引退",
    "hiragana": "いんたい",
    "meaning": "은퇴"
  },
  {
    "kanji": "破る",
    "hiragana": "やぶる",
    "meaning": "찢다, 파기하다"
  },
  {
    "kanji": "居眠り",
    "hiragana": "いねむり",
    "meaning": "앉아 졺"
  },
  {
    "kanji": "演説",
    "hiragana": "えんぜつ",
    "meaning": "연설"
  },
  {
    "kanji": "演奏",
    "hiragana": "えんそう",
    "meaning": "연주"
  },
  {
    "kanji": "延長",
    "hiragana": "えんちょう",
    "meaning": "연장"
  },
  {
    "kanji": "期限",
    "hiragana": "きげん",
    "meaning": "기한"
  },
  {
    "kanji": "記録",
    "hiragana": "きろく",
    "meaning": "기록"
  },
  {
    "kanji": "経済",
    "hiragana": "けいざい",
    "meaning": "경제"
  },
  {
    "kanji": "欠陥",
    "hiragana": "けっかん",
    "meaning": "결함"
  },
  {
    "kanji": "講演",
    "hiragana": "こうえん",
    "meaning": "강연"
  },
  {
    "kanji": "国会",
    "hiragana": "こっかい",
    "meaning": "국회"
  },
  {
    "kanji": "実行",
    "hiragana": "じっこう",
    "meaning": "실행"
  },
  {
    "kanji": "渋滞",
    "hiragana": "じゅうたい",
    "meaning": "정체, 길 막힘"
  },
  {
    "kanji": "充満",
    "hiragana": "じゅうまん",
    "meaning": "충만"
  },
  {
    "kanji": "出社",
    "hiragana": "しゅっしゃ",
    "meaning": "출근"
  },
  {
    "kanji": "出場",
    "hiragana": "しゅつじょう",
    "meaning": "출전"
  },
  {
    "kanji": "乗車",
    "hiragana": "じょうしゃ",
    "meaning": "승차"
  },
  {
    "kanji": "初期",
    "hiragana": "しょき",
    "meaning": "초기"
  },
  {
    "kanji": "初歩",
    "hiragana": "しょほ",
    "meaning": "초보"
  },
  {
    "kanji": "対策",
    "hiragana": "たいさく",
    "meaning": "대책"
  },
  {
    "kanji": "体操",
    "hiragana": "たいそう",
    "meaning": "체조"
  },
  {
    "kanji": "頂上",
    "hiragana": "ちょうじょう",
    "meaning": "정상"
  },
  {
    "kanji": "都合",
    "hiragana": "つごう",
    "meaning": "형편, 사정"
  },
  {
    "kanji": "定期券",
    "hiragana": "ていきけん",
    "meaning": "정기권"
  },
  {
    "kanji": "特殊",
    "hiragana": "とくしゅ",
    "meaning": "특수"
  },
  {
    "kanji": "並木",
    "hiragana": "なみき",
    "meaning": "가로수"
  },
  {
    "kanji": "日課",
    "hiragana": "にっか",
    "meaning": "일과"
  },
  {
    "kanji": "端",
    "hiragana": "はし",
    "meaning": "끝, 가장자리"
  },
  {
    "kanji": "発車",
    "hiragana": "はっしゃ",
    "meaning": "발차"
  },
  {
    "kanji": "発達",
    "hiragana": "はったつ",
    "meaning": "발달"
  },
  {
    "kanji": "反省",
    "hiragana": "はんせい",
    "meaning": "반성"
  },
  {
    "kanji": "秘密",
    "hiragana": "ひみつ",
    "meaning": "비밀"
  },
  {
    "kanji": "封筒",
    "hiragana": "ふうとう",
    "meaning": "봉투"
  },
  {
    "kanji": "舞台",
    "hiragana": "ぶたい",
    "meaning": "무대"
  },
  {
    "kanji": "保存",
    "hiragana": "ほぞん",
    "meaning": "보존"
  },
  {
    "kanji": "目上",
    "hiragana": "めうえ",
    "meaning": "윗사람, 연장자"
  },
  {
    "kanji": "郵送",
    "hiragana": "ゆうそう",
    "meaning": "우송, 우편으로 보냄"
  },
  {
    "kanji": "論争",
    "hiragana": "ろんそう",
    "meaning": "논쟁"
  },
  {
    "kanji": "繰り返す",
    "hiragana": "くりかえす",
    "meaning": "반복하다"
  },
  {
    "kanji": "尽きる",
    "hiragana": "つきる",
    "meaning": "다하다"
  },
  {
    "kanji": "述べる",
    "hiragana": "のべる",
    "meaning": "말하다, 서술하다"
  },
  {
    "kanji": "乗り継ぐ",
    "hiragana": "のりつぐ",
    "meaning": "갈아타다"
  },
  {
    "kanji": "略す",
    "hiragana": "りゃくす",
    "meaning": "줄이다, 생략하다"
  },
  {
    "kanji": "可愛らしい",
    "hiragana": "かわいらしい",
    "meaning": "사랑스럽다, 귀엽다"
  },
  {
    "kanji": "鈍い",
    "hiragana": "にぶい",
    "meaning": "둔하다, 무디다"
  },
  {
    "kanji": "多彩だ",
    "hiragana": "たさいだ",
    "meaning": "다채롭다"
  },
  {
    "kanji": "一斉に",
    "hiragana": "いっせいに",
    "meaning": "일제히"
  },
  {
    "kanji": "外見",
    "hiragana": "がいけん",
    "meaning": "외견"
  },
  {
    "kanji": "催促",
    "hiragana": "さいそく",
    "meaning": "재촉"
  },
  {
    "kanji": "深刻だ",
    "hiragana": "しんこくだ",
    "meaning": "심각하다"
  },
  {
    "kanji": "合図",
    "hiragana": "あいず",
    "meaning": "신호"
  },
  {
    "kanji": "言い訳",
    "hiragana": "いいわけ",
    "meaning": "변명"
  },
  {
    "kanji": "遠慮",
    "hiragana": "えんりょ",
    "meaning": "사양"
  },
  {
    "kanji": "会見",
    "hiragana": "かいけん",
    "meaning": "회견"
  },
  {
    "kanji": "雷",
    "hiragana": "かみなり",
    "meaning": "천둥, 번개"
  },
  {
    "kanji": "共同",
    "hiragana": "きょうどう",
    "meaning": "공동"
  },
  {
    "kanji": "掲示",
    "hiragana": "けいじ",
    "meaning": "게시"
  },
  {
    "kanji": "高層",
    "hiragana": "こうそう",
    "meaning": "고층"
  },
  {
    "kanji": "交代",
    "hiragana": "こうたい",
    "meaning": "교대"
  },
  {
    "kanji": "合同",
    "hiragana": "ごうどう",
    "meaning": "합동"
  },
  {
    "kanji": "作成",
    "hiragana": "さくせい",
    "meaning": "작성"
  },
  {
    "kanji": "資源",
    "hiragana": "しげん",
    "meaning": "자원"
  },
  {
    "kanji": "支持",
    "hiragana": "しじ",
    "meaning": "지지"
  },
  {
    "kanji": "指導",
    "hiragana": "しどう",
    "meaning": "지도"
  },
  {
    "kanji": "主観",
    "hiragana": "しゅかん",
    "meaning": "주관"
  },
  {
    "kanji": "取材",
    "hiragana": "しゅざい",
    "meaning": "취재"
  },
  {
    "kanji": "需要",
    "hiragana": "じゅよう",
    "meaning": "수요"
  },
  {
    "kanji": "信頼",
    "hiragana": "しんらい",
    "meaning": "신뢰"
  },
  {
    "kanji": "地域",
    "hiragana": "ちいき",
    "meaning": "지역"
  },
  {
    "kanji": "注目",
    "hiragana": "ちゅうもく",
    "meaning": "주목"
  },
  {
    "kanji": "転職",
    "hiragana": "てんしょく",
    "meaning": "이직"
  },
  {
    "kanji": "天然",
    "hiragana": "てんねん",
    "meaning": "천연"
  },
  {
    "kanji": "範囲",
    "hiragana": "はんい",
    "meaning": "범위"
  },
  {
    "kanji": "服装",
    "hiragana": "ふくそう",
    "meaning": "복장"
  },
  {
    "kanji": "分野",
    "hiragana": "ぶんや",
    "meaning": "분야"
  },
  {
    "kanji": "方針",
    "hiragana": "ほうしん",
    "meaning": "방침"
  },
  {
    "kanji": "補足",
    "hiragana": "ほそく",
    "meaning": "보충"
  },
  {
    "kanji": "矛盾",
    "hiragana": "むじゅん",
    "meaning": "모순"
  },
  {
    "kanji": "名刺",
    "hiragana": "めいし",
    "meaning": "명함"
  },
  {
    "kanji": "行方",
    "hiragana": "ゆくえ",
    "meaning": "행방"
  },
  {
    "kanji": "用途",
    "hiragana": "ようと",
    "meaning": "용도"
  },
  {
    "kanji": "乱暴",
    "hiragana": "らんぼう",
    "meaning": "난폭"
  },
  {
    "kanji": "利益",
    "hiragana": "りえき",
    "meaning": "이익"
  },
  {
    "kanji": "甘やかす",
    "hiragana": "あまやかす",
    "meaning": "응석을 받아주다"
  },
  {
    "kanji": "思いつく",
    "hiragana": "おもいつく",
    "meaning": "생각이 떠오르다"
  },
  {
    "kanji": "叶う",
    "hiragana": "かなう",
    "meaning": "이루어지다"
  },
  {
    "kanji": "畳む",
    "hiragana": "たたむ",
    "meaning": "개다"
  },
  {
    "kanji": "外す",
    "hiragana": "はずす",
    "meaning": "풀다, 벗다"
  },
  {
    "kanji": "塞ぐ",
    "hiragana": "ふさぐ",
    "meaning": "틀어 막다, 가리다"
  },
  {
    "kanji": "振り向く",
    "hiragana": "ふりむく",
    "meaning": "돌아보다"
  },
  {
    "kanji": "温暖だ",
    "hiragana": "おんだんだ",
    "meaning": "온난하다"
  },
  {
    "kanji": "冷静だ",
    "hiragana": "れいせいだ",
    "meaning": "냉정하다"
  },
  {
    "kanji": "生き生き",
    "hiragana": "いきいき",
    "meaning": "생생, 싱싱"
  },
  {
    "kanji": "一旦",
    "hiragana": "いったん",
    "meaning": "일단"
  },
  {
    "kanji": "維持",
    "hiragana": "いじ",
    "meaning": "유지"
  },
  {
    "kanji": "違法",
    "hiragana": "いほう",
    "meaning": "위법"
  },
  {
    "kanji": "横断",
    "hiragana": "おうだん",
    "meaning": "횡단"
  },
  {
    "kanji": "音声",
    "hiragana": "おんせい",
    "meaning": "음성"
  },
  {
    "kanji": "顔色",
    "hiragana": "かおいろ",
    "meaning": "안색"
  },
  {
    "kanji": "課題",
    "hiragana": "かだい",
    "meaning": "과제"
  },
  {
    "kanji": "格好",
    "hiragana": "かっこう",
    "meaning": "모양, 차림새, 형태"
  },
  {
    "kanji": "加入",
    "hiragana": "かにゅう",
    "meaning": "가입"
  },
  {
    "kanji": "我慢",
    "hiragana": "がまん",
    "meaning": "참음, 인내"
  },
  {
    "kanji": "経由",
    "hiragana": "けいゆ",
    "meaning": "경유"
  },
  {
    "kanji": "傑作",
    "hiragana": "けっさく",
    "meaning": "걸작"
  },
  {
    "kanji": "固定",
    "hiragana": "こてい",
    "meaning": "고정"
  },
  {
    "kanji": "参列",
    "hiragana": "さんれつ",
    "meaning": "참석"
  },
  {
    "kanji": "指定",
    "hiragana": "してい",
    "meaning": "지정"
  },
  {
    "kanji": "授受",
    "hiragana": "じゅじゅ",
    "meaning": "수수, 주고받음"
  },
  {
    "kanji": "出願",
    "hiragana": "しゅつがん",
    "meaning": "출원"
  },
  {
    "kanji": "証拠",
    "hiragana": "しょうこ",
    "meaning": "증거"
  },
  {
    "kanji": "承認",
    "hiragana": "しょうにん",
    "meaning": "승인"
  },
  {
    "kanji": "先端",
    "hiragana": "せんたん",
    "meaning": "첨단"
  },
  {
    "kanji": "戦略",
    "hiragana": "せんりゃく",
    "meaning": "전략"
  },
  {
    "kanji": "対決",
    "hiragana": "たいけつ",
    "meaning": "대결"
  },
  {
    "kanji": "対抗",
    "hiragana": "たいこう",
    "meaning": "대항"
  },
  {
    "kanji": "達成",
    "hiragana": "たっせい",
    "meaning": "달성"
  },
  {
    "kanji": "短縮",
    "hiragana": "たんしゅく",
    "meaning": "단축"
  },
  {
    "kanji": "直進",
    "hiragana": "ちょくしん",
    "meaning": "직진"
  },
  {
    "kanji": "直行",
    "hiragana": "ちょっこう",
    "meaning": "직행"
  },
  {
    "kanji": "通信",
    "hiragana": "つうしん",
    "meaning": "통신"
  },
  {
    "kanji": "通話",
    "hiragana": "つうわ",
    "meaning": "통화"
  },
  {
    "kanji": "定価",
    "hiragana": "ていか",
    "meaning": "정가"
  },
  {
    "kanji": "提示",
    "hiragana": "ていじ",
    "meaning": "제시"
  },
  {
    "kanji": "手間",
    "hiragana": "てま",
    "meaning": "노력, 수고"
  },
  {
    "kanji": "伝言",
    "hiragana": "でんごん",
    "meaning": "전언"
  },
  {
    "kanji": "登場",
    "hiragana": "とうじょう",
    "meaning": "등장"
  },
  {
    "kanji": "到達",
    "hiragana": "とうたつ",
    "meaning": "도달"
  },
  {
    "kanji": "入社",
    "hiragana": "にゅうしゃ",
    "meaning": "입사"
  },
  {
    "kanji": "反論",
    "hiragana": "はんろん",
    "meaning": "반론"
  },
  {
    "kanji": "皮肉",
    "hiragana": "ひにく",
    "meaning": "비꼼, 야유"
  },
  {
    "kanji": "付属",
    "hiragana": "ふぞく",
    "meaning": "부속"
  },
  {
    "kanji": "不都合",
    "hiragana": "ふつごう",
    "meaning": "형편이 좋지 않음"
  },
  {
    "kanji": "物体",
    "hiragana": "ぶったい",
    "meaning": "물체"
  },
  {
    "kanji": "放映",
    "hiragana": "ほうえい",
    "meaning": "방영"
  },
  {
    "kanji": "味方",
    "hiragana": "みかた",
    "meaning": "편, 아군"
  },
  {
    "kanji": "密着",
    "hiragana": "みっちゃく",
    "meaning": "밀착"
  },
  {
    "kanji": "申し込み",
    "hiragana": "もうしこみ",
    "meaning": "신청"
  },
  {
    "kanji": "容器",
    "hiragana": "ようき",
    "meaning": "용기"
  },
  {
    "kanji": "用具",
    "hiragana": "ようぐ",
    "meaning": "도구, 용품"
  },
  {
    "kanji": "飽きる",
    "hiragana": "あきる",
    "meaning": "싫증나다"
  },
  {
    "kanji": "惜しむ",
    "hiragana": "おしむ",
    "meaning": "아끼다"
  },
  {
    "kanji": "限る",
    "hiragana": "かぎる",
    "meaning": "한정하다"
  },
  {
    "kanji": "築く",
    "hiragana": "きずく",
    "meaning": "구축하다, 쌓다"
  },
  {
    "kanji": "崩す",
    "hiragana": "くずす",
    "meaning": "무너뜨리다"
  },
  {
    "kanji": "くみ取る",
    "hiragana": "くみとる",
    "meaning": "헤아리다"
  },
  {
    "kanji": "支える",
    "hiragana": "ささえる",
    "meaning": "지탱하다"
  },
  {
    "kanji": "戦う",
    "hiragana": "たたかう",
    "meaning": "싸우다"
  },
  {
    "kanji": "整う",
    "hiragana": "ととのう",
    "meaning": "정돈되다"
  },
  {
    "kanji": "眺める",
    "hiragana": "ながめる",
    "meaning": "바라보다"
  },
  {
    "kanji": "担う",
    "hiragana": "になう",
    "meaning": "짊어지다"
  },
  {
    "kanji": "震える",
    "hiragana": "ふるえる",
    "meaning": "떨리다"
  },
  {
    "kanji": "認める",
    "hiragana": "みとめる",
    "meaning": "인정하다"
  },
  {
    "kanji": "見渡す",
    "hiragana": "みわたす",
    "meaning": "둘러보다, 전망하다"
  },
  {
    "kanji": "止す",
    "hiragana": "よす",
    "meaning": "그만두다"
  },
  {
    "kanji": "危うい",
    "hiragana": "あやうい",
    "meaning": "위태롭다"
  },
  {
    "kanji": "嫌らしい",
    "hiragana": "いやらしい",
    "meaning": "역겹다"
  },
  {
    "kanji": "疑わしい",
    "hiragana": "うたがわしい",
    "meaning": "의심스럽다"
  },
  {
    "kanji": "重たい",
    "hiragana": "おもたい",
    "meaning": "무겁다"
  },
  {
    "kanji": "痒い",
    "hiragana": "かゆい",
    "meaning": "가렵다"
  },
  {
    "kanji": "臭い",
    "hiragana": "くさい",
    "meaning": "냄새가 나다"
  },
  {
    "kanji": "煙い",
    "hiragana": "けむい",
    "meaning": "눈이 따갑다, 맵다"
  },
  {
    "kanji": "恋しい",
    "hiragana": "こいしい",
    "meaning": "그립다"
  },
  {
    "kanji": "清々しい",
    "hiragana": "すがすがしい",
    "meaning": "개운하다, 시원하다"
  },
  {
    "kanji": "切ない",
    "hiragana": "せつない",
    "meaning": "애달프다, 안타깝다"
  },
  {
    "kanji": "力強い",
    "hiragana": "ちからづよい",
    "meaning": "마음이 든든하다"
  },
  {
    "kanji": "情けない",
    "hiragana": "なさけない",
    "meaning": "한심하다, 매정하다"
  },
  {
    "kanji": "蒸し暑い",
    "hiragana": "むしあつい",
    "meaning": "무덥다"
  },
  {
    "kanji": "緩い",
    "hiragana": "ゆるい",
    "meaning": "느슨하다"
  },
  {
    "kanji": "煩わしい",
    "hiragana": "わずらわしい",
    "meaning": "번거롭다, 성가시다"
  },
  {
    "kanji": "内気だ",
    "hiragana": "うちきだ",
    "meaning": "내성적이다, 소심하다"
  },
  {
    "kanji": "大柄だ",
    "hiragana": "おおがらだ",
    "meaning": "몸집이 크다"
  },
  {
    "kanji": "大らかだ",
    "hiragana": "おおらかだ",
    "meaning": "대범하다"
  },
  {
    "kanji": "疎かだ",
    "hiragana": "おろそかだ",
    "meaning": "소홀하다, 등한시하다"
  },
  {
    "kanji": "確実だ",
    "hiragana": "かくじつだ",
    "meaning": "확실하다"
  },
  {
    "kanji": "強力だ",
    "hiragana": "きょうりょくだ",
    "meaning": "강력하다"
  },
  {
    "kanji": "健康だ",
    "hiragana": "けんこうだ",
    "meaning": "건강하다"
  },
  {
    "kanji": "困難だ",
    "hiragana": "こんなんだ",
    "meaning": "곤란하다"
  },
  {
    "kanji": "幸いだ",
    "hiragana": "さいわいだ",
    "meaning": "다행스럽다"
  },
  {
    "kanji": "新鮮だ",
    "hiragana": "しんせんだ",
    "meaning": "신선하다"
  },
  {
    "kanji": "健やかだ",
    "hiragana": "すこやかだ",
    "meaning": "튼튼하다, 건강하다"
  },
  {
    "kanji": "平らだ",
    "hiragana": "たいらだ",
    "meaning": "평평하다"
  },
  {
    "kanji": "的確だ",
    "hiragana": "てきかくだ",
    "meaning": "정확하다"
  },
  {
    "kanji": "適当だ",
    "hiragana": "てきとうだ",
    "meaning": "대충이다, 적당하다"
  },
  {
    "kanji": "生意気だ",
    "hiragana": "なまいきだ",
    "meaning": "건방지다, 주제 넘다"
  },
  {
    "kanji": "華やかだ",
    "hiragana": "はなやかだ",
    "meaning": "화려하다, 호화롭다"
  },
  {
    "kanji": "不潔だ",
    "hiragana": "ふけつだ",
    "meaning": "불결하다"
  },
  {
    "kanji": "厄介だ",
    "hiragana": "やっかいだ",
    "meaning": "성가시다"
  },
  {
    "kanji": "幼稚だ",
    "hiragana": "ようちだ",
    "meaning": "유치하다"
  },
  {
    "kanji": "余計だ",
    "hiragana": "よけいだ",
    "meaning": "쓸데없다, 부질없다"
  },
  {
    "kanji": "相次いで",
    "hiragana": "あいついで",
    "meaning": "잇따라"
  },
  {
    "kanji": "案外",
    "hiragana": "あんがい",
    "meaning": "의외로"
  },
  {
    "kanji": "大いに",
    "hiragana": "おおいに",
    "meaning": "크게, 많이"
  },
  {
    "kanji": "各々",
    "hiragana": "おのおの",
    "meaning": "제각각, 각기"
  },
  {
    "kanji": "極めて",
    "hiragana": "きわめて",
    "meaning": "극히"
  },
  {
    "kanji": "決して",
    "hiragana": "けっして",
    "meaning": "결코"
  },
  {
    "kanji": "当然",
    "hiragana": "とうぜん",
    "meaning": "당연히"
  }
];
