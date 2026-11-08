const roadmapTopics = [
  {
    id: '01',
    title: 'Проектирование баз данных',
    short: 'От технического задания до ER-диаграммы.',
    accent: 'green',
    position: { x: 56, y: 74 },
    items: [
      'Анализ технического задания',
      'Выделение сущностей и атрибутов',
      'ER-диаграммы',
      'Связи между таблицами: 1:1, 1:N, M:N',
      'Первичные и внешние ключи',
      'Нормализация до третьей нормальной формы',
      'Ссылочная целостность',
    ],
  },
  {
    id: '02',
    title: 'SQL и работа с MySQL',
    short: 'Создаём базу, таблицы и уверенно пишем запросы.',
    accent: 'pink',
    position: { x: 340, y: 196 },
    items: [
      'Создание баз данных и таблиц',
      'Типы данных и ограничения',
      'Добавление, изменение и удаление записей',
      'Запросы SELECT, WHERE, ORDER BY',
      'Объединение таблиц через JOIN',
      'Агрегатные функции и группировка',
      'Импорт исходных данных',
      'Экспорт базы данных и ER-диаграммы',
    ],
  },
  {
    id: '03',
    title: 'Основы JavaScript',
    short: 'Разбираем базовый синтаксис и алгоритмику.',
    accent: 'green',
    position: { x: 658, y: 72 },
    items: [
      'Переменные, типы данных и операторы',
      'Условные конструкции и циклы',
      'Функции и параметры',
      'Массивы и объекты',
      'Методы map, filter, find, sort',
      'Работа со строками, числами и датами',
      'Реализация алгоритмов по техническому заданию',
    ],
  },
  {
    id: '04',
    title: 'HTML и CSS',
    short: 'Собираем интерфейс и аккуратно его стилизуем.',
    accent: 'pink',
    position: { x: 938, y: 214 },
    items: [
      'Структура HTML-документа',
      'Формы и элементы управления',
      'Основные свойства CSS',
      'Flexbox и построение интерфейса',
      'Оформление карточек товаров',
      'Стилизация элементов по условиям задания',
      'Работа с предоставленными макетами',
    ],
  },
  {
    id: '05',
    title: 'JavaScript в браузере',
    short: 'Оживляем интерфейс через DOM и события.',
    accent: 'green',
    position: { x: 868, y: 440 },
    items: [
      'DOM и работа с HTML-элементами',
      'События и обработчики',
      'Получение данных из форм',
      'Динамическое отображение товаров',
      'Поиск по наименованию и описанию',
      'Фильтрация по категориям',
      'Сортировка по цене',
      'Проверка пользовательского ввода',
    ],
  },
  {
    id: '06',
    title: 'Серверная разработка и API',
    short: 'Понимаем, как клиент общается с сервером.',
    accent: 'pink',
    position: { x: 548, y: 372 },
    items: [
      'Принципы клиент-серверного взаимодействия',
      'Основы Node.js и Express',
      'HTTP-запросы и JSON',
      'GET, POST, PATCH, DELETE',
      'Асинхронные запросы и fetch',
      'Подключение MySQL к серверу',
      'Получение и сохранение данных',
      'Обработка ошибок',
    ],
  },
  {
    id: '07',
    title: 'Авторизация и права доступа',
    short: 'Учимся работать с пользователями и ролями.',
    accent: 'green',
    position: { x: 198, y: 486 },
    items: [
      'Создание формы авторизации',
      'Проверка пользователей по базе данных',
      'Работа с ролями',
      'Разграничение прав клиента, менеджера и администратора',
      'Навигация между разделами приложения',
      'Отображение информации о пользователе',
      'Обработка ошибок входа',
    ],
  },
  {
    id: '08',
    title: 'Каталог товаров и бизнес-логика',
    short: 'Соединяем данные, интерфейс и условия задания.',
    accent: 'pink',
    position: { x: 296, y: 700 },
    items: [
      'Вывод данных из связанных таблиц',
      'Отображение моделей, цен и изображений',
      'Работа с размерами товаров',
      'Учёт остатков',
      'Расчёт скидок по условиям задания',
      'Условное оформление карточек',
      'Проверка доступности товаров',
    ],
  },
  {
    id: '09',
    title: 'Оформление и управление заказами',
    short: 'Добавляем логику заказов и редактирование.',
    accent: 'green',
    position: { x: 622, y: 640 },
    items: [
      'Выбор товара, размера и количества',
      'Создание заказа',
      'Расчёт общей стоимости',
      'Сохранение заказов в базе данных',
      'Изменение остатков товаров',
      'Просмотр списка заказов',
      'Редактирование заказов',
      'Добавление и удаление товарных позиций',
      'Проверка корректности данных',
    ],
  },
  {
    id: '10',
    title: 'Практика экзаменационных заданий',
    short: 'Собираем всё вместе и тренируемся в формате экзамена.',
    accent: 'pink',
    position: { x: 940, y: 746 },
    items: [
      'Разбор структуры демонстрационного экзамена',
      'Выполнение заданий по техническому заданию',
      'Самостоятельное проектирование БД',
      'Разработка информационной системы',
      'Объединение клиентской и серверной частей',
      'Проверка работоспособности приложения',
      'Выполнение заданий с ограничением времени',
      'Пробный демонстрационный экзамен',
    ],
  },
];

