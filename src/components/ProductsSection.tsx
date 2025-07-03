import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ProductsSection = () => {
  const products = [
    {
      title: "Ортопедические стельки",
      description:
        "Индивидуальные стельки для коррекции стопы и улучшения походки",
      features: [
        "Коррекция плоскостопия",
        "Поддержка свода стопы",
        "Амортизация",
      ],
      icon: "Footprints",
    },
    {
      title: "Ортопедическая обувь",
      description: "Специализированная обувь для людей с особыми потребностями",
      features: ["Диабетическая обувь", "Послеоперационная", "Для пожилых"],
      icon: "ShoppingBag",
    },
    {
      title: "Спортивные стельки",
      description: "Стельки для активного образа жизни и спортивных нагрузок",
      features: [
        "Амортизация ударов",
        "Поддержка при беге",
        "Для разных видов спорта",
      ],
      icon: "Zap",
    },
  ];

  return (
    <section className="py-20 bg-medical-light/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Наша продукция
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Широкий ассортимент ортопедических изделий для решения различных
            задач
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 border-0 bg-white"
            >
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Icon
                    name={product.icon as any}
                    className="text-primary"
                    size={32}
                  />
                </div>

                <h3 className="text-xl font-bold text-secondary mb-4">
                  {product.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>

                <div className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <Icon
                        name="Check"
                        className="text-primary mr-2 flex-shrink-0"
                        size={16}
                      />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <button className="text-primary font-semibold hover:text-primary/80 transition-colors">
                    Подробнее →
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white p-8 rounded-lg shadow-sm max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-secondary mb-4">
              Индивидуальное изготовление
            </h3>
            <p className="text-gray-600 mb-6">
              Каждое изделие создается с учетом анатомических особенностей и
              медицинских показаний клиента
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center">
              <div>
                <Icon
                  name="Scan"
                  className="text-primary mx-auto mb-2"
                  size={32}
                />
                <p className="text-sm font-medium">3D сканирование</p>
              </div>
              <div>
                <Icon
                  name="Settings"
                  className="text-primary mx-auto mb-2"
                  size={32}
                />
                <p className="text-sm font-medium">Моделирование</p>
              </div>
              <div>
                <Icon
                  name="Wrench"
                  className="text-primary mx-auto mb-2"
                  size={32}
                />
                <p className="text-sm font-medium">Изготовление</p>
              </div>
              <div>
                <Icon
                  name="CheckCircle"
                  className="text-primary mx-auto mb-2"
                  size={32}
                />
                <p className="text-sm font-medium">Контроль качества</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
