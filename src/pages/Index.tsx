import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

const Index = () => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [selectedCar, setSelectedCar] = useState<any>(null);
  const [activeSection, setActiveSection] = useState('hero');

  const cars = [
    {
      id: 1,
      name: 'BMW 5 Series',
      category: 'Бизнес',
      price: 5000,
      image: 'https://cdn.poehali.dev/projects/b8c12fb2-83f6-4b5b-976d-c3119c55c166/files/32623979-6caa-4216-9943-f469d888a161.jpg',
      specs: { seats: 5, transmission: 'Автомат', fuel: 'Бензин' },
      features: ['Круиз-контроль', 'Камера заднего вида', 'Подогрев сидений', 'Bluetooth']
    },
    {
      id: 2,
      name: 'Mercedes Cabriolet',
      category: 'Премиум',
      price: 8000,
      image: 'https://cdn.poehali.dev/projects/b8c12fb2-83f6-4b5b-976d-c3119c55c166/files/b0c19f43-b451-4c5a-8241-f4d55f472f67.jpg',
      specs: { seats: 4, transmission: 'Автомат', fuel: 'Бензин' },
      features: ['Панорамная крыша', 'Премиум аудио', 'Кожаный салон', 'Навигация']
    },
    {
      id: 3,
      name: 'Range Rover',
      category: 'Внедорожник',
      price: 10000,
      image: 'https://cdn.poehali.dev/projects/b8c12fb2-83f6-4b5b-976d-c3119c55c166/files/f1891fcd-d224-471d-9290-e4f03e697a37.jpg',
      specs: { seats: 7, transmission: 'Автомат', fuel: 'Дизель' },
      features: ['Полный привод', 'Климат-контроль', 'Парктроник', 'Адаптивные фары']
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  const calculateDays = () => {
    if (startDate && endDate) {
      const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
    }
    return 1;
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Car" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-secondary">AutoRent</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('hero')} className="text-sm font-medium hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('tariffs')} className="text-sm font-medium hover:text-primary transition-colors">Тарифы</button>
              <button onClick={() => scrollToSection('conditions')} className="text-sm font-medium hover:text-primary transition-colors">Условия</button>
              <button onClick={() => scrollToSection('reviews')} className="text-sm font-medium hover:text-primary transition-colors">Отзывы</button>
              <button onClick={() => scrollToSection('faq')} className="text-sm font-medium hover:text-primary transition-colors">FAQ</button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">О нас</button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-primary transition-colors">Контакты</button>
            </div>
            <Button size="sm">+7 (999) 123-45-67</Button>
          </nav>
        </div>
      </header>

      <section id="hero" className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Аренда автомобилей премиум-класса
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Широкий выбор автомобилей для бизнеса и отдыха. Простое бронирование онлайн.
            </p>
          </div>

          <Card className="max-w-5xl mx-auto shadow-2xl animate-scale-in">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Дата начала аренды</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <Icon name="CalendarDays" className="mr-2" size={18} />
                        {startDate ? format(startDate, 'dd MMMM yyyy', { locale: ru }) : 'Выберите дату'}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={startDate} onSelect={setStartDate} locale={ru} />
                    </PopoverContent>
                  </Popover>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Дата окончания аренды</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <Icon name="CalendarDays" className="mr-2" size={18} />
                        {endDate ? format(endDate, 'dd MMMM yyyy', { locale: ru }) : 'Выберите дату'}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={endDate} onSelect={setEndDate} locale={ru} />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="flex items-end">
                  <Button className="w-full" size="lg" onClick={() => scrollToSection('catalog')}>
                    <Icon name="Search" className="mr-2" size={18} />
                    Найти автомобиль
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наш автопарк</h2>
            <p className="text-lg text-muted-foreground">Выберите автомобиль для вашей поездки</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car) => (
              <Card key={car.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden bg-gradient-to-br from-muted to-background">
                  <img src={car.image} alt={car.name} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                  <Badge className="absolute top-4 right-4">{car.category}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{car.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Icon name="Users" size={16} /> {car.specs.seats}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Gauge" size={16} /> {car.specs.transmission}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Fuel" size={16} /> {car.specs.fuel}
                    </span>
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-3xl font-bold text-primary">{car.price} ₽</p>
                      <p className="text-sm text-muted-foreground">за сутки</p>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button onClick={() => setSelectedCar(car)}>
                          Забронировать
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle className="text-2xl">Бронирование {car.name}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-6">
                          <img src={car.image} alt={car.name} className="w-full h-48 object-cover rounded-lg" />
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">Дата начала</p>
                              <p className="font-semibold">{startDate ? format(startDate, 'dd MMMM yyyy', { locale: ru }) : 'Не выбрана'}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">Дата окончания</p>
                              <p className="font-semibold">{endDate ? format(endDate, 'dd MMMM yyyy', { locale: ru }) : 'Не выбрана'}</p>
                            </div>
                          </div>

                          <div className="bg-muted p-4 rounded-lg">
                            <div className="flex justify-between mb-2">
                              <span>Стоимость за {calculateDays()} дн.</span>
                              <span className="font-semibold">{car.price * calculateDays()} ₽</span>
                            </div>
                            <div className="flex justify-between text-lg font-bold text-primary pt-2 border-t">
                              <span>Итого</span>
                              <span>{car.price * calculateDays()} ₽</span>
                            </div>
                          </div>

                          <div>
                            <p className="font-semibold mb-2">Особенности автомобиля:</p>
                            <div className="grid grid-cols-2 gap-2">
                              {car.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-sm">
                                  <Icon name="Check" size={16} className="text-primary" />
                                  {feature}
                                </div>
                              ))}
                            </div>
                          </div>

                          <Button className="w-full" size="lg">
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

      <section id="tariffs" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Тарифы и цены</h2>
            <p className="text-lg text-muted-foreground">Прозрачная ценовая политика без скрытых платежей</p>
          </div>

          <Tabs defaultValue="daily" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="daily">Суточная</TabsTrigger>
              <TabsTrigger value="weekly">Недельная</TabsTrigger>
              <TabsTrigger value="monthly">Месячная</TabsTrigger>
            </TabsList>
            
            <TabsContent value="daily" className="space-y-4">
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Эконом</h3>
                    <p className="text-3xl font-bold text-primary mb-4">от 2500 ₽<span className="text-sm text-muted-foreground">/сутки</span></p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-2"><Icon name="Check" size={16} className="text-primary mt-0.5" />Компактные авто</li>
                      <li className="flex gap-2"><Icon name="Check" size={16} className="text-primary mt-0.5" />200 км в сутки</li>
                      <li className="flex gap-2"><Icon name="Check" size={16} className="text-primary mt-0.5" />Базовая страховка</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow border-primary">
                  <CardContent className="p-6">
                    <Badge className="mb-2">Популярный</Badge>
                    <h3 className="text-xl font-bold mb-2">Бизнес</h3>
                    <p className="text-3xl font-bold text-primary mb-4">от 5000 ₽<span className="text-sm text-muted-foreground">/сутки</span></p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-2"><Icon name="Check" size={16} className="text-primary mt-0.5" />Бизнес-класс</li>
                      <li className="flex gap-2"><Icon name="Check" size={16} className="text-primary mt-0.5" />Безлимитный пробег</li>
                      <li className="flex gap-2"><Icon name="Check" size={16} className="text-primary mt-0.5" />Полная страховка</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Премиум</h3>
                    <p className="text-3xl font-bold text-primary mb-4">от 10000 ₽<span className="text-sm text-muted-foreground">/сутки</span></p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex gap-2"><Icon name="Check" size={16} className="text-primary mt-0.5" />Премиум авто</li>
                      <li className="flex gap-2"><Icon name="Check" size={16} className="text-primary mt-0.5" />Безлимитный пробег</li>
                      <li className="flex gap-2"><Icon name="Check" size={16} className="text-primary mt-0.5" />VIP обслуживание</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="weekly" className="text-center py-12">
              <p className="text-lg text-muted-foreground mb-4">При аренде от 7 дней</p>
              <p className="text-4xl font-bold text-primary">Скидка 15%</p>
            </TabsContent>

            <TabsContent value="monthly" className="text-center py-12">
              <p className="text-lg text-muted-foreground mb-4">При аренде от 30 дней</p>
              <p className="text-4xl font-bold text-primary">Скидка 30%</p>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="conditions" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Условия аренды</h2>
            <p className="text-lg text-muted-foreground">Простые и понятные правила</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <Icon name="FileText" size={32} className="text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Документы</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Паспорт РФ</li>
                  <li>• Водительское удостоверение</li>
                  <li>• Стаж вождения от 2 лет</li>
                  <li>• Возраст от 23 лет</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Icon name="Shield" size={32} className="text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Страхование</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• ОСАГО включено</li>
                  <li>• КАСКО по желанию</li>
                  <li>• Страхование водителя</li>
                  <li>• Защита от угона</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Icon name="CreditCard" size={32} className="text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Оплата</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Наличные</li>
                  <li>• Банковские карты</li>
                  <li>• Безналичный расчёт</li>
                  <li>• Залог от 5000 ₽</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Icon name="MapPin" size={32} className="text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Доставка</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• По городу бесплатно</li>
                  <li>• В аэропорт +500 ₽</li>
                  <li>• За город по договорённости</li>
                  <li>• Круглосуточно</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground">Более 1000 довольных клиентов</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Александр М.', text: 'Отличный сервис! Автомобиль в идеальном состоянии, быстрое оформление. Буду обращаться ещё.', rating: 5 },
              { name: 'Мария К.', text: 'Арендовала Mercedes для важной встречи. Всё прошло идеально, машина премиум-класса, чистая и ухоженная.', rating: 5 },
              { name: 'Дмитрий П.', text: 'Удобное бронирование онлайн, доставили прямо к дому. Цены адекватные, рекомендую!', rating: 5 }
            ].map((review, idx) => (
              <Card key={idx}>
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{review.text}"</p>
                  <p className="font-semibold">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Вопросы и ответы</h2>
            <p className="text-lg text-muted-foreground">Ответы на частые вопросы</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">Какие документы нужны для аренды?</AccordionTrigger>
              <AccordionContent>
                Для аренды автомобиля необходимы: паспорт РФ, водительское удостоверение с стажем от 2 лет, возраст от 23 лет. Также может потребоваться залоговая карта.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">Можно ли продлить срок аренды?</AccordionTrigger>
              <AccordionContent>
                Да, вы можете продлить аренду, связавшись с нами заранее. Если автомобиль не забронирован другим клиентом, мы с радостью продлим ваш договор.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">Что входит в стоимость аренды?</AccordionTrigger>
              <AccordionContent>
                В базовую стоимость входит: аренда автомобиля, ОСАГО, базовая мойка, техническая поддержка 24/7. КАСКО и дополнительные услуги оплачиваются отдельно.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">Можно ли арендовать с водителем?</AccordionTrigger>
              <AccordionContent>
                Да, мы предоставляем услугу аренды автомобиля с водителем. Стоимость рассчитывается индивидуально в зависимости от маршрута и времени работы.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">Что делать в случае ДТП?</AccordionTrigger>
              <AccordionContent>
                При ДТП немедленно свяжитесь с нами и вызовите ГИБДД. Все автомобили застрахованы по ОСАГО. При наличии КАСКО ущерб покрывается страховкой.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">О компании</h2>
              <p className="text-lg text-muted-foreground mb-6">
                AutoRent — надёжный партнёр в аренде автомобилей с 2015 года. Мы предлагаем широкий выбор автомобилей премиум и бизнес-класса для любых целей.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Наша миссия — сделать аренду автомобилей максимально простой, удобной и доступной. Каждый автомобиль проходит тщательную проверку и обслуживание.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">10+</p>
                  <p className="text-sm text-muted-foreground">лет на рынке</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">50+</p>
                  <p className="text-sm text-muted-foreground">автомобилей</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">1000+</p>
                  <p className="text-sm text-muted-foreground">клиентов</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <Icon name="Award" size={32} className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">Проверенное качество</h3>
                    <p className="text-sm text-muted-foreground">Все автомобили проходят регулярное ТО и детейлинг</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <Icon name="Clock" size={32} className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">24/7 поддержка</h3>
                    <p className="text-sm text-muted-foreground">Всегда на связи для решения любых вопросов</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <Icon name="Percent" size={32} className="text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">Выгодные цены</h3>
                    <p className="text-sm text-muted-foreground">Гибкая система скидок и прозрачное ценообразование</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-lg text-muted-foreground">Свяжитесь с нами любым удобным способом</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="Phone" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Телефон</p>
                    <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                    <p className="text-sm text-muted-foreground">Круглосуточно</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Mail" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <p className="text-muted-foreground">info@autorent.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Адрес</p>
                    <p className="text-muted-foreground">Москва, ул. Примерная, д. 10</p>
                    <p className="text-sm text-muted-foreground">Пн-Вс: 09:00-21:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <form className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                    <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Иван Иванов" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Телефон</label>
                    <input type="tel" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" placeholder="+7 (999) 123-45-67" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Сообщение</label>
                    <textarea rows={4} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Ваш вопрос или комментарий" />
                  </div>
                  <Button className="w-full" size="lg">Отправить</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Car" size={28} />
                <span className="text-xl font-bold">AutoRent</span>
              </div>
              <p className="text-sm text-white/70">Аренда автомобилей премиум-класса с 2015 года</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">О нас</button></li>
                <li><button onClick={() => scrollToSection('conditions')} className="hover:text-white transition-colors">Условия</button></li>
                <li><button onClick={() => scrollToSection('tariffs')} className="hover:text-white transition-colors">Тарифы</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><button onClick={() => scrollToSection('faq')} className="hover:text-white transition-colors">FAQ</button></li>
                <li><button onClick={() => scrollToSection('contacts')} className="hover:text-white transition-colors">Контакты</button></li>
                <li><button onClick={() => scrollToSection('reviews')} className="hover:text-white transition-colors">Отзывы</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>+7 (999) 123-45-67</li>
                <li>info@autorent.ru</li>
                <li>Москва, ул. Примерная, 10</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/20 text-center text-sm text-white/70">
            <p>© 2024 AutoRent. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