const roadmapLinks = [
  {
    label: 'Официальная страница демоэкзамена',
    href: 'https://bom.firpo.ru/Public/6397',
  },
  {
    label: 'Спецификация КИМ ДЭ · Том 1 (инвариантная часть)',
    href: 'https://bom.firpo.ru/file/public/177759/%D0%9A%D0%98%D0%9C%2009.02.07-2-2027%20%D0%A2%D0%BE%D0%BC%201.pdf',
  },
];

const panels = {
  'learning-plan': {
    title: 'План обучения',
    text: 'План включает изучение тем, практические задания, разбор типовых ошибок и подготовку к демоэкзамену.',
  },
};

const faqItems = [
  {
    question: 'Сколько стоят занятия?',
    answer: 'Стоимость зависит от выбранного формата обучения. Групповые занятия оплачиваются блоками ( 4 занятия по 90 минут ) — 880 ₽. Индивидуальные занятия стоят 600 ₽ за 60 минут. Оплата вносится заранее, это помогает нам планировать расписание и сохранять места за учениками.',
  },
  {
    question: 'Будут ли домашние задания?',
    answer: 'Да, после занятий мы даём домашние задания, чтобы закрепить пройденный материал и потренироваться самостоятельно. На следующих уроках разбираем возникшие вопросы и ошибки.',
  },
  {
    question: 'Есть ли система оценивания?',
    answer: 'Балльной системы у нас нет. Вместо оценок мы отслеживаем, насколько самостоятельно ученик справляется с заданиями и понимает материал. Это помогает нам видеть его прогресс и понимать, каким темам стоит уделить больше внимания.',
  },
  {
    question: 'Что делать, если я не смогу прийти?',
    answer: 'Договоримся о переносе индивидуального занятия без доплаты. А в случае пропущенного группового занятия — предоставим видеозапись и конспект, чтобы можно было самостоятельно изучить материал.',
  },
  {
    question: 'Можно ли отработать пропущенное групповое занятие?',
    answer: 'Если занятие было пропущено, мы постараемся организовать отработку, но не можем её гарантировать. В любом случае предоставим видеозапись занятия и конспект, чтобы можно было самостоятельно изучить пропущенный материал.',
  },
  {
    question: 'Как изучить тему, если я пропустил занятие?',
    answer: 'После пропущенного занятия мы предоставим видеозапись урока и конспект, чтобы можно было самостоятельно изучить тему и повторить материал. Если в процессе возникнут вопросы, пиши нам и мы постараемся ответить на них в личном чате в Telegram (@devmates_manager).',
  },
  {
    question: 'Как составляется расписание?',
    answer: 'Пока группы небольшие, мы стараемся учитывать свободное время каждого ученика. В дальнейшем появятся группы с разным расписанием, чтобы можно было выбрать наиболее удобный вариант.',
  },
  {
    question: 'В каком формате проходят занятия?',
    answer: 'Занятия проходят онлайн, в группах по 5–7 человек или индивидуально. Мы разбираем теорию, решаем практические задачи и учимся самостоятельно применять знания. Для наглядного объяснения сложных конструкций, построения блок-схем и совместной работы используем интерактивную доску Excalidraw (https://excalidraw.com).',
  },
  {
    question: 'Какие платформы используются для связи?',
    answer: 'Платформу для видеосвязи выбираем по договорённости с учениками, чтобы всем было удобно. Чаще всего используем Яндекс Телемост, LOLKA или Discord.',
  },
];

const dialog = document.querySelector('#info-dialog');
const body = document.querySelector('#dialog-body');

function animateFaqItem(item, expanded) {
  item.getAnimations().forEach((animation) => animation.cancel());

  const summary = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');
  const startHeight = item.getBoundingClientRect().height;
  if (expanded) item.open = true;
  const endHeight = summary.getBoundingClientRect().height + (expanded ? answer.getBoundingClientRect().height : 0);

  item.dataset.expanded = String(expanded);

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    item.open = expanded;
    item.style.height = '';
    item.style.overflow = '';
    return;
  }

  item.style.height = `${startHeight}px`;
  item.style.overflow = 'hidden';

  const animation = item.animate(
    [{ height: `${startHeight}px` }, { height: `${endHeight}px` }],
    { duration: 300, easing: 'cubic-bezier(.22, 1, .36, 1)' },
  );

  animation.onfinish = () => {
    item.open = expanded;
    item.style.height = '';
    item.style.overflow = '';
  };
}

