// lib/copy.js — CAŁKOWITA widoczna zawartość landing page'a.
// Wszystkie zmiany w tekście wprowadza się tutaj. Komponenty czytają dane tylko z tego obiektu.

export const copy = {
  metadata: {
    title: "1000 Zdrowych Przepisów 2.0",
    description:
      "1000 Zdrowych Przepisów 2.0 dla diabetyków: pyszne, proste i stworzone specjalnie, by trzymać cukier w ryzach. Oferta specjalna: 30,00 zł + 5 darmowych bonusów.",
    lang: "pl",
  },

  brand: {
    name: "",
    tagline: "1000 Zdrowych Przepisów 2.0",
  },

  hero: {
    banner: "TA OFERTA + DARMOWE BONUSY WYGASA ZA:",
    timerLabels: { days: "Dni", hours: "Godz", minutes: "Min", seconds: "Sek" },
    kicker: "Ponad 2000 osób odmieniło swoje życie",
    headlinePre: "Ponad 2000 osób",
    headlineHighlight: "poprawiło swoje zdrowie",
    headlinePost: "dzięki naszym 1000 przepisom",
    subheadline: "Cukrzyca to nie wyrok ani wymówka, by rezygnować z pysznego jedzenia!",
    supporting:
      "Zadbaj o siebie i ciesz się niesamowitymi smakami dzięki 1000 Zdrowych Przepisów 2.0",
    cta: "Chcę książkę teraz! 📖",
    imageAlt: "E-book 1000 Zdrowych Przepisów 2.0 dla diabetyków",
    trustChips: [
      { icon: "⭐", text: "Ponad 2000 zadowolonych" },
      { icon: "🎁", text: "5 darmowych bonusów" },
      { icon: "🛡️", text: "7-dniowa gwarancja" },
    ],
  },

  story: {
    headlinePre: "Czy wiesz, że zła dieta może drastycznie zwiększyć ryzyko",
    headlineHighlight: "powikłań cukrzycowych",
    headlinePost: "szybko i zupełnie niepostrzeżenie?",
    intro:
      "Każdy kęs ma znaczenie. To, co jesz dzisiaj, decyduje o tym, jak będziesz się czuć jutro. A przy cukrzycy, drobne błędy kumulują się po cichu, dzień po dniu.",
    problemsLead: "Oto z jakimi problemami musisz się zmierzyć, jeśli zaniedbasz swoje odżywianie:",
    problems: [
      {
        title: "Gwałtowne skoki cukru we krwi",
        desc: "Niewłaściwe posiłki prowadzą do wahań glikemii, co z czasem uszkadza Twoje nerwy, oczy i nerki.",
      },
      {
        title: "Szybkie przybieranie na wadze",
        desc: "Śmieciowe jedzenie to prosta droga do nadwagi, która potrafi drastycznie zaostrzyć przebieg cukrzycy.",
      },
      {
        title: "Zwiększone ryzyko chorób serca",
        desc: "Złe nawyki żywieniowe obciążają układ krążenia. To niestety jedna z głównych przyczyn problemów zdrowotnych u diabetyków.",
      },
      {
        title: "Uciążliwe problemy trawienne",
        desc: "Szkodliwe składniki wywołują nietolerancje, zaparcia, bolesne wzdęcia i ciągły dyskomfort po jedzeniu.",
      },
    ],
    visualImage: "/story-apple-donut.webp",
    visualImageAlt: "Jedna dłoń trzyma zielone jabłko, druga różowego pączka: wybór ma znaczenie",
    solutionBadge: "Rozwiązanie",
    solutionHeadline:
      "Chcesz nauczyć się jeść smacznie i zdrowo, bez ciągłego stresu o to, jak zareaguje Twój cukier?",
  },

  benefits: {
    forYouHeadline: "Ten e-book jest strzałem w dziesiątkę, jeśli...",
    forYouItems: [
      {
        icon: "Heart",
        title: "Chorujesz na cukrzycę lub opiekujesz się kimś bliskim, kto ją ma",
        desc: "Odkryjesz tu przepisy stworzone po to, by trzymać cukier w ryzach, bez odmawiania sobie jedzeniowej przyjemności.",
      },
      {
        icon: "Sparkles",
        title: "Chcesz maksymalnie ułatwić sobie zdrowe gotowanie",
        desc: "Zdrowa dieta nie musi być trudna. Dajemy Ci krótkie, jasne instrukcje krok po kroku.",
      },
      {
        icon: "Users",
        title: "Szukasz pysznych i sprawdzonych posiłków dla całej rodziny",
        desc: "To dania, które pokochają wszyscy domownicy, a nie tylko osoba zmagająca się z cukrzycą.",
      },
    ],
    headline: "Co zyskasz dzięki 1000 Zdrowych Przepisów 2.0",
    items: [
      {
        icon: "ChefHat",
        title: "Zdrowe i obłędnie pyszne dania",
        desc: "Które cała Twoja rodzina pokocha od pierwszego kęsa.",
      },
      {
        icon: "ListChecks",
        title: "Instrukcje krok po kroku",
        desc: "Proste i przejrzyste, nawet jeśli w kuchni stawiasz dopiero pierwsze kroki.",
      },
      {
        icon: "ShoppingBasket",
        title: "Tanie i łatwodostępne składniki",
        desc: "Kupisz je bez problemu w każdej Biedronce, Lidlu czy osiedlowym sklepiku.",
      },
      {
        icon: "Lightbulb",
        title: "Wskazówki i patenty szefów kuchni",
        desc: "Dzięki nim poczujesz się pewniej i podkręcisz smak każdego obiadu.",
      },
      {
        icon: "Apple",
        title: "Starannie dobrane wartości odżywcze",
        desc: "Nauczysz się dostarczać swojemu organizmowi dokładnie to, czego potrzebuje.",
      },
      {
        icon: "Wheat",
        title: "Pełną kontrolę nad węglowodanami",
        desc: "Bez odmawiania sobie ulubionych smaków czy różnorodności na talerzu.",
      },
      {
        icon: "Activity",
        title: "Stabilny poziom cukru we krwi",
        desc: "Posiłki, które bez wysiłku pomogą Ci trzymać wyniki w wyznaczonych normach.",
      },
      {
        icon: "HeartPulse",
        title: "Zauważalną poprawę samopoczucia",
        desc: "Więcej energii, lepsze trawienie i wyższa jakość życia każdego dnia.",
      },
    ],
    socialProof:
      "Dzięki 1000 Zdrowych Przepisów 2.0 osoby takie jak Ty opanowały swoje skoki cukru, zrzuciły zbędne kilogramy i odzyskały radość z jedzenia.",
  },

  features: {
    headline: "Co dokładnie znajdziesz w środku?",
    subheadline: "Wszystko, czego potrzebujesz, by jeść pysznie i zdrowo, bez ciągłego liczenia i zamartwiania się.",
    items: [
      {
        icon: "Utensils",
        title: "Smaczne i zbilansowane przepisy",
        desc: "Ogromny wybór pełnowartościowych dań – od świetnych śniadań i obiadów, po zdrowe sosy, kremy i desery.",
      },
      {
        icon: "BookOpen",
        title: "Podstawy kuchni dla diabetyków",
        desc: "Dowiesz się, dlaczego konkretne przepisy tak świetnie odpowiadają na Twoje zdrowotne potrzeby.",
      },
      {
        icon: "Lightbulb",
        title: "Praktyczne triki kulinarne",
        desc: "Poznasz sprytne sztuczki, które sprawią, że Twoje gotowanie stanie się czystą i szybką przyjemnością.",
      },
      {
        icon: "Replace",
        title: "Przewodnik po zdrowych zamiennikach",
        desc: "Odkryjesz, co służy Twojemu zdrowiu i czym bez bólu zastąpić szkodliwe produkty z dawnej diety.",
      },
      {
        icon: "Gift",
        title: "Ekskluzywne dodatki",
        desc: "Zgarniasz dzisiaj też wyjątkowe prezenty i stały dostęp do naszego Klubu Zniżkowego.",
      },
    ],
  },

  bonuses: {
    badge: "DARMOWE BONUSY",
    headline: "Tylko przez ograniczony czas otrzymujesz te 5 prezentów",
    subheadline: "Odbierzesz je całkowicie za darmo przy dzisiejszym zakupie e-booka.",
    freeLabel: "ZA DARMO!",
    items: [
      {
        image: "/bonuses/sopas.webp",
        tag: "BONUS 1",
        title: "E-book: 15 Zdrowych Zup",
        desc: "15 rozgrzewających przepisów na zupy o niskiej zawartości węglowodanów i szkodliwych cukrów.",
        value: "60 zł",
      },
      {
        image: "/bonuses/batidos.webp",
        tag: "BONUS 2",
        title: "E-book: 10 Zdrowych Koktajli",
        desc: "10 orzeźwiających i super-odżywczych smoothie, całkowicie bezpiecznych dla Twojej glikemii.",
        value: "60 zł",
      },
      {
        image: "/bonuses/snacks.webp",
        tag: "BONUS 3",
        title: "E-book: 15 Zdrowych Przekąsek",
        desc: "15 pomysłów na coś na ząb – robisz szybko, jesz ze smakiem i dbasz o organizm.",
        value: "60 zł",
      },
      {
        image: "/bonuses/planificador.webp",
        tag: "BONUS 4",
        title: "E-book: Planer Posiłków",
        desc: "Praktyczny planer, z którym bez stresu zorganizujesz swoje tygodniowe menu i zrobisz zakupy.",
        value: "60 zł",
      },
      {
        image: "/bonuses/membresia.webp",
        tag: "BONUS 5",
        title: "Klub Zniżkowy",
        desc: "Dostęp do przyszłych aktualizacji, nasza gwarancja i stałe zniżki na inne poradniki z katalogu.",
        value: "80 zł",
      },
    ],
    totalLabel: "Łączna wartość bonusów: 320 zł — Dzisiaj: CAŁKOWICIE ZA DARMO",
    footer: "Wszystkie materiały otrzymasz w formie cyfrowej od razu po opłaceniu zamówienia.",
  },

  testimonials: {
    headline: "Co mówią nasi klienci?",
    subheadline:
      "Poznaj opinie prawdziwych ludzi o poradniku 1000 Zdrowych Przepisów 2.0 dla diabetyków.",
    productLabel: "1000 Zdrowych Przepisów 2.0 dla diabetyków",
    reviewedLabel: "zrecenzował/a",
    rating: "5★",
    actions: { like: "Lubię to", comment: "Komentarz", share: "Udostępnij" },
    items: [
      {
        name: "Piotr Kowalski",
        text:
          "Szukałem prostych przepisów ze składników, które po prostu mam pod ręką. Ten e-book to złoto – dania są obłędnie smaczne i robisz je dosłownie w kilku krokach. Polecam w 100%!",
      },
      {
        name: "Maria Wiśniewska",
        text:
          "Gdy zdiagnozowano u mnie cukrzycę, bardzo bałam się, że to koniec z dobrym jedzeniem. Przepisy są mega! A ponieważ książka jest na telefonie, mam ją zawsze przy sobie, gdy robię zakupy.",
      },
      {
        name: "Julia Kamińska",
        text:
          "Jako mama dziecka z cukrzycą, miałam potężny problem ze znalezieniem obiadów dla całej rodziny. Ten poradnik dał nam luz i różnorodność. Przepisy to u nas w domu absolutny hit.",
      },
      {
        name: "Agnieszka Zielińska",
        text:
          "Kiedy mój mąż zachorował na cukrzycę, ten e-book niesamowicie mi pomógł. Gotuje się łatwo, bez dziwnych, drogich wymysłów, a jedzenie szybko znika z talerzy. Naprawdę polecam!",
      },
      {
        name: "Anna Szymańska",
        text:
          "Z czystym sumieniem daję 5 gwiazdek: pyszne i banalnie proste jedzenie. Wielkie dzięki za te darmowe bonusy – planer posiłków to strzał w dziesiątkę do układania diety w weekend.",
      },
      {
        name: "Jan Wójcik",
        text:
          "Ta książka zupełnie zmieniła moje podejście do kuchni. Wcześniej gotowałem dla siebie oddzielnie. Teraz wszyscy w domu jemy to samo i nikt nie narzeka. Wielkie dzięki!",
      },
    ],
    cta: "CHCĘ ZACZĄĆ JUŻ DZIŚ",
  },

  finalCta: {
    preHeadline: "TWÓJ CZAS JEST TERAZ",
    urgencyTop: "POTĘŻNA ZNIŻKA",
    headline:
      "ZGARNIJ NASZ E-BOOK JUŻ DZIŚ I ZAOSZCZĘDŹ!",
    subUrgency:
      "Ponad 2000 osób odzyskało kontrolę nad zdrowiem z naszymi przepisami. Dziś przyszła kolej na Ciebie.",
    bundleList: [
      "E-book: 1000 Zdrowych Przepisów 2.0 dla diabetyków",
      "Bonus 1 — 15 Zdrowych Zup",
      "Bonus 2 — 10 Zdrowych Koktajli",
      "Bonus 3 — 15 Zdrowych Przekąsek",
      "Bonus 4 — Planer Posiłków",
      "Bonus 5 — Dostęp do Klubu Zniżkowego",
    ],
    imageAlt: "Pełny pakiet 1000 Zdrowych Przepisów 2.0 + 5 bonusów",
    guaranteeText:
      "Wciąż się wahasz? Spokojnie, nic nie ryzykujesz! Twoje zdrowie jest tego warte. Otrzymujesz 7-dniową pełną gwarancję satysfakcji.",
    guaranteeImageAlt: "Gwarancja",
    regularPriceLabel: "Zamiast",
    regularPrice: "149.00 zł",
    offerPrice: "30.00 zł",
    discountBadge: "OFERTA SPECJALNA",
    urgencyText: "TRANSAKCJA PRZEBIEGNIE BEZPIECZNIE W ZŁOTÓWKACH",
    bottomUrgency: "Ta szansa znika bezpowrotnie, gdy powyższy zegar wskaże zero.",
    button: "KORZYSTAM Z OKAZJI JUŻ TERAZ",
    trustRow: "W 100% bezpieczna płatność · Natychmiastowy dostęp · 7-dniowa gwarancja",
  },

  faq: {
    authorRole: "Zespół ds. zdrowego odżywiania",
    authorHeadline: "Pyszne jedzenie, które realnie dba o Twoje zdrowie",
    authorBio:
      "Mocno wierzymy, że cukrzyca wcale nie musi odbierać Ci radości z posiłków. Każdy z naszych przepisów powstał po to, byś mógł cieszyć się smakiem bez jakichkolwiek wyrzutów sumienia, mając swoją glikemię pod pełną kontrolą.",
    authorImageAlt: "Nasz zespół ekspertów",
    worksHeadline: "Dla kogo ten e-book zdecydowanie NIE JEST?",
    doesntWork: [
      "Dla osób, które chcą jeść codziennie fast-foody i liczą na brak konsekwencji",
      "Dla osób, które są całkowicie zamknięte na próbowanie nowych, zdrowszych smaków",
      "Dla osób, które oczekują magicznych wyników bez jakiejkolwiek zmiany nawyków",
    ],
    worksText:
      "Ale jeśli zależy Ci na sprawdzonych, prostych, pysznych i bezpiecznych dla diabetyków posiłkach... ta książka została napisana dla Ciebie.",
    headline: "Często Zadawane Pytania",
    subheadline: "Wszystko, co powinieneś wiedzieć, zanim zaczniesz gotować z nami.",
    items: [
      {
        q: "Jak dokładnie otrzymam e-book po zakupie?",
        a: "Zaraz po udanej płatności wyślemy na Twojego maila link do pobrania plików. Możesz je wygodnie czytać na swoim telefonie, tablecie lub komputerze.",
      },
      {
        q: "W jakim formacie jest wasz poradnik?",
        a: "To najwyższej jakości, lekki plik PDF, który łatwo odpalisz na każdym urządzeniu. Nie musisz niczego specjalnie drukować.",
      },
      {
        q: "Czy te przepisy sprawdzą się przy cukrzycy typu 1 i 2?",
        a: "Tak, całe menu stworzyliśmy z myślą o stabilizacji i kontrolowaniu cukru. Pamiętaj jednak, że każdą większą zmianę diety zawsze warto skonsultować ze swoim lekarzem.",
      },
      {
        q: "Będę potrzebować drogich, wymyślnych składników?",
        a: "Zupełnie nie. Gotujemy z prostych produktów w przystępnych cenach, które bez problemu dostaniesz w najbliższej Biedronce, Lidlu czy na lokalnym targu.",
      },
      {
        q: "A co, jeśli to wszystko jednak nie dla mnie?",
        a: "Jesteś pod naszą ochroną. Dajemy Ci 7 dni gwarancji. Jeśli uznasz, że e-book Ci się nie podoba, oddamy Ci 100% pieniędzy, bez zadawania niewygodnych pytań.",
      },
      {
        q: "Czy płacę w złotówkach?",
        a: "Tak, nasza bramka płatnicza automatycznie procesuje transakcję i pobiera dokładnie tę kwotę w PLN, którą widzisz na stronie.",
      },
    ],
  },

  closing: {
    kicker: "OSTATNI KROK",
    headline: "Twoje zdrowie nie może już dłużej czekać",
    subheadline:
      "Już dziś możesz zacząć jeść obłędnie pysznie, dbając o swój cukier. Jutro tej śmiesznie niskiej ceny może już u nas nie być.",
    regularPrice: "149.00 zł",
    offerPrice: "30.00 zł",
    ctaLabel: "KORZYSTAM Z OKAZJI JUŻ TERAZ",
    trustRow: "Bezpieczna płatność · Natychmiastowy dostęp · 7-dniowa gwarancja",
  },

  footer: {
    brand: "PRO ESCALA",
    copyright: "Copyright © proescala.online ® 2025",
    disclaimer:
      "Ta strona nie jest w żaden sposób częścią witryny Facebook ani firmy Facebook Inc. Co więcej, strona ta NIE jest w żaden sposób popierana, wspierana ani sponsorowana przez Facebooka.",
    trademark: "FACEBOOK to zarejestrowany znak towarowy firmy FACEBOOK, Inc.",
  },
};