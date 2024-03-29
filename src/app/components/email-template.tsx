import * as React from "react";

interface EmailTemplateProps {
  name: string;
  phone: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  phone,
}) => (
  <body className="bg-gray-100">
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded shadow-md text-center">
      <h1 className="text-2xl font-bold mb-4">
      Alguien con un nombre <span className="text-blue-500">{name}</span>!
      </h1>
      <div className="text-lg">
        <p>
        Déjanos tus contactos:
          <span className="font-semibold text-blue-500">{phone}</span>
        </p>
      </div>
      <div className="text-lg">
        <p>
        Por favor contacte con él.
        </p>
      </div>
    </div>
  </body>
);

export default EmailTemplate;