function renderFaq() {
  const heading = document.createElement('h2');
  heading.id = 'dialog-title';
  heading.textContent = 'Частые вопросы';

  const description = document.createElement('p');
  description.className = 'faq-intro';
  description.textContent = 'Собрали ответы о занятиях, оплате и расписании.';

  const list = document.createElement('div');
  list.className = 'faq-list';

  faqItems.forEach(({ question, answer }) => {
    const item = document.createElement('details');
    item.className = 'faq-item';
    const summary = document.createElement('summary');
    summary.className = 'faq-question';
    const questionText = document.createElement('span');
    questionText.textContent = question;
    const symbol = document.createElement('span');
    symbol.className = 'faq-symbol';
    symbol.setAttribute('aria-hidden', 'true');

    summary.append(questionText, symbol);
    const answerText = document.createElement('p');
    answerText.className = 'faq-answer';
    answerText.textContent = answer;
    item.append(summary, answerText);
    summary.addEventListener('click', (event) => {
      event.preventDefault();
      const willOpen = item.dataset.expanded !== 'true';

      if (willOpen) {
        list.querySelectorAll('.faq-item[data-expanded="true"]').forEach((other) => {
          if (other !== item) animateFaqItem(other, false);
        });
      }
      animateFaqItem(item, willOpen);
    });
    list.append(item);
  });

  body.replaceChildren(heading, description, list);
}

function renderContacts() {
  body.innerHTML = `
    <section class="contacts-panel" aria-labelledby="dialog-title">
      <p class="contacts-eyebrow">НА СВЯЗИ</p>
      <h2 id="dialog-title">Давай знакомиться<span class="contacts-title-dot">.</span></h2>
      <p class="contacts-intro">Остались вопросы? Пиши, не стесняйся</p>
      <div class="contacts-list">
        <a class="contact-card contact-card--primary" href="https://t.me/devmates_manager" target="_blank" rel="noopener noreferrer" aria-label="Написать в Telegram @devmates_manager (откроется в новой вкладке)">
          <span class="contact-card-icon"><img src="assets/telegram.svg" alt="" /></span>
          <span class="contact-card-copy"><span class="contact-card-title">Написать нам <span class="contact-pill">на связи</span></span><span class="contact-card-description">Личные сообщения в Telegram</span><span class="contact-card-handle">@devmates_manager</span></span>
          <span class="contact-card-arrow" aria-hidden="true">↗</span>
        </a>
        <a class="contact-card" href="https://t.me/dev_mates" target="_blank" rel="noopener noreferrer" aria-label="Telegram-канал Dev Mates (откроется в новой вкладке)">
          <span class="contact-card-icon"><img src="assets/telegram.svg" alt="" /></span>
          <span class="contact-card-copy"><span class="contact-card-title">Наш Telegram-канал</span><span class="contact-card-handle">t.me/dev_mates</span></span>
          <span class="contact-card-arrow" aria-hidden="true">↗</span>
        </a>
        <a class="contact-card contact-card--pink" href="https://www.instagram.com/dev.mates.ru" target="_blank" rel="noopener noreferrer" aria-label="Instagram Dev Mates (откроется в новой вкладке)">
          <span class="contact-card-icon"><img src="assets/instagram.svg" alt="" /></span>
          <span class="contact-card-copy"><span class="contact-card-title">Instagram</span><span class="contact-card-handle">@dev.mates.ru</span></span>
          <span class="contact-card-arrow" aria-hidden="true">↗</span>
        </a>
        <a class="contact-card" href="https://www.youtube.com/@dev-mates" target="_blank" rel="noopener noreferrer" aria-label="YouTube Dev Mates (откроется в новой вкладке)">
          <span class="contact-card-icon"><img src="assets/youtube.svg" alt="" /></span>
          <span class="contact-card-copy"><span class="contact-card-title">YouTube</span><span class="contact-card-handle">@dev-mates</span></span>
          <span class="contact-card-arrow" aria-hidden="true">↗</span>
        </a>
        <button class="contact-card contact-card--email" type="button" data-copy-email aria-label="Скопировать адрес электронной почты dev.mates.ru@gmail.com">
          <span class="contact-card-icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="27" height="27" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg></span>
          <span class="contact-card-copy"><span class="contact-card-title">Написать на почту</span><span class="contact-card-description">Нажми, чтобы скопировать адрес</span><span class="contact-card-handle">dev.mates.ru@gmail.com</span></span>
          <span class="contact-card-arrow" aria-hidden="true"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg></span>
        </button>
      </div>
      <div class="contacts-toast" role="status" aria-live="polite" aria-atomic="true"></div>
    </section>`;
  body.querySelector('[data-copy-email]').addEventListener('click', copyContactEmail);
}

let contactToastTimeout;
async function copyContactEmail() {
  const email = 'dev.mates.ru@gmail.com';
  const toast = body.querySelector('.contacts-toast');
  if (!toast) return;
  let copied = false;
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(email);
      copied = true;
    }
  } catch { }
  if (!copied) {
    const input = document.createElement('textarea');
    input.value = email;
    input.setAttribute('readonly', '');
    input.style.cssText = 'position:fixed;left:-9999px;top:0;opacity:0';
    document.body.append(input);
    input.select();
    try { copied = document.execCommand('copy'); } catch { }
    input.remove();
  }
  toast.textContent = copied ? '✓ Почта скопирована!' : 'Не удалось скопировать. Выдели адрес и скопируй вручную.';
  toast.classList.add('contacts-toast--visible');
  clearTimeout(contactToastTimeout);
  contactToastTimeout = setTimeout(() => toast.classList.remove('contacts-toast--visible'), 2800);
}

