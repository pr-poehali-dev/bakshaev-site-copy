import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Готовы помочь вам подобрать идеальное ортопедическое решение
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Phone" className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Телефон</h3>
              <p className="text-gray-300 mb-4">
                Звоните в рабочие дни с 9:00 до 18:00
              </p>
              <p className="text-white font-semibold text-lg">
                +7 (495) 123-45-67
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="MapPin" className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Адрес</h3>
              <p className="text-gray-300 mb-4">Наш офис и производство</p>
              <p className="text-white">
                г. Москва, ул. Примерная, д. 123
                <br />
                офис 456
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Mail" className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Email</h3>
              <p className="text-gray-300 mb-4">Напишите нам в любое время</p>
              <p className="text-white font-semibold">info@ortoped-stelki.ru</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-lg p-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-6">
              Запишитесь на консультацию
            </h3>
            <p className="text-gray-300 mb-8">
              Наши специалисты проведут диагностику и подберут оптимальное
              решение для ваших потребностей
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
                <Icon name="Calendar" className="mr-2" size={20} />
                Записаться на приём
              </Button>
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-3"
              >
                <Icon name="Download" className="mr-2" size={20} />
                Скачать каталог
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
