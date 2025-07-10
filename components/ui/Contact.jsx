import { RiChat1Line, RiMapPin2Line, RiSmartphoneLine } from 'react-icons/ri';
import Form from './Form';

const Contact = () => {
  return (
    <div className="pt-16 xl:pt-32" id="contacts">
      <div className="container mx-auto">
        <div className="w-full xl:h-[730px] shadow-custom p-4 xl:p-8 xl:px-[90px] xl:py-[36px] border-t-4 border-accent">
          <div className="flex flex-col xl:flex-row h-full gap-[40px] xl:gap-[90px]">
            {/* Informação de Contacto */}
            <div className="w-full xl:max-w-[260px] flex flex-col gap-8">
              {/* Localização */}
              <div className="flex items-start gap-4">
                <RiMapPin2Line className="text-3xl text-accent mt-1" />
                <div>
                  <h4 className="text-base font-semibold mb-1">Localização</h4>
                  <p className="text-sm text-muted">
                    Zona Industrial do Pau Queimado<br />Montijo, Portugal
                  </p>
                </div>
              </div>
              {/* Telefone */}
              <div className="flex items-start gap-4">
                <RiSmartphoneLine className="text-3xl text-accent mt-1" />
                <div>
                  <h4 className="text-base font-semibold mb-1">Telefone</h4>
                  <p className="text-sm text-muted">+351 911 222 333</p>
                </div>
              </div>
              {/* Email */}
              <div className="flex items-start gap-4">
                <RiChat1Line className="text-3xl text-accent mt-1" />
                <div>
                  <h4 className="text-base font-semibold mb-1">Email</h4>
                  <p className="text-sm text-muted">info@misse.pt</p>
                </div>
              </div>
            </div>

            {/* Formulário */}
            <div className="flex-1 xl:max-w-[440px]">
              <h2 className="h2 mb-3">Peça um Orçamento</h2>
              <p className="text-muted mb-6">
                Fale-nos do seu projeto e entraremos em contacto com uma proposta sem compromisso.
              </p>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
