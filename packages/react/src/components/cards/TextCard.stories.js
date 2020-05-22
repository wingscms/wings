import { TextCard } from '@wingscms/react';
import { contentWrap } from '../../../../../utils';

export default () =>
  TextCard.render({
    content:
      '{"version":"0.3.1","atoms":[],"cards":[],"markups":[["a",["href","http://example.com","target",""]],["em"],["strong"]],"sections":[[1,"p",[[0,[],0,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex e"],[0,[0],1,"a commodo conseq"],[0,[],0,"uat. Duis aute irure dolor in reprehenderit in vo"],[0,[1],1,"luptate velit esse "],[0,[],0,"cillum"],[0,[2],1," dolore eu fugiat n"],[0,[],0,"ulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]]],[1,"h2",[[0,[],0,"Heading h2"]]],[1,"h3",[[0,[],0,"Heading h3"]]],[1,"h4",[[0,[],0,"Heading h4"]]],[1,"h5",[[0,[],0,"Heading h5"]]],[1,"h6",[[0,[],0,"Heading h6"]]]]}',
  });

export const wrapStory = contentWrap;
