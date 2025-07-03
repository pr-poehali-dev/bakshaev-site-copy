import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-medical-light to-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold text-secondary mb-6 leading-tight">
          Ортопедические решения
          <br />
          <span className="text-primary">для вашего здоровья</span>
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Производим качественные ортопедические стельки и обувь с применением
          современных технологий для комфорта и здоровья ваших ног
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3"
          >
            <Icon name="ShoppingCart" className="mr-2" size={20} />
            Наша продукция
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-3"
          >
            <Icon name="Phone" className="mr-2" size={20} />
            Консультация
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Shield" className="text-primary" size={32} />
            </div>
            <h3 className="font-semibold text-lg mb-2">Медицинское качество</h3>
            <p className="text-gray-600">Сертифицированная продукция</p>
          </div>

          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Users" className="text-primary" size={32} />
            </div>
            <h3 className="font-semibold text-lg mb-2">
              Индивидуальный подход
            </h3>
            <p className="text-gray-600">Персональные решения</p>
          </div>

          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Award" className="text-primary" size={32} />
            </div>
            <h3 className="font-semibold text-lg mb-2">Опыт и надёжность</h3>
            <p className="text-gray-600">Многолетний опыт работы</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
