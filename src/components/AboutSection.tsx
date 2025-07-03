import Icon from "@/components/ui/icon";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-secondary mb-6">
              О нашей компании
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Мы специализируемся на производстве высококачественных
              ортопедических стелек и обуви, помогая людям решать проблемы с
              опорно-двигательным аппаратом и улучшать качество жизни.
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Наша продукция создается с использованием современных материалов и
              технологий, обеспечивая максимальный комфорт и эффективность.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-medical-light rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-gray-600">лет опыта</div>
              </div>
              <div className="text-center p-4 bg-medical-light rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">10K+</div>
                <div className="text-sm text-gray-600">довольных клиентов</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-medical-light p-6 rounded-lg">
                <Icon name="Heart" className="text-primary mb-3" size={32} />
                <h4 className="font-semibold mb-2">Забота о здоровье</h4>
                <p className="text-sm text-gray-600">
                  Профилактика и лечение заболеваний стоп
                </p>
              </div>
              <div className="bg-primary/5 p-6 rounded-lg">
                <Icon name="Zap" className="text-primary mb-3" size={32} />
                <h4 className="font-semibold mb-2">Инновации</h4>
                <p className="text-sm text-gray-600">
                  Современные технологии производства
                </p>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="bg-primary/5 p-6 rounded-lg">
                <Icon
                  name="CheckCircle"
                  className="text-primary mb-3"
                  size={32}
                />
                <h4 className="font-semibold mb-2">Качество</h4>
                <p className="text-sm text-gray-600">
                  Строгий контроль на всех этапах
                </p>
              </div>
              <div className="bg-medical-light p-6 rounded-lg">
                <Icon name="Clock" className="text-primary mb-3" size={32} />
                <h4 className="font-semibold mb-2">Быстрое изготовление</h4>
                <p className="text-sm text-gray-600">
                  Оперативное выполнение заказов
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