function renderPayment() {
  body.innerHTML = `
    <section class="payment-panel" aria-labelledby="dialog-title">
      <div class="payment-header">
        <p class="payment-eyebrow">ФОРМАТЫ ЗАНЯТИЙ</p>
        <h2 id="dialog-title">Учиться вместе — <span>доступнее.</span></h2>
      </div>
      <div class="payment-tariffs">
        <article class="payment-tariff payment-tariff--group">
          <p class="payment-kind">Групповые занятия</p>
          <div class="payment-price"><strong>220 ₽<sup>*</sup></strong><span>/ занятие</span></div>
          <p class="payment-meta">1 час 30 минут · 5–7 человек</p>
          <p class="payment-invite">Приходи с друзьями — вместе учиться, обсуждать задачи и писать код ещё интереснее!</p>
        </article>
        <article class="payment-tariff payment-tariff--solo">
          <p class="payment-kind">Индивидуальные занятия</p>
          <div class="payment-price"><strong>600 ₽</strong><span>/ час</span></div>
          <p class="payment-meta">1 час · один на один</p>
          <p class="payment-invite">Работаем в твоём темпе и вместе выбираем темы под твои цели.</p>
        </article>
      </div>
      <p class="payment-footnote"><span aria-hidden="true">*</span> Групповые занятия оплачиваются <strong>исключительно за 4 занятия вперёд — 880 ₽</strong>. Оплата отдельно за один групповой урок не предусмотрена.</p>
      <div class="payment-details">
        <h3>Как всё устроено?</h3>
        <div class="payment-detail"><span class="payment-detail-index">01</span><p><strong>Не просто слушаем теорию.</strong> Пишем код, разбираем задачи и готовимся к демоэкзамену. После каждого урока остаётся конспект и видеозапись, чтобы можно было повторить материал.</p></div>
        <div class="payment-detail"><span class="payment-detail-index">02</span><p><strong>Удобное расписание.</strong> Для групповых занятий стараемся подбирать время с учётом возможностей участников группы, для индивидуальных — согласовываем расписание лично с учеником.</p></div>
        <div class="payment-detail"><span class="payment-detail-index">03</span><p><strong>Если пропустил урок.</strong> Договоримся о переносе индивидуального занятия без доплаты. А в случае пропущенного группового занятия — предоставим видеозапись и конспект, чтобы можно было самостоятельно изучить материал.</p></div>
        <div class="payment-detail"><span class="payment-detail-index">04</span><p><strong>Возврат оплаты.</strong> При отказе от обучения вернём стоимость неоказанных услуг в течение 10 дней за вычетом фактически понесённых расходов в соответствии с законодательством РФ.</p></div>
      </div>
      <div class="payment-footer">
        <p>Остались вопросы? Поможем выбрать формат и разобраться с условиями.</p>
        <button class="payment-action" type="button">Связаться с нами</button>
      </div>
    </section>`;
  body.querySelector('.payment-action').addEventListener('click', () => { renderContacts(); updateDialogHeader(); });
}

function createConnectorSvg() {
  const pairs = roadmapTopics.slice(0, -1).map((topic, index) => [topic, roadmapTopics[index + 1]]);
  return `
    <svg class="roadmap-lines" viewBox="0 0 1280 980" aria-hidden="true" focusable="false">
      ${pairs.map(([from, to], index) => {
        const startX = from.position.x + 100;
        const startY = from.position.y + 62;
        const endX = to.position.x + 100;
        const endY = to.position.y + 62;
        const middleX = Math.round((startX + endX) / 2);
        const colorClass = index % 2 === 0 ? 'roadmap-line--green' : 'roadmap-line--pink';
        return `<path class="roadmap-line ${colorClass}" d="M ${startX} ${startY} C ${middleX} ${startY}, ${middleX} ${endY}, ${endX} ${endY}" />`;
      }).join('')}
    </svg>`;
}

function createTopicCard(topic) {
  const items = topic.items.map((item) => `<li>${item}</li>`).join('');
  return `
    <button
      class="roadmap-node roadmap-node--${topic.accent}"
      type="button"
      style="left:${topic.position.x}px; top:${topic.position.y}px"
      data-roadmap-topic="${topic.id}"
      aria-haspopup="dialog"
      aria-controls="roadmap-topic-modal"
    >
      <span class="roadmap-node-id">${topic.id}</span>
      <span class="roadmap-node-title">${topic.title}</span>
      <span class="roadmap-node-short">${topic.short}</span>
      <span class="roadmap-node-link">Подробнее</span>
    </button>
    <template data-roadmap-template="${topic.id}">
      <div class="roadmap-topic-sheet roadmap-topic-sheet--${topic.accent}">
        <p class="roadmap-topic-tag">ТЕМА ${topic.id}</p>
        <h3>${topic.title}</h3>
        <p class="roadmap-topic-lead">${topic.short}</p>
        <ul>${items}</ul>
      </div>
    </template>`;
}

