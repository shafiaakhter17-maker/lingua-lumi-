const languages = {
  en: "English",
  hi: "हिन्दी",
  ja: "日本語",
  ko: "한국어",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  it: "Italiano",
  ar: "العربية"
};

const stories = [
  {
    title: "The Little Umbrella",
    description: "A quiet rainy-day story about noticing small beautiful things.",
    icon: "☂️",
    cover: "cover-rose",
    texts: {
      en: "Mia found a little yellow umbrella beside the library door. She wondered who had left it there. Instead of taking it home, she placed it somewhere everyone could see. The next morning, a little boy came running back for it with a grateful smile.",
      hi: "मिया को पुस्तकालय के दरवाज़े के पास एक छोटी पीली छतरी मिली। उसने सोचा कि इसे वहाँ कौन छोड़ गया होगा। वह उसे घर ले जाने के बजाय ऐसी जगह रख देती है जहाँ सब उसे देख सकें। अगली सुबह एक छोटा लड़का उसे लेने वापस आया और मुस्कुराकर धन्यवाद दिया।",
      ja: "ミアは図書館のドアのそばで、小さな黄色い傘を見つけました。誰がそこに置いていったのだろうと思いました。ミアはそれを家に持ち帰らず、みんなに見える場所に置きました。次の日の朝、小さな男の子が戻ってきて、笑顔で傘を受け取りました。",
      ko: "미아는 도서관 문 옆에서 작은 노란 우산을 발견했습니다. 누가 그것을 두고 갔는지 궁금했습니다. 미아는 우산을 집으로 가져가지 않고 모두가 볼 수 있는 곳에 두었습니다. 다음 날 아침, 한 어린 소년이 돌아와 고마운 미소를 지으며 우산을 가져갔습니다.",
      es: "Mia encontró un pequeño paraguas amarillo junto a la puerta de la biblioteca. Se preguntó quién lo había dejado allí. En lugar de llevárselo a casa, lo puso en un lugar donde todos pudieran verlo. A la mañana siguiente, un niño volvió por él con una sonrisa agradecida.",
      fr: "Mia trouva un petit parapluie jaune près de la porte de la bibliothèque. Elle se demanda qui l'avait laissé là. Au lieu de le ramener chez elle, elle le plaça dans un endroit où tout le monde pouvait le voir. Le lendemain matin, un petit garçon revint le chercher avec un sourire reconnaissant.",
      de: "Mia fand einen kleinen gelben Regenschirm neben der Bibliothekstür. Sie fragte sich, wer ihn dort gelassen hatte. Statt ihn mit nach Hause zu nehmen, stellte sie ihn an einen Ort, an dem ihn jeder sehen konnte. Am nächsten Morgen kam ein kleiner Junge zurück und nahm ihn mit einem dankbaren Lächeln.",
      it: "Mia trovò un piccolo ombrello giallo accanto alla porta della biblioteca. Si chiese chi lo avesse lasciato lì. Invece di portarlo a casa, lo mise in un posto dove tutti potessero vederlo. La mattina seguente, un bambino tornò a prenderlo con un sorriso riconoscente.",
      ar: "وجدت ميا مظلة صفراء صغيرة بجانب باب المكتبة. تساءلت عمن تركها هناك. وبدلاً من أخذها إلى المنزل، وضعتها في مكان يستطيع الجميع رؤيتها فيه. وفي صباح اليوم التالي، عاد طفل صغير ليأخذها بابتسامة امتنان."
    },
    vocab: [
      ["umbrella", "a cover that protects you from rain"],
      ["library", "a place where books are kept"],
      ["grateful", "thankful"]
    ]
  },

  {
    title: "The Old Letter",
    description: "A forgotten letter brings a small piece of the past back to life.",
    icon: "✉️",
    cover: "cover-lavender",
    texts: {
      en: "Inside an old wooden box, Nora discovered a letter covered in dust. It was written many years ago by someone she had never met. The words were simple, but they reminded her that ordinary moments can become precious memories.",
      hi: "एक पुरानी लकड़ी की पेटी में नोरा को धूल से ढका एक पत्र मिला। इसे कई साल पहले किसी ऐसे व्यक्ति ने लिखा था जिससे वह कभी नहीं मिली थी। शब्द सरल थे, लेकिन उन्होंने उसे याद दिलाया कि साधारण पल भी अनमोल यादें बन सकते हैं।",
      ja: "古い木箱の中で、ノラはほこりをかぶった手紙を見つけました。それは何年も前に、会ったことのない誰かによって書かれたものでした。言葉は簡単でしたが、普通の瞬間も大切な思い出になるのだと教えてくれました。",
      ko: "오래된 나무 상자 안에서 노라는 먼지가 쌓인 편지를 발견했습니다. 그 편지는 한 번도 만나 본 적 없는 사람이 여러 해 전에 쓴 것이었습니다. 글은 단순했지만 평범한 순간도 소중한 추억이 될 수 있다는 것을 알려 주었습니다.",
      es: "Dentro de una vieja caja de madera, Nora descubrió una carta cubierta de polvo. Había sido escrita muchos años atrás por alguien a quien nunca había conocido. Las palabras eran sencillas, pero le recordaron que los momentos normales pueden convertirse en recuerdos preciosos.",
      fr: "Dans une vieille boîte en bois, Nora découvrit une lettre couverte de poussière. Elle avait été écrite plusieurs années auparavant par quelqu'un qu'elle n'avait jamais rencontré. Les mots étaient simples, mais ils lui rappelèrent que les moments ordinaires peuvent devenir de précieux souvenirs.",
      de: "In einer alten Holzkiste entdeckte Nora einen staubbedeckten Brief. Er war vor vielen Jahren von jemandem geschrieben worden, den sie nie getroffen hatte. Die Worte waren einfach, aber sie erinnerten sie daran, dass gewöhnliche Augenblicke zu wertvollen Erinnerungen werden können.",
      it: "Dentro una vecchia scatola di legno, Nora trovò una lettera coperta di polvere. Era stata scritta molti anni prima da qualcuno che non aveva mai incontrato. Le parole erano semplici, ma le ricordarono che i momenti ordinari possono diventare ricordi preziosi.",
      ar: "داخل صندوق خشبي قديم، اكتشفت نورا رسالة مغطاة بالغبار. كتبها شخص منذ سنوات عديدة، ولم تكن قد قابلته من قبل. كانت الكلمات بسيطة، لكنها ذكّرتها بأن اللحظات العادية يمكن أن تصبح ذكريات ثمينة."
    },
    vocab: [
      ["letter", "a written message"],
      ["dust", "tiny dry particles"],
      ["memory", "something remembered from the past"]
    ]
  },

  {
    title: "The Window Garden",
    description: "A tiny garden teaches patience, care, and hope.",
    icon: "🌱",
    cover: "cover-sage",
    texts: {
      en: "Every morning, Lina placed a little water beside the window. Her tiny plant grew slowly. Some days nothing seemed to change, but she kept caring for it. Weeks later, a small green leaf appeared, reminding her that growth does not always happen where we can see it.",
      hi: "हर सुबह लीना खिड़की के पास थोड़ा पानी रखती थी। उसका छोटा पौधा धीरे-धीरे बढ़ रहा था। कुछ दिनों में कुछ भी बदलता हुआ नहीं लगता था, लेकिन वह उसकी देखभाल करती रही। कुछ हफ्तों बाद एक छोटी हरी पत्ती निकली और उसे याद दिलाया कि विकास हमेशा हमारी आँखों के सामने नहीं होता।",
      ja: "毎朝、リナは窓のそばに少し水を置きました。小さな植物はゆっくり成長しました。何日も変化がないように見えることもありましたが、彼女は世話を続けました。数週間後、小さな緑の葉が現れ、成長はいつも目に見える形で起こるわけではないと教えてくれました。",
      ko: "매일 아침 리나는 창가에 작은 물을 놓았습니다. 작은 식물은 천천히 자랐습니다. 어떤 날에는 아무것도 변하지 않는 것처럼 보였지만, 그녀는 계속 돌보았습니다. 몇 주 후 작은 초록 잎이 나타났고, 성장은 항상 우리가 볼 수 있는 곳에서 일어나는 것은 아니라는 것을 알려 주었습니다.",
      es: "Cada mañana, Lina ponía un poco de agua junto a la ventana. Su pequeña planta crecía lentamente. Algunos días parecía que nada cambiaba, pero ella seguía cuidándola. Semanas después apareció una pequeña hoja verde, recordándole que el crecimiento no siempre ocurre donde podemos verlo.",
      fr: "Chaque matin, Lina déposait un peu d'eau près de la fenêtre. Sa petite plante grandissait lentement. Certains jours, rien ne semblait changer, mais elle continuait à s'en occuper. Quelques semaines plus tard, une petite feuille verte apparut, lui rappelant que la croissance ne se produit pas toujours là où nous pouvons la voir.",
      de: "Jeden Morgen stellte Lina etwas Wasser neben das Fenster. Ihre kleine Pflanze wuchs langsam. An manchen Tagen schien sich nichts zu verändern, aber sie kümmerte sich weiter um sie. Wochen später erschien ein kleines grünes Blatt und erinnerte sie daran, dass Wachstum nicht immer dort geschieht, wo wir es sehen können.",
      it: "Ogni mattina, Lina metteva un po' d'acqua vicino alla finestra. La sua piccola pianta cresceva lentamente. Alcuni giorni sembrava che nulla cambiasse, ma lei continuava a prendersene cura. Settimane dopo apparve una piccola foglia verde, ricordandole che la crescita non avviene sempre dove possiamo vederla.",
      ar: "كل صباح، كانت لينا تضع قليلاً من الماء بجانب النافذة. نمت نبتتها الصغيرة ببطء. في بعض الأيام لم يكن يبدو أن شيئاً يتغير، لكنها واصلت الاعتناء بها. وبعد أسابيع ظهرت ورقة خضراء صغيرة، لتذكرها بأن النمو لا يحدث دائماً في المكان الذي نستطيع رؤيته."
    },
    vocab: [
      ["window", "an opening with glass in a wall"],
      ["plant", "a living thing that grows in soil"],
      ["growth", "the process of becoming bigger or developing"]
    ]
  },

  {
    title: "The Quiet Library",
    description: "Sometimes a quiet room can hold a whole world.",
    icon: "📚",
    cover: "cover-peach",
    texts: {
      en: "The library was almost empty when Sam walked inside. He chose a chair near the window and opened a book. Outside, the town was busy, but inside everything felt calm. For the first time that week, Sam forgot to worry about tomorrow.",
      hi: "जब सैम पुस्तकालय में गया तो वह लगभग खाली था। उसने खिड़की के पास एक कुर्सी चुनी और किताब खोली। बाहर शहर व्यस्त था, लेकिन अंदर सब कुछ शांत था। उस सप्ताह पहली बार सैम कल की चिंता करना भूल गया।",
      ja: "サムが図書館に入ったとき、そこにはほとんど誰もいませんでした。彼は窓の近くの椅子を選び、本を開きました。外の町は忙しかったのですが、中はとても穏やかでした。その週で初めて、サムは明日のことを心配するのを忘れました。",
      ko: "샘이 도서관에 들어갔을 때 도서관은 거의 비어 있었습니다. 그는 창가의 의자를 골라 책을 펼쳤습니다. 밖의 마을은 바빴지만 안은 평온했습니다. 그 주에 처음으로 샘은 내일에 대해 걱정하는 것을 잊었습니다.",
      es: "La biblioteca estaba casi vacía cuando Sam entró. Eligió una silla cerca de la ventana y abrió un libro. Afuera, el pueblo estaba ocupado, pero dentro todo parecía tranquilo. Por primera vez esa semana, Sam olvidó preocuparse por el mañana.",
      fr: "La bibliothèque était presque vide lorsque Sam entra. Il choisit une chaise près de la fenêtre et ouvrit un livre. Dehors, la ville était animée, mais à l'intérieur tout semblait calme. Pour la première fois cette semaine-là, Sam oublia de s'inquiéter de demain.",
      de: "Die Bibliothek war fast leer, als Sam hineinging. Er wählte einen Stuhl am Fenster und öffnete ein Buch. Draußen war die Stadt geschäftig, aber drinnen fühlte sich alles ruhig an. Zum ersten Mal in dieser Woche vergaß Sam, sich um morgen zu sorgen.",
      it: "La biblioteca era quasi vuota quando Sam entrò. Scelse una sedia vicino alla finestra e aprì un libro. Fuori, la città era piena di attività, ma dentro tutto sembrava tranquillo. Per la prima volta quella settimana, Sam dimenticò di preoccuparsi del domani.",
      ar: "كانت المكتبة شبه فارغة عندما دخل سام. اختار كرسياً قرب النافذة وفتح كتاباً. في الخارج كانت البلدة مشغولة، لكن في الداخل كان كل شيء هادئاً. ولأول مرة في ذلك الأسبوع، نسي سام أن يقلق بشأن الغد."
    },
    vocab: [
      ["quiet", "making very little sound"],
      ["chair", "a seat for one person"],
      ["calm", "peaceful and without much worry"]
    ]
  },

  {
    title: "The Paper Moon",
    description: "A handmade moon turns an ordinary evening into something special.",
    icon: "🌙",
    cover: "cover-blue",
    texts: {
      en: "Aya cut a moon from a piece of silver paper and taped it above her desk. It was not perfect, but she loved it. Every evening, the little paper moon reminded her that beautiful things do not have to be perfect to matter.",
      hi: "आया ने चाँदी के कागज़ से एक चाँद काटा और उसे अपनी मेज़ के ऊपर चिपका दिया। वह बिल्कुल सही नहीं था, लेकिन उसे वह बहुत पसंद था। हर शाम वह छोटा कागज़ी चाँद उसे याद दिलाता था कि खूबसूरत चीज़ों के मायने होने के लिए उनका पूर्ण होना ज़रूरी नहीं है।",
      ja: "アヤは銀色の紙から月を切り取り、机の上に貼りました。それは完璧ではありませんでしたが、彼女は気に入っていました。毎晩、その小さな紙の月は、美しいものは完璧でなくても大切な存在になれると教えてくれました。",
      ko: "아야는 은색 종이로 달을 오려 책상 위에 붙였습니다. 완벽하지는 않았지만 그녀는 그것을 좋아했습니다. 매일 저녁 작은 종이 달은 아름다운 것들이 소중하기 위해 꼭 완벽할 필요는 없다는 것을 알려 주었습니다.",
      es: "Aya recortó una luna de papel plateado y la pegó sobre su escritorio. No era perfecta, pero le encantaba. Cada tarde, la pequeña luna de papel le recordaba que las cosas bonitas no tienen que ser perfectas para ser importantes.",
      fr: "Aya découpa une lune dans un morceau de papier argenté et la colla au-dessus de son bureau. Elle n'était pas parfaite, mais elle l'aimait. Chaque soir, la petite lune en papier lui rappelait que les belles choses n'ont pas besoin d'être parfaites pour avoir de l'importance.",
      de: "Aya schnitt einen Mond aus silbernem Papier und klebte ihn über ihren Schreibtisch. Er war nicht perfekt, aber sie liebte ihn. Jeden Abend erinnerte sie der kleine Papiermond daran, dass schöne Dinge nicht perfekt sein müssen, um wichtig zu sein.",
      it: "Aya ritagliò una luna da un pezzo di carta argentata e la attaccò sopra la sua scrivania. Non era perfetta, ma le piaceva molto. Ogni sera, la piccola luna di carta le ricordava che le cose belle non devono essere perfette per avere valore.",
      ar: "قصّت آيا قمراً من ورق فضي وثبته فوق مكتبها. لم يكن مثالياً، لكنها أحبته. وفي كل مساء، كان القمر الورقي الصغير يذكرها بأن الأشياء الجميلة لا تحتاج إلى أن تكون مثالية حتى تكون مهمة."
    },
    vocab: [
      ["paper", "a thin material used for writing or making things"],
      ["silver", "a shiny grey-white color or metal"],
      ["perfect", "without mistakes or flaws"]
    ]
  },

  {
    title: "The Blue Painting",
    description: "A quiet painting becomes a reminder to see things differently.",
    icon: "🎨",
    cover: "cover-cream",
    texts: {
      en: "Leo painted the sky blue, the house blue, and even the trees blue. At first everyone thought it looked strange. Leo simply smiled. He was not trying to paint the world exactly as it was. He was painting how the world felt to him.",
      hi: "लियो ने आसमान को नीला, घर को नीला और पेड़ों को भी नीला रंग दिया। पहले सबको यह अजीब लगा। लियो बस मुस्कुराया। वह दुनिया को बिल्कुल वैसा नहीं बनाना चाहता था जैसी वह थी। वह दुनिया को वैसा चित्रित कर रहा था जैसी वह उसे महसूस होती थी।",
      ja: "レオは空を青く、家を青く、木々まで青く塗りました。最初、みんなはそれを変だと思いました。レオはただ微笑みました。彼は世界をそのまま描こうとしていたのではありません。自分にとって世界がどう感じられるかを描いていたのです。",
      ko: "레오는 하늘을 파랗게, 집을 파랗게, 심지어 나무까지 파랗게 칠했습니다. 처음에는 모두가 이상하다고 생각했습니다. 레오는 그저 미소 지었습니다. 그는 세상을 있는 그대로 그리려 한 것이 아니었습니다. 자신에게 세상이 어떻게 느껴지는지를 그리고 있었습니다.",
      es: "Leo pintó el cielo de azul, la casa de azul e incluso los árboles de azul. Al principio todos pensaron que parecía extraño. Leo simplemente sonrió. No intentaba pintar el mundo exactamente como era. Estaba pintando cómo se sentía el mundo para él.",
      fr: "Leo peignit le ciel en bleu, la maison en bleu et même les arbres en bleu. Au début, tout le monde trouva cela étrange. Leo sourit simplement. Il n'essayait pas de peindre le monde exactement comme il était. Il peignait la façon dont le monde lui faisait ressentir les choses.",
      de: "Leo malte den Himmel blau, das Haus blau und sogar die Bäume blau. Zuerst fanden alle das seltsam. Leo lächelte einfach. Er wollte die Welt nicht genau so malen, wie sie war. Er malte, wie sich die Welt für ihn anfühlte.",
      it: "Leo dipinse il cielo di blu, la casa di blu e persino gli alberi di blu. All'inizio tutti pensarono che fosse strano. Leo sorrise semplicemente. Non stava cercando di dipingere il mondo esattamente com'era. Stava dipingendo come il mondo gli faceva sentire.",
      ar: "رسم ليو السماء باللون الأزرق، والبيت بالأزرق، وحتى الأشجار بالأزرق. في البداية ظن الجميع أن اللوحة تبدو غريبة. ابتسم ليو ببساطة. لم يكن يحاول رسم العالم كما هو تماماً، بل كان يرسم كيف يشعر تجاه العالم."
    },
    vocab: [
      ["painting", "a picture made with paint"],
      ["strange", "unusual or different"],
      ["world", "the earth and everything on it"]
    ]
  }
];

