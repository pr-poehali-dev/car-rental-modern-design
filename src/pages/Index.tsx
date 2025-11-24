import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

const Index = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>();
  const [selectedQuest, setSelectedQuest] = useState<any>(null);

  const quests = [
    {
      id: 1,
      name: 'Тайна Средневекового Замка',
      difficulty: 'Средний',
      duration: '60 минут',
      players: '2-4',
      price: 3500,
      image: 'https://cdn.poehali.dev/projects/b8c12fb2-83f6-4b5b-976d-c3119c55c166/files/04c2e9f5-c956-4391-af3c-3a86a172f853.jpg',
      description: 'Погрузитесь в атмосферу средневековья. Разгадайте древние загадки и найдите сокровище.',
      tags: ['Приключения', 'Загадки', 'История']
    },
    {
      id: 2,
      name: 'Побег из Киберпространства',
      difficulty: 'Сложный',
      duration: '90 минут',
      players: '3-6',
      price: 4500,
      image: 'https://cdn.poehali.dev/projects/b8c12fb2-83f6-4b5b-976d-c3119c55c166/files/4ab4144f-29f3-411b-871a-c951503d0c22.jpg',
      description: 'Футуристический квест в мире высоких технологий. Взломайте систему и верните контроль.',
      tags: ['Sci-Fi', 'Технологии', 'Хакинг']
    },
    {
      id: 3,
      name: 'Проклятие Психиатрической Больницы',
      difficulty: 'Экстремальный',
      duration: '75 минут',
      players: '2-5',
      price: 4000,
      image: 'https://cdn.poehali.dev/projects/b8c12fb2-83f6-4b5b-976d-c3119c55c166/files/bc5c6329-081a-4dda-9a8e-17eb2f8dea56.jpg',
      description: 'Самый страшный квест города. Только для смелых. Не рекомендуется впечатлительным.',
      tags: ['Хоррор', '18+', 'Экстрим']
    }
  ];

  const timeSlots = ['10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Icon name="KeyRound" size={24} className="text-black" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary via-white to-primary bg-clip-text text-transparent">
                QuestCity
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('quests')} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Квесты</button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">О нас</button>
              <button onClick={() => scrollToSection('prices')} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Цены</button>
              <button onClick={() => scrollToSection('howto')} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Как играть</button>
              <button onClick={() => scrollToSection('reviews')} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Отзывы</button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Контакты</button>
            </div>
            <Button className="bg-primary text-black hover:bg-primary/90">
              <Icon name="Phone" size={16} className="mr-2" />
              +7 (999) 777-77-77
            </Button>
          </nav>
        </div>
      </header>

      <section className="relative pt-40 pb-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-secondary to-black opacity-95"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">Лучшие квесты города</Badge>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
                Испытай себя
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Погрузись в мир интриг и головоломок. Найди выход за 60 минут или останься навсегда.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-black hover:bg-primary/90 text-lg px-8" onClick={() => scrollToSection('quests')}>
                <Icon name="Flame" className="mr-2" />
                Выбрать квест
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 text-lg px-8">
                <Icon name="Gift" className="mr-2" />
                Подарочный сертификат
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-secondary/50 border-border backdrop-blur-sm hover:bg-secondary/70 transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">1000+ игроков</h3>
                <p className="text-sm text-muted-foreground">Прошли наши квесты</p>
              </CardContent>
            </Card>
            <Card className="bg-secondary/50 border-border backdrop-blur-sm hover:bg-secondary/70 transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Star" size={32} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">4.9/5.0 рейтинг</h3>
                <p className="text-sm text-muted-foreground">На основе отзывов</p>
              </CardContent>
            </Card>
            <Card className="bg-secondary/50 border-border backdrop-blur-sm hover:bg-secondary/70 transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={32} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Лучшие в городе</h3>
                <p className="text-sm text-muted-foreground">По версии премии 2024</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="quests" className="py-24 px-4 bg-gradient-to-b from-black to-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-primary to-white bg-clip-text text-transparent">
              Наши квесты
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выбери своё приключение и испытай незабываемые эмоции
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {quests.map((quest) => (
              <Card key={quest.id} className="bg-card border-border overflow-hidden group hover:border-primary/50 transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={quest.image} 
                    alt={quest.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    {quest.tags.map((tag, idx) => (
                      <Badge key={idx} className="bg-black/60 text-primary border-primary/30 backdrop-blur-sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold mb-2 text-white">{quest.name}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-6">{quest.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <Icon name="Clock" size={20} className="text-primary mx-auto mb-1" />
                      <p className="text-xs text-muted-foreground">{quest.duration}</p>
                    </div>
                    <div className="text-center">
                      <Icon name="Users" size={20} className="text-primary mx-auto mb-1" />
                      <p className="text-xs text-muted-foreground">{quest.players}</p>
                    </div>
                    <div className="text-center">
                      <Icon name="Zap" size={20} className="text-primary mx-auto mb-1" />
                      <p className="text-xs text-muted-foreground">{quest.difficulty}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-3xl font-bold text-primary">{quest.price} ₽</p>
                      <p className="text-xs text-muted-foreground">за команду</p>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          className="bg-primary text-black hover:bg-primary/90"
                          onClick={() => setSelectedQuest(quest)}
                        >
                          Забронировать
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl bg-card border-border">
                        <DialogHeader>
                          <DialogTitle className="text-3xl font-bold">{quest.name}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-6">
                          <img src={quest.image} alt={quest.name} className="w-full h-48 object-cover rounded-lg" />
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="text-sm font-medium mb-2 block">Выберите дату</label>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <Button variant="outline" className="w-full justify-start text-left">
                                    <Icon name="CalendarDays" className="mr-2" size={18} />
                                    {selectedDate ? format(selectedDate, 'dd MMMM yyyy', { locale: ru }) : 'Выберите дату'}
                                  </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0 bg-card border-border">
                                  <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} locale={ru} />
                                </PopoverContent>
                              </Popover>
                            </div>
                            <div>
                              <label className="text-sm font-medium mb-2 block">Выберите время</label>
                              <Select onValueChange={setSelectedTime}>
                                <SelectTrigger className="w-full">
                                  <SelectValue placeholder="Время" />
                                </SelectTrigger>
                                <SelectContent className="bg-card border-border">
                                  {timeSlots.map((time) => (
                                    <SelectItem key={time} value={time}>{time}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div className="bg-secondary/50 p-4 rounded-lg border border-border">
                            <div className="flex justify-between mb-2">
                              <span className="text-muted-foreground">Квест:</span>
                              <span className="font-semibold">{quest.name}</span>
                            </div>
                            <div className="flex justify-between mb-2">
                              <span className="text-muted-foreground">Дата:</span>
                              <span className="font-semibold">
                                {selectedDate ? format(selectedDate, 'dd MMMM', { locale: ru }) : 'Не выбрана'}
                              </span>
                            </div>
                            <div className="flex justify-between mb-4">
                              <span className="text-muted-foreground">Время:</span>
                              <span className="font-semibold">{selectedTime || 'Не выбрано'}</span>
                            </div>
                            <div className="flex justify-between text-xl font-bold text-primary pt-4 border-t border-border">
                              <span>Итого:</span>
                              <span>{quest.price} ₽</span>
                            </div>
                          </div>

                          <Button className="w-full bg-primary text-black hover:bg-primary/90" size="lg">
                            <Icon name="Check" className="mr-2" />
                            Подтвердить бронирование
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-4 bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">О нас</Badge>
              <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-primary to-white bg-clip-text text-transparent">
                Погрузись в мир приключений
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                QuestCity — это не просто квесты. Это целый мир загадок, головоломок и невероятных эмоций. 
                Мы создаём атмосферу, в которую хочется возвращаться снова и снова.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Каждый наш квест — это уникальная история с профессиональными декорациями, 
                актёрами и спецэффектами. Мы работаем для того, чтобы ваши впечатления были незабываемыми.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/40 p-4 rounded-lg border border-primary/20">
                  <p className="text-4xl font-bold text-primary mb-2">5+</p>
                  <p className="text-sm text-muted-foreground">лет опыта</p>
                </div>
                <div className="bg-black/40 p-4 rounded-lg border border-primary/20">
                  <p className="text-4xl font-bold text-primary mb-2">15+</p>
                  <p className="text-sm text-muted-foreground">квестов</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-3xl"></div>
              <Card className="relative bg-card/50 border-primary/30 backdrop-blur-sm">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Sparkles" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Уникальные сценарии</h3>
                      <p className="text-muted-foreground">Каждый квест разработан нашей командой сценаристов</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Shield" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Безопасность</h3>
                      <p className="text-muted-foreground">Видеонаблюдение и кнопка экстренного выхода</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="HeadphonesIcon" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Поддержка 24/7</h3>
                      <p className="text-muted-foreground">Операторы помогут в любой ситуации</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="prices" className="py-24 px-4 bg-gradient-to-b from-secondary to-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-primary to-white bg-clip-text text-transparent">
              Цены и тарифы
            </h2>
            <p className="text-xl text-muted-foreground">Прозрачное ценообразование без скрытых платежей</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border hover:border-primary/50 transition-all">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Стандарт</h3>
                <p className="text-5xl font-black text-primary mb-2">3500₽</p>
                <p className="text-muted-foreground mb-6">за команду</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">До 4 человек</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">60 минут игры</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">3 подсказки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Фото на память</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                  Выбрать
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-b from-primary/10 to-card border-primary relative overflow-hidden">
              <Badge className="absolute top-4 right-4 bg-primary text-black">Популярный</Badge>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Премиум</h3>
                <p className="text-5xl font-black text-primary mb-2">4500₽</p>
                <p className="text-muted-foreground mb-6">за команду</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">До 6 человек</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">90 минут игры</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Безлимит подсказок</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Профессиональная фотосессия</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Напитки включены</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary text-black hover:bg-primary/90">
                  Выбрать
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-all">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Корпоратив</h3>
                <p className="text-5xl font-black text-primary mb-2">от 10000₽</p>
                <p className="text-muted-foreground mb-6">за команду</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">До 20 человек</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Несколько квестов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Кейтеринг</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Персональный ведущий</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                  Обсудить
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="howto" className="py-24 px-4 bg-black">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-primary to-white bg-clip-text text-transparent">
              Как это работает
            </h2>
            <p className="text-xl text-muted-foreground">Простые шаги до незабываемого приключения</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: 'Calendar', title: 'Забронируйте', text: 'Выберите квест и удобное время' },
              { icon: 'CreditCard', title: 'Оплатите', text: 'Онлайн или на месте' },
              { icon: 'MapPin', title: 'Приходите', text: 'За 10 минут до начала' },
              { icon: 'Trophy', title: 'Побеждайте', text: 'Решайте загадки и выходите' }
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-gradient-to-b from-secondary to-black border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-all">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                    <Icon name={step.icon as any} size={32} className="text-primary" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-black font-bold text-sm">
                      {idx + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.text}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-24 px-4 bg-gradient-to-b from-black to-secondary">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-primary to-white bg-clip-text text-transparent">
              Отзывы игроков
            </h2>
            <p className="text-xl text-muted-foreground">Что говорят те, кто уже прошёл наши квесты</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Анна С.', quest: 'Средневековый Замок', text: 'Невероятная атмосфера! Декорации на высшем уровне. Мы полностью погрузились в историю. Обязательно вернёмся!', rating: 5 },
              { name: 'Михаил К.', quest: 'Киберпространство', text: 'Самый технологичный квест, который я проходил. Спецэффекты просто космос. Рекомендую всем любителям sci-fi!', rating: 5 },
              { name: 'Елена Д.', quest: 'Психбольница', text: 'Страшно, очень страшно! Но это именно то, что мы хотели. Актёры великолепны. Адреналин зашкаливает!', rating: 5 }
            ].map((review, idx) => (
              <Card key={idx} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <Icon name="User" size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-bold">{review.name}</p>
                      <p className="text-xs text-muted-foreground">{review.quest}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-24 px-4 bg-secondary">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-primary to-white bg-clip-text text-transparent">
              Контакты
            </h2>
            <p className="text-xl text-muted-foreground">Свяжитесь с нами удобным способом</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-border">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Телефон</p>
                    <p className="text-muted-foreground">+7 (999) 777-77-77</p>
                    <p className="text-sm text-muted-foreground mt-1">Ежедневно 9:00 - 23:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <p className="text-muted-foreground">info@questcity.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Адрес</p>
                    <p className="text-muted-foreground">г. Москва, ул. Приключений, 13</p>
                    <p className="text-sm text-muted-foreground mt-1">Метро Площадь Революции</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <form className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground" 
                      placeholder="Иван Иванов" 
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Телефон</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground" 
                      placeholder="+7 (999) 777-77-77" 
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Сообщение</label>
                    <textarea 
                      rows={4} 
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground" 
                      placeholder="Ваш вопрос или комментарий" 
                    />
                  </div>
                  <Button className="w-full bg-primary text-black hover:bg-primary/90" size="lg">
                    Отправить
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-black border-t border-border py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <Icon name="KeyRound" size={20} className="text-black" />
                </div>
                <span className="text-xl font-bold text-primary">QuestCity</span>
              </div>
              <p className="text-sm text-muted-foreground">Лучшие квесты вашего города с 2019 года</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-primary">Квесты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button className="hover:text-primary transition-colors">Средневековье</button></li>
                <li><button className="hover:text-primary transition-colors">Sci-Fi</button></li>
                <li><button className="hover:text-primary transition-colors">Хоррор</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-primary">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">О нас</button></li>
                <li><button onClick={() => scrollToSection('prices')} className="hover:text-primary transition-colors">Цены</button></li>
                <li><button onClick={() => scrollToSection('reviews')} className="hover:text-primary transition-colors">Отзывы</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-primary">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+7 (999) 777-77-77</li>
                <li>info@questcity.ru</li>
                <li>ул. Приключений, 13</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2024 QuestCity. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
