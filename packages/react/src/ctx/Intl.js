import { IntlProvider as ReactIntlProvider, useIntl as useReactIntl } from 'react-intl';

const useMessages = node =>
  !node
    ? {}
    : node.copy.reduce(
        (messages, entry) => ({
          ...messages,
          [entry.message.messageId]: entry.message.message,
        }),
        {},
      );

export const IntlProvider = ({ node, messages: mP, children }) => {
  const messages = useMessages(node);
  return (
    <ReactIntlProvider locale={!node ? 'en' : node.locale.id} messages={{ ...messages, ...mP }}>
      {children}
    </ReactIntlProvider>
  );
};

export const useIntl = () => {
  const intl = useReactIntl();
  let old = intl.formatMessage;
  old = old.bind(intl);
  intl.formatMessage = (id, ...args) => old({ id }, ...args);
  return intl;
};