function setupRoadmapPan(viewport, stage) {
  const MIN_ZOOM = 0.5;
  const MAX_ZOOM = 1;
  const ZOOM_STEP = 0.1;
  const pan = {
    x: 0, y: 0, zoom: MAX_ZOOM,
    pointerId: null, startX: 0, startY: 0, fromX: 0, fromY: 0, dragged: false,
  };
  const clamp = (value, min, max) => Math.max(min, Math.min(value, max));
  const dragThreshold = 9;
  const activePointers = new Map();
  const zoomOutButton = mapDialog.querySelector('[data-zoom-out]');
  const zoomInButton = mapDialog.querySelector('[data-zoom-in]');
  const zoomValue = mapDialog.querySelector('[data-zoom-value]');
  let suppressClick = false;
  let pinch = null;

  function limits() {
    const padding = 22;
    const scaledWidth = stage.offsetWidth * pan.zoom;
    const scaledHeight = stage.offsetHeight * pan.zoom;
    // Если уменьшенная плоскость стала уже окна, удерживаем её по центру.
    const horizontal = scaledWidth <= viewport.clientWidth
      ? (viewport.clientWidth - scaledWidth) / 2
      : null;
    const vertical = scaledHeight <= viewport.clientHeight
      ? (viewport.clientHeight - scaledHeight) / 2
      : null;
    return {
      left: horizontal ?? viewport.clientWidth - scaledWidth - padding,
      right: horizontal ?? padding,
      top: vertical ?? viewport.clientHeight - scaledHeight - padding,
      bottom: vertical ?? padding,
    };
  }

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function update(x, y, smooth = false) {
    const { left, right, top, bottom } = limits();
    pan.x = clamp(x, left, right);
    pan.y = clamp(y, top, bottom);
    // Scale changes animate smoothly; dragging and pinch gestures stay responsive.
    stage.style.transition = smooth && !reducedMotion.matches
      ? 'transform 260ms cubic-bezier(.22, 1, .36, 1)'
      : 'none';
    stage.style.transform = `translate3d(${pan.x}px, ${pan.y}px, 0) scale(${pan.zoom})`;
  }

  function showZoom() {
    const percentage = Math.round(pan.zoom * 100);
    zoomValue.textContent = `${percentage}%`;
    zoomOutButton.disabled = pan.zoom <= MIN_ZOOM + 0.001;
    zoomInButton.disabled = pan.zoom >= MAX_ZOOM - 0.001;
  }

  function zoomTo(value, clientX, clientY, smooth = true) {
    const next = clamp(Math.round(value * 1000) / 1000, MIN_ZOOM, MAX_ZOOM);
    if (Math.abs(next - pan.zoom) < 0.001) return;
    const rect = viewport.getBoundingClientRect();
    const anchorX = clientX === undefined ? viewport.clientWidth / 2 : clientX - rect.left;
    const anchorY = clientY === undefined ? viewport.clientHeight / 2 : clientY - rect.top;
    const ratio = next / pan.zoom;
    const x = anchorX - (anchorX - pan.x) * ratio;
    const y = anchorY - (anchorY - pan.y) * ratio;
    pan.zoom = next;
    update(x, y, smooth);
    showZoom();
  }

  function reset() {
    // Начальное состояние: прежний размер (100%) и первая карточка по центру.
    pan.zoom = MAX_ZOOM;
    showZoom();
    update(0, 0);
    const firstNode = stage.querySelector('[data-roadmap-topic="01"]');
    if (!firstNode) return;
    const viewportRect = viewport.getBoundingClientRect();
    const nodeRect = firstNode.getBoundingClientRect();
    const x = viewport.clientWidth * 0.5 - (nodeRect.left - viewportRect.left + nodeRect.width / 2);
    const y = viewport.clientHeight * 0.45 - (nodeRect.top - viewportRect.top + nodeRect.height / 2);
    update(pan.x + x, pan.y + y);
  }

  function pinchDistance() {
    const [a, b] = [...activePointers.values()];
    return Math.hypot(a.x - b.x, a.y - b.y);
  }

  function pinchCenter() {
    const [a, b] = [...activePointers.values()];
    return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
  }

  function pointerDown(event) {
    if (event.button !== undefined && event.button !== 0) return;
    activePointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (activePointers.size === 2) {
      suppressClick = true;
      pan.pointerId = null;
      pan.dragged = true;
      viewport.classList.add('roadmap-viewport--dragging');
      pinch = { distance: pinchDistance(), center: pinchCenter(), zoom: pan.zoom };
      return;
    }
    if (activePointers.size !== 1) return;
    suppressClick = false;
    pan.pointerId = event.pointerId;
    pan.startX = event.clientX;
    pan.startY = event.clientY;
    pan.fromX = pan.x;
    pan.fromY = pan.y;
    pan.dragged = false;
    // Не захватываем указатель сразу: тап на карточку остаётся обычным кликом.
  }

  function pointerMove(event) {
    if (!activePointers.has(event.pointerId)) return;
    activePointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (pinch && activePointers.size === 2) {
      if (event.cancelable) event.preventDefault();
      const center = pinchCenter();
      const distance = pinchDistance();
      zoomTo(pinch.zoom * distance / Math.max(pinch.distance, 1), center.x, center.y, false);
      update(pan.x + center.x - pinch.center.x, pan.y + center.y - pinch.center.y);
      pinch.center = center;
      return;
    }
    if (event.pointerId !== pan.pointerId) return;
    const dx = event.clientX - pan.startX;
    const dy = event.clientY - pan.startY;
    if (!pan.dragged && Math.hypot(dx, dy) < dragThreshold) return;
    if (!pan.dragged) {
      pan.dragged = true;
      viewport.classList.add('roadmap-viewport--dragging');
      viewport.setPointerCapture?.(event.pointerId);
    }
    if (event.cancelable) event.preventDefault();
    update(pan.fromX + dx, pan.fromY + dy);
  }

  function pointerUp(event) {
    if (!activePointers.has(event.pointerId)) return;
    activePointers.delete(event.pointerId);
    if (pinch) {
      suppressClick = true;
      if (activePointers.size < 2) {
        pinch = null;
        pan.pointerId = null;
        pan.dragged = false;
        viewport.classList.remove('roadmap-viewport--dragging');
      }
      return;
    }
    if (event.pointerId !== pan.pointerId) return;
    suppressClick = pan.dragged;
    pan.pointerId = null;
    pan.dragged = false;
    viewport.classList.remove('roadmap-viewport--dragging');
    if (viewport.hasPointerCapture?.(event.pointerId)) viewport.releasePointerCapture(event.pointerId);
  }

  viewport.addEventListener('click', (event) => {
    if (!suppressClick) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    suppressClick = false;
  }, true);

  viewport.addEventListener('pointerdown', pointerDown);
  window.addEventListener('pointermove', pointerMove, { passive: false });
  window.addEventListener('pointerup', pointerUp);
  window.addEventListener('pointercancel', pointerUp);

  // Прозрачная зона справа не пропускает случайные нажатия к карточкам под панелью.
  const zoomGuard = mapDialog.querySelector('.roadmap-zoom-guard');
  ['pointerdown', 'pointerup', 'click', 'dblclick', 'touchstart'].forEach((type) => {
    zoomGuard.addEventListener(type, (event) => {
      event.stopPropagation();
    });
  });
  // Панель масштабирования находится поверх карты, но не начинает её перетаскивание.
  const zoomControls = mapDialog.querySelector('.roadmap-zoom-controls');
  zoomControls.addEventListener('pointerdown', (event) => event.stopPropagation());
  zoomControls.addEventListener('wheel', (event) => {
    event.preventDefault();
    event.stopPropagation();
  }, { passive: false });
  // iOS Safari may interpret quick successive taps as a double-tap gesture.
  // Process touch presses immediately and ignore their synthetic click events.
  function bindZoomButton(button, direction) {
    let lastTouchTime = -Infinity;
    button.addEventListener('pointerdown', (event) => {
      if (event.pointerType !== 'touch' && event.pointerType !== 'pen') return;
      if (button.disabled) return;
      lastTouchTime = performance.now();
      event.preventDefault();
      zoomTo(pan.zoom + direction * ZOOM_STEP);
    });
    button.addEventListener('click', (event) => {
      if (performance.now() - lastTouchTime < 650) {
        event.preventDefault();
        return;
      }
      zoomTo(pan.zoom + direction * ZOOM_STEP);
    });
  }
  bindZoomButton(zoomOutButton, -1);
  bindZoomButton(zoomInButton, 1);
  viewport.addEventListener('wheel', (event) => {
    if (!mapDialog.open) return;
    event.preventDefault();
    if (event.ctrlKey || event.metaKey) {
      zoomTo(pan.zoom - Math.sign(event.deltaY) * ZOOM_STEP, event.clientX, event.clientY);
    } else {
      update(pan.x - event.deltaX, pan.y - event.deltaY);
    }
  }, { passive: false });
  viewport.addEventListener('keydown', (event) => {
    if (event.key === '+' || event.key === '=') {
      event.preventDefault();
      zoomTo(pan.zoom + ZOOM_STEP);
      return;
    }
    if (event.key === '-') {
      event.preventDefault();
      zoomTo(pan.zoom - ZOOM_STEP);
      return;
    }
    const moves = { ArrowUp: [0, 75], ArrowDown: [0, -75], ArrowLeft: [75, 0], ArrowRight: [-75, 0] };
    if (!moves[event.key]) return;
    event.preventDefault();
    update(pan.x + moves[event.key][0], pan.y + moves[event.key][1]);
  });
  window.addEventListener('resize', () => update(pan.x, pan.y), { passive: true });
  showZoom();
  return { reset };
}

