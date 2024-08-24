export interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  email,
  phone,
  message,
}) => (
  <div>
    <h1>
      From: {firstName} {lastName}
    </h1>
    <h1>email: {email}</h1>
    <h1>phone: {phone}</h1>
    <p>{message}</p>
  </div>
);
