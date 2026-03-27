const jlptWords = [
  {
    "kanji": "補う",
    "hiragana": "おぎなう",
    "meaning": "보완하다, 보충하다"
  },
  {
    "kanji": "至急",
    "hiragana": "しきゅう",
    "meaning": "지급, 매우 급함"
  },
  {
    "kanji": "相互",
    "hiragana": "そうご",
    "meaning": "상호, 서로"
  },
  {
    "kanji": "率直な",
    "hiragana": "そっちょくな",
    "meaning": "솔직한"
  },
  {
    "kanji": "規模",
    "hiragana": "きぼ",
    "meaning": "규모"
  },
  {
    "kanji": "装置",
    "hiragana": "そうち",
    "meaning": "장치"
  },
  {
    "kanji": "辛い",
    "hiragana": "つらい",
    "meaning": "맵다"
  },
  {
    "kanji": "抽象的な",
    "hiragana": "ちゅうしょうてきな",
    "meaning": "추상적인"
  },
  {
    "kanji": "触れる",
    "hiragana": "ふれる",
    "meaning": "닿다, 언급하다"
  },
  {
    "kanji": "占める",
    "hiragana": "しめる",
    "meaning": "차지하다, 점유하다"
  },
  {
    "kanji": "景色",
    "hiragana": "けしき",
    "meaning": "경치"
  },
  {
    "kanji": "返却",
    "hiragana": "へんきゃく",
    "meaning": "반납"
  },
  {
    "kanji": "尊重する",
    "hiragana": "そんちょうする",
    "meaning": "존중하다"
  },
  {
    "kanji": "削除",
    "hiragana": "さくじょ",
    "meaning": "삭제"
  },
  {
    "kanji": "備える",
    "hiragana": "そなえる",
    "meaning": "대비하다"
  },
  {
    "kanji": "治療",
    "hiragana": "ちりょう",
    "meaning": "치료"
  },
  {
    "kanji": "焦点",
    "hiragana": "しょうてん",
    "meaning": "초점"
  },
  {
    "kanji": "防災",
    "hiragana": "ぼうさい",
    "meaning": "방재"
  },
  {
    "kanji": "撮影",
    "hiragana": "さつえい",
    "meaning": "촬영"
  },
  {
    "kanji": "略する",
    "hiragana": "りゃくする",
    "meaning": "생략하다, 줄이다"
  },
  {
    "kanji": "敗れる",
    "hiragana": "やぶれる",
    "meaning": "패배하다"
  },
  {
    "kanji": "破片",
    "hiragana": "はへん",
    "meaning": "파편"
  },
  {
    "kanji": "地元",
    "hiragana": "じもと",
    "meaning": "고장, 현지"
  },
  {
    "kanji": "世の中",
    "hiragana": "よのなか",
    "meaning": "세상"
  },
  {
    "kanji": "要求",
    "hiragana": "ようきゅう",
    "meaning": "요구"
  },
  {
    "kanji": "清潔な",
    "hiragana": "せいけつな",
    "meaning": "청결한"
  },
  {
    "kanji": "密接な",
    "hiragana": "みっせつな",
    "meaning": "밀접한"
  },
  {
    "kanji": "勧誘",
    "hiragana": "かんゆう",
    "meaning": "권유"
  },
  {
    "kanji": "祝う",
    "hiragana": "いわう",
    "meaning": "축하하다"
  },
  {
    "kanji": "隠す",
    "hiragana": "かくす",
    "meaning": "숨기다"
  },
  {
    "kanji": "豊富な",
    "hiragana": "ほうふな",
    "meaning": "풍부한"
  },
  {
    "kanji": "改めて",
    "hiragana": "あらためて",
    "meaning": "다시"
  },
  {
    "kanji": "調節",
    "hiragana": "ちょうせつ",
    "meaning": "조절"
  },
  {
    "kanji": "姿勢",
    "hiragana": "しせい",
    "meaning": "자세"
  },
  {
    "kanji": "拡充",
    "hiragana": "かくじゅう",
    "meaning": "확충"
  },
  {
    "kanji": "損害",
    "hiragana": "そんがい",
    "meaning": "손해"
  },
  {
    "kanji": "積む",
    "hiragana": "つむ",
    "meaning": "쌓다"
  },
  {
    "kanji": "行事",
    "hiragana": "ぎょうじ",
    "meaning": "행사"
  },
  {
    "kanji": "模範",
    "hiragana": "もはん",
    "meaning": "모범"
  },
  {
    "kanji": "現象",
    "hiragana": "げんしょう",
    "meaning": "현상"
  },
  {
    "kanji": "逃亡",
    "hiragana": "とうぼう",
    "meaning": "도망"
  },
  {
    "kanji": "詳しい",
    "hiragana": "くわしい",
    "meaning": "자세하다, 상세하다"
  },
  {
    "kanji": "大幅に",
    "hiragana": "おおはばに",
    "meaning": "대폭적으로"
  },
  {
    "kanji": "憎い",
    "hiragana": "にくい",
    "meaning": "밉다"
  },
  {
    "kanji": "極端な",
    "hiragana": "きょくたんな",
    "meaning": "극단적인"
  },
  {
    "kanji": "悔しい",
    "hiragana": "くやしい",
    "meaning": "억울하다"
  },
  {
    "kanji": "貴重な",
    "hiragana": "きちょうな",
    "meaning": "귀중한"
  },
  {
    "kanji": "戻す",
    "hiragana": "もどす",
    "meaning": "되돌리다"
  },
  {
    "kanji": "競う",
    "hiragana": "きそう",
    "meaning": "겨루다, 경쟁하다"
  },
  {
    "kanji": "幼稚な",
    "hiragana": "ようちな",
    "meaning": "유치한"
  },
  {
    "kanji": "怪しい",
    "hiragana": "あやしい",
    "meaning": "수상하다"
  },
  {
    "kanji": "継続",
    "hiragana": "けいぞく",
    "meaning": "계속"
  },
  {
    "kanji": "批評",
    "hiragana": "ひひょう",
    "meaning": "비평"
  },
  {
    "kanji": "圧勝",
    "hiragana": "あっしょう",
    "meaning": "압승"
  },
  {
    "kanji": "容姿",
    "hiragana": "ようし",
    "meaning": "용모, 외모"
  },
  {
    "kanji": "除く",
    "hiragana": "のぞく",
    "meaning": "제외하다, 제거하다"
  },
  {
    "kanji": "納める",
    "hiragana": "おさめる",
    "meaning": "납입하다, 납부하다"
  },
  {
    "kanji": "傷む",
    "hiragana": "いたむ",
    "meaning": "상하다, 손상되다"
  },
  {
    "kanji": "伴う",
    "hiragana": "ともなう",
    "meaning": "따르다, 동반하다"
  },
  {
    "kanji": "貿易",
    "hiragana": "ぼうえき",
    "meaning": "무역"
  },
  {
    "kanji": "劣る",
    "hiragana": "おとる",
    "meaning": "뒤떨어지다, 열등하다"
  },
  {
    "kanji": "省略",
    "hiragana": "しょうりゃく",
    "meaning": "생략"
  },
  {
    "kanji": "願望",
    "hiragana": "がんぼう",
    "meaning": "소망, 바람"
  },
  {
    "kanji": "拒否",
    "hiragana": "きょひ",
    "meaning": "거부"
  },
  {
    "kanji": "幼い",
    "hiragana": "おさない",
    "meaning": "어리다"
  },
  {
    "kanji": "含める",
    "hiragana": "ふくめる",
    "meaning": "포함시키다"
  },
  {
    "kanji": "握る",
    "hiragana": "にぎる",
    "meaning": "쥐다"
  },
  {
    "kanji": "囲む",
    "hiragana": "かこむ",
    "meaning": "둘러싸다, 에워싸다"
  },
  {
    "kanji": "密閉",
    "hiragana": "みっぺい",
    "meaning": "밀폐"
  },
  {
    "kanji": "油断",
    "hiragana": "ゆだん",
    "meaning": "방심"
  },
  {
    "kanji": "絞る",
    "hiragana": "しぼる",
    "meaning": "짜다, 범위를 좁히다"
  },
  {
    "kanji": "垂直",
    "hiragana": "すいちょく",
    "meaning": "수직"
  },
  {
    "kanji": "乱れる",
    "hiragana": "みだれる",
    "meaning": "흐트러지다"
  },
  {
    "kanji": "圧倒的",
    "hiragana": "あっとうてき",
    "meaning": "압도적"
  },
  {
    "kanji": "柔軟な",
    "hiragana": "じゅうなんな",
    "meaning": "유연한"
  },
  {
    "kanji": "等しい",
    "hiragana": "ひとしい",
    "meaning": "같다, 다름없다"
  },
  {
    "kanji": "強火",
    "hiragana": "つよび",
    "meaning": "센 불"
  },
  {
    "kanji": "軽傷",
    "hiragana": "けいしょう",
    "meaning": "경상, 가벼운 부상"
  },
  {
    "kanji": "抱える",
    "hiragana": "かかえる",
    "meaning": "감싸 쥐다, 안다"
  },
  {
    "kanji": "負担",
    "hiragana": "ふたん",
    "meaning": "부담"
  },
  {
    "kanji": "求人",
    "hiragana": "きゅうじん",
    "meaning": "구인"
  },
  {
    "kanji": "映る",
    "hiragana": "うつる",
    "meaning": "비치다, 영상으로 나타나다"
  },
  {
    "kanji": "怖い",
    "hiragana": "こわい",
    "meaning": "무섭다"
  },
  {
    "kanji": "下旬",
    "hiragana": "げじゅん",
    "meaning": "하순"
  },
  {
    "kanji": "冷蔵庫",
    "hiragana": "れいぞうこ",
    "meaning": "냉장고"
  },
  {
    "kanji": "倒す",
    "hiragana": "たおす",
    "meaning": "쓰러뜨리다"
  },
  {
    "kanji": "総額",
    "hiragana": "そうがく",
    "meaning": "총액"
  },
  {
    "kanji": "湿る",
    "hiragana": "しめる",
    "meaning": "습기 차다"
  },
  {
    "kanji": "険しい",
    "hiragana": "けわしい",
    "meaning": "험하다"
  },
  {
    "kanji": "抽選",
    "hiragana": "ちゅうせん",
    "meaning": "추첨"
  },
  {
    "kanji": "比較的",
    "hiragana": "ひかくてき",
    "meaning": "비교적"
  },
  {
    "kanji": "離れる",
    "hiragana": "はなれる",
    "meaning": "떨어지다, 거리가 멀어지다"
  },
  {
    "kanji": "下降",
    "hiragana": "かこう",
    "meaning": "하강"
  },
  {
    "kanji": "企画",
    "hiragana": "きかく",
    "meaning": "기획"
  },
  {
    "kanji": "再度",
    "hiragana": "さいど",
    "meaning": "두 번, 재차"
  },
  {
    "kanji": "著しい",
    "hiragana": "いちじるしい",
    "meaning": "현저하다, 두드러지다"
  },
  {
    "kanji": "和やかな",
    "hiragana": "なごやかな",
    "meaning": "부드럽다, 온화하다"
  },
  {
    "kanji": "声援",
    "hiragana": "せいえん",
    "meaning": "성원"
  },
  {
    "kanji": "処理",
    "hiragana": "しょり",
    "meaning": "처리"
  },
  {
    "kanji": "傾く",
    "hiragana": "かたむく",
    "meaning": "기울다"
  },
  {
    "kanji": "憎む",
    "hiragana": "にくむ",
    "meaning": "미워하다"
  },
  {
    "kanji": "偶然",
    "hiragana": "ぐうぜん",
    "meaning": "우연히"
  },
  {
    "kanji": "情景",
    "hiragana": "じょうけい",
    "meaning": "정경"
  },
  {
    "kanji": "刺激",
    "hiragana": "しげき",
    "meaning": "자극"
  },
  {
    "kanji": "乏しい",
    "hiragana": "とぼしい",
    "meaning": "부족하다"
  },
  {
    "kanji": "介護",
    "hiragana": "かいご",
    "meaning": "개호, 간병"
  },
  {
    "kanji": "善良な",
    "hiragana": "ぜんりょうな",
    "meaning": "선량한"
  },
  {
    "kanji": "焦る",
    "hiragana": "あせる",
    "meaning": "안달하다, 초조해하다"
  },
  {
    "kanji": "賛否",
    "hiragana": "さんぴ",
    "meaning": "찬부, 찬반"
  },
  {
    "kanji": "記憶",
    "hiragana": "きおく",
    "meaning": "기억"
  },
  {
    "kanji": "平等",
    "hiragana": "びょうどう",
    "meaning": "평등"
  },
  {
    "kanji": "偉い",
    "hiragana": "えらい",
    "meaning": "훌륭하다"
  },
  {
    "kanji": "詳細",
    "hiragana": "しょうさい",
    "meaning": "상세"
  },
  {
    "kanji": "途端に",
    "hiragana": "とたんに",
    "meaning": "갑자기"
  },
  {
    "kanji": "分析",
    "hiragana": "ぶんせき",
    "meaning": "분석"
  },
  {
    "kanji": "絡まる",
    "hiragana": "からまる",
    "meaning": "얽히다"
  },
  {
    "kanji": "素材",
    "hiragana": "そざい",
    "meaning": "소재"
  },
  {
    "kanji": "農薬",
    "hiragana": "のうやく",
    "meaning": "농약"
  },
  {
    "kanji": "警備",
    "hiragana": "けいび",
    "meaning": "경비"
  },
  {
    "kanji": "鮮やかな",
    "hiragana": "せんやかな",
    "meaning": "선명한"
  },
  {
    "kanji": "優秀な",
    "hiragana": "ゆうしゅうな",
    "meaning": "우수한"
  },
  {
    "kanji": "外れる",
    "hiragana": "はずれる",
    "meaning": "빠지다, 빗나가다"
  },
  {
    "kanji": "迷う",
    "hiragana": "まよう",
    "meaning": "헤매다, 망설이다"
  },
  {
    "kanji": "世間",
    "hiragana": "せけん",
    "meaning": "세간, 세상"
  },
  {
    "kanji": "背骨",
    "hiragana": "せぼね",
    "meaning": "등뼈, 척추"
  },
  {
    "kanji": "勇ましい",
    "hiragana": "いさましい",
    "meaning": "용감하다, 활발하다"
  },
  {
    "kanji": "実践",
    "hiragana": "じっせん",
    "meaning": "실천"
  },
  {
    "kanji": "運賃",
    "hiragana": "うんちん",
    "meaning": "운임"
  },
  {
    "kanji": "衣装",
    "hiragana": "いしょう",
    "meaning": "의상"
  },
  {
    "kanji": "握手",
    "hiragana": "あくしゅ",
    "meaning": "악수"
  },
  {
    "kanji": "礼儀",
    "hiragana": "れいぎ",
    "meaning": "예의"
  },
  {
    "kanji": "開催",
    "hiragana": "かいさい",
    "meaning": "개최"
  },
  {
    "kanji": "出世",
    "hiragana": "しゅっせ",
    "meaning": "출세"
  },
  {
    "kanji": "訪れる",
    "hiragana": "おとずれる",
    "meaning": "방문하다"
  },
  {
    "kanji": "頼り",
    "hiragana": "たより",
    "meaning": "연고, 의지가 되는 것"
  },
  {
    "kanji": "扱う",
    "hiragana": "あつかう",
    "meaning": "다루다, 취급하다"
  },
  {
    "kanji": "伝統",
    "hiragana": "でんとう",
    "meaning": "전통"
  },
  {
    "kanji": "収穫",
    "hiragana": "しゅうかく",
    "meaning": "수확"
  },
  {
    "kanji": "積極的な",
    "hiragana": "せっきょくてきな",
    "meaning": "적극적인"
  },
  {
    "kanji": "勢い",
    "hiragana": "いきおい",
    "meaning": "기세"
  },
  {
    "kanji": "抵抗",
    "hiragana": "ていこう",
    "meaning": "저항"
  },
  {
    "kanji": "暮らす",
    "hiragana": "くらす",
    "meaning": "살다"
  },
  {
    "kanji": "組織",
    "hiragana": "そしき",
    "meaning": "조직"
  },
  {
    "kanji": "象徴",
    "hiragana": "しょうちょう",
    "meaning": "상징"
  },
  {
    "kanji": "至るところ",
    "hiragana": "いたるところ",
    "meaning": "도처, 모든 장소"
  },
  {
    "kanji": "与える",
    "hiragana": "あたえる",
    "meaning": "주다"
  },
  {
    "kanji": "削る",
    "hiragana": "けずる",
    "meaning": "깎다, 삭감하다"
  },
  {
    "kanji": "激しい",
    "hiragana": "はげしい",
    "meaning": "심하다"
  },
  {
    "kanji": "真剣な",
    "hiragana": "しんけんな",
    "meaning": "진지한"
  },
  {
    "kanji": "管理",
    "hiragana": "かんり",
    "meaning": "관리"
  },
  {
    "kanji": "講義",
    "hiragana": "こうぎ",
    "meaning": "강의"
  },
  {
    "kanji": "登録",
    "hiragana": "とうろく",
    "meaning": "등록"
  },
  {
    "kanji": "努める",
    "hiragana": "つとめる",
    "meaning": "노력하다"
  },
  {
    "kanji": "福祉",
    "hiragana": "ふくし",
    "meaning": "복지"
  },
  {
    "kanji": "誘う",
    "hiragana": "さそう",
    "meaning": "권유하다, 유도하다"
  },
  {
    "kanji": "寄付",
    "hiragana": "きふ",
    "meaning": "기부"
  },
  {
    "kanji": "討論",
    "hiragana": "とうろん",
    "meaning": "토론"
  },
  {
    "kanji": "果たす",
    "hiragana": "はたす",
    "meaning": "완수하다"
  },
  {
    "kanji": "変更",
    "hiragana": "へんこう",
    "meaning": "변경"
  },
  {
    "kanji": "即座に",
    "hiragana": "そくざに",
    "meaning": "즉석에서, 그 자리에서"
  },
  {
    "kanji": "属する",
    "hiragana": "ぞくする",
    "meaning": "속하다"
  },
  {
    "kanji": "招待",
    "hiragana": "しょうたい",
    "meaning": "초대"
  },
  {
    "kanji": "導く",
    "hiragana": "みちびく",
    "meaning": "이끌다, 지도하다"
  },
  {
    "kanji": "責める",
    "hiragana": "せめる",
    "meaning": "책망하다, 나무라다"
  },
  {
    "kanji": "湿っぽい",
    "hiragana": "しめっぽい",
    "meaning": "눅눅하다, 습기 차다"
  },
  {
    "kanji": "簡潔な",
    "hiragana": "かんけつな",
    "meaning": "간결한"
  },
  {
    "kanji": "接続",
    "hiragana": "せつぞく",
    "meaning": "접속"
  },
  {
    "kanji": "招く",
    "hiragana": "まねく",
    "meaning": "부르다, 초대하다"
  },
  {
    "kanji": "援助",
    "hiragana": "えんじょ",
    "meaning": "원조"
  },
  {
    "kanji": "参照",
    "hiragana": "さんしょう",
    "meaning": "참조"
  },
  {
    "kanji": "逆らう",
    "hiragana": "さからう",
    "meaning": "거스르다, 거역하다"
  },
  {
    "kanji": "保証",
    "hiragana": "ほしょう",
    "meaning": "보증"
  },
  {
    "kanji": "破れる",
    "hiragana": "やぶれる",
    "meaning": "찢어지다, 파손되다"
  },
  {
    "kanji": "焦げる",
    "hiragana": "こげる",
    "meaning": "눋다, 타다"
  },
  {
    "kanji": "批判",
    "hiragana": "ひはん",
    "meaning": "비판"
  },
  {
    "kanji": "催し",
    "hiragana": "もよおし",
    "meaning": "행사, 모임"
  },
  {
    "kanji": "面倒な",
    "hiragana": "めんどうな",
    "meaning": "귀찮은, 성가신"
  },
  {
    "kanji": "症状",
    "hiragana": "しょうじょう",
    "meaning": "증상"
  },
  {
    "kanji": "硬貨",
    "hiragana": "こうか",
    "meaning": "동전, 주화"
  },
  {
    "kanji": "拾う",
    "hiragana": "ひろう",
    "meaning": "줍다"
  },
  {
    "kanji": "快く",
    "hiragana": "こころよく",
    "meaning": "흔쾌히"
  },
  {
    "kanji": "距離",
    "hiragana": "きょり",
    "meaning": "거리"
  },
  {
    "kanji": "製造",
    "hiragana": "せいぞう",
    "meaning": "제조"
  },
  {
    "kanji": "混乱",
    "hiragana": "こんらん",
    "meaning": "혼란"
  },
  {
    "kanji": "凍る",
    "hiragana": "こおる",
    "meaning": "얼다"
  },
  {
    "kanji": "驚く",
    "hiragana": "おどろく",
    "meaning": "놀라다"
  },
  {
    "kanji": "順調な",
    "hiragana": "じゅんちょうな",
    "meaning": "순조로운"
  },
  {
    "kanji": "救う",
    "hiragana": "すくう",
    "meaning": "구조하다"
  },
  {
    "kanji": "講師",
    "hiragana": "こうし",
    "meaning": "강사"
  },
  {
    "kanji": "好調な",
    "hiragana": "こうちょうな",
    "meaning": "호조인, 순조로운"
  },
  {
    "kanji": "争う",
    "hiragana": "あらそう",
    "meaning": "다투다"
  },
  {
    "kanji": "永久",
    "hiragana": "えいきゅう",
    "meaning": "영구"
  },
  {
    "kanji": "在籍",
    "hiragana": "ざいせき",
    "meaning": "재적"
  },
  {
    "kanji": "指摘",
    "hiragana": "してき",
    "meaning": "지적"
  },
  {
    "kanji": "従う",
    "hiragana": "したがう",
    "meaning": "따르다, 복종하다"
  },
  {
    "kanji": "恵まれる",
    "hiragana": "めぐまれる",
    "meaning": "혜택 받다, 풍부하다"
  },
  {
    "kanji": "領収書",
    "hiragana": "りょうしゅうしょ",
    "meaning": "영수증"
  },
  {
    "kanji": "荒い",
    "hiragana": "あらい",
    "meaning": "거칠다"
  },
  {
    "kanji": "見逃す",
    "hiragana": "みのがす",
    "meaning": "놓치다"
  },
  {
    "kanji": "豊かな",
    "hiragana": "ゆたかな",
    "meaning": "풍부한, 부유한"
  },
  {
    "kanji": "拡張",
    "hiragana": "かくちょう",
    "meaning": "확장"
  },
  {
    "kanji": "養う",
    "hiragana": "やしなう",
    "meaning": "기르다, 부양하다"
  },
  {
    "kanji": "帰省",
    "hiragana": "きせい",
    "meaning": "귀성"
  },
  {
    "kanji": "縮める",
    "hiragana": "ちぢめる",
    "meaning": "줄이다"
  },
  {
    "kanji": "省く",
    "hiragana": "はぶく",
    "meaning": "생략하다"
  },
  {
    "kanji": "迎える",
    "hiragana": "むかえる",
    "meaning": "맞이하다"
  },
  {
    "kanji": "異色",
    "hiragana": "いしょく",
    "meaning": "이색"
  },
  {
    "kanji": "系統",
    "hiragana": "けいとう",
    "meaning": "계통"
  },
  {
    "kanji": "返品",
    "hiragana": "へんぴん",
    "meaning": "반품"
  },
  {
    "kanji": "束ねる",
    "hiragana": "たばねる",
    "meaning": "묶다"
  },
  {
    "kanji": "乱暴",
    "hiragana": "らんぼう",
    "meaning": "난폭"
  },
  {
    "kanji": "精算",
    "hiragana": "せいさん",
    "meaning": "정산"
  },
  {
    "kanji": "趣味",
    "hiragana": "しゅみ",
    "meaning": "취미"
  },
  {
    "kanji": "弱点",
    "hiragana": "じゃくてん",
    "meaning": "약점"
  },
  {
    "kanji": "濃い",
    "hiragana": "こい",
    "meaning": "짙다, 진하다"
  },
  {
    "kanji": "任せる",
    "hiragana": "まかせる",
    "meaning": "맡기다"
  },
  {
    "kanji": "混じる",
    "hiragana": "まじる",
    "meaning": "섞이다"
  },
  {
    "kanji": "順調",
    "hiragana": "じゅんちょう",
    "meaning": "순조로움"
  },
  {
    "kanji": "演技",
    "hiragana": "えんぎ",
    "meaning": "연기"
  },
  {
    "kanji": "積もる",
    "hiragana": "つもる",
    "meaning": "쌓이다"
  },
  {
    "kanji": "違反",
    "hiragana": "いはん",
    "meaning": "위반"
  },
  {
    "kanji": "登る",
    "hiragana": "のぼる",
    "meaning": "오르다"
  },
  {
    "kanji": "陽気な",
    "hiragana": "ようきな",
    "meaning": "밝고 쾌활한, 명랑한"
  },
  {
    "kanji": "住居",
    "hiragana": "じゅうきょ",
    "meaning": "주거"
  },
  {
    "kanji": "短編",
    "hiragana": "たんぺん",
    "meaning": "단편"
  },
  {
    "kanji": "散る",
    "hiragana": "ちる",
    "meaning": "떨어지다, 흩어지다"
  },
  {
    "kanji": "典型的な",
    "hiragana": "てんけいてきな",
    "meaning": "전형적인"
  },
  {
    "kanji": "柔らかい",
    "hiragana": "やわらかい",
    "meaning": "부드럽다"
  },
  {
    "kanji": "疲労",
    "hiragana": "ひろう",
    "meaning": "피로"
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
    "kanji": "診断",
    "hiragana": "しんだん",
    "meaning": "진단"
  },
  {
    "kanji": "敬う",
    "hiragana": "うやまう",
    "meaning": "존경하다"
  },
  {
    "kanji": "受講",
    "hiragana": "じゅこう",
    "meaning": "수강"
  },
  {
    "kanji": "厚かましい",
    "hiragana": "あつかましい",
    "meaning": "뻔뻔하다"
  },
  {
    "kanji": "捨てる",
    "hiragana": "すてる",
    "meaning": "버리다"
  },
  {
    "kanji": "機嫌",
    "hiragana": "きげん",
    "meaning": "기분"
  },
  {
    "kanji": "損失",
    "hiragana": "そんしつ",
    "meaning": "손실"
  },
  {
    "kanji": "諸問題",
    "hiragana": "しょもんだい",
    "meaning": "여러 문제"
  },
  {
    "kanji": "研修",
    "hiragana": "けんしゅう",
    "meaning": "연수"
  },
  {
    "kanji": "商店街",
    "hiragana": "しょうてんがい",
    "meaning": "상점가, 상가"
  },
  {
    "kanji": "耐える",
    "hiragana": "たえる",
    "meaning": "견디다"
  },
  {
    "kanji": "再放送",
    "hiragana": "さいほうそう",
    "meaning": "재방송"
  },
  {
    "kanji": "投票",
    "hiragana": "とうひょう",
    "meaning": "투표"
  },
  {
    "kanji": "高収入",
    "hiragana": "こうしゅうにゅう",
    "meaning": "고수입"
  },
  {
    "kanji": "予約制",
    "hiragana": "よやくせい",
    "meaning": "예약제"
  },
  {
    "kanji": "志望",
    "hiragana": "しぼう",
    "meaning": "지망"
  },
  {
    "kanji": "副社長",
    "hiragana": "ふくしゃちょう",
    "meaning": "부사장"
  },
  {
    "kanji": "就職率",
    "hiragana": "しゅうしょくりつ",
    "meaning": "취직률"
  },
  {
    "kanji": "諸外国",
    "hiragana": "しょがいこく",
    "meaning": "제 외국, 외국 여러 나라"
  },
  {
    "kanji": "集中力",
    "hiragana": "しゅうちゅうりょく",
    "meaning": "집중력"
  },
  {
    "kanji": "半透明",
    "hiragana": "はんとうめい",
    "meaning": "반투명"
  },
  {
    "kanji": "旧制度",
    "hiragana": "きゅうせいど",
    "meaning": "구제도"
  },
  {
    "kanji": "低価格",
    "hiragana": "ていかかく",
    "meaning": "저가격"
  },
  {
    "kanji": "医学界",
    "hiragana": "いがくかい",
    "meaning": "의학계"
  },
  {
    "kanji": "日本流",
    "hiragana": "にほんりゅう",
    "meaning": "일본류, 일본식"
  },
  {
    "kanji": "文学賞",
    "hiragana": "ぶんがくしょう",
    "meaning": "문학상"
  },
  {
    "kanji": "準決勝",
    "hiragana": "じゅんけっしょう",
    "meaning": "준결승"
  },
  {
    "kanji": "準優勝",
    "hiragana": "じゅんゆうしょう",
    "meaning": "준우승"
  },
  {
    "kanji": "再提出",
    "hiragana": "さいていしゅつ",
    "meaning": "재제출"
  },
  {
    "kanji": "悪条件",
    "hiragana": "あくじょうけん",
    "meaning": "악조건"
  },
  {
    "kanji": "親子連れ",
    "hiragana": "おやこつれ",
    "meaning": "부모 자식 동반"
  },
  {
    "kanji": "現段階",
    "hiragana": "げんだんかい",
    "meaning": "현 단계"
  },
  {
    "kanji": "東京駅発",
    "hiragana": "とうきょうえきはつ",
    "meaning": "도쿄 역 출발"
  },
  {
    "kanji": "ム状",
    "hiragana": "むじょう",
    "meaning": "크림 상태"
  },
  {
    "kanji": "薄暗い",
    "hiragana": "うすぐらい",
    "meaning": "어둑어둑하다, 침침하다"
  },
  {
    "kanji": "非公式",
    "hiragana": "ひこうしき",
    "meaning": "비공식"
  },
  {
    "kanji": "音楽全般",
    "hiragana": "おんがくぜんぱん",
    "meaning": "음악 전반"
  },
  {
    "kanji": "一日おき",
    "hiragana": "ついたちおき",
    "meaning": "하루 걸러"
  },
  {
    "kanji": "風邪気味",
    "hiragana": "かぜぎみ",
    "meaning": "감기 기운"
  },
  {
    "kanji": "総売上",
    "hiragana": "そううりあげ",
    "meaning": "총매출"
  },
  {
    "kanji": "最有力",
    "hiragana": "さいゆうりょく",
    "meaning": "최유력, 가장 유력"
  },
  {
    "kanji": "ズン",
    "hiragana": "",
    "meaning": "시즌"
  },
  {
    "kanji": "食器類",
    "hiragana": "しょっきるい",
    "meaning": "식기류"
  },
  {
    "kanji": "ビジネスマン風",
    "hiragana": "びじねすまんかぜ",
    "meaning": "비즈니스맨풍"
  },
  {
    "kanji": "夏休み明け",
    "hiragana": "なつやすみあけ",
    "meaning": "여름 방학 끝 무렵"
  },
  {
    "kanji": "真夜中",
    "hiragana": "まよなか",
    "meaning": "한밤중"
  },
  {
    "kanji": "作品集",
    "hiragana": "さくひんしゅう",
    "meaning": "작품집"
  },
  {
    "kanji": "仮採用",
    "hiragana": "かりさいよう",
    "meaning": "임시 채용"
  },
  {
    "kanji": "危険性",
    "hiragana": "きけんせい",
    "meaning": "위험성"
  },
  {
    "kanji": "投票率",
    "hiragana": "とうひょうりつ",
    "meaning": "투표율"
  },
  {
    "kanji": "線路沿い",
    "hiragana": "せんろぞいい",
    "meaning": "선로가"
  },
  {
    "kanji": "国際色",
    "hiragana": "こくさいしょく",
    "meaning": "국제색"
  },
  {
    "kanji": "未経験",
    "hiragana": "みけいけん",
    "meaning": "미경험"
  },
  {
    "kanji": "アルファベット順",
    "hiragana": "あるふぁべっとじゅん",
    "meaning": "알파벳순"
  },
  {
    "kanji": "期限切れ",
    "hiragana": "きげんぎれれ",
    "meaning": "기한 종료"
  },
  {
    "kanji": "電車賃",
    "hiragana": "でんしゃちん",
    "meaning": "전철 요금"
  },
  {
    "kanji": "未使用",
    "hiragana": "みしよう",
    "meaning": "미사용"
  },
  {
    "kanji": "高性能",
    "hiragana": "こうせいのう",
    "meaning": "고성능"
  },
  {
    "kanji": "主成分",
    "hiragana": "しゅせいぶん",
    "meaning": "주성분"
  },
  {
    "kanji": "ド一色",
    "hiragana": "どいっしょく",
    "meaning": "축제 분위기 일색"
  },
  {
    "kanji": "勉強づけ",
    "hiragana": "べんきょうづけ",
    "meaning": "공부 몰입"
  },
  {
    "kanji": "応援団",
    "hiragana": "おうえんだん",
    "meaning": "응원단"
  },
  {
    "kanji": "初年度",
    "hiragana": "しょねんど",
    "meaning": "초년도"
  },
  {
    "kanji": "無責任",
    "hiragana": "むせきにん",
    "meaning": "무책임"
  },
  {
    "kanji": "前社長",
    "hiragana": "まえしゃちょう",
    "meaning": "전 사장"
  },
  {
    "kanji": "悪影響",
    "hiragana": "あくえいきょう",
    "meaning": "악영향"
  },
  {
    "kanji": "会員制",
    "hiragana": "かいいんせい",
    "meaning": "회원제"
  },
  {
    "kanji": "子供連れ",
    "hiragana": "こどもづれ",
    "meaning": "자녀 동반"
  },
  {
    "kanji": "家族連れ",
    "hiragana": "かぞくづれ",
    "meaning": "가족 동반"
  },
  {
    "kanji": "成功率",
    "hiragana": "せいこうりつ",
    "meaning": "성공률"
  },
  {
    "kanji": "真後ろ",
    "hiragana": "まうしろろ",
    "meaning": "바로 뒤"
  },
  {
    "kanji": "招待状",
    "hiragana": "しょうたいじょう",
    "meaning": "초대장"
  },
  {
    "kanji": "住宅街",
    "hiragana": "じゅうたくがい",
    "meaning": "주택가"
  },
  {
    "kanji": "現実離れ",
    "hiragana": "げんじつはなれ",
    "meaning": "현실을 벗어남"
  },
  {
    "kanji": "不正確",
    "hiragana": "ふせいかく",
    "meaning": "부정확"
  },
  {
    "kanji": "真新しい",
    "hiragana": "まあたらしい",
    "meaning": "완전히 새롭다"
  },
  {
    "kanji": "ロッパ風",
    "hiragana": "ろっぱかぜ",
    "meaning": "유럽풍"
  },
  {
    "kanji": "会社員風",
    "hiragana": "かいしゃいんかぜ",
    "meaning": "회사원풍"
  },
  {
    "kanji": "異文化",
    "hiragana": "いぶんか",
    "meaning": "이문화"
  },
  {
    "kanji": "結婚観",
    "hiragana": "けっこんかん",
    "meaning": "결혼관"
  },
  {
    "kanji": "来学期",
    "hiragana": "らいがっき",
    "meaning": "다음 학기"
  },
  {
    "kanji": "年代順",
    "hiragana": "ねんだいじゅん",
    "meaning": "연대순"
  },
  {
    "kanji": "進学率",
    "hiragana": "しんがくりつ",
    "meaning": "진학률"
  },
  {
    "kanji": "高水準",
    "hiragana": "こうすいじゅん",
    "meaning": "고수준"
  },
  {
    "kanji": "副大臣",
    "hiragana": "ふくだいじん",
    "meaning": "부대신"
  },
  {
    "kanji": "管理下",
    "hiragana": "かんりか",
    "meaning": "관리하"
  },
  {
    "kanji": "学年別",
    "hiragana": "がくねんべつ",
    "meaning": "학년별"
  },
  {
    "kanji": "日本式",
    "hiragana": "にほんしき",
    "meaning": "일본식"
  },
  {
    "kanji": "無計画",
    "hiragana": "むけいかく",
    "meaning": "무계획"
  },
  {
    "kanji": "再開発",
    "hiragana": "さいかいはつ",
    "meaning": "재개발"
  },
  {
    "kanji": "送信元",
    "hiragana": "そうしんもと",
    "meaning": "송신원"
  },
  {
    "kanji": "働き手",
    "hiragana": "はたらきて",
    "meaning": "일 손"
  },
  {
    "kanji": "現制度",
    "hiragana": "げんせいど",
    "meaning": "현재 제도"
  },
  {
    "kanji": "用心深い",
    "hiragana": "ようじんぶかい",
    "meaning": "조심성이 많다"
  },
  {
    "kanji": "メリカ流",
    "hiragana": "めりかりゅう",
    "meaning": "아메리카류, 미국식"
  },
  {
    "kanji": "貴財団",
    "hiragana": "たかしざいだん",
    "meaning": "귀재단"
  },
  {
    "kanji": "別れ際",
    "hiragana": "わかれきわ",
    "meaning": "헤어질 때"
  },
  {
    "kanji": "無回答",
    "hiragana": "むかいとう",
    "meaning": "무회답, 무응답"
  },
  {
    "kanji": "前町長",
    "hiragana": "まえまちちょう",
    "meaning": "전 읍장"
  },
  {
    "kanji": "日本風",
    "hiragana": "にほんふう",
    "meaning": "일본풍"
  },
  {
    "kanji": "頼みづらい",
    "hiragana": "たのみづらい",
    "meaning": "부탁하기 어렵다"
  },
  {
    "kanji": "壁際",
    "hiragana": "かべぎわ",
    "meaning": "벽가, 벽 옆"
  },
  {
    "kanji": "政治色",
    "hiragana": "せいじいろ",
    "meaning": "정치색"
  },
  {
    "kanji": "対抗心",
    "hiragana": "たいこうしん",
    "meaning": "대항심"
  },
  {
    "kanji": "諸手続き",
    "hiragana": "もろてつづき",
    "meaning": "여러 수속"
  },
  {
    "kanji": "都会育ち",
    "hiragana": "とかいそだち",
    "meaning": "도시에서 자람"
  },
  {
    "kanji": "二人連れ",
    "hiragana": "ふたりづれれ",
    "meaning": "두사람 일행"
  },
  {
    "kanji": "一仕事",
    "hiragana": "ひとしごと",
    "meaning": "한 가지 일"
  },
  {
    "kanji": "主原料",
    "hiragana": "しゅげんりょう",
    "meaning": "주원료"
  },
  {
    "kanji": "ル状",
    "hiragana": "るじょう",
    "meaning": "볼형, 동그란 모양"
  },
  {
    "kanji": "読書離れ",
    "hiragana": "どくしょはなれ",
    "meaning": "독서 기피"
  },
  {
    "kanji": "別会場",
    "hiragana": "べつかいじょう",
    "meaning": "다른 회장"
  },
  {
    "kanji": "決定権",
    "hiragana": "けっていけん",
    "meaning": "결정권"
  },
  {
    "kanji": "現社長",
    "hiragana": "げんしゃちょう",
    "meaning": "현재 사장"
  },
  {
    "kanji": "名選手",
    "hiragana": "めいせんしゅ",
    "meaning": "명선수"
  },
  {
    "kanji": "同意見",
    "hiragana": "どういけん",
    "meaning": "같은 의견"
  },
  {
    "kanji": "最接近",
    "hiragana": "さいせっきん",
    "meaning": "최접근"
  },
  {
    "kanji": "食べ頃",
    "hiragana": "たべごろ",
    "meaning": "먹기에 적당한 때, 제철"
  },
  {
    "kanji": "私宛て",
    "hiragana": "わたしあてて",
    "meaning": "내 앞"
  },
  {
    "kanji": "仮登録",
    "hiragana": "かりとうろく",
    "meaning": "가등록, 임시 등록"
  },
  {
    "kanji": "異分野",
    "hiragana": "いぶんや",
    "meaning": "다른 분야"
  },
  {
    "kanji": "写真付き",
    "hiragana": "しゃしんつき",
    "meaning": "사진 첨부"
  },
  {
    "kanji": "のんびり",
    "hiragana": "",
    "meaning": "한가로이"
  },
  {
    "kanji": "詰まる",
    "hiragana": "つまる",
    "meaning": "가득 차다, 막히다"
  },
  {
    "kanji": "割と",
    "hiragana": "わと",
    "meaning": "비교적"
  },
  {
    "kanji": "上昇",
    "hiragana": "じょうしょう",
    "meaning": "상승"
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
    "kanji": "視野",
    "hiragana": "しや",
    "meaning": "시야"
  },
  {
    "kanji": "ぼんやり",
    "hiragana": "",
    "meaning": "희미하게, 멍하게"
  },
  {
    "kanji": "尽きる",
    "hiragana": "ことごときる",
    "meaning": "다하다, 소진되다"
  },
  {
    "kanji": "さっぱり",
    "hiragana": "",
    "meaning": "전혀"
  },
  {
    "kanji": "温厚な",
    "hiragana": "おんこうな",
    "meaning": "온후한, 다정다감한"
  },
  {
    "kanji": "強み",
    "hiragana": "つよみ",
    "meaning": "강점"
  },
  {
    "kanji": "発揮",
    "hiragana": "はっき",
    "meaning": "발휘"
  },
  {
    "kanji": "機能",
    "hiragana": "きのう",
    "meaning": "기능"
  },
  {
    "kanji": "相次ぐ",
    "hiragana": "あいつぐ",
    "meaning": "잇따르다, 이어지다"
  },
  {
    "kanji": "散らかる",
    "hiragana": "ちらかる",
    "meaning": "흩어지다, 어질러지다"
  },
  {
    "kanji": "あいまいな",
    "hiragana": "",
    "meaning": "애매한"
  },
  {
    "kanji": "片寄る",
    "hiragana": "かたよる",
    "meaning": "치우치다, 편중되다"
  },
  {
    "kanji": "通じる",
    "hiragana": "つうじる",
    "meaning": "통하다"
  },
  {
    "kanji": "辞退",
    "hiragana": "じたい",
    "meaning": "사퇴"
  },
  {
    "kanji": "有効",
    "hiragana": "ゆうこう",
    "meaning": "유효"
  },
  {
    "kanji": "含む",
    "hiragana": "ふくむ",
    "meaning": "포함하다"
  },
  {
    "kanji": "得る",
    "hiragana": "える",
    "meaning": "얻다"
  },
  {
    "kanji": "いらいらする",
    "hiragana": "",
    "meaning": "초조해하다"
  },
  {
    "kanji": "解消",
    "hiragana": "かいしょう",
    "meaning": "해소"
  },
  {
    "kanji": "ぶらぶら",
    "hiragana": "",
    "meaning": "어슬렁어슬렁"
  },
  {
    "kanji": "ぐち",
    "hiragana": "",
    "meaning": "푸념, 넋두리"
  },
  {
    "kanji": "改善",
    "hiragana": "かいぜん",
    "meaning": "개선"
  },
  {
    "kanji": "改正",
    "hiragana": "かいせい",
    "meaning": "개정"
  },
  {
    "kanji": "活気",
    "hiragana": "かっき",
    "meaning": "활기"
  },
  {
    "kanji": "場面",
    "hiragana": "ばめん",
    "meaning": "장면"
  },
  {
    "kanji": "迫る",
    "hiragana": "せまる",
    "meaning": "다가오다, 임박하다"
  },
  {
    "kanji": "夢中",
    "hiragana": "むちゅう",
    "meaning": "열중"
  },
  {
    "kanji": "成長",
    "hiragana": "せいちょう",
    "meaning": "성장"
  },
  {
    "kanji": "導入",
    "hiragana": "どうにゅう",
    "meaning": "도입"
  },
  {
    "kanji": "ごろごろ",
    "hiragana": "",
    "meaning": "데굴데굴, 뒹굴뒹굴"
  },
  {
    "kanji": "訂正",
    "hiragana": "ていせい",
    "meaning": "정정"
  },
  {
    "kanji": "適度な",
    "hiragana": "てきどな",
    "meaning": "적당한, 알맞은"
  },
  {
    "kanji": "やかましい",
    "hiragana": "",
    "meaning": "시끄럽다"
  },
  {
    "kanji": "呼び止める",
    "hiragana": "よびやめる",
    "meaning": "불러 세우다"
  },
  {
    "kanji": "目指す",
    "hiragana": "めざす",
    "meaning": "지향하다, 목표로 하다"
  },
  {
    "kanji": "中継",
    "hiragana": "ちゅうけい",
    "meaning": "중계"
  },
  {
    "kanji": "パンク",
    "hiragana": "",
    "meaning": "펑크"
  },
  {
    "kanji": "解散",
    "hiragana": "かいさん",
    "meaning": "해산"
  },
  {
    "kanji": "一気に",
    "hiragana": "いっきに",
    "meaning": "단숨에, 단번에"
  },
  {
    "kanji": "ぜいたくな",
    "hiragana": "",
    "meaning": "사치스러운"
  },
  {
    "kanji": "あらかじめ",
    "hiragana": "",
    "meaning": "미리"
  },
  {
    "kanji": "ズに",
    "hiragana": "",
    "meaning": "부드럽게"
  },
  {
    "kanji": "蓄える",
    "hiragana": "たくわえる",
    "meaning": "저축하다, 비축하다"
  },
  {
    "kanji": "見当がつく",
    "hiragana": "けんとうがつく",
    "meaning": "짐작이 가다"
  },
  {
    "kanji": "体格",
    "hiragana": "たいかく",
    "meaning": "체격"
  },
  {
    "kanji": "つらい",
    "hiragana": "",
    "meaning": "괴롭다, 힘들다"
  },
  {
    "kanji": "リラックスする",
    "hiragana": "",
    "meaning": "긴장을 풀다"
  },
  {
    "kanji": "すっきり",
    "hiragana": "",
    "meaning": "산뜻하게, 후련하게"
  },
  {
    "kanji": "差し支える",
    "hiragana": "さしつかえる",
    "meaning": "지장이 있다"
  },
  {
    "kanji": "意欲",
    "hiragana": "いよく",
    "meaning": "의욕"
  },
  {
    "kanji": "うとうと",
    "hiragana": "",
    "meaning": "꾸벅꾸벅"
  },
  {
    "kanji": "比例",
    "hiragana": "ひれい",
    "meaning": "비례"
  },
  {
    "kanji": "特色",
    "hiragana": "とくしょく",
    "meaning": "특색"
  },
  {
    "kanji": "専念",
    "hiragana": "せんねん",
    "meaning": "전념"
  },
  {
    "kanji": "予測",
    "hiragana": "よそく",
    "meaning": "예측"
  },
  {
    "kanji": "つまずく",
    "hiragana": "",
    "meaning": "걸려 넘어지다, 좌절하다"
  },
  {
    "kanji": "びっしょり",
    "hiragana": "",
    "meaning": "흠뻑"
  },
  {
    "kanji": "格好",
    "hiragana": "かっこう",
    "meaning": "모습, 볼품"
  },
  {
    "kanji": "濁る",
    "hiragana": "にごる",
    "meaning": "흐려지다, 탁해지다"
  },
  {
    "kanji": "あいにく",
    "hiragana": "",
    "meaning": "공교롭게도"
  },
  {
    "kanji": "輝かしい",
    "hiragana": "かがやかしい",
    "meaning": "빛나다, 눈부시다"
  },
  {
    "kanji": "腹を立てる",
    "hiragana": "はらをたてる",
    "meaning": "화를 내다"
  },
  {
    "kanji": "完了",
    "hiragana": "かんりょう",
    "meaning": "완료"
  },
  {
    "kanji": "思いきって",
    "hiragana": "おもいきって",
    "meaning": "과감하게"
  },
  {
    "kanji": "面する",
    "hiragana": "めんする",
    "meaning": "면하다, 마주 대하다"
  },
  {
    "kanji": "バランス",
    "hiragana": "",
    "meaning": "밸런스, 균형"
  },
  {
    "kanji": "頼もしい",
    "hiragana": "たのもしい",
    "meaning": "믿음직하다"
  },
  {
    "kanji": "鋭い",
    "hiragana": "するどい",
    "meaning": "날카롭다, 예리하다"
  },
  {
    "kanji": "割り込む",
    "hiragana": "わりこむ",
    "meaning": "끼어들다"
  },
  {
    "kanji": "たっぷり",
    "hiragana": "",
    "meaning": "듬뿍"
  },
  {
    "kanji": "デザイン",
    "hiragana": "",
    "meaning": "디자인"
  },
  {
    "kanji": "おだやかな",
    "hiragana": "",
    "meaning": "온화한"
  },
  {
    "kanji": "相違",
    "hiragana": "そうい",
    "meaning": "다름, 틀림"
  },
  {
    "kanji": "確保",
    "hiragana": "かくほ",
    "meaning": "확보"
  },
  {
    "kanji": "悔やむ",
    "hiragana": "くやむ",
    "meaning": "분하게 여기다, 후회하다"
  },
  {
    "kanji": "契機",
    "hiragana": "けいき",
    "meaning": "계기"
  },
  {
    "kanji": "安易な",
    "hiragana": "あんいな",
    "meaning": "안이한"
  },
  {
    "kanji": "ひそひそ",
    "hiragana": "",
    "meaning": "소근소근"
  },
  {
    "kanji": "提供",
    "hiragana": "ていきょう",
    "meaning": "제공"
  },
  {
    "kanji": "苦情",
    "hiragana": "くじょう",
    "meaning": "불평, 클레임"
  },
  {
    "kanji": "名所",
    "hiragana": "めいしょ",
    "meaning": "명소"
  },
  {
    "kanji": "ぐったり",
    "hiragana": "",
    "meaning": "매우 지친 모습"
  },
  {
    "kanji": "ぎりぎり",
    "hiragana": "",
    "meaning": "아슬아슬"
  },
  {
    "kanji": "ショック",
    "hiragana": "",
    "meaning": "쇼크, 충격"
  },
  {
    "kanji": "有利な",
    "hiragana": "ゆうりな",
    "meaning": "유리한"
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
    "kanji": "じゃま",
    "hiragana": "",
    "meaning": "방해"
  },
  {
    "kanji": "そそっかしい",
    "hiragana": "",
    "meaning": "경솔하다"
  },
  {
    "kanji": "引き止める",
    "hiragana": "ひきやめる",
    "meaning": "만류하다, 제지하다"
  },
  {
    "kanji": "なだらかな",
    "hiragana": "",
    "meaning": "완만한"
  },
  {
    "kanji": "アレンジ",
    "hiragana": "",
    "meaning": "어레인지, 각색"
  },
  {
    "kanji": "独特",
    "hiragana": "どくとく",
    "meaning": "독특"
  },
  {
    "kanji": "活発な",
    "hiragana": "かっぱつな",
    "meaning": "활발한"
  },
  {
    "kanji": "欠かす",
    "hiragana": "かかす",
    "meaning": "빠뜨리다"
  },
  {
    "kanji": "でたらめに",
    "hiragana": "",
    "meaning": "아무렇게나"
  },
  {
    "kanji": "あこがれ",
    "hiragana": "",
    "meaning": "동경, 그리움"
  },
  {
    "kanji": "達する",
    "hiragana": "たっする",
    "meaning": "도달하다, 이르다"
  },
  {
    "kanji": "転勤",
    "hiragana": "てんきん",
    "meaning": "전근"
  },
  {
    "kanji": "栽培",
    "hiragana": "さいばい",
    "meaning": "재배"
  },
  {
    "kanji": "てんけん",
    "hiragana": "",
    "meaning": "수 긍하다,"
  },
  {
    "kanji": "点検",
    "hiragana": "てんけん",
    "meaning": "점검"
  },
  {
    "kanji": "にっこり",
    "hiragana": "",
    "meaning": "생긋, 방긋"
  },
  {
    "kanji": "続出",
    "hiragana": "ぞくしゅつ",
    "meaning": "속출"
  },
  {
    "kanji": "評価",
    "hiragana": "ひょうか",
    "meaning": "평가"
  },
  {
    "kanji": "飛び散る",
    "hiragana": "とびちる",
    "meaning": "사방에 흩날리다"
  },
  {
    "kanji": "尊重",
    "hiragana": "そんちょう",
    "meaning": "존중"
  },
  {
    "kanji": "ゲット",
    "hiragana": "",
    "meaning": "타겟, 핵심 고객층"
  },
  {
    "kanji": "敏感",
    "hiragana": "びんかん",
    "meaning": "민감"
  },
  {
    "kanji": "不安定",
    "hiragana": "ふあんてい",
    "meaning": "불안정"
  },
  {
    "kanji": "気配",
    "hiragana": "けはい",
    "meaning": "기미, 분위기"
  },
  {
    "kanji": "いいかげんな",
    "hiragana": "",
    "meaning": "무책임한"
  },
  {
    "kanji": "おとろえる",
    "hiragana": "",
    "meaning": "쇠퇴하다"
  },
  {
    "kanji": "タイミング",
    "hiragana": "",
    "meaning": "타이밍, 적절한 순간"
  },
  {
    "kanji": "分担",
    "hiragana": "ぶんたん",
    "meaning": "분담"
  },
  {
    "kanji": "気軽に",
    "hiragana": "きがるに",
    "meaning": "부담 없이"
  },
  {
    "kanji": "ふさわしい",
    "hiragana": "",
    "meaning": "어울리다"
  },
  {
    "kanji": "添付",
    "hiragana": "てんぷ",
    "meaning": "첨부"
  },
  {
    "kanji": "じろじろ",
    "hiragana": "",
    "meaning": "빤히, 뚫어지게"
  },
  {
    "kanji": "本物",
    "hiragana": "ほんもの",
    "meaning": "진짜, 실물"
  },
  {
    "kanji": "限界",
    "hiragana": "げんかい",
    "meaning": "한계"
  },
  {
    "kanji": "まれな",
    "hiragana": "",
    "meaning": "드문"
  },
  {
    "kanji": "固める",
    "hiragana": "かためる",
    "meaning": "굳히다"
  },
  {
    "kanji": "ぎっしり",
    "hiragana": "",
    "meaning": "가득"
  },
  {
    "kanji": "解約",
    "hiragana": "かいやく",
    "meaning": "해약"
  },
  {
    "kanji": "いだく",
    "hiragana": "",
    "meaning": "품다"
  },
  {
    "kanji": "誤解",
    "hiragana": "ごかい",
    "meaning": "오해"
  },
  {
    "kanji": "開設",
    "hiragana": "かいせつ",
    "meaning": "개설"
  },
  {
    "kanji": "雇う",
    "hiragana": "やとう",
    "meaning": "고용하다"
  },
  {
    "kanji": "節約",
    "hiragana": "せつやく",
    "meaning": "절약"
  },
  {
    "kanji": "思いきる",
    "hiragana": "おもいきる",
    "meaning": "결심하다"
  },
  {
    "kanji": "飛びつく",
    "hiragana": "とびつく",
    "meaning": "달려들다"
  },
  {
    "kanji": "交渉",
    "hiragana": "こうしょう",
    "meaning": "교섭"
  },
  {
    "kanji": "クリア",
    "hiragana": "",
    "meaning": "클리어, 해결"
  },
  {
    "kanji": "こそこそ",
    "hiragana": "",
    "meaning": "살금살금, 소곤소곤"
  },
  {
    "kanji": "話題",
    "hiragana": "わだい",
    "meaning": "화제"
  },
  {
    "kanji": "劇的に",
    "hiragana": "げきてきに",
    "meaning": "극적으로"
  },
  {
    "kanji": "後悔",
    "hiragana": "こうかい",
    "meaning": "후회"
  },
  {
    "kanji": "サル",
    "hiragana": "",
    "meaning": "리허설, 예행 연습"
  },
  {
    "kanji": "締め切る",
    "hiragana": "しめきる",
    "meaning": "마감하다"
  },
  {
    "kanji": "特定",
    "hiragana": "とくてい",
    "meaning": "특정"
  },
  {
    "kanji": "ぞろぞろ",
    "hiragana": "",
    "meaning": "졸졸"
  },
  {
    "kanji": "かさかさ",
    "hiragana": "",
    "meaning": "바삭바삭, 꺼칠꺼칠"
  },
  {
    "kanji": "まねる",
    "hiragana": "",
    "meaning": "흉내내다, 모방하다"
  },
  {
    "kanji": "設備",
    "hiragana": "せつび",
    "meaning": "설비"
  },
  {
    "kanji": "盛り上がる",
    "hiragana": "もりあがる",
    "meaning": "고조되다"
  },
  {
    "kanji": "進出",
    "hiragana": "しんしゅつ",
    "meaning": "진출"
  },
  {
    "kanji": "もてなす",
    "hiragana": "",
    "meaning": "대접하다"
  },
  {
    "kanji": "通過",
    "hiragana": "つうか",
    "meaning": "통과"
  },
  {
    "kanji": "譲る",
    "hiragana": "ゆずる",
    "meaning": "양도하다"
  },
  {
    "kanji": "インパクト",
    "hiragana": "",
    "meaning": "임팩트, 충격"
  },
  {
    "kanji": "売る",
    "hiragana": "うる",
    "meaning": "팔다"
  },
  {
    "kanji": "報道",
    "hiragana": "ほうどう",
    "meaning": "보도"
  },
  {
    "kanji": "雑談",
    "hiragana": "ざつだん",
    "meaning": "잡담"
  },
  {
    "kanji": "多大な",
    "hiragana": "ただいな",
    "meaning": "매우 큰"
  },
  {
    "kanji": "おしゃべり",
    "hiragana": "",
    "meaning": "잡담, 수다"
  },
  {
    "kanji": "溶け込む",
    "hiragana": "とけこむ",
    "meaning": "녹아들다"
  },
  {
    "kanji": "賢い",
    "hiragana": "かしこい",
    "meaning": "똑똑하다"
  },
  {
    "kanji": "頭がいい",
    "hiragana": "あたまがいい",
    "meaning": "머리가 좋다"
  },
  {
    "kanji": "大げさ",
    "hiragana": "おおげさ",
    "meaning": "과장"
  },
  {
    "kanji": "衰える",
    "hiragana": "おとろえる",
    "meaning": "쇠퇴하다"
  },
  {
    "kanji": "勝手な",
    "hiragana": "かってな",
    "meaning": "제멋대로인"
  },
  {
    "kanji": "わがままな",
    "hiragana": "",
    "meaning": "제멋대로인"
  },
  {
    "kanji": "思い込む",
    "hiragana": "おもいこむ",
    "meaning": "마음먹다, 믿다"
  },
  {
    "kanji": "たびたび",
    "hiragana": "",
    "meaning": "자주"
  },
  {
    "kanji": "口調",
    "hiragana": "くちょう",
    "meaning": "어조, 말투"
  },
  {
    "kanji": "何度も",
    "hiragana": "なんども",
    "meaning": "몇 번이나"
  },
  {
    "kanji": "役目",
    "hiragana": "やくめ",
    "meaning": "임무"
  },
  {
    "kanji": "ずうずうしい",
    "hiragana": "",
    "meaning": "뻔뻔스럽다 헐 렁헐렁하다"
  },
  {
    "kanji": "とても大きい",
    "hiragana": "とてもおおきい",
    "meaning": "매우 크다"
  },
  {
    "kanji": "見解",
    "hiragana": "けんかい",
    "meaning": "견해"
  },
  {
    "kanji": "考え方",
    "hiragana": "かんがえかた",
    "meaning": "생각, 사고방식"
  },
  {
    "kanji": "とりあえず",
    "hiragana": "",
    "meaning": "우선, 일단"
  },
  {
    "kanji": "レンタルする",
    "hiragana": "",
    "meaning": "대여하다"
  },
  {
    "kanji": "一応",
    "hiragana": "いちおう",
    "meaning": "우선, 일단"
  },
  {
    "kanji": "借りる",
    "hiragana": "かりる",
    "meaning": "빌리다"
  },
  {
    "kanji": "いきなり",
    "hiragana": "",
    "meaning": "갑자기"
  },
  {
    "kanji": "流行",
    "hiragana": "りゅうこう",
    "meaning": "유행"
  },
  {
    "kanji": "突然",
    "hiragana": "とつぜん",
    "meaning": "갑자기"
  },
  {
    "kanji": "慎重に",
    "hiragana": "しんちょうに",
    "meaning": "신중하게"
  },
  {
    "kanji": "直ちに",
    "hiragana": "ただちに",
    "meaning": "즉시"
  },
  {
    "kanji": "注意して",
    "hiragana": "ちゅういして",
    "meaning": "주의하여"
  },
  {
    "kanji": "すぐに",
    "hiragana": "",
    "meaning": "바로"
  },
  {
    "kanji": "縮む",
    "hiragana": "ちぢむ",
    "meaning": "줄어들다, 축소되다"
  },
  {
    "kanji": "奇妙な",
    "hiragana": "きみょうな",
    "meaning": "기묘한"
  },
  {
    "kanji": "小さくなる",
    "hiragana": "ちーさくなる",
    "meaning": "작아지다"
  },
  {
    "kanji": "変な",
    "hiragana": "へんな",
    "meaning": "이상한"
  },
  {
    "kanji": "ほぼ",
    "hiragana": "",
    "meaning": "거의"
  },
  {
    "kanji": "仕上げる",
    "hiragana": "しあげる",
    "meaning": "마무리하다, 완성시키다"
  },
  {
    "kanji": "だいたい",
    "hiragana": "",
    "meaning": "대체로"
  },
  {
    "kanji": "完成させる",
    "hiragana": "かんせいさせる",
    "meaning": "완성시키다"
  },
  {
    "kanji": "回復する",
    "hiragana": "かいふくする",
    "meaning": "회복하다"
  },
  {
    "kanji": "日中",
    "hiragana": "にっちゅう",
    "meaning": "대낮, 한낮"
  },
  {
    "kanji": "よくなる",
    "hiragana": "",
    "meaning": "좋아지다"
  },
  {
    "kanji": "昼間",
    "hiragana": "ひるま",
    "meaning": "대낮, 한낮"
  },
  {
    "kanji": "乾かない",
    "hiragana": "かわかない",
    "meaning": "마르지 않다"
  },
  {
    "kanji": "疲れる",
    "hiragana": "つかれる",
    "meaning": "지치다, 피곤하다"
  },
  {
    "kanji": "追加する",
    "hiragana": "ついかする",
    "meaning": "추가하다"
  },
  {
    "kanji": "わずかな",
    "hiragana": "",
    "meaning": "얼마 안 되는"
  },
  {
    "kanji": "足す",
    "hiragana": "たす",
    "meaning": "더하다"
  },
  {
    "kanji": "少し",
    "hiragana": "すこし",
    "meaning": "조금"
  },
  {
    "kanji": "相当",
    "hiragana": "そうとう",
    "meaning": "상당히"
  },
  {
    "kanji": "かなり",
    "hiragana": "",
    "meaning": "꽤, 상당히"
  },
  {
    "kanji": "じっとする",
    "hiragana": "",
    "meaning": "가만히 있다"
  },
  {
    "kanji": "うつむく",
    "hiragana": "",
    "meaning": "고개를 숙이다"
  },
  {
    "kanji": "動かない",
    "hiragana": "うごかない",
    "meaning": "움직이지 않는다"
  },
  {
    "kanji": "下を向く",
    "hiragana": "したをむく",
    "meaning": "아래를 보다"
  },
  {
    "kanji": "誤る",
    "hiragana": "あやまる",
    "meaning": "틀리다, 실수하다"
  },
  {
    "kanji": "正しくない",
    "hiragana": "ただしくない",
    "meaning": "옳지 않다, 맞지 않다"
  },
  {
    "kanji": "必死な",
    "hiragana": "ひっしな",
    "meaning": "필사적인, 열심인"
  },
  {
    "kanji": "かさかさする",
    "hiragana": "",
    "meaning": "거칠거칠하다,마르다"
  },
  {
    "kanji": "一生懸命な",
    "hiragana": "いっしょうけんめいな",
    "meaning": "열심인"
  },
  {
    "kanji": "乾燥する",
    "hiragana": "かんそうする",
    "meaning": "건조하다"
  },
  {
    "kanji": "山の麓",
    "hiragana": "やまのふもと",
    "meaning": "산기슭"
  },
  {
    "kanji": "済ます",
    "hiragana": "すます",
    "meaning": "마치다, 끝내다"
  },
  {
    "kanji": "山の下のほう",
    "hiragana": "やまのしたのほう",
    "meaning": "산 아래쪽"
  },
  {
    "kanji": "終える",
    "hiragana": "おえる",
    "meaning": "마치다, 끝내다"
  },
  {
    "kanji": "はっきりしない",
    "hiragana": "",
    "meaning": "확실하지 않은"
  },
  {
    "kanji": "思いがけない",
    "hiragana": "おもいがけない",
    "meaning": "뜻밖이다"
  },
  {
    "kanji": "める",
    "hiragana": "",
    "meaning": "매점하다, 사 모으다"
  },
  {
    "kanji": "意外だ",
    "hiragana": "いがいだ",
    "meaning": "의외다"
  },
  {
    "kanji": "自ら",
    "hiragana": "みずから",
    "meaning": "스스로"
  },
  {
    "kanji": "ぎわ",
    "hiragana": "",
    "meaning": "직전"
  },
  {
    "kanji": "自分で",
    "hiragana": "じぶんで",
    "meaning": "스스로, 자신이"
  },
  {
    "kanji": "ぜん",
    "hiragana": "",
    "meaning": "직전"
  },
  {
    "kanji": "そろう",
    "hiragana": "",
    "meaning": "갖추어지다, 모이다"
  },
  {
    "kanji": "集まる",
    "hiragana": "あつまる",
    "meaning": "모이다"
  },
  {
    "kanji": "たちまち",
    "hiragana": "",
    "meaning": "금세, 순식간에"
  },
  {
    "kanji": "する",
    "hiragana": "",
    "meaning": "동정하다"
  },
  {
    "kanji": "およそ",
    "hiragana": "",
    "meaning": "대략"
  },
  {
    "kanji": "計画",
    "hiragana": "けいかく",
    "meaning": "계획"
  },
  {
    "kanji": "なる",
    "hiragana": "",
    "meaning": "다르다"
  },
  {
    "kanji": "プラン",
    "hiragana": "",
    "meaning": "플랜"
  },
  {
    "kanji": "相変わらず",
    "hiragana": "あいかわらず",
    "meaning": "여전히"
  },
  {
    "kanji": "たまたま",
    "hiragana": "",
    "meaning": "우연히"
  },
  {
    "kanji": "依然として",
    "hiragana": "いぜんとして",
    "meaning": "여전히"
  },
  {
    "kanji": "明らかな",
    "hiragana": "あきらかな",
    "meaning": "분명한"
  },
  {
    "kanji": "テンポ",
    "hiragana": "",
    "meaning": "템포, 속도"
  },
  {
    "kanji": "はっきりした",
    "hiragana": "",
    "meaning": "분명한, 확실한"
  },
  {
    "kanji": "速さ",
    "hiragana": "はやさ",
    "meaning": "속도"
  },
  {
    "kanji": "用心",
    "hiragana": "ようじん",
    "meaning": "조심"
  },
  {
    "kanji": "妙な",
    "hiragana": "みょうな",
    "meaning": "묘한"
  },
  {
    "kanji": "注意",
    "hiragana": "ちゅうい",
    "meaning": "주의"
  },
  {
    "kanji": "しい",
    "hiragana": "",
    "meaning": "시끄럽다, 소란스럽다"
  },
  {
    "kanji": "ささやく",
    "hiragana": "",
    "meaning": "속삭이다"
  },
  {
    "kanji": "うるさい",
    "hiragana": "",
    "meaning": "시끄럽다"
  },
  {
    "kanji": "小声で話す",
    "hiragana": "こごえではなす",
    "meaning": "작은 목소리로 말하다"
  },
  {
    "kanji": "所有する",
    "hiragana": "しょゆうする",
    "meaning": "소유하다"
  },
  {
    "kanji": "かつて",
    "hiragana": "",
    "meaning": "일찍이, 예전부터"
  },
  {
    "kanji": "持つ",
    "hiragana": "もつ",
    "meaning": "들다, 소유하다"
  },
  {
    "kanji": "以前",
    "hiragana": "いぜん",
    "meaning": "이전, 예전"
  },
  {
    "kanji": "おそらく",
    "hiragana": "",
    "meaning": "아마"
  },
  {
    "kanji": "多分",
    "hiragana": "たぶん",
    "meaning": "아마"
  },
  {
    "kanji": "収納する",
    "hiragana": "しゅうのうする",
    "meaning": "수납하다"
  },
  {
    "kanji": "注目する",
    "hiragana": "ちゅうもくする",
    "meaning": "주목하다"
  },
  {
    "kanji": "しまう",
    "hiragana": "",
    "meaning": "치우다, 간수하다"
  },
  {
    "kanji": "関心を持つ",
    "hiragana": "かんしんをもつ",
    "meaning": "관심을 갖다"
  },
  {
    "kanji": "小柄だ",
    "hiragana": "こがらだ",
    "meaning": "몸집이 작다"
  },
  {
    "kanji": "じかに",
    "hiragana": "",
    "meaning": "직접"
  },
  {
    "kanji": "体が小さい",
    "hiragana": "からだがちーさい",
    "meaning": "몸집이 작다"
  },
  {
    "kanji": "直接",
    "hiragana": "ちょくせつ",
    "meaning": "직접"
  },
  {
    "kanji": "無口だ",
    "hiragana": "むくちだ",
    "meaning": "과묵하다"
  },
  {
    "kanji": "衝突する",
    "hiragana": "しょうとつする",
    "meaning": "충돌하다"
  },
  {
    "kanji": "ぶつかる",
    "hiragana": "",
    "meaning": "충돌하다"
  },
  {
    "kanji": "卑怯な",
    "hiragana": "ひきょうな",
    "meaning": "비겁한"
  },
  {
    "kanji": "やや",
    "hiragana": "",
    "meaning": "다소, 조금"
  },
  {
    "kanji": "ずるい",
    "hiragana": "",
    "meaning": "교활하다, 약다"
  },
  {
    "kanji": "愉快だ",
    "hiragana": "ゆかいだ",
    "meaning": "유쾌하다"
  },
  {
    "kanji": "ずっと前に",
    "hiragana": "ずっとまえに",
    "meaning": "훨씬 전에"
  },
  {
    "kanji": "面白い",
    "hiragana": "おもしろい",
    "meaning": "재미있다"
  },
  {
    "kanji": "ゆずる",
    "hiragana": "",
    "meaning": "양보하다"
  },
  {
    "kanji": "あげる",
    "hiragana": "",
    "meaning": "주다"
  },
  {
    "kanji": "記憶する",
    "hiragana": "きおくする",
    "meaning": "기억하다"
  },
  {
    "kanji": "しかたない",
    "hiragana": "",
    "meaning": "어쩔 수 없다"
  },
  {
    "kanji": "覚える",
    "hiragana": "おぼえる",
    "meaning": "외우다"
  },
  {
    "kanji": "息抜きする",
    "hiragana": "いきぬきする",
    "meaning": "한숨 돌리다, 쉬다"
  },
  {
    "kanji": "不平",
    "hiragana": "ふへい",
    "meaning": "불평"
  },
  {
    "kanji": "休む",
    "hiragana": "やすむ",
    "meaning": "쉬다"
  },
  {
    "kanji": "文句",
    "hiragana": "もんく",
    "meaning": "불평"
  },
  {
    "kanji": "ついている",
    "hiragana": "",
    "meaning": "운이 좋다"
  },
  {
    "kanji": "むかつく",
    "hiragana": "",
    "meaning": "화가 나다, 역겹다"
  },
  {
    "kanji": "運がいい",
    "hiragana": "うんがいい",
    "meaning": "운이 좋다"
  },
  {
    "kanji": "怒る",
    "hiragana": "いかる",
    "meaning": "화가 나다"
  },
  {
    "kanji": "つねに",
    "hiragana": "",
    "meaning": "항상"
  },
  {
    "kanji": "いつも",
    "hiragana": "",
    "meaning": "항상"
  },
  {
    "kanji": "ほとんどない",
    "hiragana": "",
    "meaning": "거의 없는"
  },
  {
    "kanji": "過剰だ",
    "hiragana": "かじょうだ",
    "meaning": "과잉이다"
  },
  {
    "kanji": "当てる",
    "hiragana": "あてる",
    "meaning": "맞히다, 부딪다"
  },
  {
    "kanji": "多すぎる",
    "hiragana": "おおすぎる",
    "meaning": "너무 많다"
  },
  {
    "kanji": "ぶつける",
    "hiragana": "",
    "meaning": "부딪다"
  },
  {
    "kanji": "あやまり",
    "hiragana": "",
    "meaning": "실수"
  },
  {
    "kanji": "あわれな",
    "hiragana": "",
    "meaning": "불쌍한"
  },
  {
    "kanji": "かわいそうな",
    "hiragana": "",
    "meaning": "불쌍한"
  },
  {
    "kanji": "当分",
    "hiragana": "とうぶん",
    "meaning": "당분간, 잠시"
  },
  {
    "kanji": "臆病だ",
    "hiragana": "おくびょうだ",
    "meaning": "겁이 많다"
  },
  {
    "kanji": "しばらく",
    "hiragana": "",
    "meaning": "당분간, 잠시"
  },
  {
    "kanji": "一転する",
    "hiragana": "いってんする",
    "meaning": "완전히 바뀌다"
  },
  {
    "kanji": "とっくに",
    "hiragana": "",
    "meaning": "진작에, 훨씬 전에"
  },
  {
    "kanji": "精いっぱい",
    "hiragana": "せいいっぱい",
    "meaning": "힘껏"
  },
  {
    "kanji": "一生懸命",
    "hiragana": "いっしょうけんめい",
    "meaning": "열심히"
  },
  {
    "kanji": "じたばたする",
    "hiragana": "",
    "meaning": "허둥거리다"
  },
  {
    "kanji": "てる",
    "hiragana": "",
    "meaning": "당황해하다, 허둥대다"
  },
  {
    "kanji": "テクニック",
    "hiragana": "",
    "meaning": "테크닉, 기술"
  },
  {
    "kanji": "定める",
    "hiragana": "さだめる",
    "meaning": "정하다, 결정하다"
  },
  {
    "kanji": "技術",
    "hiragana": "ぎじゅつ",
    "meaning": "기술"
  },
  {
    "kanji": "決める",
    "hiragana": "きめる",
    "meaning": "정하다, 결정하다"
  },
  {
    "kanji": "ドな",
    "hiragana": "",
    "meaning": "엄격한, 고된"
  },
  {
    "kanji": "大変な",
    "hiragana": "たいへんな",
    "meaning": "힘든"
  },
  {
    "kanji": "利口な",
    "hiragana": "りこうな",
    "meaning": "영리한"
  },
  {
    "kanji": "動揺する",
    "hiragana": "どうようする",
    "meaning": "동요하다"
  },
  {
    "kanji": "不安になる",
    "hiragana": "ふあんになる",
    "meaning": "불안해지다"
  },
  {
    "kanji": "用心する",
    "hiragana": "ようじんする",
    "meaning": "조심하다"
  },
  {
    "kanji": "引き返す",
    "hiragana": "ひきかえす",
    "meaning": "되돌아가다, 되돌아오다"
  },
  {
    "kanji": "気をつける",
    "hiragana": "きをつける",
    "meaning": "조심하다"
  },
  {
    "kanji": "戻る",
    "hiragana": "もどる",
    "meaning": "되돌아가다, 되돌아오다"
  },
  {
    "kanji": "くどい",
    "hiragana": "",
    "meaning": "장황하다, 집요하다"
  },
  {
    "kanji": "一層",
    "hiragana": "いっそう",
    "meaning": "한층 더, 더욱더"
  },
  {
    "kanji": "しつこい",
    "hiragana": "",
    "meaning": "집요하다, 끈질기다"
  },
  {
    "kanji": "もっと",
    "hiragana": "",
    "meaning": "더, 더욱"
  },
  {
    "kanji": "物騒になる",
    "hiragana": "ぶっそうになる",
    "meaning": "위험해지다"
  },
  {
    "kanji": "かかりつけ",
    "hiragana": "",
    "meaning": "단골"
  },
  {
    "kanji": "いつも行く",
    "hiragana": "いつもいく",
    "meaning": "늘 가다"
  },
  {
    "kanji": "落ち込む",
    "hiragana": "おちこむ",
    "meaning": "낙담하다, 악화되다"
  },
  {
    "kanji": "ガイド",
    "hiragana": "",
    "meaning": "가이드, 안내"
  },
  {
    "kanji": "がっかりする",
    "hiragana": "",
    "meaning": "실망하다, 낙담하다"
  },
  {
    "kanji": "ない",
    "hiragana": "",
    "meaning": "결코~않는다"
  },
  {
    "kanji": "真剣に",
    "hiragana": "しんけんに",
    "meaning": "진지하게"
  },
  {
    "kanji": "一番近い",
    "hiragana": "いちばんちかい",
    "meaning": "가장 가깝다"
  },
  {
    "kanji": "まじめに",
    "hiragana": "",
    "meaning": "진지하게, 성실하게"
  },
  {
    "kanji": "レンタル",
    "hiragana": "",
    "meaning": "렌탈, 대여"
  },
  {
    "kanji": "あまりいない",
    "hiragana": "",
    "meaning": "별로 없다"
  },
  {
    "kanji": "指図",
    "hiragana": "さしず",
    "meaning": "지시"
  },
  {
    "kanji": "終日",
    "hiragana": "しゅうじつ",
    "meaning": "종일"
  },
  {
    "kanji": "命令",
    "hiragana": "めいれい",
    "meaning": "명령"
  },
  {
    "kanji": "一日中",
    "hiragana": "いちにちじゅう",
    "meaning": "하루 종일"
  },
  {
    "kanji": "欠かせない",
    "hiragana": "かかせない",
    "meaning": "빠뜨릴 수 없다, 필요하다"
  },
  {
    "kanji": "いじる",
    "hiragana": "",
    "meaning": "만지다"
  },
  {
    "kanji": "ないと困る",
    "hiragana": "ないとこまる",
    "meaning": "없으면 곤란하다"
  },
  {
    "kanji": "触る",
    "hiragana": "ふる",
    "meaning": "만지다"
  },
  {
    "kanji": "依然",
    "hiragana": "いぜん",
    "meaning": "여전히"
  },
  {
    "kanji": "失望する",
    "hiragana": "しつぼうする",
    "meaning": "실망하다"
  },
  {
    "kanji": "まだ",
    "hiragana": "",
    "meaning": "아직"
  },
  {
    "kanji": "とりかかる",
    "hiragana": "",
    "meaning": "착수하다"
  },
  {
    "kanji": "仕事を始める",
    "hiragana": "しごとをはじめる",
    "meaning": "일을 시작하다"
  },
  {
    "kanji": "再三",
    "hiragana": "さいさん",
    "meaning": "여러 번"
  },
  {
    "kanji": "人柄",
    "hiragana": "ひとがら",
    "meaning": "인품"
  },
  {
    "kanji": "性格",
    "hiragana": "せいかく",
    "meaning": "성격"
  },
  {
    "kanji": "でたらめ",
    "hiragana": "",
    "meaning": "엉터리"
  },
  {
    "kanji": "案の定",
    "hiragana": "あんのじょう",
    "meaning": "아니나 다를까"
  },
  {
    "kanji": "うそ",
    "hiragana": "",
    "meaning": "거짓말"
  },
  {
    "kanji": "やっぱり",
    "hiragana": "",
    "meaning": "역시"
  },
  {
    "kanji": "勘定",
    "hiragana": "かんじょう",
    "meaning": "지불, 계산"
  },
  {
    "kanji": "くるむ",
    "hiragana": "",
    "meaning": "감싸다"
  },
  {
    "kanji": "会計",
    "hiragana": "かいけい",
    "meaning": "회계, 계산"
  },
  {
    "kanji": "包む",
    "hiragana": "つつむ",
    "meaning": "싸다"
  },
  {
    "kanji": "さわがしい",
    "hiragana": "",
    "meaning": "시끄럽다"
  },
  {
    "kanji": "最寄り",
    "hiragana": "もより",
    "meaning": "가장 가까움"
  },
  {
    "kanji": "きじゅつ",
    "hiragana": "",
    "meaning": "조심하지 않는다"
  },
  {
    "kanji": "各自",
    "hiragana": "かくじ",
    "meaning": "각자"
  },
  {
    "kanji": "書籍",
    "hiragana": "しょせき",
    "meaning": "서적"
  },
  {
    "kanji": "一人一人",
    "hiragana": "ひとりひとり",
    "meaning": "한사람 한사람"
  },
  {
    "kanji": "すっかり変わる",
    "hiragana": "すっかりかわる",
    "meaning": "완전히 바뀌다"
  },
  {
    "kanji": "深刻な",
    "hiragana": "しんこくな",
    "meaning": "심각한"
  },
  {
    "kanji": "とがる",
    "hiragana": "",
    "meaning": "뾰족해지다"
  },
  {
    "kanji": "重大な",
    "hiragana": "じゅうだいな",
    "meaning": "중대한"
  },
  {
    "kanji": "細くなる",
    "hiragana": "こまくなる",
    "meaning": "가늘어지다"
  },
  {
    "kanji": "同僚",
    "hiragana": "どうりょう",
    "meaning": "동료"
  },
  {
    "kanji": "くだらない",
    "hiragana": "",
    "meaning": "시시하다"
  },
  {
    "kanji": "同じ会社の人",
    "hiragana": "おなじかいしゃのにん",
    "meaning": "같은 회사 사람"
  },
  {
    "kanji": "価値がない",
    "hiragana": "かちがない",
    "meaning": "가치가 없다"
  },
  {
    "kanji": "惜しい",
    "hiragana": "おしい",
    "meaning": "아깝다"
  },
  {
    "kanji": "もったいない",
    "hiragana": "",
    "meaning": "아깝다"
  },
  {
    "kanji": "おおよそ",
    "hiragana": "",
    "meaning": "대략"
  },
  {
    "kanji": "大体",
    "hiragana": "だいたい",
    "meaning": "대충"
  },
  {
    "kanji": "行儀",
    "hiragana": "ぎょうぎ",
    "meaning": "예의, 예절"
  },
  {
    "kanji": "いばる",
    "hiragana": "",
    "meaning": "뽐내다"
  },
  {
    "kanji": "概要",
    "hiragana": "がいよう",
    "meaning": "개요"
  },
  {
    "kanji": "偉そうな",
    "hiragana": "えらそうな",
    "meaning": "잘난 체하는"
  },
  {
    "kanji": "大体の内容",
    "hiragana": "だいたいのないよう",
    "meaning": "대체적인 내용"
  },
  {
    "kanji": "収納",
    "hiragana": "しゅうのう",
    "meaning": "수납"
  },
  {
    "kanji": "油断している",
    "hiragana": "ゆだんしている",
    "meaning": "방심하고 있다"
  },
  {
    "kanji": "注目",
    "hiragana": "ちゅうもく",
    "meaning": "주목"
  },
  {
    "kanji": "案内",
    "hiragana": "あんない",
    "meaning": "안내"
  },
  {
    "kanji": "修正する",
    "hiragana": "しゅうせいする",
    "meaning": "수정하다"
  },
  {
    "kanji": "外見",
    "hiragana": "がいけん",
    "meaning": "외관, 겉보기"
  },
  {
    "kanji": "直す",
    "hiragana": "なおす",
    "meaning": "고치다"
  },
  {
    "kanji": "保つ",
    "hiragana": "たもつ",
    "meaning": "유지하다, 보존하다"
  },
  {
    "kanji": "方針",
    "hiragana": "ほうしん",
    "meaning": "방침"
  },
  {
    "kanji": "次第に",
    "hiragana": "しだいに",
    "meaning": "점차"
  },
  {
    "kanji": "はげる",
    "hiragana": "",
    "meaning": "벗겨지다"
  },
  {
    "kanji": "範囲",
    "hiragana": "はんい",
    "meaning": "범위"
  },
  {
    "kanji": "取れる",
    "hiragana": "とれる",
    "meaning": "떨어지다"
  },
  {
    "kanji": "しぐさ",
    "hiragana": "",
    "meaning": "행위"
  },
  {
    "kanji": "せめて",
    "hiragana": "",
    "meaning": "적어도, 하다못해"
  },
  {
    "kanji": "動作",
    "hiragana": "どうさ",
    "meaning": "동작"
  },
  {
    "kanji": "質素な",
    "hiragana": "しっそな",
    "meaning": "검소한"
  },
  {
    "kanji": "利益",
    "hiragana": "りえき",
    "meaning": "이익"
  },
  {
    "kanji": "取材",
    "hiragana": "しゅざい",
    "meaning": "취재"
  },
  {
    "kanji": "受け入れる",
    "hiragana": "うけいれる",
    "meaning": "받아들이다"
  },
  {
    "kanji": "外す",
    "hiragana": "はずす",
    "meaning": "떼어 내다, 밖으로 빼내다"
  },
  {
    "kanji": "きっかけ",
    "hiragana": "",
    "meaning": "계기"
  },
  {
    "kanji": "廃止",
    "hiragana": "はいし",
    "meaning": "폐지"
  },
  {
    "kanji": "矛盾",
    "hiragana": "むじゅん",
    "meaning": "모순"
  },
  {
    "kanji": "頑丈な",
    "hiragana": "がんじょうな",
    "meaning": "튼튼한"
  },
  {
    "kanji": "心強い",
    "hiragana": "こころづよい",
    "meaning": "든든하다"
  },
  {
    "kanji": "会見",
    "hiragana": "かいけん",
    "meaning": "회견"
  },
  {
    "kanji": "問い合わせる",
    "hiragana": "といあわせる",
    "meaning": "문의하다"
  },
  {
    "kanji": "畳む",
    "hiragana": "たたむ",
    "meaning": "접다, 개다"
  },
  {
    "kanji": "さっさと",
    "hiragana": "",
    "meaning": "빨리, 서둘러서"
  },
  {
    "kanji": "支持",
    "hiragana": "しじ",
    "meaning": "지지"
  },
  {
    "kanji": "交代",
    "hiragana": "こうたい",
    "meaning": "교대, 교체"
  },
  {
    "kanji": "合図",
    "hiragana": "あいず",
    "meaning": "신호"
  },
  {
    "kanji": "塞ぐ",
    "hiragana": "ふさぐ",
    "meaning": "막다, 차단하다"
  },
  {
    "kanji": "妥当な",
    "hiragana": "だとうな",
    "meaning": "타당한"
  },
  {
    "kanji": "合同",
    "hiragana": "ごうどう",
    "meaning": "합동"
  },
  {
    "kanji": "こつこつと",
    "hiragana": "",
    "meaning": "꾸준하게"
  },
  {
    "kanji": "冷静な",
    "hiragana": "れいせいな",
    "meaning": "냉정한"
  },
  {
    "kanji": "言い訳",
    "hiragana": "いいわけ",
    "meaning": "변명"
  },
  {
    "kanji": "掲示",
    "hiragana": "けいじ",
    "meaning": "게시"
  },
  {
    "kanji": "補足",
    "hiragana": "ほそく",
    "meaning": "보충, 보완"
  },
  {
    "kanji": "手軽な",
    "hiragana": "てがるな",
    "meaning": "손쉬운, 간편한"
  },
  {
    "kanji": "快い",
    "hiragana": "こころよい",
    "meaning": "기분 좋다, 유쾌하다"
  },
  {
    "kanji": "温暖な",
    "hiragana": "おんだんな",
    "meaning": "온난한"
  },
  {
    "kanji": "慌ただしい",
    "hiragana": "あわただしい",
    "meaning": "분주하다, 어수선하다"
  },
  {
    "kanji": "作成",
    "hiragana": "さくせい",
    "meaning": "작성"
  },
  {
    "kanji": "分野",
    "hiragana": "ぶんや",
    "meaning": "분야"
  },
  {
    "kanji": "振り向く",
    "hiragana": "ふりむく",
    "meaning": "돌아보다"
  },
  {
    "kanji": "かすかな",
    "hiragana": "",
    "meaning": "희미한"
  },
  {
    "kanji": "いったん",
    "hiragana": "",
    "meaning": "일단"
  },
  {
    "kanji": "生き生き",
    "hiragana": "いきいき",
    "meaning": "생기가 넘치는 모양"
  },
  {
    "kanji": "用途",
    "hiragana": "ようと",
    "meaning": "용도"
  },
  {
    "kanji": "催促",
    "hiragana": "さいそく",
    "meaning": "재촉"
  },
  {
    "kanji": "思いつく",
    "hiragana": "おもいつく",
    "meaning": "생각이 떠오르다"
  },
  {
    "kanji": "隔てる",
    "hiragana": "へだてる",
    "meaning": "멀리하다, 사이에 두다"
  },
  {
    "kanji": "甘やかす",
    "hiragana": "あまやかす",
    "meaning": "응석을 받아 주다"
  },
  {
    "kanji": "中断",
    "hiragana": "ちゅうだん",
    "meaning": "중단"
  },
  {
    "kanji": "行方",
    "hiragana": "なめがた",
    "meaning": "행방"
  },
  {
    "kanji": "たくましい",
    "hiragana": "",
    "meaning": "씩씩하다, 늠름하다"
  },
  {
    "kanji": "論争",
    "hiragana": "ろんそう",
    "meaning": "논쟁"
  },
  {
    "kanji": "発達",
    "hiragana": "はったつ",
    "meaning": "발달"
  },
  {
    "kanji": "延長",
    "hiragana": "えんちょう",
    "meaning": "연장"
  },
  {
    "kanji": "さびる",
    "hiragana": "",
    "meaning": "녹슬다"
  },
  {
    "kanji": "引退",
    "hiragana": "いんたい",
    "meaning": "은퇴"
  },
  {
    "kanji": "演説",
    "hiragana": "えんぜつ",
    "meaning": "연설"
  },
  {
    "kanji": "目上",
    "hiragana": "めうえ",
    "meaning": "손윗사람, 연장자"
  },
  {
    "kanji": "きっぱり",
    "hiragana": "",
    "meaning": "단호히"
  },
  {
    "kanji": "保存",
    "hiragana": "ほぞん",
    "meaning": "보존"
  },
  {
    "kanji": "おおげさ",
    "hiragana": "",
    "meaning": "과장"
  },
  {
    "kanji": "鈍い",
    "hiragana": "にぶい",
    "meaning": "둔하다"
  },
  {
    "kanji": "生じる",
    "hiragana": "しょうじる",
    "meaning": "생기다"
  },
  {
    "kanji": "日課",
    "hiragana": "にっか",
    "meaning": "일과"
  },
  {
    "kanji": "反省",
    "hiragana": "はんせい",
    "meaning": "반성"
  },
  {
    "kanji": "多彩",
    "hiragana": "たさい",
    "meaning": "다채"
  },
  {
    "kanji": "頂上",
    "hiragana": "ちょうじょう",
    "meaning": "정상"
  },
  {
    "kanji": "乗り継ぐ",
    "hiragana": "のりつぐ",
    "meaning": "다른 탈것으로 갈아타다"
  },
  {
    "kanji": "分解",
    "hiragana": "ぶんかい",
    "meaning": "분해"
  },
  {
    "kanji": "初歩",
    "hiragana": "しょほ",
    "meaning": "초보"
  },
  {
    "kanji": "略す",
    "hiragana": "りゃくす",
    "meaning": "줄이다"
  },
  {
    "kanji": "だらしない",
    "hiragana": "",
    "meaning": "단정하지 못하다"
  },
  {
    "kanji": "覆う",
    "hiragana": "おおう",
    "meaning": "덮다"
  },
  {
    "kanji": "破る",
    "hiragana": "やぶる",
    "meaning": "찢다, 파기하다"
  },
  {
    "kanji": "限定",
    "hiragana": "げんてい",
    "meaning": "한정"
  },
  {
    "kanji": "特殊",
    "hiragana": "とくしゅ",
    "meaning": "특수"
  },
  {
    "kanji": "一斉に",
    "hiragana": "いっせいに",
    "meaning": "일제히"
  },
  {
    "kanji": "散らかす",
    "hiragana": "ちらかす",
    "meaning": "어지르다, 흩뜨리다"
  },
  {
    "kanji": "しみる",
    "hiragana": "",
    "meaning": "번지다, 스며들다"
  },
  {
    "kanji": "充満",
    "hiragana": "じゅうまん",
    "meaning": "충만"
  },
  {
    "kanji": "世代",
    "hiragana": "せだい",
    "meaning": "세대"
  },
  {
    "kanji": "めくる",
    "hiragana": "",
    "meaning": "넘기다"
  },
  {
    "kanji": "初期",
    "hiragana": "しょき",
    "meaning": "초기"
  },
  {
    "kanji": "打ち明ける",
    "hiragana": "うちあける",
    "meaning": "털어놓다, 고백하다"
  },
  {
    "kanji": "頑固",
    "hiragana": "がんこ",
    "meaning": "완고"
  },
  {
    "kanji": "欠陥",
    "hiragana": "けっかん",
    "meaning": "결함"
  },
  {
    "kanji": "打ち合わせ",
    "hiragana": "うちあわせ",
    "meaning": "협의"
  },
  {
    "kanji": "ベテラン",
    "hiragana": "",
    "meaning": "베테랑, 고수"
  },
  {
    "kanji": "引用",
    "hiragana": "いんよう",
    "meaning": "인용"
  },
  {
    "kanji": "荒れる",
    "hiragana": "あれる",
    "meaning": "거칠어지다, 황폐해지다"
  },
  {
    "kanji": "ほっと",
    "hiragana": "",
    "meaning": "긴장이 풀려 안심하는 모양"
  },
  {
    "kanji": "早期",
    "hiragana": "そうき",
    "meaning": "조기"
  },
  {
    "kanji": "展開",
    "hiragana": "てんかい",
    "meaning": "전개"
  },
  {
    "kanji": "偉大",
    "hiragana": "いだい",
    "meaning": "위대"
  },
  {
    "kanji": "妥当",
    "hiragana": "だとう",
    "meaning": "타당"
  },
  {
    "kanji": "かばう",
    "hiragana": "",
    "meaning": "편들다, 두둔하다"
  },
  {
    "kanji": "さまたげる",
    "hiragana": "",
    "meaning": "방해하다"
  },
  {
    "kanji": "急激",
    "hiragana": "きゅうげき",
    "meaning": "급격"
  },
  {
    "kanji": "漏れる",
    "hiragana": "もれる",
    "meaning": "새다"
  },
  {
    "kanji": "腫れる",
    "hiragana": "はれる",
    "meaning": "붓다"
  },
  {
    "kanji": "傾向",
    "hiragana": "けいこう",
    "meaning": "경향"
  },
  {
    "kanji": "上達",
    "hiragana": "じょうたつ",
    "meaning": "기능이 향상됨, 숙달"
  },
  {
    "kanji": "暮れ",
    "hiragana": "くれ",
    "meaning": "저물 때"
  },
  {
    "kanji": "温厚",
    "hiragana": "おんこう",
    "meaning": "온후, 다정다감함"
  },
  {
    "kanji": "残高",
    "hiragana": "ざんだか",
    "meaning": "잔액"
  },
  {
    "kanji": "共有",
    "hiragana": "きょうゆう",
    "meaning": "공유"
  },
  {
    "kanji": "はきはき",
    "hiragana": "",
    "meaning": "확실한 모양"
  },
  {
    "kanji": "鑑賞",
    "hiragana": "かんしょう",
    "meaning": "감상"
  },
  {
    "kanji": "薄める",
    "hiragana": "うすめる",
    "meaning": "희석하다, 묽게 하다"
  },
  {
    "kanji": "充実",
    "hiragana": "じゅうじつ",
    "meaning": "충실"
  },
  {
    "kanji": "鮮明",
    "hiragana": "せんめい",
    "meaning": "선명"
  },
  {
    "kanji": "定年",
    "hiragana": "ていねん",
    "meaning": "정년"
  },
  {
    "kanji": "途中で",
    "hiragana": "とちゅうで",
    "meaning": "도중에"
  },
  {
    "kanji": "れる",
    "hiragana": "",
    "meaning": "본의 아니게 ~하게 되다"
  },
  {
    "kanji": "はずだ",
    "hiragana": "",
    "meaning": "틀림없이 ~일 것이다"
  },
  {
    "kanji": "わけではない",
    "hiragana": "",
    "meaning": "반드시 ~한 것은 아니다"
  },
  {
    "kanji": "申し上げる",
    "hiragana": "もうしあげる",
    "meaning": "말씀드리다"
  },
  {
    "kanji": "たばかりだ",
    "hiragana": "",
    "meaning": "막 ~한 참이다"
  },
  {
    "kanji": "せられる",
    "hiragana": "",
    "meaning": "본의 아니게 ~하게 되다"
  },
  {
    "kanji": "まいる",
    "hiragana": "",
    "meaning": "오다, 가다"
  },
  {
    "kanji": "むしろ",
    "hiragana": "",
    "meaning": "오히려, 차라리"
  },
  {
    "kanji": "すぎず",
    "hiragana": "",
    "meaning": "너무 ~하지 말고"
  },
  {
    "kanji": "どうも",
    "hiragana": "",
    "meaning": "어쩐지"
  },
  {
    "kanji": "もっとも",
    "hiragana": "",
    "meaning": "다만, 단"
  },
  {
    "kanji": "わかった",
    "hiragana": "",
    "meaning": "알았다"
  },
  {
    "kanji": "お越しくださる",
    "hiragana": "おこしくださる",
    "meaning": "와 주시다"
  },
  {
    "kanji": "やる",
    "hiragana": "",
    "meaning": "하다"
  },
  {
    "kanji": "かりに",
    "hiragana": "",
    "meaning": "만약"
  },
  {
    "kanji": "ご覧",
    "hiragana": "ごらん",
    "meaning": "보심"
  },
  {
    "kanji": "うけたまわる",
    "hiragana": "",
    "meaning": "받다"
  },
  {
    "kanji": "ただし",
    "hiragana": "",
    "meaning": "다만, 단"
  },
  {
    "kanji": "ご覧いただく",
    "hiragana": "ごらんいただく",
    "meaning": "보시다"
  },
  {
    "kanji": "いたす",
    "hiragana": "",
    "meaning": "하다"
  },
  {
    "kanji": "がち",
    "hiragana": "",
    "meaning": "자주 ~함, 일쑤임"
  },
  {
    "kanji": "見える",
    "hiragana": "みえる",
    "meaning": "오시다"
  },
  {
    "kanji": "伝わる",
    "hiragana": "つたわる",
    "meaning": "전달되다"
  },
  {
    "kanji": "あるいは",
    "hiragana": "",
    "meaning": "혹은, 또는"
  },
  {
    "kanji": "かえって",
    "hiragana": "",
    "meaning": "도리어, 오히려"
  },
  {
    "kanji": "きる",
    "hiragana": "",
    "meaning": "완전히 ~하다"
  },
  {
    "kanji": "お越しになる",
    "hiragana": "おこしになる",
    "meaning": "오시다, 가시다"
  },
  {
    "kanji": "おいでになる",
    "hiragana": "",
    "meaning": "오시다, 가시다"
  },
  {
    "kanji": "そのうち",
    "hiragana": "",
    "meaning": "머지않아, 가까운 시일 안에"
  },
  {
    "kanji": "ても",
    "hiragana": "",
    "meaning": "아무리 ~해도"
  },
  {
    "kanji": "てならない",
    "hiragana": "",
    "meaning": "너무 ~하다"
  },
  {
    "kanji": "まさか",
    "hiragana": "",
    "meaning": "설마"
  },
  {
    "kanji": "ございます",
    "hiragana": "",
    "meaning": "있습니다"
  },
  {
    "kanji": "したか",
    "hiragana": "",
    "meaning": "어떻게 ~한 것인지"
  },
  {
    "kanji": "いったい",
    "hiragana": "",
    "meaning": "도대체"
  },
  {
    "kanji": "そういう",
    "hiragana": "",
    "meaning": "그러한"
  },
  {
    "kanji": "どうしても",
    "hiragana": "",
    "meaning": "무슨 일이 있어도, 꼭"
  },
  {
    "kanji": "くださる",
    "hiragana": "",
    "meaning": "해 주시다"
  },
  {
    "kanji": "に決まっている",
    "hiragana": "にきまっている",
    "meaning": "반드시 ~하게 되어 있다, 틀림없이 ~하다"
  },
  {
    "kanji": "あとは",
    "hiragana": "",
    "meaning": "이제는, 남은 일은"
  },
  {
    "kanji": "よければ",
    "hiragana": "",
    "meaning": "괜찮다면, 좋다면"
  },
  {
    "kanji": "ぬく",
    "hiragana": "",
    "meaning": "끝까지 ~하다"
  },
  {
    "kanji": "伺う",
    "hiragana": "うかがう",
    "meaning": "듣다, 여쭈다"
  },
  {
    "kanji": "いらっしゃる",
    "hiragana": "",
    "meaning": "계시다"
  },
  {
    "kanji": "にほかならない",
    "hiragana": "",
    "meaning": "바로 ~이다, 다름 아닌 ~이다"
  },
  {
    "kanji": "いつのまに",
    "hiragana": "",
    "meaning": "어느 틈에"
  },
  {
    "kanji": "ことがある",
    "hiragana": "",
    "meaning": "발생하는 경우가 있다"
  },
  {
    "kanji": "どれほど",
    "hiragana": "",
    "meaning": "얼마나"
  },
  {
    "kanji": "てみようか",
    "hiragana": "",
    "meaning": "해 볼까"
  },
  {
    "kanji": "まず",
    "hiragana": "",
    "meaning": "거의, 대체로"
  },
  {
    "kanji": "ところだ",
    "hiragana": "",
    "meaning": "막 ~하는 참이다"
  },
  {
    "kanji": "ご存知だ",
    "hiragana": "ごぞんじだ",
    "meaning": "알고 계시다"
  },
  {
    "kanji": "いずれにしても",
    "hiragana": "",
    "meaning": "어느 쪽이든"
  },
  {
    "kanji": "つい",
    "hiragana": "",
    "meaning": "그만, 무심코"
  },
  {
    "kanji": "そうだ",
    "hiragana": "",
    "meaning": "당장에라도 ~할 것 같다"
  },
  {
    "kanji": "ようやく",
    "hiragana": "",
    "meaning": "마침내"
  },
  {
    "kanji": "もう",
    "hiragana": "",
    "meaning": "벌써"
  },
  {
    "kanji": "それなりの",
    "hiragana": "",
    "meaning": "나름대로의"
  },
  {
    "kanji": "ないのではない",
    "hiragana": "",
    "meaning": "할 수 없는 것은 아니다"
  },
  {
    "kanji": "この",
    "hiragana": "",
    "meaning": "이"
  },
  {
    "kanji": "このように",
    "hiragana": "",
    "meaning": "이처럼"
  },
  {
    "kanji": "どのように",
    "hiragana": "",
    "meaning": "어떻게, 어떤 식으로"
  },
  {
    "kanji": "ほかに",
    "hiragana": "",
    "meaning": "그 밖에"
  },
  {
    "kanji": "こう",
    "hiragana": "",
    "meaning": "이렇게"
  },
  {
    "kanji": "彼女たち",
    "hiragana": "かのじょたち",
    "meaning": "그녀들"
  },
  {
    "kanji": "さまざまだ",
    "hiragana": "",
    "meaning": "다양하다"
  },
  {
    "kanji": "このような",
    "hiragana": "",
    "meaning": "이러한"
  },
  {
    "kanji": "つまり",
    "hiragana": "",
    "meaning": "즉"
  },
  {
    "kanji": "たとえば",
    "hiragana": "",
    "meaning": "예를 들면"
  },
  {
    "kanji": "もちろん",
    "hiragana": "",
    "meaning": "물론"
  },
  {
    "kanji": "場合",
    "hiragana": "ばあい",
    "meaning": "경우"
  },
  {
    "kanji": "実は",
    "hiragana": "じつは",
    "meaning": "실은"
  },
  {
    "kanji": "そうでもない",
    "hiragana": "",
    "meaning": "그렇지도 않다"
  },
  {
    "kanji": "理由",
    "hiragana": "りゆう",
    "meaning": "이유"
  },
  {
    "kanji": "出会う",
    "hiragana": "であう",
    "meaning": "만나다"
  },
  {
    "kanji": "ある",
    "hiragana": "",
    "meaning": "어느"
  },
  {
    "kanji": "その",
    "hiragana": "",
    "meaning": "그"
  },
  {
    "kanji": "使用されている",
    "hiragana": "しようされている",
    "meaning": "사용되고 있다"
  },
  {
    "kanji": "どのような",
    "hiragana": "",
    "meaning": "어떠한"
  },
  {
    "kanji": "要するに",
    "hiragana": "ようするに",
    "meaning": "요컨대"
  },
  {
    "kanji": "どの",
    "hiragana": "",
    "meaning": "어느"
  },
  {
    "kanji": "こんな",
    "hiragana": "",
    "meaning": "이러한"
  },
  {
    "kanji": "すると",
    "hiragana": "",
    "meaning": "그랬더니, 그러자"
  },
  {
    "kanji": "こういう",
    "hiragana": "",
    "meaning": "이러한"
  },
  {
    "kanji": "確かに",
    "hiragana": "たしかに",
    "meaning": "아마, 틀림없이"
  },
  {
    "kanji": "ご存じだろうか",
    "hiragana": "ごぞんじだろうか",
    "meaning": "알고 계실까"
  },
  {
    "kanji": "しかし",
    "hiragana": "",
    "meaning": "그러나"
  },
  {
    "kanji": "こうして",
    "hiragana": "",
    "meaning": "이렇게"
  },
  {
    "kanji": "さらに",
    "hiragana": "",
    "meaning": "게다가, 더욱이"
  },
  {
    "kanji": "それには",
    "hiragana": "",
    "meaning": "그렇게 하기 위해서는"
  },
  {
    "kanji": "そんな大きな翼",
    "hiragana": "そんなおおきなつばさ",
    "meaning": "그러한 커다란 날개"
  },
  {
    "kanji": "こうして見てみると",
    "hiragana": "こうしてみてみると",
    "meaning": "이렇게 보면"
  },
  {
    "kanji": "難しそうです",
    "hiragana": "むつかしそうです",
    "meaning": "어려울 것 같습니다"
  },
  {
    "kanji": "道路",
    "hiragana": "どうろ",
    "meaning": "도로"
  },
  {
    "kanji": "また",
    "hiragana": "",
    "meaning": "또, 다시"
  },
  {
    "kanji": "支えてくれているわけだ",
    "hiragana": "ささえてくれているわけだ",
    "meaning": "지탱해주고 있는 것이다"
  },
  {
    "kanji": "挙げよう",
    "hiragana": "あげよう",
    "meaning": "들어보자"
  },
  {
    "kanji": "そこで",
    "hiragana": "",
    "meaning": "그래서"
  },
  {
    "kanji": "活用して",
    "hiragana": "かつようして",
    "meaning": "활용해서"
  },
  {
    "kanji": "増えているそうです",
    "hiragana": "ふえているそうです",
    "meaning": "늘고 있다고 합니다"
  },
  {
    "kanji": "ただ",
    "hiragana": "",
    "meaning": "다만"
  },
  {
    "kanji": "下がるというわけです",
    "hiragana": "さがるというわけです",
    "meaning": "내려간다고 하는 것입니다"
  },
  {
    "kanji": "そのような理由が",
    "hiragana": "そのようなりゆうが",
    "meaning": "그러한 이유가"
  },
  {
    "kanji": "納得させられました",
    "hiragana": "なっとくさせられました",
    "meaning": "납득했습니다"
  },
  {
    "kanji": "学び始めた",
    "hiragana": "まなびはじめた",
    "meaning": "배우기 시작했다"
  },
  {
    "kanji": "わかれば",
    "hiragana": "",
    "meaning": "알면"
  },
  {
    "kanji": "命じられたことである",
    "hiragana": "めいじられたことである",
    "meaning": "명령을 받았던 것이다"
  },
  {
    "kanji": "日本地図",
    "hiragana": "にほんちず",
    "meaning": "일본 지도"
  },
  {
    "kanji": "ご存じでしょうか",
    "hiragana": "ごぞんじでしょうか",
    "meaning": "알고 계신가요"
  },
  {
    "kanji": "得られるのだそうです",
    "hiragana": "えられるのだそうです",
    "meaning": "얻을 수 있는 것이라고 합니다"
  },
  {
    "kanji": "気になるもの",
    "hiragana": "きになるもの",
    "meaning": "신경 쓰이는 것"
  },
  {
    "kanji": "この取り組みは",
    "hiragana": "このとりくみは",
    "meaning": "이 대책은"
  },
  {
    "kanji": "期待できるそうだ",
    "hiragana": "きたいできるそうだ",
    "meaning": "기대할 수 있다고 한다"
  },
  {
    "kanji": "思えなかったからだ",
    "hiragana": "おもえなかったからだ",
    "meaning": "생각하지 못했기 때문이다"
  },
  {
    "kanji": "ところが",
    "hiragana": "",
    "meaning": "그런데, 그러나"
  },
  {
    "kanji": "楽しむものだ",
    "hiragana": "たのしむものだ",
    "meaning": "즐기는 것이다"
  },
  {
    "kanji": "どんな表現",
    "hiragana": "どんなひょうげん",
    "meaning": "어떤 표현"
  },
  {
    "kanji": "増えてきました",
    "hiragana": "ふえてきました",
    "meaning": "늘어왔습니다, 늘어났습니다"
  },
  {
    "kanji": "同じ",
    "hiragana": "おなじ",
    "meaning": "같은"
  },
  {
    "kanji": "問題である",
    "hiragana": "もんだいである",
    "meaning": "문제이다"
  },
  {
    "kanji": "このような駐輪場",
    "hiragana": "このようなちゅうりんじょう",
    "meaning": "이러한 자전거"
  },
  {
    "kanji": "そのため",
    "hiragana": "",
    "meaning": "그 때문에"
  },
  {
    "kanji": "いいものだと思いました",
    "hiragana": "いいものだとおもいました",
    "meaning": "좋다고 생각했습니다"
  },
  {
    "kanji": "疲れてしまっては",
    "hiragana": "つかれてしまっては",
    "meaning": "지쳐버리면"
  },
  {
    "kanji": "そんな紅葉",
    "hiragana": "そんなこうよう",
    "meaning": "그런 단풍"
  },
  {
    "kanji": "はじまらないのです",
    "hiragana": "",
    "meaning": "시작되지 않는 것입니다"
  },
  {
    "kanji": "感じるようになりました",
    "hiragana": "かんじるようになりました",
    "meaning": "느끼게 되었습니다"
  },
  {
    "kanji": "例えば",
    "hiragana": "たとえば",
    "meaning": "예를 들면"
  },
  {
    "kanji": "感動していた",
    "hiragana": "かんどうしていた",
    "meaning": "감동했었다"
  },
  {
    "kanji": "やってみて",
    "hiragana": "",
    "meaning": "해 보고"
  },
  {
    "kanji": "生かす",
    "hiragana": "いかす",
    "meaning": "살리다, 발휘하다, 활용하다"
  },
  {
    "kanji": "維持する",
    "hiragana": "いじする",
    "meaning": "유지하다"
  },
  {
    "kanji": "憧れる",
    "hiragana": "あこがれる",
    "meaning": "동경하다"
  },
  {
    "kanji": "至る",
    "hiragana": "いたる",
    "meaning": "이르다"
  },
  {
    "kanji": "味わう",
    "hiragana": "あじわう",
    "meaning": "맛보다"
  },
  {
    "kanji": "一致する",
    "hiragana": "いっちする",
    "meaning": "일치하다"
  },
  {
    "kanji": "預かる",
    "hiragana": "あずかる",
    "meaning": "맡다"
  },
  {
    "kanji": "祈る",
    "hiragana": "いのる",
    "meaning": "빌다, 기원하다"
  },
  {
    "kanji": "温める",
    "hiragana": "あたためる",
    "meaning": "데우다"
  },
  {
    "kanji": "承る",
    "hiragana": "うけたまわる",
    "meaning": "삼가 듣다, 받잡다"
  },
  {
    "kanji": "当たる",
    "hiragana": "あたる",
    "meaning": "맞다, 해당하다"
  },
  {
    "kanji": "失う",
    "hiragana": "うしなう",
    "meaning": "잃어버리다, 놓치다"
  },
  {
    "kanji": "暴れる",
    "hiragana": "あばれる",
    "meaning": "난폭하게 굴다, 날뛰다"
  },
  {
    "kanji": "疑う",
    "hiragana": "うたがう",
    "meaning": "의심하다"
  },
  {
    "kanji": "溢れる",
    "hiragana": "あふれる",
    "meaning": "넘쳐나다, 흔하다"
  },
  {
    "kanji": "打ち明ける",
    "hiragana": "うちあける",
    "meaning": "고백하다"
  },
  {
    "kanji": "編む",
    "hiragana": "あむ",
    "meaning": "짜다, 뜨게질하다"
  },
  {
    "kanji": "訴える",
    "hiragana": "うったえる",
    "meaning": "고소하다, 호고하다"
  },
  {
    "kanji": "謝る",
    "hiragana": "あやまる",
    "meaning": "사과하다, 사죄하다"
  },
  {
    "kanji": "奪う",
    "hiragana": "うばう",
    "meaning": "뺏다"
  },
  {
    "kanji": "慌てる",
    "hiragana": "あわてる",
    "meaning": "당황하다, 허둥거리다"
  },
  {
    "kanji": "裏切る",
    "hiragana": "うらぎる",
    "meaning": "배반하다"
  },
  {
    "kanji": "占う",
    "hiragana": "うらなう",
    "meaning": "점치다"
  },
  {
    "kanji": "劣る",
    "hiragana": "おとる",
    "meaning": "열등하다, 뒤떨어지다"
  },
  {
    "kanji": "売り切れる",
    "hiragana": "うりきれる",
    "meaning": "품절되다"
  },
  {
    "kanji": "驚く",
    "hiragana": "おどろく",
    "meaning": "놀라다"
  },
  {
    "kanji": "追い込む",
    "hiragana": "おいこむ",
    "meaning": "몰아넣다"
  },
  {
    "kanji": "追いつく",
    "hiragana": "おいつく",
    "meaning": "따라붙다, 따라잡다 か행"
  },
  {
    "kanji": "追う",
    "hiragana": "おう",
    "meaning": "좇다"
  },
  {
    "kanji": "抱える",
    "hiragana": "かかえる",
    "meaning": "안다, 떠맡다"
  },
  {
    "kanji": "犯す",
    "hiragana": "おかす",
    "meaning": "(죄를) 범하다, (법을) 어기다"
  },
  {
    "kanji": "係る",
    "hiragana": "かかわる",
    "meaning": "관련되다, 관여하다"
  },
  {
    "kanji": "贈る",
    "hiragana": "おくる",
    "meaning": "선물하다"
  },
  {
    "kanji": "欠く",
    "hiragana": "かく",
    "meaning": "부족하다, 없다"
  },
  {
    "kanji": "抑える",
    "hiragana": "おさえる",
    "meaning": "억누르다"
  },
  {
    "kanji": "隠す",
    "hiragana": "かくす",
    "meaning": "숨기다"
  },
  {
    "kanji": "収める",
    "hiragana": "おさめる",
    "meaning": "거두다, 넣다, 담다"
  },
  {
    "kanji": "重ねる",
    "hiragana": "かさねる",
    "meaning": "겹치다, 중복되다"
  },
  {
    "kanji": "恐れる",
    "hiragana": "おそれる",
    "meaning": "무서워하다, 두려워하다"
  },
  {
    "kanji": "稼ぐ",
    "hiragana": "かせぐ",
    "meaning": "(돈, 시간, 점수를) 벌다"
  },
  {
    "kanji": "落ち着く",
    "hiragana": "おちつく",
    "meaning": "침착하다, 안정되다"
  },
  {
    "kanji": "傾く",
    "hiragana": "かたむく",
    "meaning": "(위치, 마음, 사상이) 기울다"
  },
  {
    "kanji": "庇う",
    "hiragana": "かばう",
    "meaning": "감싸다, 비호하다"
  },
  {
    "kanji": "克服する",
    "hiragana": "こくふくする",
    "meaning": "극복하다"
  },
  {
    "kanji": "我慢する",
    "hiragana": "がまんする",
    "meaning": "참다"
  },
  {
    "kanji": "焦げる",
    "hiragana": "こげる",
    "meaning": "타다"
  },
  {
    "kanji": "乾く",
    "hiragana": "かわく",
    "meaning": "마르다(건조)"
  },
  {
    "kanji": "試みる",
    "hiragana": "こころみる",
    "meaning": "시도해 보다"
  },
  {
    "kanji": "観察する",
    "hiragana": "かんさつする",
    "meaning": "관찰하다"
  },
  {
    "kanji": "異なる",
    "hiragana": "ことなる",
    "meaning": "상이하다, 다르다"
  },
  {
    "kanji": "刻む",
    "hiragana": "きざむ",
    "meaning": "새기다, 조각하다"
  },
  {
    "kanji": "転ぶ",
    "hiragana": "ころぶ",
    "meaning": "구르다, 넘어지다"
  },
  {
    "kanji": "鍛える",
    "hiragana": "きたえる",
    "meaning": "단련하다 さ행"
  },
  {
    "kanji": "急増する",
    "hiragana": "きゅうぞうする",
    "meaning": "급증하다"
  },
  {
    "kanji": "探す",
    "hiragana": "さがす",
    "meaning": "찾다"
  },
  {
    "kanji": "区切る",
    "hiragana": "くぎる",
    "meaning": "구분하다, 구획 짓다"
  },
  {
    "kanji": "逆らう",
    "hiragana": "さからう",
    "meaning": "거스르다"
  },
  {
    "kanji": "崩れる",
    "hiragana": "くずれる",
    "meaning": "무너지다, 쓰러지다"
  },
  {
    "kanji": "叫ぶ",
    "hiragana": "さけぶ",
    "meaning": "외치다"
  },
  {
    "kanji": "繰り返す",
    "hiragana": "くりかえす",
    "meaning": "반복하다"
  },
  {
    "kanji": "下げる",
    "hiragana": "さげる",
    "meaning": "(위치, 값 등을) 내리다"
  },
  {
    "kanji": "貢献する",
    "hiragana": "こうけんする",
    "meaning": "공헌하다"
  },
  {
    "kanji": "差し上げる",
    "hiragana": "さしあげる",
    "meaning": "드리다, 바치다"
  },
  {
    "kanji": "超える",
    "hiragana": "こえる",
    "meaning": "넘다"
  },
  {
    "kanji": "指す",
    "hiragana": "さす",
    "meaning": "가리키다"
  },
  {
    "kanji": "妨げる",
    "hiragana": "さまたげる",
    "meaning": "방해하다"
  },
  {
    "kanji": "注ぐ",
    "hiragana": "そそぐ",
    "meaning": "붓다, 따르다"
  },
  {
    "kanji": "騒ぐ",
    "hiragana": "さわぐ",
    "meaning": "떠들다"
  },
  {
    "kanji": "備える",
    "hiragana": "そなえる",
    "meaning": "준비하다, 구비하다"
  },
  {
    "kanji": "持参する",
    "hiragana": "じさんする",
    "meaning": "지참하다"
  },
  {
    "kanji": "揃う",
    "hiragana": "そろう",
    "meaning": "갖추어지다"
  },
  {
    "kanji": "沈む",
    "hiragana": "しずむ",
    "meaning": "가라앉다"
  },
  {
    "kanji": "招待する",
    "hiragana": "しょうたいする",
    "meaning": "초대하다"
  },
  {
    "kanji": "耐える",
    "hiragana": "たえる",
    "meaning": "참다, 인내하다"
  },
  {
    "kanji": "優れる",
    "hiragana": "すぐれる",
    "meaning": "우수하다"
  },
  {
    "kanji": "倒れる",
    "hiragana": "たおれる",
    "meaning": "쓰러지다"
  },
  {
    "kanji": "勧める",
    "hiragana": "すすめる",
    "meaning": "권하다, 추천하다"
  },
  {
    "kanji": "確かめる",
    "hiragana": "たしかめる",
    "meaning": "확인하다"
  },
  {
    "kanji": "済む",
    "hiragana": "すむ",
    "meaning": "끝나다(해결)"
  },
  {
    "kanji": "達する",
    "hiragana": "たっする",
    "meaning": "달하다"
  },
  {
    "kanji": "狭める",
    "hiragana": "せばめる",
    "meaning": "좁히다"
  },
  {
    "kanji": "頼む",
    "hiragana": "たのむ",
    "meaning": "부탁하다"
  },
  {
    "kanji": "遭遇する",
    "hiragana": "そうぐうする",
    "meaning": "조우하다, 우연히 만나다"
  },
  {
    "kanji": "保つ",
    "hiragana": "たもつ",
    "meaning": "유지하다, 보존하다"
  },
  {
    "kanji": "添える",
    "hiragana": "そえる",
    "meaning": "첨부하다, 덧붙이다"
  },
  {
    "kanji": "近づく",
    "hiragana": "ちかづく",
    "meaning": "다가가다"
  },
  {
    "kanji": "散らす",
    "hiragana": "ちらす",
    "meaning": "어지르다, 흩뜨리다 <자> 바뀌다"
  },
  {
    "kanji": "転じる",
    "hiragana": "てんじる",
    "meaning": ""
  },
  {
    "kanji": "費やす",
    "hiragana": "ついやす",
    "meaning": "다 소비하다"
  },
  {
    "kanji": "伝染する",
    "hiragana": "でんせんする",
    "meaning": "전염되다"
  },
  {
    "kanji": "捕まる",
    "hiragana": "つかまる",
    "meaning": "붙잡히다"
  },
  {
    "kanji": "溶かす",
    "hiragana": "とかす",
    "meaning": "녹이다"
  },
  {
    "kanji": "就く",
    "hiragana": "つく",
    "meaning": "(지위에) 오르다, 취임하다"
  },
  {
    "kanji": "続く",
    "hiragana": "つづく",
    "meaning": "계속되다 (관청 등에) 신고하다"
  },
  {
    "kanji": "務める",
    "hiragana": "つとめる",
    "meaning": "(임무를) 맡다, 역할을 다하다"
  },
  {
    "kanji": "整える",
    "hiragana": "ととのえる",
    "meaning": "정돈하다"
  },
  {
    "kanji": "繋がる",
    "hiragana": "つながる",
    "meaning": "연결되다, 이어지다"
  },
  {
    "kanji": "伴う",
    "hiragana": "ともなう",
    "meaning": "동반하다"
  },
  {
    "kanji": "潰れる",
    "hiragana": "つぶれる",
    "meaning": "찌부러지다, 망하다"
  },
  {
    "kanji": "取り上げる",
    "hiragana": "とりあげる",
    "meaning": "집어 들다, 채택하다"
  },
  {
    "kanji": "積み重ねる",
    "hiragana": "つみかさねる",
    "meaning": "겹겹이 쌓다, 쌓아 올리다"
  },
  {
    "kanji": "取り入れる",
    "hiragana": "とりいれる",
    "meaning": "받아들이다"
  },
  {
    "kanji": "詰め込む",
    "hiragana": "つめこむ",
    "meaning": "채워 넣다"
  },
  {
    "kanji": "取り除く",
    "hiragana": "とりのぞく",
    "meaning": "제거하다, 없애다"
  },
  {
    "kanji": "連れる",
    "hiragana": "つれる",
    "meaning": "동반하다"
  },
  {
    "kanji": "出来上がる",
    "hiragana": "できあがる",
    "meaning": "완성되다 な행"
  },
  {
    "kanji": "適応する",
    "hiragana": "てきおうする",
    "meaning": "적응하다"
  },
  {
    "kanji": "眺める",
    "hiragana": "ながめる",
    "meaning": "바라보다, 조망하다"
  },
  {
    "kanji": "徹底する",
    "hiragana": "てっていする",
    "meaning": "철저하다"
  },
  {
    "kanji": "嘆く",
    "hiragana": "なげく",
    "meaning": "한탄하다"
  },
  {
    "kanji": "納得する",
    "hiragana": "なっとくする",
    "meaning": "납득하다"
  },
  {
    "kanji": "外す",
    "hiragana": "はずす",
    "meaning": "떼다, 풀다"
  },
  {
    "kanji": "悩む",
    "hiragana": "なやむ",
    "meaning": "고민하다"
  },
  {
    "kanji": "外れる",
    "hiragana": "はずれる",
    "meaning": "벗겨지다, 제외되다"
  },
  {
    "kanji": "鳴る",
    "hiragana": "なる",
    "meaning": "울리다"
  },
  {
    "kanji": "果たす",
    "hiragana": "はたす",
    "meaning": "완수하다, 다하다"
  },
  {
    "kanji": "慣れる",
    "hiragana": "なれる",
    "meaning": "적응되다, 익숙하다"
  },
  {
    "kanji": "離れる",
    "hiragana": "はなれる",
    "meaning": "멀어지다, 떨어지다"
  },
  {
    "kanji": "担う",
    "hiragana": "になう",
    "meaning": "짊어지다, 메다"
  },
  {
    "kanji": "省く",
    "hiragana": "はぶく",
    "meaning": "생략하다"
  },
  {
    "kanji": "抜く",
    "hiragana": "ぬく",
    "meaning": "뽑다, 빼다"
  },
  {
    "kanji": "冷える",
    "hiragana": "ひえる",
    "meaning": "차가워지다, 추워지다"
  },
  {
    "kanji": "願う",
    "hiragana": "ねがう",
    "meaning": "원하다, 바라다"
  },
  {
    "kanji": "引き受ける",
    "hiragana": "ひきうける",
    "meaning": "떠맡다"
  },
  {
    "kanji": "逃す",
    "hiragana": "のがす",
    "meaning": "놓치다"
  },
  {
    "kanji": "引き渡す",
    "hiragana": "ひきわたす",
    "meaning": "넘겨주다, 인도하다"
  },
  {
    "kanji": "伸ばす",
    "hiragana": "のばす",
    "meaning": "늘리다, 신장시키다"
  },
  {
    "kanji": "広げる",
    "hiragana": "ひろげる",
    "meaning": "넓히다"
  },
  {
    "kanji": "伸びる",
    "hiragana": "のびる",
    "meaning": "늘다, 신장하다"
  },
  {
    "kanji": "増える",
    "hiragana": "ふえる",
    "meaning": "늘다, 증가하다"
  },
  {
    "kanji": "述べる",
    "hiragana": "のべる",
    "meaning": "진술하다"
  },
  {
    "kanji": "深める",
    "hiragana": "ふかめる",
    "meaning": "깊게 하다"
  },
  {
    "kanji": "膨らむ",
    "hiragana": "ふくらむ",
    "meaning": "(꿈, 계획 등이) 부풀다"
  },
  {
    "kanji": "拝見する",
    "hiragana": "はいけんする",
    "meaning": "'보다, 읽다'의 겸양"
  },
  {
    "kanji": "防ぐ",
    "hiragana": "ふせぐ",
    "meaning": "막다, 방지하다"
  },
  {
    "kanji": "測る",
    "hiragana": "はかる",
    "meaning": "측량하다, 재다"
  },
  {
    "kanji": "踏み出す",
    "hiragana": "ふみだす",
    "meaning": "내딛다, 착수하다"
  },
  {
    "kanji": "吐き出す",
    "hiragana": "はきだす",
    "meaning": "토해내다, 내뱉다"
  },
  {
    "kanji": "踏む",
    "hiragana": "ふむ",
    "meaning": "밟다"
  },
  {
    "kanji": "励む",
    "hiragana": "はげむ",
    "meaning": "힘쓰다"
  },
  {
    "kanji": "振り返る",
    "hiragana": "ふりかえる",
    "meaning": "뒤돌아보다, 돌이켜보다"
  },
  {
    "kanji": "振り込む",
    "hiragana": "ふりこむ",
    "meaning": "납입하다, 불입하다"
  },
  {
    "kanji": "磨く",
    "hiragana": "みがく",
    "meaning": "닦다, 연마하다"
  },
  {
    "kanji": "見直す",
    "hiragana": "みなおす",
    "meaning": "다시 보다, 재검토하다"
  },
  {
    "kanji": "見慣れる",
    "hiragana": "みなれる",
    "meaning": "눈에 익숙하다"
  },
  {
    "kanji": "減る",
    "hiragana": "へる",
    "meaning": "줄다, 감소하다"
  },
  {
    "kanji": "見分ける",
    "hiragana": "みわける",
    "meaning": "분간하다, 분별하다"
  },
  {
    "kanji": "保存する",
    "hiragana": "ほぞんする",
    "meaning": "보존하다"
  },
  {
    "kanji": "結ぶ",
    "hiragana": "むすぶ",
    "meaning": "맺다, 묶다"
  },
  {
    "kanji": "参る",
    "hiragana": "まいる",
    "meaning": "'오다, 가다'의 겸양"
  },
  {
    "kanji": "燃える",
    "hiragana": "もえる",
    "meaning": "타다"
  },
  {
    "kanji": "負ける",
    "hiragana": "まける",
    "meaning": "지다"
  },
  {
    "kanji": "潜る",
    "hiragana": "もぐる",
    "meaning": "잠수하다"
  },
  {
    "kanji": "混ぜる",
    "hiragana": "まぜる",
    "meaning": "섞다, 혼합하다"
  },
  {
    "kanji": "用いる",
    "hiragana": "もちいる",
    "meaning": "쓰다, 이용하다"
  },
  {
    "kanji": "纏める",
    "hiragana": "まとめる",
    "meaning": "정리하다"
  },
  {
    "kanji": "基づく",
    "hiragana": "もとづく",
    "meaning": "근거하다"
  },
  {
    "kanji": "惑わす",
    "hiragana": "まどわす",
    "meaning": "현혹시키다, 유혹하다"
  },
  {
    "kanji": "求める",
    "hiragana": "もとめる",
    "meaning": "구하다(요구)"
  },
  {
    "kanji": "催す",
    "hiragana": "もよおす",
    "meaning": "개최하다"
  },
  {
    "kanji": "見い出す",
    "hiragana": "みいだす",
    "meaning": "찾아내다, 발견하다"
  },
  {
    "kanji": "湧く",
    "hiragana": "わく",
    "meaning": "끓다"
  },
  {
    "kanji": "渡る",
    "hiragana": "わたる",
    "meaning": "건너다"
  },
  {
    "kanji": "輸入する",
    "hiragana": "ゆにゅうする",
    "meaning": "수입하다 あ행"
  },
  {
    "kanji": "許す",
    "hiragana": "ゆるす",
    "meaning": "용서하다, 허락하다"
  },
  {
    "kanji": "厚い",
    "hiragana": "あつい",
    "meaning": "두껍다"
  },
  {
    "kanji": "緩む",
    "hiragana": "ゆるむ",
    "meaning": "느슨해지다"
  },
  {
    "kanji": "怪しい",
    "hiragana": "あやしい",
    "meaning": "수상하다, 이상하다"
  },
  {
    "kanji": "汚れる",
    "hiragana": "よごれる",
    "meaning": "더러워지다"
  },
  {
    "kanji": "荒い",
    "hiragana": "あらい",
    "meaning": "거칠다"
  },
  {
    "kanji": "寄せる",
    "hiragana": "よせる",
    "meaning": "밀려오다, 다가오다"
  },
  {
    "kanji": "痛ましい",
    "hiragana": "いたましい",
    "meaning": "가엽다, 애처롭다"
  },
  {
    "kanji": "寄る",
    "hiragana": "よる",
    "meaning": "들르다"
  },
  {
    "kanji": "思いがけない",
    "hiragana": "おもいがけない",
    "meaning": "의외이다, 뜻밖이다"
  },
  {
    "kanji": "重苦しい",
    "hiragana": "おもくるしい",
    "meaning": "답답하다, 숨막히다"
  },
  {
    "kanji": "浅い",
    "hiragana": "あさい",
    "meaning": "얕다"
  },
  {
    "kanji": "恐ろしい",
    "hiragana": "おそろしい",
    "meaning": "두렵다, 무섭다"
  },
  {
    "kanji": "頼もしい",
    "hiragana": "たのもしい",
    "meaning": "든든하다"
  },
  {
    "kanji": "危うい",
    "hiragana": "あやうい",
    "meaning": "위태롭다"
  },
  {
    "kanji": "乏しい",
    "hiragana": "とぼしい",
    "meaning": "빈곤하다"
  },
  {
    "kanji": "力強い",
    "hiragana": "ちからづよい",
    "meaning": "마음 든든하다, 힘차다"
  },
  {
    "kanji": "厳しい",
    "hiragana": "きびしい",
    "meaning": "엄하다, 엄격하다"
  },
  {
    "kanji": "細かい",
    "hiragana": "こまかい",
    "meaning": "세세하다"
  },
  {
    "kanji": "懐かし",
    "hiragana": "なつかしい",
    "meaning": "그립다"
  },
  {
    "kanji": "寂しい",
    "hiragana": "さびしい",
    "meaning": "쓸쓸하다, 외롭다"
  },
  {
    "kanji": "温い",
    "hiragana": "ぬるい",
    "meaning": "미지근하다"
  },
  {
    "kanji": "騒がしい",
    "hiragana": "さわがしい",
    "meaning": "시끄럽다, 떠들썩하다"
  },
  {
    "kanji": "望ましい",
    "hiragana": "のぞましい",
    "meaning": "바람직하다"
  },
  {
    "kanji": "明らかだ",
    "hiragana": "あきらかだ",
    "meaning": "명백하다, 뚜렷하다"
  },
  {
    "kanji": "貧しい",
    "hiragana": "まずしい",
    "meaning": "가난하다"
  },
  {
    "kanji": "新ただ",
    "hiragana": "あらただ",
    "meaning": "새롭다"
  },
  {
    "kanji": "眩しい",
    "hiragana": "まぶしい",
    "meaning": "눈부시다"
  },
  {
    "kanji": "安易だ",
    "hiragana": "あんいだ",
    "meaning": "안이하다"
  },
  {
    "kanji": "丸い",
    "hiragana": "まるい",
    "meaning": "둥글다"
  },
  {
    "kanji": "大げさだ",
    "hiragana": "おおげさだ",
    "meaning": "과장되다"
  },
  {
    "kanji": "珍しい",
    "hiragana": "めずらしい",
    "meaning": "흔치않다"
  },
  {
    "kanji": "大ざっぱだ",
    "hiragana": "おおざっぱだ",
    "meaning": "대충이다"
  },
  {
    "kanji": "申し訳ない",
    "hiragana": "もうしわけない",
    "meaning": "죄송하다"
  },
  {
    "kanji": "穏やかだ",
    "hiragana": "おだやかだ",
    "meaning": "온화하다"
  },
  {
    "kanji": "物足りない",
    "hiragana": "ものたりない",
    "meaning": "부족하다"
  },
  {
    "kanji": "緩い",
    "hiragana": "ゆるい",
    "meaning": "완만하다"
  },
  {
    "kanji": "勝手だ",
    "hiragana": "かってだ",
    "meaning": "제멋대로다"
  },
  {
    "kanji": "簡潔だ",
    "hiragana": "かんけつだ",
    "meaning": "간결하다"
  },
  {
    "kanji": "頑丈だ",
    "hiragana": "がんじょうだ",
    "meaning": "튼튼하다"
  },
  {
    "kanji": "簡略だ",
    "hiragana": "かんりゃくだ",
    "meaning": "간략하다"
  },
  {
    "kanji": "危険だ",
    "hiragana": "きけんだ",
    "meaning": "위험하다"
  },
  {
    "kanji": "貴重だ",
    "hiragana": "きちょうだ",
    "meaning": "귀중하다"
  },
  {
    "kanji": "曖昧だ",
    "hiragana": "あいまいだ",
    "meaning": "애매하다"
  },
  {
    "kanji": "強烈だ",
    "hiragana": "きょうれつだ",
    "meaning": "강렬하다"
  },
  {
    "kanji": "気楽だ",
    "hiragana": "きらくだ",
    "meaning": "마음편하다 た행"
  },
  {
    "kanji": "好調だ",
    "hiragana": "こうちょうだ",
    "meaning": "호조를 보이다, 순조롭다"
  },
  {
    "kanji": "退屈だ",
    "hiragana": "たいくつだ",
    "meaning": "지루하다"
  },
  {
    "kanji": "対等だ",
    "hiragana": "たいとうだ",
    "meaning": "대등하다"
  },
  {
    "kanji": "平だ",
    "hiragana": "たいらだ",
    "meaning": "평평하다"
  },
  {
    "kanji": "幸いだ",
    "hiragana": "さいわいだ",
    "meaning": "다행이다"
  },
  {
    "kanji": "確かだ",
    "hiragana": "たしかだ",
    "meaning": "확실하다"
  },
  {
    "kanji": "盛んだ",
    "hiragana": "さかんだ",
    "meaning": "번성하다, 왕성하다"
  },
  {
    "kanji": "多大だ",
    "hiragana": "ただいだ",
    "meaning": "많고 크다"
  },
  {
    "kanji": "残念だ",
    "hiragana": "ざんねんだ",
    "meaning": "유감이다"
  },
  {
    "kanji": "多様だ",
    "hiragana": "たようだ",
    "meaning": "다양하다 사"
  },
  {
    "kanji": "地味だ",
    "hiragana": "じみだ",
    "meaning": "수수하다"
  },
  {
    "kanji": "丁寧だ",
    "hiragana": "ていねいだ",
    "meaning": "정중하다"
  },
  {
    "kanji": "重要だ",
    "hiragana": "じゅうようだ",
    "meaning": "중요하다"
  },
  {
    "kanji": "適切だ",
    "hiragana": "てきせつだ",
    "meaning": "적절하다"
  },
  {
    "kanji": "正直だ",
    "hiragana": "しょうじきだ",
    "meaning": "정직하다"
  },
  {
    "kanji": "同様だ",
    "hiragana": "どうようだ",
    "meaning": "다름없다, 마찬가지다"
  },
  {
    "kanji": "深刻だ",
    "hiragana": "しんこくだ",
    "meaning": "심각하다"
  },
  {
    "kanji": "得意だ",
    "hiragana": "とくいだ",
    "meaning": "잘하다, 자신 있다"
  },
  {
    "kanji": "慎重だ",
    "hiragana": "しんちょうだ",
    "meaning": "신중하다"
  },
  {
    "kanji": "素直だ",
    "hiragana": "すなおだ",
    "meaning": "고분고분하다, 순하다, 솔직하다 な행"
  },
  {
    "kanji": "清潔だ",
    "hiragana": "せいけつだ",
    "meaning": "청결하다"
  },
  {
    "kanji": "苦手だ",
    "hiragana": "にがてだ",
    "meaning": "못하다, 싫어하다"
  },
  {
    "kanji": "率直だ",
    "hiragana": "そっちょくだ",
    "meaning": "솔직하다"
  },
  {
    "kanji": "賑やかだ",
    "hiragana": "にぎやかだ",
    "meaning": "번화하다"
  },
  {
    "kanji": "粗末だ",
    "hiragana": "そまつだ",
    "meaning": "허술하다"
  },
  {
    "kanji": "派手だ",
    "hiragana": "はでだ",
    "meaning": "화려하다"
  },
  {
    "kanji": "豊かだ",
    "hiragana": "ゆたかだ",
    "meaning": "풍족하다, 풍부하다"
  },
  {
    "kanji": "複雑だ",
    "hiragana": "ふくざつだ",
    "meaning": "복잡하다"
  },
  {
    "kanji": "余計だ",
    "hiragana": "よけいだ",
    "meaning": "쓸데없다"
  },
  {
    "kanji": "不思議だ",
    "hiragana": "ふしぎだ",
    "meaning": "이상하다, 불가사의하다"
  },
  {
    "kanji": "不調だ",
    "hiragana": "ふちょうだ",
    "meaning": "상태가 나쁘다, 부진하다 ら행"
  },
  {
    "kanji": "物騒だ",
    "hiragana": "ぶっそうだ",
    "meaning": "어수선하다, 뒤숭숭하다"
  },
  {
    "kanji": "利口だ",
    "hiragana": "りこうだ",
    "meaning": "영리하다"
  },
  {
    "kanji": "平気だ",
    "hiragana": "へいきだ",
    "meaning": "태연하다, 아무렇지 않다"
  },
  {
    "kanji": "立派だ",
    "hiragana": "りっぱだ",
    "meaning": "훌륭하다"
  },
  {
    "kanji": "平凡だ",
    "hiragana": "へいぼんだ",
    "meaning": "평범하다"
  },
  {
    "kanji": "冷静だ",
    "hiragana": "れいせいだ",
    "meaning": "냉철하다, 이성적이다"
  },
  {
    "kanji": "豊富だ",
    "hiragana": "ほうふだ",
    "meaning": "풍부하다 사"
  },
  {
    "kanji": "見事だ",
    "hiragana": "みごとだ",
    "meaning": "훌륭하다"
  },
  {
    "kanji": "愛用",
    "hiragana": "あいよう",
    "meaning": "애용"
  },
  {
    "kanji": "妙だ",
    "hiragana": "みょうだ",
    "meaning": "묘하다"
  },
  {
    "kanji": "印象",
    "hiragana": "いんしょう",
    "meaning": "인상"
  },
  {
    "kanji": "無駄だ",
    "hiragana": "むだだ",
    "meaning": "쓸데없다, 허비하다"
  },
  {
    "kanji": "引用",
    "hiragana": "いんよう",
    "meaning": "인용"
  },
  {
    "kanji": "迷惑だ",
    "hiragana": "めいわくだ",
    "meaning": "민폐이다"
  },
  {
    "kanji": "売上",
    "hiragana": "うりあげ",
    "meaning": "매상"
  },
  {
    "kanji": "面倒だ",
    "hiragana": "めんどうだ",
    "meaning": "귀찮다"
  },
  {
    "kanji": "遠慮",
    "hiragana": "えんりょ",
    "meaning": "사양, 삼가"
  },
  {
    "kanji": "温暖",
    "hiragana": "おんだん",
    "meaning": "온난"
  },
  {
    "kanji": "解決",
    "hiragana": "かいけつ",
    "meaning": "해결"
  },
  {
    "kanji": "購入",
    "hiragana": "こうにゅう",
    "meaning": "구입"
  },
  {
    "kanji": "確認",
    "hiragana": "かくにん",
    "meaning": "확인 さ행"
  },
  {
    "kanji": "価値",
    "hiragana": "かち",
    "meaning": "가치"
  },
  {
    "kanji": "採用",
    "hiragana": "さいよう",
    "meaning": "채용"
  },
  {
    "kanji": "活発",
    "hiragana": "かっぱつ",
    "meaning": "활발"
  },
  {
    "kanji": "資源",
    "hiragana": "しげん",
    "meaning": "자원"
  },
  {
    "kanji": "活躍",
    "hiragana": "かつやく",
    "meaning": "활약"
  },
  {
    "kanji": "姿勢",
    "hiragana": "しせい",
    "meaning": "자세"
  },
  {
    "kanji": "簡略",
    "hiragana": "かんりゃく",
    "meaning": "간략"
  },
  {
    "kanji": "地元",
    "hiragana": "じもと",
    "meaning": "그 고장, 그 지방"
  },
  {
    "kanji": "規格",
    "hiragana": "きかく",
    "meaning": "규격"
  },
  {
    "kanji": "循環",
    "hiragana": "じゅんかん",
    "meaning": "순환"
  },
  {
    "kanji": "企業",
    "hiragana": "きぎょう",
    "meaning": "기업"
  },
  {
    "kanji": "状況",
    "hiragana": "じょうきょう",
    "meaning": "상황"
  },
  {
    "kanji": "議論",
    "hiragana": "ぎろん",
    "meaning": "논의"
  },
  {
    "kanji": "証拠",
    "hiragana": "しょうこ",
    "meaning": "증거"
  },
  {
    "kanji": "緊張",
    "hiragana": "きんちょう",
    "meaning": "긴장"
  },
  {
    "kanji": "詳細",
    "hiragana": "しょうさい",
    "meaning": "상세"
  },
  {
    "kanji": "現状",
    "hiragana": "げんじょう",
    "meaning": "현상"
  },
  {
    "kanji": "診断",
    "hiragana": "しんだん",
    "meaning": "진단"
  },
  {
    "kanji": "進歩",
    "hiragana": "しんぽ",
    "meaning": "진보"
  },
  {
    "kanji": "特別",
    "hiragana": "とくべつ",
    "meaning": "특별"
  },
  {
    "kanji": "信頼",
    "hiragana": "しんらい",
    "meaning": "신뢰"
  },
  {
    "kanji": "土地",
    "hiragana": "とち",
    "meaning": "토지"
  },
  {
    "kanji": "制約",
    "hiragana": "せいやく",
    "meaning": "제약 な행"
  },
  {
    "kanji": "責任",
    "hiragana": "せきにん",
    "meaning": "책임"
  },
  {
    "kanji": "波",
    "hiragana": "なみ",
    "meaning": "파도"
  },
  {
    "kanji": "設置",
    "hiragana": "せっち",
    "meaning": "설치"
  },
  {
    "kanji": "涙",
    "hiragana": "なみだ",
    "meaning": "눈물"
  },
  {
    "kanji": "宣伝",
    "hiragana": "せんでん",
    "meaning": "선전"
  },
  {
    "kanji": "温もり",
    "hiragana": "ぬくもり",
    "meaning": "온기, 따스함, 체온"
  },
  {
    "kanji": "増加",
    "hiragana": "ぞうか",
    "meaning": "증가"
  },
  {
    "kanji": "農産物",
    "hiragana": "のうさんぶつ",
    "meaning": "농산물 사"
  },
  {
    "kanji": "能率",
    "hiragana": "のうりつ",
    "meaning": "능률"
  },
  {
    "kanji": "態度",
    "hiragana": "たいど",
    "meaning": "태도 は행"
  },
  {
    "kanji": "担当",
    "hiragana": "たんとう",
    "meaning": "담당"
  },
  {
    "kanji": "把握",
    "hiragana": "はあく",
    "meaning": "파악"
  },
  {
    "kanji": "長所",
    "hiragana": "ちょうしょ",
    "meaning": "장점"
  },
  {
    "kanji": "配達",
    "hiragana": "はいたつ",
    "meaning": "배달"
  },
  {
    "kanji": "特徴",
    "hiragana": "とくちょう",
    "meaning": "특징"
  },
  {
    "kanji": "配慮",
    "hiragana": "はいりょ",
    "meaning": "배려"
  },
  {
    "kanji": "肌",
    "hiragana": "はだ",
    "meaning": "피부"
  },
  {
    "kanji": "風景",
    "hiragana": "ふうけい",
    "meaning": "풍경"
  },
  {
    "kanji": "発行",
    "hiragana": "はっこう",
    "meaning": "발행"
  },
  {
    "kanji": "不足",
    "hiragana": "ふそく",
    "meaning": "부족"
  },
  {
    "kanji": "発送",
    "hiragana": "はっそう",
    "meaning": "발송"
  },
  {
    "kanji": "負担",
    "hiragana": "ふたん",
    "meaning": "부담"
  },
  {
    "kanji": "発売",
    "hiragana": "はつばい",
    "meaning": "발매"
  },
  {
    "kanji": "普遍的",
    "hiragana": "ふへんてき",
    "meaning": "보편적"
  },
  {
    "kanji": "幅",
    "hiragana": "はば",
    "meaning": "폭"
  },
  {
    "kanji": "不良品",
    "hiragana": "ふりょうひん",
    "meaning": "불량품"
  },
  {
    "kanji": "半額",
    "hiragana": "はんがく",
    "meaning": "반액"
  },
  {
    "kanji": "平和",
    "hiragana": "へいわ",
    "meaning": "평화 사"
  },
  {
    "kanji": "半減",
    "hiragana": "はんげん",
    "meaning": "반감"
  },
  {
    "kanji": "変換",
    "hiragana": "へんかん",
    "meaning": "변환"
  },
  {
    "kanji": "判断",
    "hiragana": "はんだん",
    "meaning": "판단"
  },
  {
    "kanji": "変更",
    "hiragana": "へんこう",
    "meaning": "변경"
  },
  {
    "kanji": "反応",
    "hiragana": "はんのう",
    "meaning": "반응"
  },
  {
    "kanji": "法律",
    "hiragana": "ほうりつ",
    "meaning": "법률"
  },
  {
    "kanji": "販売",
    "hiragana": "はんばい",
    "meaning": "판매"
  },
  {
    "kanji": "保護者",
    "hiragana": "ほごしゃ",
    "meaning": "보호자"
  },
  {
    "kanji": "筆者",
    "hiragana": "ひっしゃ",
    "meaning": "필자"
  },
  {
    "kanji": "募集",
    "hiragana": "ぼしゅう",
    "meaning": "모집"
  },
  {
    "kanji": "飛躍的",
    "hiragana": "ひやくてき",
    "meaning": "비약적"
  },
  {
    "kanji": "本質",
    "hiragana": "ほんしつ",
    "meaning": "본질"
  },
  {
    "kanji": "費用",
    "hiragana": "ひよう",
    "meaning": "비용"
  },
  {
    "kanji": "本物",
    "hiragana": "ほんもの",
    "meaning": "진짜, 실물, 전문가"
  },
  {
    "kanji": "見た目",
    "hiragana": "みため",
    "meaning": "겉모습"
  },
  {
    "kanji": "楽天的",
    "hiragana": "らくてんてき",
    "meaning": "낙천적"
  },
  {
    "kanji": "魅力",
    "hiragana": "みりょく",
    "meaning": "매력"
  },
  {
    "kanji": "利益",
    "hiragana": "りえき",
    "meaning": "이익"
  },
  {
    "kanji": "名刺",
    "hiragana": "めいし",
    "meaning": "명함"
  },
  {
    "kanji": "利点",
    "hiragana": "りてん",
    "meaning": "이점"
  },
  {
    "kanji": "模型",
    "hiragana": "もけい",
    "meaning": "모형"
  },
  {
    "kanji": "歴史",
    "hiragana": "れきし",
    "meaning": "역사"
  },
  {
    "kanji": "割引",
    "hiragana": "わりびき",
    "meaning": "할인"
  },
  {
    "kanji": "遊園地",
    "hiragana": "ゆうえんち",
    "meaning": "유원지"
  },
  {
    "kanji": "優勝",
    "hiragana": "ゆうしょう",
    "meaning": "우승 あ행"
  },
  {
    "kanji": "夢",
    "hiragana": "ゆめ",
    "meaning": "꿈"
  },
  {
    "kanji": "相変わらず",
    "hiragana": "あいかわらず",
    "meaning": "변함없이"
  },
  {
    "kanji": "様子",
    "hiragana": "ようす",
    "meaning": "모습, 모양"
  },
  {
    "kanji": "改めて",
    "hiragana": "あらためて",
    "meaning": "다시, 재차"
  },
  {
    "kanji": "余裕",
    "hiragana": "よゆう",
    "meaning": "여유"
  },
  {
    "kanji": "生き生き",
    "hiragana": "いきいき",
    "meaning": "생생한 모양, 활기찬 모양"
  },
  {
    "kanji": "一体",
    "hiragana": "いったい",
    "meaning": "대체"
  },
  {
    "kanji": "次第に",
    "hiragana": "しだいに",
    "meaning": "점점, 순차적으로"
  },
  {
    "kanji": "今にも",
    "hiragana": "いまにも",
    "meaning": "금방이라도"
  },
  {
    "kanji": "実に",
    "hiragana": "じつに",
    "meaning": "실제로"
  },
  {
    "kanji": "大いに",
    "hiragana": "おおいに",
    "meaning": "크게, 매우"
  },
  {
    "kanji": "十分",
    "hiragana": "じゅうぶん",
    "meaning": "충분"
  },
  {
    "kanji": "思わず",
    "hiragana": "おもわず",
    "meaning": "무심코"
  },
  {
    "kanji": "少なくとも",
    "hiragana": "すくなくとも",
    "meaning": "적어도"
  },
  {
    "kanji": "絶対に",
    "hiragana": "ぜったいに",
    "meaning": "절대로"
  },
  {
    "kanji": "必ず",
    "hiragana": "かならず",
    "meaning": "반드시, 꼭"
  },
  {
    "kanji": "続々",
    "hiragana": "ぞくぞく",
    "meaning": "속속, 계속해서"
  },
  {
    "kanji": "必ずしも",
    "hiragana": "かならずしも",
    "meaning": "반드시 ~인 것은 아니다"
  },
  {
    "kanji": "大抵",
    "hiragana": "たいてい",
    "meaning": "대체로 사"
  },
  {
    "kanji": "絶えず",
    "hiragana": "たえず",
    "meaning": "끊임없이"
  },
  {
    "kanji": "幸いに",
    "hiragana": "さいわいに",
    "meaning": "다행히"
  },
  {
    "kanji": "多少",
    "hiragana": "たしょう",
    "meaning": "다소"
  },
  {
    "kanji": "先ほど",
    "hiragana": "さきほど",
    "meaning": "아까, 먼저"
  },
  {
    "kanji": "直ちに",
    "hiragana": "ただちに",
    "meaning": "금새"
  },
  {
    "kanji": "早速",
    "hiragana": "さっそく",
    "meaning": "즉시, 조속히"
  },
  {
    "kanji": "単なる",
    "hiragana": "たんなる",
    "meaning": "단순한"
  },
  {
    "kanji": "強いて",
    "hiragana": "しいて",
    "meaning": "굳이, 구태여"
  },
  {
    "kanji": "常に",
    "hiragana": "つねに",
    "meaning": "항상, 언제나"
  },
  {
    "kanji": "何しろ",
    "hiragana": "なにしろ",
    "meaning": "아무튼, 어쨌든"
  },
  {
    "kanji": "何とか",
    "hiragana": "なんとか",
    "meaning": "뭐라고, 어떻게든"
  },
  {
    "kanji": "果たして",
    "hiragana": "はたして",
    "meaning": "과연"
  },
  {
    "kanji": "再び",
    "hiragana": "ふたたび",
    "meaning": "다시, 재차"
  },
  {
    "kanji": "全く",
    "hiragana": "まったく",
    "meaning": "전혀"
  },
  {
    "kanji": "最も",
    "hiragana": "もっとも",
    "meaning": "가장"
  },
  {
    "kanji": "余計",
    "hiragana": "よけい",
    "meaning": "한층 더, 더욱"
  }
];