function renderLearningPlan() {
  // Основная модалка — прокручиваемый обзор. Карта и справка — независимые диалоги.
  body.innerHTML = `
    <section class="roadmap-panel" aria-labelledby="dialog-title">
      <div class="roadmap-header">
        <p class="roadmap-eyebrow">ПРОГРАММА ПОДГОТОВКИ</p>
        <h2 id="dialog-title">От базы данных до <span>веб-приложения.</span></h2>
        <p class="roadmap-lead">10 тем, четыре задания инвариантной части профильного демоэкзамена 2027 года.</p>
      </div>
      <button class="roadmap-preview" type="button" data-open-roadmap aria-label="Открыть интерактивную карту тем на весь экран">
        <span class="roadmap-preview-window">
          <span class="roadmap-preview-node roadmap-preview-node--one"><span>01</span> Базы данных</span>
          <span class="roadmap-preview-track" aria-hidden="true"></span>
          <span class="roadmap-preview-node roadmap-preview-node--two"><span>02</span> SQL / MySQL</span>
          <span class="roadmap-preview-node roadmap-preview-node--three"><span>03</span> JavaScript</span>
          <span class="roadmap-preview-node roadmap-preview-node--four"><span>04</span> HTML / CSS</span>
        </span>
        <span class="roadmap-preview-action"><strong>Открыть карту тем</strong><span>Исследуй маршрут и нажимай на темы</span><span class="roadmap-preview-arrow" aria-hidden="true">↗</span></span>
      </button>
      <a class="roadmap-pdf-card" href="assets/roadmap-2027.pdf" target="_blank" rel="noopener noreferrer" aria-label="Открыть план обучения в PDF в новой вкладке">
        <span class="roadmap-pdf-badge">PDF</span>
        <span class="roadmap-pdf-copy">
          <strong>Открыть план в PDF</strong>
          <span>Все темы и подробности — без интерактивной карты</span>
        </span>
        <span class="roadmap-pdf-arrow" aria-hidden="true">↗</span>
      </a>
      <div class="roadmap-summary">
        <p><strong>На занятиях мы последовательно создаём информационную систему</strong>, аналогичную той, которую предстоит разработать на демонстрационном экзамене.</p>
        <p>Каждую тему закрепляем практикой. После уроков остаются конспекты для повторения.</p>
      </div>
      <button class="roadmap-info-trigger" type="button" data-open-roadmap-info>
        <span>Подробнее о демоэкзамене и программе</span><span aria-hidden="true">↗</span>
      </button>
    </section>`;
  body.querySelector('[data-open-roadmap]').addEventListener('click', openRoadmapMap);
  body.querySelector('[data-open-roadmap-info]').addEventListener('click', openRoadmapInfo);
}

