import React from 'react';
import { text, select, boolean } from '@storybook/addon-knobs/react';
import Content from './Content';

const c = '{"version":"0.3.1","atoms":[],"cards":[["ImageCard",{"_mediaId":"ecoHE97tnQvpbjMSJ","src":"https://files.wings.dev/1530796123797/space-travel-1784461640.png?w=400&quality=100","url":"https://files.wings.dev/1530796123797/space-travel-1784461640.png","caption":null,"alt":null,"size":0,"float":0}]],"markups":[],"sections":[[10,0],[1,"p",[]]]}';
const c2 = '{"version":"0.3.1","atoms":[],"cards":[],"markups":[],"sections":[[1,"p",[[0,[],0,"Some content"]]]]}';

export default () => <Content content={JSON.parse(c)} />;
