﻿
	//能力關鍵字
	var abilityMapping = {
	
		map : [
			{ Jap : "S・トリガー",			Eng : "Shield Trigger",			Chi : "護盾觸發",			descript : "當此卡從護盾區中回到手牌時，你可以不支付費用使用此卡",},
			{ Jap : "S・トリガーX",			Eng : "Shield Trigger X",		Chi : "護盾觸發X",			descript : "當此卡從護盾區中回到手牌時，你可以不支付費用直接將此卡打出至戰鬥場上、並裝備至戰鬥場上1隻我方生物之上",},
			{ Jap : "フォートE",			Eng : "Fort Energy",			Chi : "要塞能量",			descript : "當你以橫置魔力、支付費用的方式來召喚此生物時，如果橫置的卡牌有符合指定條件的話，則發動此能力",},
			{ Jap : "O・ドライブ",			Eng : "Over Drive",				Chi : "超越進擊",			descript : "當召喚此生物/使用此咒文時，你可以額外橫置自己魔力區中指定條件的卡片，這樣的話，發動追加能力",},
			{ Jap : "バイオ・T",			Eng : "Bio Tackle",				Chi : "生化捕獲",			descript : "當指定種族的我方生物發動攻擊進入戰鬥時，你可以將此卡從手牌中丟棄，這樣的話，該回合結束前，發動攻擊的生物獲得指定能力",},
			{ Jap : "ランチャーE",			Eng : "Launcher Energy",		Chi : "砲手能源",			descript : "橫置戰鬥場上任意隻指定種族的我方生物，並發動下面能力",},
			{ Jap : "メガメテオバーン6",	Eng : "Mega Meteor Burn 6",		Chi : "百萬隕石爆擊６",		descript : "將進化生物下面的6張種子生物卡置入墓地以發動能力",},
			{ Jap : "バイオ・K",			Eng : "Bio Kick",				Chi : "生化踢擊",			descript : "當指定種族的我方生物攻擊牌手未被阻擋時，你可以將此卡從手牌中丟棄，這樣的話，發動下列能力",},
			{ Jap : "L・ゲート",			Eng : "Life Gate",				Chi : "生命之門",			descript : "當此生物被破壞時，你可以取代破壞、將指定種族的卡牌各別從我方墓地裡選擇1張、並將之加入到手牌中。那樣的話，將此生物置入牌庫底。",},

			{ Jap : "G・L・ゲート",			Eng : "Galaxy Gate",			Chi : "銀河命門",			descript : "當此生物被破壞時，你可以取代破壞、將任意張指定種族的卡牌從我方墓地裡拿回到手牌中。那樣的話，將此生物置入牌庫底。",},

			{ Jap : "T・ブレイカー",		Eng : "Triple Breaker",			Chi : "三重擊破者",			descript : "此生物可以擊破三張護盾",},
			{ Jap : "メテオバーン",			Eng : "Meteor Burn",			Chi : "隕石爆擊",			descript : "將進化生物下面的種子生物卡置入墓地以發動能力",},
			{ Jap : "シンパシー",			Eng : "Sympathy",				Chi : "共鳴",				descript : "生物的召喚費用/咒文的使用費用會隨著每一個指定條件的存在而降低1，但是不能降到比0、或是比其文明數少",},
			{ Jap : "W・ブレイカー",		Eng : "Double Breaker",			Chi : "雙重擊破者",			descript : "此生物可以擊破兩張護盾",},
			{ Jap : "ブロッカー",			Eng : "Blocker",				Chi : "阻擋者",				descript : "當對手生物攻擊時，你可以橫置此生物來跟對手生物戰鬥，以保護原本的被攻擊目標",},
			{ Jap : "G・ゼロ",				Eng : "Gravity Zero",			Chi : "零重力",				descript : "當達成指定條件時，你可以不支付費用召喚此生物或是使用此咒文",},
			{ Jap : "チャージャー",			Eng : "Charger",				Chi : "充能",				descript : "此咒文使用完畢之後不會置入墓地、而是置入我方的魔力區中",},
			{ Jap : "ゴッドスレイヤー",		Eng : "God Slayer",				Chi : "神殺手",				descript : "當此生物與ゴッド戰鬥時，於戰鬥之後破壞破壞該ゴッド",},
			{ Jap : "スピードアタッカー",	Eng : "Speed Attacker",			Chi : "速攻",				descript : "此生物沒有召喚失調，出場的回合就可以發動攻擊",},
			{ Jap : "パワーアタッカー",		Eng : "Power Attacker",			Chi : "威力攻擊者",			descript : "當此生物發動攻擊時，在該攻擊中，此生物攻擊力會增加指定數字",},
			{ Jap : "ガチンコ・ジャッジ",	Eng : "Gachingo Judge",			Chi : "勝負裁決",			descript : "與對手一起公開牌頂比卡牌費用大小，只要發動方公開出來的卡片的費用數字沒有比對手小就算獲勝，之後將公開的牌放進牌庫底",},
			{ Jap : "ソウルシフト",			Eng : "Soul Shift",				Chi : "靈魂轉移",			descript : "召喚此生物時，其費用值會隨著進化種子的費用值而減少",},
			{ Jap : "Q・ブレイカー",		Eng : "Quadro Breaker",			Chi : "四重擊破者",			descript : "此生物可以擊破四張護盾",},
			{ Jap : "スレイヤー",			Eng : "Slayer",					Chi : "殺手",				descript : "當此生物進行戰鬥時，於戰鬥之後破壞戰鬥對手",},
			{ Jap : "Evoチャージャー",		Eng : "Evolution Charger",		Chi : "進化充能",			descript : "此咒文使用完畢之後不會置入墓地、而是置入我方的魔力區中。之後想要的話，可以將一張我方魔力區裏的生物，塞進場上一隻我方的進化生物之下",},
			{ Jap : "ループ覚醒",			Eng : "Loop Awakened",			Chi : "輪迴覺醒",			descript : "當達成指定條件時，將此生物翻至另一面",},
			{ Jap : "覚醒",					Eng : "Awakened",				Chi : "覺醒",				descript : "當達成指定條件時，將此生物翻至費用較大的一面",},
			{ Jap : "城",					Eng : "Castle",					Chi : "城",					descript : "選擇一張自己的護盾，並將此卡置於其上以完成「要塞化」動作。當此卡所要塞化的護盾離場時，則將此卡置於墓地。(如果有要處理S・トリガー的話，請在此卡置於墓地之前進行處理。)",},
			{ Jap : "ニンジャ・ストライク",	Eng : "Ninja Strike",			Chi : "忍者奇襲",			descript : "每當對手生物發動攻擊或是阻擋時，如果自己的魔力區中有不低於指定數字張數的卡牌、且該次攻擊或阻擋當中，我方還沒有發動過任何其他的「ニンジャ・ストライク」能力的話，則可無視費用召喚此生物。\n於回合結束時，將以此能力出場的生物放回牌庫底。",},
			{ Jap : "リンク解除",			Eng : "Link Release",			Chi : "連結解除",			descript : "當此生物離場時，將構成此生物的其中一張卡(サイキック・セル)送回超次元區，並將剩餘卡牌翻回另一面。",},
			{ Jap : "覚醒リンク",			Eng : "Psychic Link",			Chi : "覺醒聯結",			descript : "若於自己回合初、滿足指定條件的話，則將戰鬥場上所指定的超次元生物一起翻面，並結合成一隻生物",},
			{ Jap : "V覚醒リンク",			Eng : "Victory Psychic Link",	Chi : "勝利覺醒聯結",		descript : "若滿足指定條件的話，則將戰鬥場上所指定的超次元生物一起翻面，並結合成一隻生物",},
			{ Jap : "エターナル・Ω",		Eng : "Eternal Omega",			Chi : "永恆Ω",				descript : "當此生物離場時，將其拿回手牌以取代離場動作",},
			{ Jap : "セイバー",				Eng : "Saver",					Chi : "救世主",				descript : "當指定條件的我方生物被破壞時，你可以破壞此生物來取代",},			
			{ Jap : "G・リンク",			Eng : "God Link",				Chi : "神連結",				descript : "當此生物出場時，你可以將他放置在指定的ゴッド的側邊，並將兩隻生物合併成一隻生物。連結的生物共享其能力、攻擊力、以及種族等各種屬性。當連結的生物離場時，僅選擇其中一張卡離場",},
			{ Jap : "クロスギア",			Eng : "Cross Gear",				Chi : "交叉武裝",			descript : "將此卡置於戰鬥場上。當你要將此裝備裝到生物身上時，要再支付一次費用。即使該生物離場，此卡也會繼續留在戰鬥場上",},
			{ Jap : "KM",					Eng : "Knight Magic",			Chi : "騎士魔法(主效果)",	descript : "ナイト・マジック發動時，可以重複發動的效果主能力",},
			{ Jap : "ナイト・マジック",		Eng : "Knight Magic",			Chi : "騎士魔法",			descript : "如果戰鬥場上有我方的ナイト的話，則可再一次發動此咒文上的KM能力",},
			{ Jap : "シールド・プラス",		Eng : "Shield Plus",			Chi : "護盾增強",			descript : "將自己牌庫頂第一張牌，以裏側方式置入一張我方的護盾之下。",},
			{ Jap : "W・シールド・プラス",	Eng : "Double Shield Plus",		Chi : "雙重護盾增強",		descript : "最多將自己牌庫頂前兩張牌，以裏側方式置入一張我方的護盾之下。",},
			{ Jap : "スーパー・シールド・プラス",		
											Eng : "Super Shield Plus",		Chi : "超護盾增強",			descript : "隨著我方護盾區的每1張護盾、將我方牌庫頂第1張牌以裏側方式置入其下。",},
			{ Jap : "殲滅返霊",				Eng : "Annihilating Soul Recall",	
																			Chi : "殲滅返靈",			descript : "當此生物發動攻擊時，你可以從自己的墓地、或是從對手的墓地、或是從雙方的墓地當中各別選出指定張數的卡牌，並將之依照自己喜好順序置入其持有者的牌庫底。每選擇一組指定張數，就發動下列效果一次",},
			{ Jap : "地獄返霊",				Eng : "Hell's Soul Recall",		Chi : "地獄返靈",			descript : "每當此生物發動攻擊或是發動此能力時，你可以從自己的墓地選出指定張數的卡牌，並將之依照自己喜好順序置入牌庫底。之後發動下列效果",},
			{ Jap : "返霊",					Eng : "Soul Recall",			Chi : "返靈",				descript : "當此生物發動攻擊時，你可以從自己的墓地選出指定張數的卡牌，並將之依照自己喜好順序置入牌庫底。之後發動下列效果",},
			{ Jap : "解除",					Eng : "Release",				Chi : "解除",				descript : "當此生物離場時，你可以將此生物翻至費用較小的一面以取代破壞",},
			{ Jap : "龍解",					Eng : "Dragon Solution",		Chi : "龍解",				descript : "當指定條件達成時，將此ドラグハート翻至生物那面",},
			{ Jap : "マナ武装",				Eng : "Mana Arms",				Chi : "魔力武裝",			descript : "當我方魔力區中有指定張數以上的、指定條件的卡牌時，可發動以下能力",},
			{ Jap : "スリリング・スリー",	Eng : "Thrilling Three",		Chi : "驚異三",				descript : "公開牌庫頂三張牌，當中每有一張指定條件的卡牌時，就發揮下面的能力一次",},
			{ Jap : "メタモーフ",			Eng : "Metamorph",				Chi : "型態變化",			descript : "當我方的魔力區中有7張以上的卡牌時，發動下面能力",},
			{ Jap : "激流連鎖",				Eng : "Chain Cascade",			Chi : "激流連鎖",			descript : "當此生物出場時，觀看自己牌庫頂2張牌，你可以將任意隻費用比此生物小的生物打出至戰鬥場上。剩餘卡排則依自己喜好順序放回牌庫頂",},
			{ Jap : "連鎖",					Eng : "Cascade",				Chi : "連鎖",				descript : "當此生物出場時，觀看自己牌庫頂第一張牌，如果那是費用比此生物小的生物的話，則可將之打出至戰鬥場上。",},
			{ Jap : "ドロン・ゴー",			Eng : "Doron Go",				Chi : "隱遁前行",			descript : "當此生物被破壞時，你可以從手牌中打出帶有指定名稱的放逐生物",},
			{ Jap : "中央G・リンク",		Eng : "Center God Link",		Chi : "中央神連結",			descript : "當此生物或是其他我方的ゴッド出場時，你可以自由將戰鬥場上我方連結的神解體成各別單隻，之後此生物可以跟擁有左G・リンク能力跟右G・リンク能力的生物進行連結(連結的生物共享其能力、攻擊力、以及種族等各種屬性。當連結的生物離場時，僅選擇其中一張卡離場)",},
			{ Jap : "灼熱ドロン・ゴー",		Eng : "Climax Doron Go",		Chi : "灼熱隱遁前行",		descript : "當有我方帶有指定卡名的生物被破壞時，你可以從手牌中打出此生物到戰鬥場上",},
			{ Jap : "左G・リンク",			Eng : "Left God Link",			Chi : "左神連結",			descript : "當此生物出場時，你可以將此生物置於擁有中央G・リンク能力或是右G・リンク能力的生物的左側進行連結(連結的生物共享其能力、攻擊力、以及種族等各種屬性。當連結的生物離場時，僅選擇其中一張卡離場)",},
			{ Jap : "右G・リンク",			Eng : "Right God Link",			Chi : "右神連結",			descript : "當此生物出場時，你可以將此生物置於擁有中央G・リンク能力或是左G・リンク能力的生物的右側進行連結(連結的生物共享其能力、攻擊力、以及種族等各種屬性。當連結的生物離場時，僅選擇其中一張卡離場)",},
			{ Jap : "アタック・チャンス",	Eng : "Attack Chance",			Chi : "進擊機會",			descript : "當有指定條件的我方生物發動攻擊時，你可以不支付費用、從手牌使用此卡",},
			{ Jap : "シールド・ゴー",		Eng : "Shield Go",				Chi : "前往護盾",			descript : "當此生物被破壞時，會以表側方式置入護盾區。當此卡以表側方式自護盾區離開時，會直接置入墓地以取代原先的離場動作",},
			{ Jap : "光臨",					Eng : "Koulin",					Chi : "光臨",				descript : "自己回合結束時，如果此生物為橫置狀態的話，則可以從我方牌庫中找出指定條件的生物、並將之打出至戰鬥場上",},
			{ Jap : "墓地光臨",				Eng : "Gravyard Koulin",		Chi : "墓地光臨",			descript : "自己回合結束時，如果此生物為橫置狀態的話，則可以從自己墓地裡打出指定條件的生物",},
			{ Jap : "ガードマン",			Eng : "Guard Man",				Chi : "防禦者",				descript : "當對手生物攻擊我方生物時，你可以橫置此生物，這樣的話，則改由此生物與發動攻擊的生物進入戰鬥",},
			{ Jap : "∞パワーアタッカー",	Eng : "Infinity Power Attacker",Chi : "無限攻擊手",			descript : "當此生物發動攻擊時，攻擊力+無限大",},
			{ Jap : "∞ブレイカー",			Eng : "Infinity Breaker",		Chi : "無限擊破者",			descript : "此生物可以擊破對手任意數量的護盾",},
			{ Jap : "マナ爆誕",				Eng : "Mana Reburst",			Chi : "魔力爆誕",			descript : "你可以支付指定的費用數字，讓此生物從魔力區召喚",},
			{ Jap : "ハンティング",			Eng : "Hunting",				Chi : "狩獵",				descript : "戰鬥時，此生物的攻擊力會隨著戰鬥場上每一隻我方的ハンター而+1000",},
			{ Jap : "ウルトラ・セイバー",	Eng : "Ultra Saver",			Chi : "超級救世主",			descript : "當有指定條件的我方生物離場時，你可以取而代之、破壞此生物",},
			{ Jap : "G・ブレイカー",		Eng : "Galaxy Breaker",			Chi : "銀河擊破者",			descript : "擊破對手所有護盾，之後擊破我方所有護盾",},
			{ Jap : "シールド・フォース",	Eng : "Shield Force",			Chi : "護盾之力",			descript : "當此生物出場時，選擇一張我方的護盾，只要該護盾未離場，則使此生物獲得下面能力",},
			{ Jap : "クライマックス・ドロン・ゴー",			
											Eng : "Climax Doron Go",		Chi : "極型隱遁前行",		descript : "當指定條件的我方放逐生物被破壞時，你可以從手牌中打出此生物到戰鬥場上。",},
			{ Jap : "ワールド・ブレイカー",	Eng : "World Breaker",			Chi : "世界擊破者",			descript : "此生物可以針對對手所有的護盾進行擊破",},
			{ Jap : "ウルトラシールド・プラス",		
											Eng : "Ultra Shield Plus",		Chi : "超・護盾增強",		descript : "將牌庫頂最多5張卡牌置入一張我方的護盾之下",},
			{ Jap : "ホーリー・フィールド",	Eng : "Holy Field",				Chi : "神聖領域",			descript : "當我方護盾的數量不比對手少時，發動以下能力",},
			{ Jap : "トライ・G・リンク",	Eng : "Tri-God Link",			Chi : "三體神聯結",			descript : "當此生物出場時，你可以將此生物置於指定生物的左側以及右側、或是插至連結狀態的兩者之間",},
			{ Jap : "龍回避",				Eng : "Dragon Avoidance",		Chi : "龍迴避",				descript : "當此生物離場時，取而代之、將此生物翻回到龍心要塞那一面",},
			{ Jap : "メテオバーン覚醒",		Eng : "Meteor Burn Awakened",	Chi : "隕石重擊覺醒",		descript : "當達成指定條件時，將此生物下方所有的卡牌置入墓地，之後將此生物翻至費用較大的一面",},
			{ Jap : "爆進ダブル",			Eng : "Evolution Burst Combo",	Chi : "雙重爆進",			descript : "當戰鬥場上有我方的進化生物時，此卡上述的二擇一能力、兩邊都可以發動",},
			{ Jap : "ウルトラ・ドロン・ゴー",	
											Eng : "Ultra Doron Go",			Chi : "超級隱遁前行",		descript : "當此生物離場時，你可以從手牌中打出帶有指定名稱的放逐生物",},
			{ Jap : "三人組ドロン・ゴー",	Eng : "Trio Doron Go",			Chi : "三人組隱遁前行",		descript : "當此生物離場時，你可以從手牌中打出任意隻不同名、且帶有指定名稱的放逐生物",},
			{ Jap : "マナ光臨",				Eng : "Mana Koulin",			Chi : "魔力光臨",			descript : "自己回合結束時，如果此生物為橫置狀態的話，則可以從自己魔力區中打出指定條件的生物",},
			{ Jap : "ターボラッシュ",		Eng : "Turbo Rush",				Chi : "增壓衝擊",			descript : "當有我方的其他生物擊破護盾時，此生物獲得以下能力",},
			{ Jap : "マーシャル・タッチ",	Eng : "Marshall Touch",			Chi : "馬歇爾觸擊",			descript : "當此生物出場時，你可以將戰鬥場上1隻其他的我方生物拿回到手牌中，那樣的話，發動下列能力。",},
			{ Jap : "エスケープ",			Eng : "Escape",					Chi : "迴避",				descript : "當此生物被破壞時，你可以取而代之、將一張我方護盾拿回到手牌中。但是不能發動S・トリガー",},
			{ Jap : "トリプル・シンパシー",	Eng : "Triple Sympathy",		Chi : "三重共鳴",			descript : "生物的召喚費用/咒文的使用費用會隨著每一個指定條件的存在而降低3，但是不能降到比0、或是比其文明數少",},
			{ Jap : "リベンジ・チャンス",	Eng : "Revenge Chance",			Chi : "反擊機會",			descript : "各回合結束時，如果對手達成了某些條件的話，你就可以不支付費用、從手牌召喚此生物到戰鬥場上",},
			{ Jap : "シールド・セイバー",	Eng : "Shield Saver",			Chi : "護盾保護者",			descript : "當我方護盾被擊破時，你可以破壞此生物以取代原先的擊盾動作",},
			{ Jap : "龍マナ武装",			Eng : "Dragon Mana Arms",		Chi : "龍魔力武裝",			descript : "當我方魔力區中有指定張數以上的、指定條件的龍卡牌時，可發動以下能力",},
			{ Jap : "真・エスケープ",		Eng : "True Escape",			Chi : "迴避・真",			descript : "當此生物離場時，你可以取而代之、將兩張我方護盾拿回到手牌中。但是不能發動S・トリガー",},
			{ Jap : "∞ソウルシフト",		Eng : "Infinity Soul Shift",	Chi : "無限靈魂轉移",		descript : "召喚此生物時，其費用值會隨著任意隻進化種子的費用值而減少",},
			{ Jap : "中央Gリンク360",		Eng : "Center God Link 360",	Chi : "中央神連結360",		descript : "當此生物或其他我方的ゴッド出場時，選擇1張卡名，並以此卡名取代掉之前因此能力而追加在此生物身上的卡名。之後，解除場上1隻ゴッド的連結，並可將任意隻ゴッド與此生物進行連結",},
			{ Jap : "リサイクル",			Eng : "Recycle",				Chi : "循環",				descript : "你可以支付指定費用、從墓地裡使用此咒文，並於之後將此咒文置入我方牌庫底。",},
			{ Jap : "多色マナ武装",			Eng : "Rainbow Mana Arms",		Chi : "多色魔力武裝",		descript : "當我方魔力區中有指定張數以上的、且得以湊齊所有文明的卡牌的話，可發動以下能力",},
			{ Jap : "スーパー・S・バック",	Eng : "Super Strike Back",		Chi : "超級攻擊反彈",		descript : "當自己的卡從護盾區加到手牌時，你可以將該張卡片直接從護盾區中置入墓地，並以不支付費用的方式、從手牌中召喚此生物/使用此咒文",},
			{ Jap : "プラチナ・ドライブ",	Eng : "Platinum Drive",			Chi : "白金驅動",			descript : "在指定生物離場前，該生物的攻擊力會維持增加狀態",},
			{ Jap : "フュリー・チャージ",	Eng : "Fury Charge",			Chi : "狂暴充填",			descript : "此生物出場的回合，可以對戰鬥場上橫置狀態的對手生物發動攻擊",},
			{ Jap : "フリー・クロス",		Eng : "Free Cross",				Chi : "免費裝備",			descript : "將此卡置於戰鬥場上。當你要將此裝備裝到生物身上時，可以不再次支付費用。即使該生物離場，此卡也會繼續留在戰鬥場上",},
			{ Jap : "スペース・チャージ",	Eng : "Space Charge",			Chi : "空間充填",			descript : "每當有指定卡牌置入我方魔力區時，你可以發動指定能力",},
			{ Jap : "スーパー龍解",			Eng : "Super Dragon Solution",	Chi : "超龍解",				descript : "當指定條件達成時，將所有指定的ドラグハート翻面並連結成1隻生物",},
			{ Jap : "クルー・ブレイカー",	Eng : "Crew Breaker",			Chi : "群體擊破者",			descript : "此生物會隨著指定生物的數量而增加擊盾數量",},
			{ Jap : "闇ステルス",			Eng : "Darkness Stealth",		Chi : "闇隱匿",				descript : "當對手魔力區中有闇文明的卡牌時，則此生物不會被阻擋",},
			{ Jap : "火ステルス",			Eng : "Fire Stealth",			Chi : "火隱匿",				descript : "當對手魔力區中有火文明的卡牌時，則此生物不會被阻擋",},
			{ Jap : "水ステルス",			Eng : "Water Stealth",			Chi : "水隱匿",				descript : "當對手魔力區中有水文明的卡牌時，則此生物不會被阻擋",},
			{ Jap : "自然ステルス",			Eng : "Nature Stealth",			Chi : "自然隱匿",			descript : "當對手魔力區中有自然文明的卡牌時，則此生物不會被阻擋",},
			{ Jap : "光ステルス",			Eng : "Light Stealth",			Chi : "光隱匿",				descript : "當對手魔力區中有光文明的卡牌時，則此生物不會被阻擋",},
			{ Jap : "ノー・チョイス",		Eng : "No Choice",				Chi : "無從抉擇",			descript : "當有玩家沒有任何手牌時，發動以下能力",},
			{ Jap : "侵略",					Eng : "Invade",					Chi : "侵略",				descript : "當有指定條件的我方生物發動攻擊時，你可以將此生物置於該生物之上出場",},
			{ Jap : "革命",					Eng : "Revolution",				Chi : "革命",				descript : "當我方的護盾張數在指定張數以下時所發動的能力",},
			{ Jap : "転生連鎖",				Eng : "Rebirth Chain",			Chi : "轉生連鎖",			descript : "當此生物出場或被破壞時，觀看自己牌庫頂第一張牌，如果那是費用比此生物小的生物的話，則可將之打出至戰鬥場上。",},			
			{ Jap : "フリーズ",				Eng : "Freeze",					Chi : "凍結",				descript : "你可以選擇戰鬥場上1隻對手生物並將之橫置。該生物不能在下個對手的回合初重置",},
			{ Jap : "ダブル・フリーズ",		Eng : "Double Freeze",			Chi : "二重凍結",			descript : "你最多可以選擇戰鬥場上2隻對手生物並將之橫置。被選擇的生物不能在下個對手的回合初重置",},
			{ Jap : "仁義",					Eng : "Solemn Duty",			Chi : "仁義",				descript : "每當有我方生物從戰鬥場上或是魔力區中離開時，發動下列能力",},
			{ Jap : "革命0トリガー",		Eng : "Revolution Zero Trigger",Chi : "革命零觸發",			descript : "當有生物攻擊我方玩家、且我方沒有護盾時，你可以不支付費用使用此咒文或是打出此生物",},
			{ Jap : "進化",					Eng : "Evolution",				Chi : "進化",				descript : "將此生物疊在戰鬥場上1隻指定條件的我方生物之上",},
			{ Jap : "スター進化",			Eng : "Star Evolution",			Chi : "星進化",				descript : "將此生物疊在戰鬥場上1隻指定條件的我方生物之上。當此生物離場時，取而代之、只有最上面的卡會離開戰鬥場",},
			{ Jap : "進化V",				Eng : "Vortex",					Chi : "漩渦進化",			descript : "將此生物疊在戰鬥場上2隻指定條件的我方生物之上",},
			{ Jap : "進化GV",				Eng : "Galaxy Vortex",			Chi : "銀河漩渦進化",		descript : "將此生物疊在戰鬥場上3隻指定條件的我方生物之上",},
			{ Jap : "進化GV・Ω",			Eng : "Graveyard Evolution Ω",	Chi : "銀河漩渦進化Ω",		descript : "從我方戰鬥場上、魔力區、墓地裡各選擇1隻生物，並將此生物疊在那三隻生物之上出場",},
			{ Jap : "究極進化",				Eng : "Ultimate Evolution",		Chi : "究極進化",			descript : "將此生物疊在戰鬥場上1隻指定條件的我方進化生物之上",},
			{ Jap : "究極進化MAX",			Eng : "Ultimate Evolution MAX",	Chi : "究極進化MAX",		descript : "將此生物疊在戰鬥場上1隻指定條件的我方究極進化生物之上",},
			{ Jap : "マナ進化",				Eng : "Mana Evolution",			Chi : "魔力進化",			descript : "將此生物疊在我方魔力區中1張指定條件的生物之上出場",},
			{ Jap : "マナ進化V",			Eng : "Mana Vortex",			Chi : "魔力漩渦進化",		descript : "將此生物疊在我方魔力區中2張指定條件的生物之上出場",},
			{ Jap : "マナ進化GV",			Eng : "Mana Galaxy Vortex",		Chi : "魔力銀河漩渦進化",	descript : "將此生物疊在我方魔力區中3張指定條件的生物之上出場",},
			{ Jap : "デッキ進化",			Eng : "Deck Evolution",			Chi : "牌庫進化",			descript : "公開我方牌庫頂，如果該卡牌是生物的話，就把此生物疊在該生物之上出場。不是生物的話，就將此生物拿回到手牌中",},
			{ Jap : "Mデッキ進化",			Eng : "Mad Deck Evolution",		Chi : "瘋狂牌庫進化",		descript : "公開我方牌庫頂3張牌，並選擇1隻生物。接著將此生物疊在該生物之上出場，並將其餘卡牌置入墓地。沒有任何生物的話，就將公開的卡牌全數置入墓地，並將此生物拿回到手牌中",},
			{ Jap : "手札進化",				Eng : "Hand Evolution",			Chi : "手牌進化",			descript : "將此生物疊在我方手牌中1張指定條件的生物之上出場",},
			{ Jap : "墓地進化",				Eng : "Graveyard Evolution",	Chi : "墓地進化",			descript : "將此生物疊在我方墓地中1張指定條件的生物之上出場",},
			{ Jap : "墓地進化V",			Eng : "Graveyard Vortex",		Chi : "墓地漩渦進化",		descript : "將此生物疊在我方墓地中2張指定條件的生物之上出場",},
			{ Jap : "墓地進化GV",			Eng : "Graveyard Galaxy Vortex",Chi : "墓地銀河漩渦進化",	descript : "將此生物疊在我方墓地中3張指定條件的生物之上出場",},
			{ Jap : "超無限進化",			Eng : "Super Infinite Evolution",			Chi : "超無限進化",		descript : "將此生物疊在戰鬥場上1隻以上指定條件的我方生物之上出場",},
			{ Jap : "超無限墓地進化",		Eng : "Super Infinite Graveyard Evolution",	Chi : "超無限墓地進化",	descript : "將此生物疊在墓地中1隻以上指定條件的我方生物之上出場",},
			{ Jap : "超無限進化Ω",			Eng : "Super Infinite Evolution Ω",			Chi : "超無限進化Ω",	descript : "將此生物疊在我方戰鬥場上、魔力區中、以及墓地中任意隻指定條件的我方生物之上出場",},
			{ Jap : "サバイバー",			Eng : "Survivor",				Chi : "倖存者",				descript : "戰鬥場上所有我方種族為サバイバー的生物，一律獲得以下能力",},
			{ Jap : "超サバイバー",			Eng : "Super Survivor",			Chi : "超倖存者",			descript : "所有區域中、所有我方種族為サバイバー的生物，一律獲得以下能力",},
			{ Jap : "自然・光スレイヤー",	Eng : "Nature.Light Slayer",	Chi : "自然、光殺手",		descript : "當此生物與自然文明生物或是光文明生物戰鬥時，於戰鬥之後破壞破壞該生物",},
			{ Jap : "火・自然ブロッカー",	Eng : "Fire.Nature Blocker",	Chi : "火、自然阻擋者",		descript : "當對手的火文明生物或是自然文明生物發動攻擊時，你可以橫置此生物來跟該對手生物戰鬥，以保護原本的被攻擊目標",},
			{ Jap : "侍流ジェネレート",		Eng : "Samurai Generate",		Chi : "武士流創生著裝",		descript : "當此生物出場時，你可以不支付費用，從我手牌中打出1張クロスギア至戰鬥場上",},
			{ Jap : "禁断解放",				Eng : "Forbidden Release",		Chi : "禁斷解放",			descript : "當此鼓動上方所有的封印都移除掉時，就將其翻至生物那面",},
			{ Jap : "S級侵略[宇宙]",		Eng : "S Rank Invade[Cosmo]",	Chi : "S級侵略[宇宙]",		descript : "當指定條件的我方生物發動攻擊時，你可以將戰鬥場上或是手牌中的此卡進化至該生物之上",},
			{ Jap : "S級侵略[不死]",		Eng : "S Rank Invade[Undead]",	Chi : "S級侵略[不死]",		descript : "當指定條件的我方生物發動攻擊時，你可以將我方墓地或是手牌中的此卡進化至該生物之上",},
			{ Jap : "S級侵略[原始]",		Eng : "S Rank Invade[Original]",		Chi : "S級侵略[原始]",	descript : "當指定條件的我方生物發動攻擊時，你可以將我方魔力區或是手牌中的此卡進化至該生物之上",},
			{ Jap : "S級侵略[轟速]",		Eng : "S Rank Invade[Speed]",			Chi : "S級侵略[轟速]",	descript : "當指定條件的我方生物發動攻擊時，你可以將我方戰鬥場上、墓地區裡、或是手牌中的此生物進化至該生物之上",},
			{ Jap : "オレ進化",				Eng : "Self Evolution",			Chi : "玩家進化",			descript : "將玩家的指定部位放置在遊戲台上、並將此生物疊在該部位之上出場，當玩家的指定部位離開桌台、或是當此卡碰觸到遊戲台時，將此卡牌拿回到手牌中",},
			{ Jap : "パック進化",			Eng : "Pack Evolution",			Chi : "卡包進化",			descript : "將一包指定條件的卡包放到戰鬥場上、並將此生物進化在該卡包之上",},
			{ Jap : "エイジ・ブレイカー",	Eng : "Age Breaker",			Chi : "年齡擊破者",			descript : "持有玩家的年齡十位數為多少、此生物就擊破幾張護盾",},
			{ Jap : "ロスト・プリズム",		Eng : "Lost Prism",				Chi : "消失的稜鏡",			descript : "當此生物出場時，你可以公開我方牌庫頂第1張牌。如果該卡牌是多色文明的卡牌的話，則將該卡牌加入手牌",},
			{ Jap : "ダイナモ",				Eng : "Dynamo",					Chi : "發電機",				descript : "當戰鬥開始時、或是此生物可以發動攻擊時，你可以橫置此生物。那樣的話，就將此生物的攻擊力及所有能力附加在戰鬥場上1隻我方其他的(R)ダイナモ(/R)之上",},
			{ Jap : "天才シンパシー",		Eng : "Genius Sympathy",		Chi : "天才共鳴",			descript : "生物的召喚費用/咒文的使用費用會隨著每一個指定條件的存在而降低10，但是不能降到比0、或是比其文明數少",},
			{ Jap : "革命チェンジ",			Eng : "Revolution Change",		Chi : "革命接棒",			descript : "當指定條件的我方生物發動攻擊時，你可以將手牌中的此生物與發動攻擊的生物進行交換",},
			{ Jap : "ウェーブストライカー",	Eng : "Wave Striker",			Chi : "波濤強襲",			descript : "當戰鬥場上有3隻以上擁有此能力的生物時，就發動他們的下列效果",},
			{ Jap : "アクセル",				Eng : "Accel",					Chi : "加速強化",			descript : "當此生物身上裝有クロスギア時，發動以下能力",},
			{ Jap : "ブレイク・ボーナス",	Eng : "Break Bonus",			Chi : "擊破獎賞",			descript : "當此生物所發動的攻擊結束時，如果此生物還在戰鬥場上的話，則隨著該次攻擊中、此生物所擊破的每1張護盾而可發動下列能力一次",},
			{ Jap : "ナイト流ジェネレート",	Eng : "Knight Generate",		Chi : "騎士流創生著裝",		descript : "當此生物出場時，你可以不支付費用，使用1張手牌中持有ナイト・マジック效果的我方咒文",},
			{ Jap : "サイクロン",			Eng : "Cyclone",				Chi : "旋風咒",				descript : "如果你在我方生物出場後接著使用這張咒文的話，則此咒文用完之後不會置入墓地、取而代之、將此咒文回到手牌中",},
			{ Jap : "Dスイッチ",			Eng : "Dangerous Switch",		Chi : "危險開關",			descript : "你可以於指定時間、將此卡上下翻轉180度、以發動以下能力",},
			{ Jap : "ファイナル革命",		Eng : "Final Revolution",		Chi : "最終革命",			descript : "當此生物以「革命チェンジ」方式出場、且此回合尚未發動過任何的「ファイナル革命」能力的話，則發動以下能力。",},
			{ Jap : "でんぢゃらスイッチ",	Eng : "Dangerous Switch(lol)",	Chi : "危險開關(笑)",		descript : "搞笑能力",},
			{ Jap : "侵略ZERO",				Eng : "Invade Zero",			Chi : "侵略零式",			descript : "對手回合結束時，如果對手在該回合有以不支付魔力的方式讓生物出場的話，你就可以不支付費用、從手牌打出此卡",},
			{ Jap : "禁断機動",				Eng : "Forbidden Action",		Chi : "禁斷機動",			descript : "當此生物身上的封印全數移除的時候，發動以下能力",},
			{ Jap : "ドギラゴン・ガチャ",	Eng : "Dogiragon Gacha",		Chi : "多基龍轉蛋",			descript : "亂數決定能力的小道具：\n1.[加速]將我方牌庫頂第一張牌置入我方魔力區中。\n2.[補充]抽1張牌。\n3.[打擊]此回合中，戰鬥場上1隻我方生物追加擊破1張護盾。\n4.[破壞]破壞戰鬥場上1隻費用7以下的對手生物。\n5.[格鬥]選擇雙方生物各1隻，並讓他們進入戰鬥。\n6.[出擊]從我方魔力區中打出1隻非進化生物至戰鬥場上。",},
			{ Jap : "ドキンダム・ガチャ",	Eng : "Dokindam Gacha",			Chi : "大禁斷轉蛋",			descript : "亂數決定能力的小道具：\n1.[墓地]將我方牌庫頂3張牌置入我方墓地中。\n2.[補充]抽1張牌。\n3.[回收]將我方墓地中1隻生物拿回到手牌中。\n4.[忘卻]對手自行作廢他1張手牌。\n5.[衰弱]選擇戰鬥場上1隻對手生物，此回合中，該生物攻擊力-9000。\n6.[復活]從我方墓地區中打出1隻非進化生物至戰鬥場上。",},
			{ Jap : "極限ファイナル革命",	Eng : "Final Final Evolution",	Chi : "極限最終革命",		descript : "當此生物出場、且此回合尚未發動過任何的「ファイナル革命」能力的話，則發動以下能力。",},
			{ Jap : "禁断爆発",				Eng : "Forbidden Big Bangs",	Chi : "禁斷爆發",			descript : "當你將卡牌翻至此面變成生物時，發動以下能力",},
			{ Jap : "幸せスイッチ",			Eng : "Happiness Switch",		Chi : "幸福開關",			descript : "你可以於指定時間、將此卡上下翻轉180度、以發動以下能力",},
			{ Jap : "ラビリンス",			Eng : "Labyrinth",				Chi : "迷宮",				descript : "當我方護盾比對手護盾多時，發動以下能力",},
			{ Jap : "マスター・ブレイカー",	Eng : "Master Breaker",			Chi : "王者擊破者",			descript : "當此生物於出場的回合擊破護盾時，則於擊破前破壞戰鬥場上1隻對手生物。",},
			{ Jap : "マスター・W・ブレイカー",		
											Eng : "Master Double Breaker",	Chi : "王者雙重擊破者",		descript : "此生物擊破兩張護盾。當此生物於出場的回合擊破護盾時，則於各擊破前破壞戰鬥場上1隻對手生物。",},
			{ Jap : "NEO進化",				Eng : "Neo Evolution",			Chi : "新進化",				descript : "你可以將此生物置放在戰鬥場上1隻指定條件的生物之上。若此生物下方有生物卡牌的話，則將此生物視為NEO進化生物",},
			{ Jap : "スーパー・S・トリガー",Eng : "Super Shield Trigger",	Chi : "超級護盾觸發",		descript : "當此卡從護盾區中回到手牌時，你可以不支付費用直接召喚此生物或是使用此咒文。倘若此時我方沒有護盾的話，則追加指定效果。",},
			{ Jap : "B・A・D",				Eng : "Bad Action Dynamite",	Chi : "惡行炸彈",			descript : "召喚此生物時，你可以少支付指定數量的費用，那樣的話，於我方回合結束時破壞此生物",},
			{ Jap : "キリフダッシュ",		Eng : "Kirifudash",				Chi : "王牌衝刺",			descript : "當有我方生物擊破護盾時，你可以支付指定費用使用此卡。",},
			{ Jap : "マッハファイター",		Eng : "Macha Fighter",			Chi : "音速鬥士",			descript : "此生物可以於出場的回合攻擊戰鬥場上橫置或是重置狀態的對手生物。",},
			{ Jap : "鬼タイム",				Eng : "Oni Time",				Chi : "鬼之時",				descript : "當雙方護盾區中的護盾總數在六張以下時所發動的能力。",},
			{ Jap : "フシギバース",			Eng : "Incredible Birth",		Chi : "奇異誕生",			descript : "將戰鬥場上一隻我方生物以橫置方式置入我方魔力區中，然後支付此能力所標示的文明與減去該生物的費用值數字、將此生物從墓地中召喚至戰鬥場上。",},
			{ Jap : "ギャラクシールド",		Eng : "Galaxy Shield",			Chi : "銀河盾",				descript : "你可以取代原費用、改由支付指定文明與費用，這樣的話，就將此卡以表側方式置入我方護盾區中。",},
			{ Jap : "バズレンダ",			Eng : "Buzzrender",				Chi : "瘋傳連打",			descript : "當你使用此卡牌時，使用一次下述能力。你可以追加任意次指定費用，每追加一次，就多使用一次下述能力。",},
			{ Jap : "マジボンバー",			Eng : "Serious Bomber",			Chi : "認真炸客",			descript : "當此生物攻擊時，觀看我方牌庫頂第一張牌。之後你可以從我方手牌或是牌庫頂打出一隻指定費用以下的生物出場。",},
			{ Jap : "パワード・ブレイカー",	Eng : "Powered Breaker",		Chi : "馬力擊破者",			descript : "此生物攻擊力每有6000，就多擊破一張護盾。",},
			{ Jap : "ワンダブル",			Eng : "Wondouble",				Chi : "完美雙擊",			descript : "你可以同時支付上下兩側的費用以使用兩邊的效果。",},
			{ Jap : "Jチェンジ",			Eng : "Jockers Change",			Chi : "鬼牌交替",			descript : "當此生物發動攻擊時，你可以將此生物與魔力區中指定費用的ジョーカーズ進行交換、並繼承其攻擊。",},
			{ Jap : "W・マジボンバー",		Eng : "Double Serious Bomber",	Chi : "雙重認真炸客",		descript : "當此生物攻擊時，觀看我方牌庫頂前兩張牌。之後你可以從我方手牌或是牌庫頂打出兩隻指定費用以下的生物出場。",},
			{ Jap : "ラスト・バースト",		Eng : "Last Burst",				Chi : "最後一擊",			descript : "當此生物被破壞時，你可以使用此生物的咒文面。",},
			{ Jap : "J・O・E",				Eng : "Jockers over Exlode",	Chi : "喬卡極限爆炸",		descript : "召喚此生物時，你可以減少指定費用，那樣的話，則於此回合結束時將此生物置入我方牌庫底，然後抽1張牌。",},
			{ Jap : "ジョラゴン・ビッグ1",	Eng : "Juragon Big One",		Chi : "喬龍最大尾",			descript : "每當有ジョーカーズ從我方手牌中被作廢時，你可以使用該卡牌效果其中1條以「當此生物出場時」作為起始敘述的效果",},
			{ Jap : "パラレル解除",			Eng : "Parallel Release",		Chi : "平行解除",			descript : "當此生物離場時，你可以將此生物翻至費用較小的其中一面以取代破壞",},
			{ Jap : "ムゲンクライム",		Eng : "Limitless Climb",		Chi : "無限攀爬",			descript : "你可以橫置指定數字隻數的我方生物，並支付指定數字與文明的費用，然後從手牌或是墓地召喚此生物",},
			{ Jap : "鬼エンド",				Eng : "Oni End",				Chi : "鬼之終結",			descript : "當有任何玩家沒有任何護盾時所發動的能力",},
			{ Jap : "アバレチェーン",		Eng : "Violence Chain",			Chi : "狂暴之鏈",			descript : "當我方生物發動於該回合中第一次攻擊時所發動的能力",},
			{ Jap : "オシオキムーン",		Eng : "Punishment Moon",		Chi : "懲戒之月",			descript : "當有卡牌從我方護盾區中離開時所發動的能力",},
			{ Jap : "ビビッドロー",			Eng : "Vivid Draw",				Chi : "神聖抽",				descript : "在該回合攻擊之前，如果抽到此張卡牌的話，你可以展示給對手看，那樣的話，則此回合中你可以使用指定的費用與文明來使用此卡",},
			{ Jap : "アビスラッシュ",		Eng : "Abyss Rush",				Chi : "深淵衝刺",			descript : "你可以從墓地召喚此生物，那樣的話，本回合中，此生物可以攻擊玩家，此回合結束時，將此生物置入我方牌庫底",},
			{ Jap : "シビルカウント",		Eng : "Civil Count",			Chi : "文明計數",			descript : "當戰鬥場上我方指定文明的生物或魂種合計在幾張以上時所發動的能力",},
			{ Jap : "シンカライズ",			Eng : "Evolution Rise",			Chi : "進化飛升",			descript : "你可以像進化在生物身上一般地、將進化生物放置在此魂種之上。",},
			{ Jap : "EXライフ",				Eng : "Extra Life",				Chi : "增命",				descript : "此生物出場時，將牌頂第一張牌置入護盾區中，當此生物離場時，取而代之，破壞該護盾",},
			{ Jap : "ササゲール",			Eng : "Sacrifice",				Chi : "獻祭",				descript : "當你召喚ディスペクター時，你可以破壞此生物，那樣的話，則該生物的召喚費用減少指定數字",},
			{ Jap : "ジャストダイバー",		Eng : "Just Diver",				Chi : "即潛",				descript : "到下個我方回合開始前，此生物不會被對手選擇、也不會被對手生物攻擊",},
			{ Jap : "エクストラEXライフ",	Eng : "Extra Extra Life",		Chi : "雙重增命",			descript : "此生物出場時，將牌頂第兩張牌置入護盾區中，當此生物離場時，取而代之，破壞其中1張護盾",},
			{ Jap : "スマッシュ・バースト",	Eng : "Smash Burst",			Chi : "粉碎爆裂",			descript : "此生物發動攻擊時，可以使用此生物的咒文側",},
			{ Jap : "フォートＥ",			Eng : "Fort Energy",			Chi : "堡壘能源",			descript : "支付費用使用卡牌時，如果橫置到了魔力區指定條件的卡牌的話，則發動此能力",},
			{ Jap : "S・バック",			Eng : "Strike Back",			Chi : "攻擊反彈",			descript : "當自己指定條件的卡從護盾區加到手牌時，你可以將該張卡片直接從護盾區中置入墓地，並以不支付費用的方式、從手牌中召喚此生物/使用此咒文",},
			{ Jap : "G・ストライク",		Eng : "Guard Strike",			Chi : "守護強襲",			descript : "當此卡從護盾中拿回到手牌時，你可以展示給對手看，那樣的話，就選擇戰鬥場上1隻對手生物，此回合中、該生物不能發動攻擊",},
			{ Jap : "G・G・G",				Eng : "Gogogo Gangan Galaxy",	Chi : "拉轉衝鋒銀河",		descript : "當我方手牌在1張以下時所發動的能力",},
			{ Jap : "シンカパワー",			Eng : "Evolution Power",		Chi : "進化之力",			descript : "當此生物進化時，此回合中、獲得以下能力",},
			{ Jap : "シールド化",			Eng : "Shielding",				Chi : "護盾化",				descript : "將指定卡牌作為一個新盾置入其持有者的護盾區中",},
			{ Jap : "S-MAX進化",			Eng : "S-MAX Evolution",		Chi : "S-MAX進化",			descript : "當我方敗北時，你可以取而代之、破壞此生物或是手牌中的同名卡。(此生物不需要進化種，當戰鬥場上有2隻以上的S-MAX進化生物時，選擇其中1隻、並將其餘的拿回到手牌中)",},
			{ Jap : "鬼S-MAX進化",			Eng : "Oni S-MAX Evolution",	Chi : "鬼S-MAX進化",		descript : "當我方敗北、或是此生物離場時，你可以取而代之、破壞三張我方表側的卡。(此生物不需要進化種，當戰鬥場上有2隻以上的S-MAX進化生物時，選擇其中1隻、並將其餘的拿回到手牌中)",},
			{ Jap : "SSS級侵略[天災]",		Eng : "SSS Invade Disaster",	Chi : "SSS級侵略[天災]",	descript : "當指定生物發動攻擊時，你可以將戰鬥場上、魔力區、手牌、或是墓地中的此卡疊放在該生物之上進化",},
			{ Jap : "キリフダReVo",			Eng : "Kirifuda Revolution",	Chi : "王牌革命",			descript : "當此生物以キリフダッシュ能力出場時，發動以下能力",},
			{ Jap : "無月の門・絶",			Eng : "Moonless Gate Ultimate",	Chi : "無月之門・絶",		descript : "回合結束時，你可以選擇墓地6張魔導具，並將此卡以不支付消費的方式置放在那些卡上召喚出場",},
			{ Jap : "レインボーナス",		Eng : "Rainbonus",				Chi : "虹色獎勵",			descript : "當戰鬥場上有我方的多色生物時，發動以下能力",},
			{ Jap : "ドラゴン・W・ブレイカー",		
											Eng : "Dragon Double Breaker",	Chi : "龍雙重擊破者",		descript : "此生物擊破2張護盾。在各擊破前，可以將牌庫頂第一張牌以裏側方式置入護盾、或是以表側方式置於1張我方護盾之上。",},
			{ Jap : "P侵略",				Eng : "Psychic Invade",			Chi : "超次元侵略",			descript : "當指定條件的生物發動攻擊時，你可以將此生物從超次元區出場、並進化在該生物之上",},
			{ Jap : "P革命チェンジ",		Eng : "Psychic Revolution Change",		
																			Chi : "超次元革命交棒",		descript : "當指定條件的生物發動攻擊時，你可以將該生物與超次元區的此生物做交換並繼承其攻擊。",},
			{ Jap : "龍マナ武装",			Eng : "Dragon Mana Arms",		Chi : "龍魔力武裝",			descript : "當我方魔力區有指定隻數的ドラゴン時，發動以下能力",},
			{ Jap : "輪廻∞",				Eng : "Rinne Infinity",			Chi : "輪迴無限",			descript : "你可以直接在戰鬥場上使用此卡的咒文側(需要支付費用)。那樣的話，則戰鬥場上每有1隻我方的《天地命動 バラギアラ》，就將牌庫頂第一張牌置入我方魔力區中。",},
			{ Jap : "パンドラ・シフト",		Eng : "Pandora Shift",			Chi : "潘朵拉轉移",			descript : "你可以取代原始消費、使用替代消費以將此卡置入超次元區中",},
			{ Jap : "飛行",					Eng : "Flying",					Chi : "飛行",				descript : "此生物不會被沒有持有飛行能力的生物攻擊或阻擋",},
			{ Jap : "パワード・ブロッカー",	Eng : "Powered Blocker",		Chi : "威力阻擋者",			descript : "當此生物進行阻擋時，增加攻擊力",},
			{ Jap : "シールドセイバー",		Eng : "Shield Saver",			Chi : "護盾保護者",			descript : "當我方的一張護盾被擊破時，你可以取而代之、破壞此生物",},
			{ Jap : "マスターB・A・D",		Eng : "Master Bad Action Dynamite",		
																			Chi : "王者惡行炸彈",		descript : "召喚此生物時，你可以少支付2點費用，且這回合每已召喚1隻火文明生物、此生物的召喚費用就可以再少2點。那樣的話，則於我方回合結束時破壞1隻我方生物",},
			{ Jap : "ダブル・シンパシー",	Eng : "Double Sympathy",		Chi : "雙倍共鳴",			descript : "戰鬥場上每有1隻指定生物，此生物的召喚費用就少2。但是不能降到0以下",},
			{ Jap : "マスターG・G・G",		Eng : "Master Gogogo Gangan Galaxy",	
																			Chi : "王者拉轉衝鋒銀河",	descript : "當我方手牌只有此卡時，則你可以不支付消費使用此卡牌",},
			{ Jap : "破天九語",				Eng : "Hatenkokonotsugatari",	Chi : "破天九語",			descript : "當此生物戰鬥獲勝時，擊破9張對手護盾",},
			{ Jap : "罠金乱舞",				Eng : "Trip Trip Panic",		Chi : "陷阱亂舞",			descript : "當有生物發動攻擊時，如果那是該回合第一次的攻擊的話，則你可以不支付消費、使用一張手牌中名有《トラップ》的咒文",},
			{ Jap : "5.S.D.",				Eng : "Five Sence Down",		Chi : "五感劇落",			descript : "此生物所擊破的護盾不會回到手牌、取而代之、將之以橫向方式置入對手牌庫頂第四張牌的位置",},
			{ Jap : "ミノまじかる",			Eng : "Mi's Miracle",			Chi : "米諾奇蹟",			descript : "我方回合初時，你可以將此生物橫置置入我方魔力區中，然後從我方魔力區中打出1隻非進化生物。但是該生物的召喚費用不能比我方魔力區中的卡牌張數多",},
			{ Jap : "夢幻無月の門",			Eng : "Fantasy Moonless Gate",	Chi : "夢幻無月之門",		descript : "當我方打出魔導具或是使用了魔導具咒文時，你可以不支付費用、從戰鬥場上或是墓地選擇4張魔導具、並從手牌或是墓地將此生物置於他們上面召喚出場。",},
			{ Jap : "罪・無月の影罪",		Eng : "Sin, Shadow Sin of Moonless",		
																			Chi : "罪・無月之影罪",		descript : "我方墓地每有一隻マフィ・ギャング，此生物的召喚費用就可以少1。那樣的話，則於此回合結束時破壞1隻我方生物。此生物的召喚費用不能降到0以下",},
			{ Jap : "デッキ進化GV",			Eng : "Deck Evolution Galaxy Vortex",	
																			Chi : "牌組進化銀河漩渦",	descript : "此生物疊放在牌庫頂前三張之上出場(牌庫的卡牌以裏側放置)",},
			{ Jap : "H・ブレイカー",		Eng : "Hex Breaker",			Chi : "六重擊破",			descript : "此生物擊破6張護盾",},
			{ Jap : "アタック・チャンスR",	Eng : "Attack Chance Return",	Chi : "進擊機會R",			descript : "當指定的生物發動攻擊時，你可以從我方手牌或是墓地中使用此咒文。那樣的話，則該咒文用完後不會置入墓地、取而代之、置入我方牌庫底",},
			{ Jap : "無月の門",				Eng : "Moonless Gate",			Chi : "無月之門",			descript : "當我方打出魔導具生物時，你可以不支付費用、從戰鬥場上與墓地各自選擇2張魔導具、並從手牌或是墓地將此生物置於他們上面召喚出場。",},
			{ Jap : "禁断スター進化",		Eng : "Forbidden Star Evolution",
																			Chi : "禁斷星進化",			descript : "此卡不需進化元，出場後才將進化種塞入下方。此生物離場時，取而代之、只有最上面的卡會離開戰鬥場",},
			{ Jap : "サバキZ",				Eng : "Judgment Z",				Chi : "制裁Z",				descript : "當裁きの紋章從護盾區拿回到手牌時，你可以作廢該卡、並不支付費用召喚手牌中的此卡",},
			{ Jap : "無月の門99",			Eng : "Moonless Gate 99",		Chi : "無月之門99",			descript : "一場遊戲一次，你可以不支付費用使用目的或是手牌中的指定咒文",},
			{ Jap : "左G・リンクOMG",		Eng : "Left God Link Ω",		Chi : "左神連結Ω",			descript : "此生物可以連結在指定生物的左側",},
			{ Jap : "右G・リンクOMG",		Eng : "Right God Link Ω",		Chi : "右神連結Ω",			descript : "此生物可以連結在指定生物的右側",},
			{ Jap : "マナドライブ",			Eng : "Mana Drive",				Chi : "魔力驅動",			descript : "當我方魔力區中有指定張數的卡牌、且至少有1張以上的指定卡牌時，發動以下能力",},
			{ Jap : "OMGデッキ進化",		Eng : "Ω Deck Evolution",		Chi : "Ω牌組進化",			descript : "此生物進化在裏側的牌庫頂卡牌之上",},
			{ Jap : "B・A・D・S",			Eng : "Bad Action Dynamite Spell",	
																			Chi : "惡行炸彈咒",			descript : "使用此咒文時，你可以少支付指定數量的費用，那樣的話，則作廢1張手牌",},
			{ Jap : "Jトルネード",			Eng : "Jockers Tornado",		Chi : "小丑旋風",			descript : "將戰鬥場上1隻我方其他的ジョーカーズ拿回到手牌中",},
			{ Jap : "キズナ",				Eng : "Fetters",				Chi : "羈絆",				descript : "當此生物出場時，你可以使用戰鬥場上1隻我方生物的[P]能力。",},
			{ Jap : "[P]",					Eng : "Fetters[P]",				Chi : "羈絆(主效果)",		descript : "名有\"羈絆\"能力的主要效果",},
			{ Jap : "メクレイド",			Eng : "Revolve Great",			Chi : "豪捲奇襲",			descript : "觀看牌庫頂三張牌，使用一張指定種族與指定費用以下的卡牌",},
			{ Jap : "アッパー・ゴー",		Eng : "Upper Go",				Chi : "提升猛進",			descript : "當生物被破壞時、此生物下方沒有裏側卡牌的話，則將我方牌庫頂第一張牌以裏側方式置入此生物之下",},
			{ Jap : "キッカー",				Eng : "Kicker",					Chi : "蹴者",				descript : "使用此咒文時，你可以追加支付指定費用以追加後續效果",},
			{ Jap : "G.R.D.",				Eng : "Gacha Range Down",		Chi : "GR重沉",				descript : "當此生物發動攻擊時，對手要將其GR牌庫頂第四張牌橫置",},
			{ Jap : "サイキック・チャンス",	Eng : "Psychic Chance",			Chi : "精神機會",			descript : "當我方指定生物發動攻擊時，你可以將此卡置入超次元區以使用以下能力",},
			{ Jap : "零龍卍誕",				Eng : "Zero Dragn Birth",		Chi : "零龍卍誕",			descript : "當第四張零龍星雲與此卡連接時，將5張卡牌全數翻面並連結成1隻生物。",},
			{ Jap : "マスターG・O・D・S",	Eng : "God Over Dynamite Spell",Chi : "超神炸彈咒",			descript : "你可以捨棄1張手牌以使用此咒文，那樣的話，則此咒文的使用費用會隨著本回合每一張已捨棄的手牌而少2，但是不能降到0以下",},
			{ Jap : "GR召喚",				Eng : "Gacha Renge Summon",		Chi : "GR召喚",				descript : "將GR牌庫頂第一張牌召喚至戰鬥場上，此動作視為已支付費用",},
			{ Jap : "超無限スター進化",		Eng : "Limitless Star Evolution",		
																			Chi : "超無限星進化",		descript : "此生物可以進化在任意隻指定條件的生物之上。當此生物離場時，取而代之、只有最上面的卡會離開戰鬥場",},
			{ Jap : "究極スター進化",		Eng : "Ultimate Star Evolution",Chi : "究極星進化",			descript : "此生物進化在指定條件的進化生物之上。當此生物離場時，取而代之、只有最上面的卡會離開戰鬥場",},
			{ Jap : "虚無月の門",			Eng : "Imaginary Moonless Gate",Chi : "虛無月之門",			descript : "當我方使用魔導具咒文時，你可以選擇我方墓地4張魔導具，並將此生物從手牌或是墓地中、不支付費用、疊在那4張卡牌上召喚出場",},
			{ Jap : "無月の大罪",			Eng : "Moonless Sin",			Chi : "無月大罪",			descript : "你可以減少指定費用使用此卡。那樣的話，就於此回合結束時，破壞1隻我方生物",},
			{ Jap : "ブレイカー",			Eng : "Breaker",				Chi : "擊破者",				descript : "泛指可以同時擊破多張護盾的能力",},
			{ Jap : "マスターJGR",			Eng : "Master Jockers Gacha Range",		
																			Chi : "王者小丑GR",			descript : "當此生物將會擊破護盾前，執行GR召喚與其他效果",},
			{ Jap : "超天フィーバー",		Eng : "Super Fever",			Chi : "超天狂熱",			descript : "當指定卡牌在指定區域裡達到指定數量時所發動的能力",},
			{ Jap : "超超超天フィーバー",	Eng : "SuSuSuper Fever",		Chi : "超超超天狂熱",		descript : "當指定卡牌在指定區域裡達到指定的大數量時所發動的能力",},
			{ Jap : "マスター・ラビリンス",	Eng : "Master Labyrinth",		Chi : "王者迷宮",			descript : "當我方護盾比對手多或我方生物比對手多時所發動的能力",},
			{ Jap : "マスターJトルネード",	Eng : "Master Jockers Tornado",	Chi : "王者小丑旋風",		descript : "將複數張我方ジョーカーズ拿回手牌以發動的能力",},
			{ Jap : "DL-Sys",				Eng : "D Loop-System",			Chi : "D迴圈系統",			descript : "附著此卡的生物發動攻擊時會觸發效果、並於攻擊後附著在其他GR生物之上",},
			{ Jap : "罪・無月の大罪",		Eng : "Sin Moonless Sin",		Chi : "罪・無月的大罪",		descript : "使用此卡時，你可以隨著我方墓地裡每一張オレガ・オーラ而減少1點費用。那樣的話，就於回合結束時破壞1隻我方生物",},
			{ Jap : "マスター・W・メラビート",		
											Eng : "Master Double Merabeat",	Chi : "王者雙衝撞",			descript : "召喚出場時從手牌打出指定條件生物的效果",},
			{ Jap : "マスター・マッハファイター",		
											Eng : "Master Macha Fighter",	Chi : "王者音速鬥士",		descript : "此生物可以於出場的回合攻擊重置或是橫置狀態的對手生物，並於戰鬥獲勝後重置此生物、並擊破1張對手護盾",},
			{ Jap : "無敵虹帝",				Eng : "Invincible Rainbow Emperor",		
																			Chi : "無敵虹帝",			descript : "當對手獲勝或是我方敗北時，你可以取而代之、將我方魔力區中8張卡牌洗牌並放進牌庫底",},
			{ Jap : "ドラゴン・T・ブレイカー",		
											Eng : "Dragon Triple Breaker",	Chi : "龍三重擊破者",		descript : "此生物擊破3張護盾。在各擊破前，可以將牌庫頂第一張牌以裏側方式置入護盾、或是以表側方式置於1張我方護盾之上。",},
			{ Jap : "P’S覚醒リンク",		Eng : "Play's Psychic Link",	Chi : "Play's 覺醒聯結",	descript : "若於自己回合初、或是指定生物出場時，若滿足指定條件的話，則將戰鬥場上所指定的超次元生物一起翻面，並結合成一隻生物",},
			{ Jap : "メガメテオバーン10",	Eng : "Mega Meteor Burn 10",	Chi : "隕石重擊10",			descript : "作廢此生物下方10張卡牌以發動指定能力",},
			{ Jap : "S・トリガー・プラス",	Eng : "Shield Trigger Plus",	Chi : "護盾觸發追擊",		descript : "當此卡從護盾區中回到手牌時，你可以不支付費用使用此卡。若現在是對手的回合、且我方護盾已被擊破2張以上時，追加以下能力",},

			/*
			{ Jap : "",		Eng : "",		Chi : "",	descript : "",},
			/*
			{ Jap : "＿ブロックされない",	Eng : "＿Unblocked",			Chi : "＿不會被阻擋",		descript : "此生物不會被(指定條件)的生物阻擋",},
			{ Jap : "＿クリーチャーを選ぶことはできない",		
											Eng : "＿Untouched",			Chi : "＿不會被選擇",		descript : "對手的指定效果，不能選擇我方的指定生物",},
			{ Jap : "＿可能であれば攻撃する",Eng : "＿Must Attack",			Chi : "＿必攻",				descript : "指定生物只要允許的話就一定要發動攻擊",},
			{ Jap : "＿攻撃されない",		Eng : "＿Unattacked",			Chi : "＿不受攻擊",			descript : "指定生物不會被指定的生物攻擊",},
			{ Jap : "＿(妨害手段)クリーチャーは攻撃できない",		
											Eng : "＿Can't Attack",			Chi : "＿使生物無法攻擊",	descript : "使指定生物無法發動攻擊",},
			{ Jap : "＿(妨害手段)クリーチャーはブロックできない",		
											Eng : "＿Can't Block",			Chi : "＿使生物無法阻擋",	descript : "使指定生物無法進行阻擋",},
			{ Jap : "＿ダイヤモンド状態",	Eng : "＿Limit Break",			Chi : "＿鑽石狀態",			descript : "無視所有使指定生物無法發動攻擊的效果(召喚遲緩是否解除需見內文)",},
			{ Jap : "＿リアニメイト",		Eng : "＿Reanimation",			Chi : "＿從墓地打出生物",	descript : "將指定生物自墓地打出至戰鬥場上",},
			{ Jap : "＿リクルート",			Eng : "＿Recruit",				Chi : "＿從牌庫打出生物",	descript : "將指定生物自我方牌庫中打出至戰鬥場上",},
			{ Jap : "＿シールド追加",		Eng : "＿Shield Adding",		Chi : "＿護盾追加",			descript : "將指定卡牌置入指定玩家的護盾區中",},
			{ Jap : "＿超次元",				Eng : "＿Call From Extra",		Chi : "＿從超次元打出生物",	descript : "從超次元區打出指定條件的生物至戰鬥場上",},
			{ Jap : "＿ハンデス",			Eng : "＿Hand Discard",			Chi : "＿手牌作廢",			descript : "作廢對手手牌",},
			*/
		],
		
		//依日文效果名取得效果物件
		getDataByJap : function( value ){
			for ( var i = 0 ; i < this.map.length ; i++ ){
				if ( this.map[i].Jap == value ){
					return this.map[i];
				}
			}
			return null;
		},
		
		//將日文能力名轉成英文能力名
		transJapToEng : function( value ){
			var theData = this.getDataByJap( value );
			return theData == null ? null : theData.Eng;
		},
		
		//將日文能力名轉成中文能力名
		transJapToChi : function( value ){
			var theData = this.getDataByJap( value );
			return theData == null ? null : theData.Chi;
		},
	}