const mapDialog = document.querySelector('#roadmap-map-dialog');
const topicDialog = document.querySelector('#roadmap-topic-dialog');
const infoDialog = document.querySelector('#roadmap-info-dialog');
let panControls;

function openRoadmapMap() {
  // Рисуем карту один раз, затем переиспользуем её для следующих открытий.
  if (!mapDialog.dataset.ready) {
    mapDialog.innerHTML = `
      <div class="roadmap-fullscreen">
        <div class="roadmap-fullscreen-header">
          <div class="roadmap-fullscreen-heading">
            <span class="roadmap-eyebrow">КАРТА ОБУЧЕНИЯ</span>
            <strong>Путь к демоэкзамену 2027</strong>
            <span class="roadmap-drag-hint">✥ Перетаскивай карту в любом направлении</span>
          </div>
          <button type="button" class="roadmap-map-close" data-close-roadmap aria-label="Закрыть карту"><img src="assets/close-pixel.svg" alt="" /></button>
        </div>
        <div class="roadmap-viewport roadmap-viewport--expanded" tabindex="0" aria-label="Карта тем. Перемещай её пальцем, мышкой или стрелками клавиатуры">
          <div class="roadmap-stage">
            ${createConnectorSvg()}
            ${roadmapTopics.map(createTopicCard).join('')}
            <div class="roadmap-marker roadmap-marker--start" style="left:${roadmapTopics[0].position.x + 40}px;top:${roadmapTopics[0].position.y - 66}px" aria-hidden="true">✦ НАЧАЛО</div>
            <div class="roadmap-marker roadmap-marker--finish" style="left:${roadmapTopics[9].position.x + 37}px;top:${roadmapTopics[9].position.y + 166}px" aria-hidden="true">★ ФИНИШ</div>
          </div>
          <div class="roadmap-zoom-guard" aria-hidden="true"></div>
          <div class="roadmap-zoom-controls" role="group" aria-label="Масштаб карты">
            <button type="button" data-zoom-in aria-label="Приблизить карту">+</button>
            <button type="button" data-zoom-out aria-label="Отдалить карту">−</button>
            <output data-zoom-value aria-live="off">100%</output>
          </div>
        </div>
      </div>`;
    const viewport = mapDialog.querySelector('.roadmap-viewport');
    const stage = mapDialog.querySelector('.roadmap-stage');
    panControls = setupRoadmapPan(viewport, stage);
    mapDialog.querySelector('[data-close-roadmap]').addEventListener('click', () => mapDialog.close());
    mapDialog.querySelectorAll('[data-roadmap-topic]').forEach((button) => {
      button.addEventListener('click', () => {
        const topic = roadmapTopics.find(({ id }) => id === button.dataset.roadmapTopic);
        if (topic) openRoadmapTopic(topic);
      });
    });
    mapDialog.dataset.ready = 'true';
  }
  mapDialog.showModal();
  mapDialog.focus({ preventScroll: true });
  panControls.reset();
}

