import React from 'react';
import {
  IntlProvider as ReactIntlProvider,
  useIntl as useReactIntl,
  createIntl as _createIntl,
} from 'react-intl';

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
  if (intl.formatMessage._wings) return intl;
  let old = intl.formatMessage;
  old = old.bind(intl);
  const newFn = (id, ...args) => old({ id }, ...args);
  newFn._wings = true;
  intl.formatMessage = newFn;
  return intl;
};

export const createIntl = node => {
  const newIntl = _createIntl({
    locale: 'en',
    messages: node.copy.reduce(
      (messages, entry) => ({
        ...messages,
        [entry.message.messageId]: entry.message.message,
      }),
      {},
    ),
  });
  let old = newIntl.formatMessage;
  old = old.bind(newIntl);
  const newFn = (id, ...args) => old({ id }, ...args);
  newFn._wings = true;
  newIntl.formatMessage = newFn;
  return newIntl;
};

export const withIntl = Comp => props => {
  const intl = useIntl();
  return <Comp {...props} intl={intl} />;
};