let selectedLanguage = "en";
let currentStory = null;

const home = document.getElementById("home");
const reader = document.getElementById("reader");
const storyGrid = document.getElementById("storyGrid");
const searchInput = document.getElementById("searchInput");

function renderStories(list = stories) {
  storyGrid.innerHTML = "";

  if (list.length === 0) {
    storyGrid.innerHTML = `
      <div class="empty">
        <span>☁️</span>
        <p>No stories found.</p>
      </div>
    `;
    return;
  }

  list.forEach((story) => {
    const originalIndex = stories.indexOf(story);

    const card = document.createElement("article");
    card.className = "story-card";

    card.innerHTML = `
      <div class="cover ${story.cover}">
        <div class="cover-icon">${story.icon}</div>
      </div>

      <div class="story-info">
        <div class="story-number">
          STORY ${String(originalIndex + 1).padStart(2, "0")}
        </div>

        <h3>${story.title}</h3>

        <p>${story.description}</p>

        <div class="read-link">
          Read story ✦
        </div>
      </div>
    `;

    card.addEventListener("click", () => openStory(originalIndex));

    storyGrid.appendChild(card);
  });
}

function openStory(index) {
  currentStory = index;

  const story = stories[index];

  home.classList.add("hidden");
  reader.classList.remove("hidden");

  document.getElementById("readerCover").className =
    `reader-cover ${story.cover}`;

  document.getElementById("readerIcon").textContent = story.icon;

  document.getElementById("readerNumber").textContent =
    `STORY ${String(index + 1).padStart(2, "0")}`;

  document.getElementById("readerTitle").textContent = story.title;

  updateReaderText();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function updateReaderText() {
  if (currentStory === null) return;

  const story = stories[currentStory];

  document.getElementById("languageName").textContent =
    `🌍 ${languages[selectedLanguage]}`;

  document.getElementById("originalText").textContent =
    story.texts[selectedLanguage];

  document.getElementById("translationText").textContent =
    story.texts.en;

  document.getElementById("vocabulary").innerHTML =
    story.vocab.map(item => `
      <div class="vocab-item">
        <div class="vocab-word">${item[0]}</div>
        <div class="vocab-meaning">${item[1]}</div>
      </div>
    `).join("");
}

function closeReader() {
  reader.classList.add("hidden");
  home.classList.remove("hidden");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

document.querySelectorAll(".lang-btn").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    selectedLanguage = button.dataset.lang;

    updateReaderText();
  });
});

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase().trim();

  const filtered = stories.filter(story =>
    story.title.toLowerCase().includes(query) ||
    story.description.toLowerCase().includes(query)
  );

  renderStories(filtered);
});

document.getElementById("backBtn").addEventListener("click", closeReader);

document.getElementById("themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");

  document.getElementById("themeBtn").textContent =
    isDark ? "☀️" : "☾";
});

document.getElementById("readAloud").addEventListener("click", () => {
  if (currentStory === null) return;

  if (!("speechSynthesis" in window)) {
    alert("Read aloud is not supported on this browser.");
    return;
  }

  speechSynthesis.cancel();

  const story = stories[currentStory];

  const voiceCodes = {
    en: "en-US",
    hi: "hi-IN",
    ja: "ja-JP",
    ko: "ko-KR",
    es: "es-ES",
    fr: "fr-FR",
    de: "de-DE",
    it: "it-IT",
    ar: "ar-SA"
  };

  const speech = new SpeechSynthesisUtterance(
    story.texts[selectedLanguage]
  );

  speech.lang = voiceCodes[selectedLanguage];
  speech.rate = 0.88;
  speech.pitch = 1;

  speechSynthesis.speak(speech);
});

document.getElementById("translateBtn").addEventListener("click", () => {
  const box = document.getElementById("translationBox");

  box.classList.toggle("hidden");
});

renderStories();