function openRoadmapTopic(topic) {
  topicDialog.innerHTML = `
    <div class="roadmap-topic-content">
      <div class="roadmap-topic-header">
        <div><span class="roadmap-topic-kicker">ТЕМА ${topic.id} / 10</span><h2 id="roadmap-topic-title">${topic.title}</h2></div>
        <button class="roadmap-small-close" type="button" data-close-topic aria-label="Закрыть подробности"><img src="assets/close-pixel.svg" alt=""></button>
      </div>
      <div class="roadmap-detail-scroll">
        <p class="roadmap-topic-description">${topic.short}</p>
        <h3>Что будем изучать</h3>
        <ul class="roadmap-topic-list">${topic.items.map((item) => `<li>${item}</li>`).join('')}</ul>
        <p class="roadmap-topic-practice">Практика и конспект после изучения темы</p>
      </div>
    </div>`;
  topicDialog.querySelector('[data-close-topic]').addEventListener('click', () => topicDialog.close());
  topicDialog.showModal();
  topicDialog.focus({ preventScroll: true });
}

function openRoadmapInfo() {
  infoDialog.innerHTML = `
    <div class="roadmap-info-content">
      <div class="roadmap-info-heading"><div><span class="roadmap-eyebrow">ИНФОРМАЦИЯ ОБ ЭКЗАМЕНЕ</span><h2 id="roadmap-info-title">Как устроена подготовка?</h2></div>
        <button class="roadmap-small-close" type="button" data-close-info aria-label="Закрыть информацию"><img src="assets/close-pixel.svg" alt=""></button></div>
      <div class="roadmap-detail-scroll">
        <p><strong>На занятиях мы последовательно создаём информационную систему, аналогичную той, которую предстоит разработать на демонстрационном экзамене.</strong></p>
        <p>Каждая тема закрепляется практикой. После занятий ученики получают конспекты для самостоятельного повторения материала.</p>
        <p class="roadmap-info-note">Программа ориентирована на инвариантную часть профильного экзамена 2027 года. Вариативная часть, определяемая образовательной организацией, рассматривается отдельно.</p>
        <div class="roadmap-info-links">
          ${roadmapLinks.map((link) => `<a href="${link.href}" target="_blank" rel="noopener noreferrer">${link.label} <span aria-hidden="true">↗</span></a>`).join('')}
        </div>
      </div>
    </div>`;
  infoDialog.querySelector('[data-close-info]').addEventListener('click', () => infoDialog.close());
  infoDialog.showModal();
  infoDialog.focus({ preventScroll: true });
}

// Нативные диалоги сами обрабатывают Escape. По клику снаружи закрываем текущий слой.
[mapDialog, topicDialog, infoDialog].forEach((item) => {
  item.addEventListener('click', (event) => {
    if (event.target === item) item.close();
  });
});

function renderTextPanel(item) {
  const heading = document.createElement('h2');
  heading.id = 'dialog-title';
  heading.textContent = item.title;
  const paragraph = document.createElement('p');
  paragraph.textContent = item.text;
  body.replaceChildren(heading, paragraph);
}

// В закреплённой шапке только подпись раздела и крестик.
// Настоящий h2 остаётся внутри прокручиваемого #dialog-body.
function updateDialogHeader() {
  const slot = document.querySelector('#dialog-header-title');
  const eyebrow = body.querySelector(
    '.payment-eyebrow, .contacts-eyebrow, .roadmap-eyebrow'
  );

  slot.replaceChildren();
  if (eyebrow) {
    slot.append(eyebrow);
  } else {
    // FAQ и другие разделы без надписи над h2.
    const label = document.createElement('span');
    label.className = 'modal-header-kicker';
    label.textContent = body.querySelector('.faq-list') ? 'FAQ' : 'DEV-MATES';
    slot.append(label);
  }
  body.scrollTop = 0;
}

document.querySelectorAll('[data-panel]').forEach((button) => {
  button.addEventListener('click', () => {
    if (button.dataset.panel === 'faq') {
      renderFaq();
    } else if (button.dataset.panel === 'payment') {
      renderPayment();
    } else if (button.dataset.panel === 'contacts') {
      renderContacts();
    } else if (button.dataset.panel === 'learning-plan') {
      renderLearningPlan();
    } else {
      const item = panels[button.dataset.panel];
      if (!item) return;
      renderTextPanel(item);
    }
    updateDialogHeader();
    dialog.showModal();
    dialog.focus({ preventScroll: true });
  });
});

document.querySelector('#close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});
