/* =========================================
   LINGUA LUMI
   SCRIPT
========================================= */

const languages = {
  en: {
    name: "English",
    flag: "🌍",
    speech: "en-US"
  },

  hi: {
    name: "हिन्दी",
    flag: "🇮🇳",
    speech: "hi-IN"
  },

  ja: {
    name: "日本語",
    flag: "🇯🇵",
    speech: "ja-JP"
  },

  ko: {
    name: "한국어",
    flag: "🇰🇷",
    speech: "ko-KR"
  },

  es: {
    name: "Español",
    flag: "🇪🇸",
    speech: "es-ES"
  },

  fr: {
    name: "Français",
    flag: "🇫🇷",
    speech: "fr-FR"
  },

  de: {
    name: "Deutsch",
    flag: "🇩🇪",
    speech: "de-DE"
  },

  it: {
    name: "Italiano",
    flag: "🇮🇹",
    speech: "it-IT"
  },

  ar: {
    name: "العربية",
    flag: "🇸🇦",
    speech: "ar-SA"
  }
};


/* =========================================
   STORIES
========================================= */

const stories = [

  {
    id: 1,
    title: "The Little Umbrella",
    icon: "☂️",
    art: "art-1",

    description: {
      en: "A small umbrella waits for someone to notice it.",
      hi: "एक छोटी छतरी किसी के उसे देखने का इंतज़ार करती है।",
      ja: "小さな傘は、誰かが気づいてくれるのを待っています。",
      ko: "작은 우산은 누군가 자신을 발견해 주기를 기다립니다.",
      es: "Un pequeño paraguas espera que alguien lo encuentre.",
      fr: "Un petit parapluie attend que quelqu'un le remarque.",
      de: "Ein kleiner Regenschirm wartet darauf, entdeckt zu werden.",
      it: "Un piccolo ombrello aspetta che qualcuno lo noti.",
      ar: "مظلة صغيرة تنتظر أن يلاحظها أحد."
    },

    texts: {
      en: `Mina found a little umbrella beside the old garden gate.

It was small, blue, and covered with tiny white flowers.

She picked it up and carried it home.

The next morning, rain tapped softly against the window.

Mina opened the umbrella and smiled.

Sometimes, little things can make an ordinary day feel special.`,

      hi: `मीना को पुराने बगीचे के दरवाज़े के पास एक छोटी छतरी मिली।

वह छोटी, नीली और छोटे-छोटे सफेद फूलों से सजी हुई थी।

उसने उसे उठाया और घर ले आई।

अगली सुबह खिड़की पर बारिश की बूंदें धीरे-धीरे पड़ रही थीं।

मीना ने छतरी खोली और मुस्कुराई।

कभी-कभी छोटी-छोटी चीज़ें एक साधारण दिन को खास बना देती हैं।`,

      ja: `ミナは古い庭の門のそばで、小さな傘を見つけました。

それは小さくて青く、白い小さな花でいっぱいでした。

ミナはそれを拾って家に持って帰りました。

次の朝、雨が窓を静かにたたいていました。

ミナは傘を開いて、微笑みました。

時々、小さなものが普通の日を特別な日にしてくれます。`,

      ko: `미나는 오래된 정원 문 옆에서 작은 우산을 발견했습니다.

그 우산은 작고 파란색이었으며 작은 흰 꽃무늬가 있었습니다.

미나는 우산을 주워 집으로 가져갔습니다.

다음 날 아침, 빗방울이 창문을 조용히 두드렸습니다.

미나는 우산을 펴고 미소 지었습니다.

때로는 작은 것들이 평범한 하루를 특별하게 만들어 줍니다.`,

      es: `Mina encontró un pequeño paraguas junto a la vieja puerta del jardín.

Era pequeño, azul y estaba cubierto de pequeñas flores blancas.

Lo recogió y lo llevó a casa.

A la mañana siguiente, la lluvia golpeaba suavemente la ventana.

Mina abrió el paraguas y sonrió.

A veces, las pequeñas cosas pueden hacer especial un día común.`,

      fr: `Mina trouva un petit parapluie près de la vieille porte du jardin.

Il était petit, bleu et couvert de minuscules fleurs blanches.

Elle le ramassa et le rapporta chez elle.

Le lendemain matin, la pluie frappait doucement la fenêtre.

Mina ouvrit le parapluie et sourit.

Parfois, les petites choses peuvent rendre une journée ordinaire spéciale.`,

      de: `Mina fand einen kleinen Regenschirm neben dem alten Gartentor.

Er war klein, blau und mit winzigen weißen Blumen bedeckt.

Sie hob ihn auf und nahm ihn mit nach Hause.

Am nächsten Morgen klopfte der Regen leise an das Fenster.

Mina öffnete den Regenschirm und lächelte.

Manchmal können kleine Dinge einen gewöhnlichen Tag besonders machen.`,

      it: `Mina trovò un piccolo ombrello vicino al vecchio cancello del giardino.

Era piccolo, blu e coperto di minuscoli fiori bianchi.

Lo raccolse e lo portò a casa.

La mattina seguente, la pioggia picchiettava dolcemente sulla finestra.

Mina aprì l'ombrello e sorrise.

A volte, le piccole cose possono rendere speciale una giornata normale.`,

      ar: `وجدت مينا مظلة صغيرة بجانب بوابة الحديقة القديمة.

كانت صغيرة وزرقاء ومغطاة بزهور بيضاء صغيرة.

رفعتها وأخذتها إلى المنزل.

في صباح اليوم التالي، كانت قطرات المطر تطرق النافذة برفق.

فتحت مينا المظلة وابتسمت.

أحيانًا، يمكن للأشياء الصغيرة أن تجعل يومًا عاديًا مميزًا.`
    },

    vocab: {
      en: [
        ["umbrella", "something used to protect you from rain"],
        ["garden", "a place where plants and flowers grow"],
        ["ordinary", "normal or usual"],
        ["special", "different in a good way"]
      ],

      hi: [
        ["छतरी", "बारिश से बचने के लिए इस्तेमाल की जाने वाली चीज़"],
        ["बगीचा", "जहाँ पौधे और फूल उगते हैं"],
        ["साधारण", "सामान्य या रोज़ जैसा"],
        ["खास", "अच्छे तरीके से अलग"]
      ],

      ja: [
        ["傘", "雨から身を守るために使うもの"],
        ["庭", "植物や花が育つ場所"],
        ["普通", "特別ではなく、いつものこと"],
        ["特別", "普通とは違って大切なこと"]
      ],

      ko: [
        ["우산", "비를 막기 위해 사용하는 물건"],
        ["정원", "식물과 꽃이 자라는 곳"],
        ["평범한", "보통이거나 특별하지 않은"],
        ["특별한", "보통과 다르고 소중한"]
      ],

      es: [
        ["paraguas", "objeto usado para protegerse de la lluvia"],
        ["jardín", "lugar donde crecen plantas y flores"],
        ["común", "normal o habitual"],
        ["especial", "diferente de una manera positiva"]
      ],

      fr: [
        ["parapluie", "objet utilisé pour se protéger de la pluie"],
        ["jardin", "endroit où poussent les plantes et les fleurs"],
        ["ordinaire", "normal ou habituel"],
        ["spécial", "différent d'une manière positive"]
      ],

      de: [
        ["Regenschirm", "etwas, das vor Regen schützt"],
        ["Garten", "ein Ort, an dem Pflanzen und Blumen wachsen"],
        ["gewöhnlich", "normal oder üblich"],
        ["besonders", "auf eine gute Art anders"]
      ],

      it: [
        ["ombrello", "oggetto usato per proteggersi dalla pioggia"],
        ["giardino", "luogo dove crescono piante e fiori"],
        ["normale", "comune o abituale"],
        ["speciale", "diverso in modo positivo"]
      ],

      ar: [
        ["مظلة", "شيء يُستخدم للحماية من المطر"],
        ["حديقة", "مكان تنمو فيه النباتات والزهور"],
        ["عادي", "طبيعي أو معتاد"],
        ["مميز", "مختلف بطريقة جميلة"]
      ]
    }
  },


  {
    id: 2,
    title: "A Cup of Morning",
    icon: "☕",
    art: "art-2",

    description: {
      en: "A quiet morning begins with a warm cup of tea.",
      hi: "एक शांत सुबह गर्म चाय के प्याले से शुरू होती है।",
      ja: "静かな朝は温かいお茶から始まります。",
      ko: "조용한 아침은 따뜻한 차 한 잔으로 시작됩니다.",
      es: "Una mañana tranquila comienza con una taza de té caliente.",
      fr: "Un matin calme commence avec une tasse de thé chaud.",
      de: "Ein ruhiger Morgen beginnt mit einer warmen Tasse Tee.",
      it: "Una mattina tranquilla inizia con una tazza di tè caldo.",
      ar: "يبدأ الصباح الهادئ بكوب من الشاي الدافئ."
    },

    texts: {
      en: `Every morning, Aya sat beside the window with a warm cup of tea.

She watched the sunlight slowly enter the room.

The city outside was already awake, but her little corner was quiet.

She took a slow sip.

For a few minutes, she did nothing.

And somehow, that was exactly what she needed.`,

      hi: `हर सुबह आया खिड़की के पास गर्म चाय के प्याले के साथ बैठती थी।

वह देखती थी कि सूरज की रोशनी धीरे-धीरे कमरे में आ रही है।

बाहर शहर जाग चुका था, लेकिन उसका छोटा सा कोना शांत था।

उसने धीरे से एक घूंट लिया।

कुछ मिनटों तक उसने कुछ नहीं किया।

और किसी तरह, उसे ठीक इसी चीज़ की ज़रूरत थी।`,

      ja: `毎朝、アヤは温かいお茶を持って窓のそばに座りました。

彼女は日の光がゆっくり部屋に入ってくるのを見ていました。

外の街はもう目を覚ましていましたが、彼女の小さな場所は静かでした。

彼女はゆっくり一口飲みました。

数分間、何もしませんでした。

そして、それがまさに彼女に必要なことでした。`,

      ko: `매일 아침 아야는 따뜻한 차 한 잔을 들고 창가에 앉았습니다.

그녀는 햇빛이 천천히 방 안으로 들어오는 모습을 바라보았습니다.

밖의 도시는 이미 깨어났지만, 그녀의 작은 공간은 조용했습니다.

그녀는 천천히 한 모금 마셨습니다.

몇 분 동안 아무것도 하지 않았습니다.

그리고 그것이 바로 그녀에게 필요한 것이었습니다.`,

      es: `Cada mañana, Aya se sentaba junto a la ventana con una taza de té caliente.

Miraba cómo la luz del sol entraba lentamente en la habitación.

La ciudad ya estaba despierta, pero su pequeño rincón estaba tranquilo.

Tomó un sorbo lentamente.

Durante unos minutos, no hizo nada.

Y, de alguna manera, eso era exactamente lo que necesitaba.`,

      fr: `Chaque matin, Aya s'asseyait près de la fenêtre avec une tasse de thé chaud.

Elle regardait la lumière du soleil entrer doucement dans la pièce.

La ville était déjà réveillée, mais son petit coin était calme.

Elle prit une petite gorgée.

Pendant quelques minutes, elle ne fit rien.

Et, d'une certaine façon, c'était exactement ce dont elle avait besoin.`,

      de: `Jeden Morgen saß Aya mit einer warmen Tasse Tee am Fenster.

Sie beobachtete, wie das Sonnenlicht langsam in den Raum fiel.

Die Stadt draußen war bereits wach, aber ihre kleine Ecke war ruhig.

Sie nahm einen langsamen Schluck.

Ein paar Minuten lang tat sie nichts.

Und irgendwie war genau das, was sie brauchte.`,

      it: `Ogni mattina, Aya sedeva vicino alla finestra con una tazza di tè caldo.

Guardava la luce del sole entrare lentamente nella stanza.

La città fuori era già sveglia, ma il suo piccolo angolo era tranquillo.

Beveva lentamente un sorso.

Per alcuni minuti non faceva nulla.

E in qualche modo, era proprio ciò di cui aveva bisogno.`,

      ar: `كل صباح، كانت آيا تجلس بجانب النافذة ومعها كوب من الشاي الدافئ.

كانت تراقب ضوء الشمس وهو يدخل الغرفة ببطء.

كانت المدينة في الخارج قد استيقظت بالفعل، لكن ركنها الصغير كان هادئًا.

أخذت رشفة ببطء.

لبضع دقائق، لم تفعل شيئًا.

وبطريقة ما، كان هذا بالضبط ما تحتاج إليه.`
    },

    vocab: {
      en: [
        ["morning", "the early part of the day"],
        ["window", "an opening in a wall with glass"],
        ["sunlight", "light that comes from the sun"],
        ["quiet", "making very little sound"]
      ],

      hi: [
        ["सुबह", "दिन का शुरुआती समय"],
        ["खिड़की", "काँच वाला दीवार का खुला भाग"],
        ["सूरज की रोशनी", "सूरज से आने वाली रोशनी"],
        ["शांत", "बहुत कम आवाज़ वाला"]
      ],

      ja: [
        ["朝", "一日の始まりの時間"],
        ["窓", "ガラスが入った壁の開口部"],
        ["日の光", "太陽から来る光"],
        ["静か", "音がほとんどない"]
      ],

      ko: [
        ["아침", "하루의 시작 시간"],
        ["창문", "벽에 있는 유리로 된 열린 부분"],
        ["햇빛", "태양에서 오는 빛"],
        ["조용한", "소리가 거의 없는"]
      ],

      es: [
        ["mañana", "la primera parte del día"],
        ["ventana", "abertura en una pared con vidrio"],
        ["luz solar", "luz que viene del sol"],
        ["tranquilo", "con muy poco ruido"]
      ],

      fr: [
        ["matin", "première partie de la journée"],
        ["fenêtre", "ouverture dans un mur avec du verre"],
        ["lumière du soleil", "lumière qui vient du soleil"],
        ["calme", "avec très peu de bruit"]
      ],

      de: [
        ["Morgen", "der frühe Teil des Tages"],
        ["Fenster", "eine Öffnung in einer Wand mit Glas"],
        ["Sonnenlicht", "Licht von der Sonne"],
        ["ruhig", "mit sehr wenig Geräusch"]
      ],

      it: [
        ["mattina", "la prima parte della giornata"],
        ["finestra", "apertura in un muro con vetro"],
        ["luce del sole", "luce che proviene dal sole"],
        ["tranquillo", "con pochissimo rumore"]
      ],

      ar: [
        ["صباح", "الجزء الأول من اليوم"],
        ["نافذة", "فتحة في الجدار تحتوي على زجاج"],
        ["ضوء الشمس", "الضوء القادم من الشمس"],
        ["هادئ", "قليل الضوضاء"]
      ]
    }
  },


  {
    id: 3,
    title: "The Paper Star",
    icon: "⭐",
    art: "art-3",

    description: {
      en: "A tiny paper star carries a quiet wish.",
      hi: "एक छोटा कागज़ी सितारा एक शांत इच्छा अपने साथ रखता है।",
      ja: "小さな紙の星には、静かな願いが込められています。",
      ko: "작은 종이별에는 조용한 소원이 담겨 있습니다.",
      es: "Una pequeña estrella de papel guarda un deseo.",
      fr: "Une petite étoile en papier garde un souhait.",
      de: "Ein kleiner Papierstern bewahrt einen Wunsch.",
      it: "Una piccola stella di carta custodisce un desiderio.",
      ar: "نجمة ورقية صغيرة تحمل أمنية هادئة."
    },

    texts: {
      en: `Leo folded a piece of paper into a tiny star.

He wrote one wish on the inside.

Then he placed the star on his desk.

He did not know if wishes really worked.

But every time he saw it, he remembered to keep trying.

Sometimes, a little reminder is enough.`,

      hi: `लियो ने कागज़ के एक टुकड़े को मोड़कर एक छोटा सितारा बनाया।

उसने उसके अंदर एक इच्छा लिखी।

फिर उसने उस सितारे को अपनी मेज़ पर रख दिया।

उसे नहीं पता था कि इच्छाएँ सच में काम करती हैं या नहीं।

लेकिन जब भी वह उसे देखता, उसे कोशिश करते रहने की याद आती।

कभी-कभी एक छोटी सी याद दिलाना ही काफी होता है।`,

      ja: `レオは一枚の紙を折って、小さな星を作りました。

彼はその中に一つの願いを書きました。

そして、その星を机の上に置きました。

願いが本当に叶うのか、彼には分かりませんでした。

でも、それを見るたびに、努力を続けることを思い出しました。

時々、小さなきっかけだけで十分なのです。`,

      ko: `레오는 종이 한 장을 접어 작은 별을 만들었습니다.

그는 별 안에 하나의 소원을 적었습니다.

그리고 그 별을 책상 위에 올려놓았습니다.

소원이 정말 이루어지는지는 알 수 없었습니다.

하지만 별을 볼 때마다 계속 노력해야 한다는 것을 기억했습니다.

때로는 작은 알림 하나면 충분합니다.`,

      es: `Leo dobló una hoja de papel hasta convertirla en una pequeña estrella.

Escribió un deseo en su interior.

Después colocó la estrella sobre su escritorio.

No sabía si los deseos realmente funcionaban.

Pero cada vez que la veía, recordaba que debía seguir intentándolo.

A veces, un pequeño recordatorio es suficiente.`,

      fr: `Léo plia une feuille de papier pour en faire une petite étoile.

Il écrivit un souhait à l'intérieur.

Puis il posa l'étoile sur son bureau.

Il ne savait pas si les souhaits fonctionnaient vraiment.

Mais chaque fois qu'il la regardait, il se souvenait de continuer à essayer.

Parfois, un petit rappel suffit.`,

      de: `Leo faltete ein Stück Papier zu einem kleinen Stern.

Er schrieb einen Wunsch hinein.

Dann legte er den Stern auf seinen Schreibtisch.

Er wusste nicht, ob Wünsche wirklich funktionieren.

Aber jedes Mal, wenn er ihn sah, erinnerte er sich daran, weiterzumachen.

Manchmal reicht eine kleine Erinnerung.`,

      it: `Leo piegò un pezzo di carta fino a formare una piccola stella.

Scrisse un desiderio al suo interno.

Poi mise la stella sulla sua scrivania.

Non sapeva se i desideri funzionassero davvero.

Ma ogni volta che la guardava, ricordava di continuare a provare.

A volte basta un piccolo promemoria.`,

      ar: `طوى ليو قطعة من الورق وحولها إلى نجمة صغيرة.

كتب أمنية في داخلها.

ثم وضع النجمة على مكتبه.

لم يكن يعرف إن كانت الأمنيات تتحقق حقًا.

لكن كلما نظر إليها، تذكر أن يستمر في المحاولة.

أحيانًا يكون التذكير الصغير كافيًا.`
    },

    vocab: {
      en: [
        ["fold", "to bend paper over itself"],
        ["wish", "something you hope will happen"],
        ["desk", "a table used for studying or working"],
        ["reminder", "something that helps you remember"]
      ],

      hi: [
        ["मोड़ना", "कागज़ को अपने ऊपर मोड़ना"],
        ["इच्छा", "वह चीज़ जिसकी आप उम्मीद करते हैं"],
        ["मेज़", "पढ़ने या काम करने की मेज़"],
        ["याद दिलाना", "याद रखने में मदद करने वाली चीज़"]
      ],

      ja: [
        ["折る", "紙などを曲げること"],
        ["願い", "叶ってほしいと思うこと"],
        ["机", "勉強や仕事に使うテーブル"],
        ["思い出させるもの", "何かを覚えておくためのもの"]
      ],

      ko: [
        ["접다", "종이를 구부려 겹치게 하다"],
        ["소원", "이루어지기를 바라는 것"],
        ["책상", "공부나 일을 하는 데 사용하는 테이블"],
        ["알림", "무언가를 기억하도록 도와주는 것"]
      ],

      es: [
        ["doblar", "bajar o plegar algo sobre sí mismo"],
        ["deseo", "algo que esperas que ocurra"],
        ["escritorio", "mesa utilizada para estudiar o trabajar"],
        ["recordatorio", "algo que ayuda a recordar"]
      ],

      fr: [
        ["plier", "courber quelque chose sur lui-même"],
        ["souhait", "quelque chose que l'on espère voir arriver"],
        ["bureau", "table utilisée pour travailler ou étudier"],
        ["rappel", "quelque chose qui aide à se souvenir"]
      ],

      de: [
        ["falten", "Papier biegen und zusammenlegen"],
        ["Wunsch", "etwas, das man sich erhofft"],
        ["Schreibtisch", "Tisch zum Lernen oder Arbeiten"],
        ["Erinnerung", "etwas, das beim Erinnern hilft"]
      ],

      it: [
        ["piegare", "curvare qualcosa su se stesso"],
        ["desiderio", "qualcosa che speri accada"],
        ["scrivania", "tavolo usato per studiare o lavorare"],
        ["promemoria", "qualcosa che aiuta a ricordare"]
      ],

      ar: [
        ["يطوي", "ثني الورق فوق نفسه"],
        ["أمنية", "شيء تتمنى حدوثه"],
        ["مكتب", "طاولة تستخدم للدراسة أو العمل"],
        ["تذكير", "شيء يساعدك على التذكر"]
      ]
    }
  },


  {
    id: 4,
    title: "The Quiet Garden",
    icon: "🌿",
    art: "art-4",

    description: {
      en: "A hidden garden teaches the value of slowing down.",
      hi: "एक छिपा हुआ बगीचा धीरे चलने का महत्व सिखाता है।",
      ja: "隠れた庭が、ゆっくり過ごすことの大切さを教えてくれます。",
      ko: "숨겨진 정원은 천천히 살아가는 것의 소중함을 알려줍니다.",
      es: "Un jardín escondido enseña el valor de ir despacio.",
      fr: "Un jardin caché enseigne la valeur de ralentir.",
      de: "Ein versteckter Garten zeigt den Wert der Ruhe.",
      it: "Un giardino nascosto insegna il valore del rallentare.",
      ar: "حديقة مخفية تعلم قيمة التمهل."
    },

    texts: {
      en: `Behind the library was a garden that almost nobody visited.

Nora discovered it one afternoon.

There were green leaves, tiny flowers, and a wooden bench.

She sat down without checking the time.

The wind moved through the trees.

For once, Nora did not hurry.

She simply stayed and listened.`,

      hi: `पुस्तकालय के पीछे एक ऐसा बगीचा था जहाँ लगभग कोई नहीं जाता था।

नोरा ने उसे एक दोपहर खोजा।

वहाँ हरी पत्तियाँ, छोटे फूल और एक लकड़ी की बेंच थी।

वह बिना समय देखे बैठ गई।

हवा पेड़ों के बीच से गुजर रही थी।

एक बार के लिए नोरा ने जल्दी नहीं की।

वह बस वहीं बैठी और सुनती रही।`,

      ja: `図書館の裏には、ほとんど誰も訪れない庭がありました。

ノラはある午後、その庭を見つけました。

緑の葉、小さな花、そして木のベンチがありました。

彼女は時間を確認せずに座りました。

風が木々の間を通り抜けていました。

その時、ノラは急ぎませんでした。

ただそこにいて、耳を澄ませました。`,

      ko: `도서관 뒤에는 거의 아무도 찾지 않는 정원이 있었습니다.

노라는 어느 오후 그곳을 발견했습니다.

초록 잎과 작은 꽃들, 그리고 나무 벤치가 있었습니다.

그녀는 시간을 확인하지 않고 앉았습니다.

바람이 나무 사이로 지나갔습니다.

그 순간 노라는 서두르지 않았습니다.

그저 그곳에 머물며 귀를 기울였습니다.`,

      es: `Detrás de la biblioteca había un jardín que casi nadie visitaba.

Nora lo descubrió una tarde.

Había hojas verdes, pequeñas flores y un banco de madera.

Se sentó sin mirar la hora.

El viento pasaba entre los árboles.

Por una vez, Nora no tenía prisa.

Simplemente se quedó y escuchó.`,

      fr: `Derrière la bibliothèque se trouvait un jardin que presque personne ne visitait.

Nora le découvrit un après-midi.

Il y avait des feuilles vertes, de petites fleurs et un banc en bois.

Elle s'assit sans regarder l'heure.

Le vent passait entre les arbres.

Pour une fois, Nora ne se dépêcha pas.

Elle resta simplement là et écouta.`,

      de: `Hinter der Bibliothek gab es einen Garten, den fast niemand besuchte.

Nora entdeckte ihn eines Nachmittags.

Dort gab es grüne Blätter, kleine Blumen und eine Holzbank.

Sie setzte sich hin, ohne auf die Uhr zu schauen.

Der Wind bewegte sich durch die Bäume.

Zum ersten Mal hatte Nora keine Eile.

Sie blieb einfach dort und hörte zu.`,

      it: `Dietro la biblioteca c'era un giardino che quasi nessuno visitava.

Nora lo scoprì un pomeriggio.

C'erano foglie verdi, piccoli fiori e una panchina di legno.

Si sedette senza guardare l'ora.

Il vento passava tra gli alberi.

Per una volta, Nora non aveva fretta.

Rimase semplicemente lì ad ascoltare.`,

      ar: `خلف المكتبة كانت هناك حديقة لا يزورها أحد تقريبًا.

اكتشفت نورا الحديقة ذات بعد ظهر.

كانت هناك أوراق خضراء وزهور صغيرة ومقعد خشبي.

جلست دون أن تنظر إلى الوقت.

كانت الرياح تمر بين الأشجار.

للمرة الأولى، لم تستعجل نورا.

بقيت هناك واستمعت فقط.`
    },

    vocab: {
      en: [
        ["garden", "a place where plants grow"],
        ["discover", "to find something for the first time"],
        ["bench", "a long seat"],
        ["hurry", "to move or act quickly"]
      ],

      hi: [
        ["बगीचा", "जहाँ पौधे उगते हैं"],
        ["खोजना", "किसी चीज़ को पहली बार पाना"],
        ["बेंच", "लंबी सीट"],
        ["जल्दी करना", "तेज़ी से काम कर
